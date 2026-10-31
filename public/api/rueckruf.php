<?php
// Nimmt das Rückruf-Formular entgegen und leitet es an Pushover weiter.
// Die Zugangsdaten bleiben so auf dem Server und erreichen den Browser nie.
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function antworten(int $status, bool $ok): void
{
    http_response_code($status);
    echo json_encode(['ok' => $ok]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    antworten(405, false);
}

// Nur Anfragen von dieser Website annehmen
$herkunft = parse_url($_SERVER['HTTP_ORIGIN'] ?? '', PHP_URL_HOST);
$host = explode(':', $_SERVER['HTTP_HOST'] ?? '')[0];
if (!is_string($herkunft) || $herkunft !== $host) {
    antworten(403, false);
}

$daten = json_decode((string) file_get_contents('php://input', false, null, 0, 2048), true);
if (!is_array($daten)) {
    antworten(400, false);
}

// Das versteckte Feld füllen nur Spam-Bots aus. Sie bekommen dieselbe Antwort
// wie ein Mensch, damit sie nicht merken, dass nichts gesendet wurde.
if (!empty($daten['website'])) {
    antworten(200, true);
}

$name = is_string($daten['name'] ?? null) ? trim($daten['name']) : '';
$telefon = is_string($daten['phone'] ?? null) ? trim($daten['phone']) : '';
if (
    preg_match('/^.{3,50}$/u', $name) !== 1
    || preg_match('/^[+]?[0-9 ()\/-]{6,30}$/', $telefon) !== 1
) {
    antworten(400, false);
}

$zugangsdatei = __DIR__ . '/.htpushover.php';
if (!is_file($zugangsdatei)) {
    antworten(500, false);
}
$zugang = require $zugangsdatei;

$anfrage = curl_init('https://api.pushover.net/1/messages.json');
curl_setopt_array($anfrage, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'token' => $zugang['token'],
        'user' => $zugang['user'],
        'message' => "Rückruf gewünscht von:\nName: {$name}\nTelefonnummer: {$telefon}",
    ]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);
curl_exec($anfrage);
$status = (int) curl_getinfo($anfrage, CURLINFO_RESPONSE_CODE);
curl_close($anfrage);

antworten($status === 200 ? 200 : 502, $status === 200);
