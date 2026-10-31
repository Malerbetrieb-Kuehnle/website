<?php
// Nimmt das Rückruf-Formular entgegen und schickt es per E-Mail an den Betrieb.
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

const POSTFACH = 'kontakt@malerbetrieb-kuehnle.de';

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
    preg_match('/^[^\p{C}]{3,50}$/u', $name) !== 1
    || preg_match('/^[+]?[0-9 ()\/-]{6,30}$/', $telefon) !== 1
) {
    antworten(400, false);
}

$betreff = '=?UTF-8?B?' . base64_encode("Rückruf gewünscht: {$name}") . '?=';
$text = "Rückruf gewünscht von:\r\n\r\n"
    . "Name: {$name}\r\n"
    . "Telefon: {$telefon}\r\n\r\n"
    . "Gesendet über das Formular auf malerbetrieb-kuehnle.de\r\n";
$kopfzeilen = implode("\r\n", [
    'From: Website <' . POSTFACH . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$gesendet = mail(POSTFACH, $betreff, $text, $kopfzeilen, '-f' . POSTFACH);

antworten($gesendet ? 200 : 502, $gesendet);
