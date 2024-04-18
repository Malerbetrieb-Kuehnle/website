import { FaExclamationTriangle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/lib/utils";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-mbgreen text-6xl mb-4" />
      <h2 className="text-5xl font-bold tracking-tight text-gray-900 z-10">
        Fehler 404
      </h2>
      <p className="my-6 text-lg leading-8 text-gray-600">
        Seite nicht gefunden. Diese Seite existiert nicht.
      </p>
      <Link to="/">
        <Button variant="outline" onClick={scrollToTop}>
          Zurück zur Homepage
        </Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
