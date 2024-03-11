import haus from "../../assets/haus.jpeg";
import grabenstätt from "../../assets/Fassade_Grabenstätt 1.png";
import balkon from "../../assets/balkon.jpeg";
import capetown from "../../assets/capetown.jpeg";
import holz from "../../assets/holz.jpeg";
import klinikum from "../../assets/klinikum.jpeg";
import sparkasse from "../../assets/sparkasse.jpeg";

export function DefaultGallery() {
  const data = [
    {
      imageLink: haus,
    },
    {
      imageLink: grabenstätt,
    },
    {
      imageLink: balkon,
    },
    {
      imageLink: capetown,
    },
    {
      imageLink: holz,
    },
    {
      imageLink: klinikum,
    },
    {
      imageLink: sparkasse,
    },
    {
      imageLink: grabenstätt,
    },
    {
      imageLink: haus,
    },
  ];

  return (
    <div className="grid ld:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
