import React, { useState } from "react";

const images = [
  {
    src: "https://via.placeholder.com/400x300?text=Early+Design",
    alt: "Early Design",
  },
  {
    src: "https://via.placeholder.com/400x300?text=Coding+Process",
    alt: "Coding Process",
  },
  {
    src: "https://via.placeholder.com/400x300?text=First+Version",
    alt: "First Version of Site",
  },
  {
    src: "https://via.placeholder.com/400x300?text=UI+Mockup",
    alt: "UI Design Draft",
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const galleryStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "16px",
    padding: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const lightboxImageStyle = {
    maxWidth: "90%",
    maxHeight: "80%",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(255,255,255,0.5)",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "30px 0", fontSize: "2rem" }}>
        📸 Behind-the-Scenes Gallery
      </h2>
      <div style={galleryStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            style={imageStyle}
            onClick={() => openLightbox(img)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      {selectedImage && (
        <div style={overlayStyle} onClick={closeLightbox}>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={lightboxImageStyle}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
