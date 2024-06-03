import Button from "../button/Button";

function Banner() {
  return (
    <>
      <div className="header__banner">
        <div className="container">
          <div className="header__banner-info">
            <h1 className="header__banner-title title">Сериал Ведьмак</h1>
            <p className="header__banner-description">
              Геральт из Ривии, наемный охотник за чудовищами, перенесший
              мутации, идет навстречу своей судьбе в неспокойном мире, где люди
              часто оказываются куда коварнее чудовищ.
            </p>
            <Button classlist="header__banner-btn btn--red btn">
              Смотреть сериал
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
