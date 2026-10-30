import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="gutter flex min-h-[calc(100svh-var(--header))] flex-col items-start justify-center">
      <p className="text-lg text-muted-foreground">Fehler 404</p>
      <h1 className="titel-gross mt-2">Diese Seite existiert nicht.</h1>
      <Button asChild size="lg" className="mt-8">
        <Link to="/">Zurück zur Startseite</Link>
      </Button>
    </section>
  );
};

export default NotFound;
