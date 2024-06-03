import { useState } from "react";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import "../Contacts.css";
import { NavLink } from "react-router-dom";

type FormData = {
  droplist: string;
  name: string;
  email: string;
  tel: string;
  comment: string;
  file: string;
  check: boolean;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [fileText, setFileText] = useState<File | string>();

  const selectFile = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFileText(target.files[0].name);
  };

  const onSubmit = () => setSubmitted(true);

  return (
    <>
      {!submitted ? (
        <form className="contacs__form form" onSubmit={handleSubmit(onSubmit)}>
          <p className="contacts__title title">Оставьте заявку</p>
          <div
            className={
              errors.droplist
                ? "form__row form__droplist form__field-error"
                : "form__row form__droplist"
            }
          >
            <select
              {...register("droplist", {
                required: "Город не выбран",
              })}
              className="form__city"
            >
              <option className="form__city-item" disabled selected>
                Выберите город
              </option>
              <option className="form__city-item" value="Москва">
                Москва
              </option>
              <option className="form__city-item" value="Санкт-Питербург">
                Санкт-Петербург
              </option>
              <option className="form__city-item" value="Казань">
                Казань
              </option>
              <option className="form__city-item" value="Краснодар">
                Краснодар
              </option>
              <option className="form__city-item" value="Ростов на дону">
                Ростов на дону
              </option>
            </select>
            {errors.droplist && (
              <div className="form__error">{errors.droplist.message}</div>
            )}
          </div>
          <div
            className={
              errors.name ? "form__row form__field-error" : "form__row"
            }
          >
            <input
              {...register("name", {
                required: "Поле не заполнено",
              })}
              className="form__name"
              placeholder="Имя"
              type="text"
            />
            {errors.name && (
              <div className="form__error">{errors.name.message}</div>
            )}
          </div>
          <div className=" form__feedback-row">
            <div
              className={
                errors.email ? "form__row form__field-error" : "form__row"
              }
            >
              <input
                {...register("email", {
                  required: "Поле не заполнено",
                })}
                className="form__mail"
                placeholder="Email"
                type="mail"
              />
              {errors.email && (
                <div className="form__error">{errors.email.message}</div>
              )}
            </div>
            <div
              className={
                errors.tel ? "form__row form__field-error" : "form__row"
              }
            >
              <InputMask
                {...register("tel", {
                  required: "Поле не заполнено",
                })}
                className="form__phone"
                mask="+7 (___) ___-__-__"
                replacement={{ _: /\d/ }}
                placeholder="+7 (___) ___-__-__"
              />
              {errors.tel && (
                <div className="form__error">{errors.tel.message}</div>
              )}
            </div>
          </div>
          <div
            className={
              errors.comment ? "form__row form__field-error" : "form__row"
            }
          >
            <textarea
              {...register("comment", {
                required: "Поле не заполнено",
              })}
              className="form__comment"
              placeholder="Оставьте пометку к заказу"
            ></textarea>
            {errors.comment && (
              <div className="form__error">{errors.comment.message}</div>
            )}
          </div>
          <div
            className={
              errors.file ? "form__row form__field-error" : "form__row"
            }
          >
            <label className="form__custom-file-upload">
              <input
                {...register("file", {
                  required: "Поле не заполнено",
                })}
                className="form__file"
                type="file"
                onChange={selectFile}
              />
              <span className="form__custom-file-text">
                {!fileText ? "Прикрепите файлы" : `${fileText}`}
              </span>
            </label>
            {errors.file && (
              <div className="form__error">{errors.file.message}</div>
            )}
          </div>
          <div className="form__row form__privacy">
            <label>
              <input
                {...register("check", {
                  required: "Поле не заполнено",
                })}
                className="form__privacy-checkbox"
                type="checkbox"
              />
              <span
                className={
                  errors.check
                    ? "form__privacy-custom-checkbox form__field-custom-checkbox-error"
                    : "form__privacy-custom-checkbox"
                }
              ></span>
              {errors.check && (
                <div className="form__error">{errors.check.message}</div>
              )}
            </label>
            <p className="form__privacy-text">
              Даю согласие на обработку своих персональных данных
            </p>
          </div>
          <button className="form__btn btn--red btn">Оставить заявку</button>
        </form>
      ) : (
        <div className="contacts__sent-message">
          <p className="contacts__title title">Заявка отправлена!</p>
          <p className="contacts__sent-message-description">
            Мы получили вашу заявку. Наши специалисты свяжутся с вами в
            ближайшее время, чтобы уточнить все детали заказа.
          </p>
          <NavLink className="form__sent-message-btn btn--red btn" to="/">
            Вернуться на главную
          </NavLink>
        </div>
      )}
    </>
  );
};
export default Form;
