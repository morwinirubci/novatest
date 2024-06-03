import { NavLink } from "react-router-dom";

type PropsType = {
  link?: string;
  children: string;
  classlist?: string;
};

const Button = ({ link = "#!", classlist, children }: PropsType) => {
  return (
    <>
      <NavLink className={classlist} to={`/${link}`}>
        {children}
      </NavLink>
    </>
  );
};
export default Button;
