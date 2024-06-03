import { useState } from "react";
import { useAppSelector } from "../../../hooks/hook";
import "./Photos.css";

const Photos: React.FC = () => {
  const [visiblePhotos, setVisiblePhotos] = useState(5);
  const [showBtn, setShowBtn] = useState(false);

  const photos = useAppSelector((state) => state.photos.photos);

  const showMorePhotos = () => {
    setVisiblePhotos((prevValue) => prevValue + 4);
    setShowBtn(true);
  };
  return (
    <>
      <div className="photos">
        <div className="container">
          <p className="title">Кадры со съемок</p>
          <div className="photos__elements">
            {photos.length > 0 ? null : (
              <span className="photos__error">Кадров нет</span>
            )}
            {photos.slice(0, visiblePhotos).map((photo) => (
              <img
                key={photo.id}
                className="photos__element"
                src={photo.src}
                alt={photo.alt}
              ></img>
            ))}
          </div>
          <button
            className="photos__btn btn"
            style={{ display: showBtn ? "none" : "block" }}
            onClick={showMorePhotos}
          >
            Показать еще
          </button>
        </div>
      </div>
    </>
  );
};
export default Photos;
