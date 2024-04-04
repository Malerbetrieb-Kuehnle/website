import React from "react";

interface MobileGalleryProps {
  images: string[];
}

const MobileGallery: React.FC<MobileGalleryProps> = ({ images }) => {
  return (
    <div className="grid gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 my-8">
      {images.map((image, index) => {
        // Extracting file name from the image URL to set as alt Tag
        const fileName =
          image
            .split("/")
            .pop()
            ?.split(".")
            .slice(0, -1)
            .join(".")
            .replace(/[_-]/g, " ") || `Image ${index + 1}`;
        return (
          <img
            key={index}
            src={image}
            alt={fileName}
            className="w-full rounded-lg"
          />
        );
      })}
    </div>
  );
};

export default MobileGallery;
