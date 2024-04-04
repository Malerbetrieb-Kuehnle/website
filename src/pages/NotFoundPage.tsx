import { FaExclamationTriangle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-mbgreen text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-5">
        Seite nicht gefunden. Diese Seite existiert nicht.
      </p>
      <Link to="/">
        <Button variant="outline">Zurück zur Homepage</Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
