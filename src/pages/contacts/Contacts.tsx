import Form from "./form/Form";
import "./Contacts.css";

const Contacts:React.FC = () => {
  return (
    <>
      <div className="contacts">
        <div className="container">
          <div className="contacs__items">
            <div className="contacs__item">
              <Form />
            </div>
            <div className="contacs__item contacts__info">
              <div className="contacts__info-row">
                <p className="contacts__info-title">Наша горячая линия</p>
                <p className="contacts__info-desctiption">8 800 38 23 112</p>
              </div>
              <div className="contacts__info-row">
                <p className="contacts__info-title">Главный офис</p>
                <p className="contacts__info-desctiption contacts__info-desctiption--address">
                  г. Москва, Садовническая ул., 80
                </p>
              </div>
              <div className="contacts__info-row">
                <p className="contacts__info-title">Часы работы</p>
                <p className="contacts__info-desctiption contacts__info-desctiption--work-time">
                  Пн-Пт с 10:00 до 22:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
