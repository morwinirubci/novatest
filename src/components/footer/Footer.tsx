import logo from "../../assets/img/logo.webp";
import "./Footer.css";
import { ReactComponent as Inst } from "../../assets/img/Inst.svg";
import { ReactComponent as Facebook } from "../../assets/img/Facebook.svg";
import { ReactComponent as Vk } from "../../assets/img/VK.svg";
import { useAppDispatch } from "../../hooks/hook";
import { openModal } from "../../store/reducers/modalSlice";

function Footer() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__items">
            <img className="logo" src={logo} alt="Logo" />
            <a
              className="footer__policy-info"
              onClick={() => dispatch(openModal(true))}
              href="#!"
            >
              Политика обработки персональных данных
            </a>
            <div className="footer__socials">
              <Inst className="footer__social-elem inst" />
              <Facebook className="footer__social-elem facebook" />
              <Vk className="footer__social-elem vk" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
