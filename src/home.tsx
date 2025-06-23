import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ELang, type ILang } from "./types/ILang";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!Object.values(ELang).includes(location.pathname as ILang)) {
      navigate(ELang.EN);
    }
  }, [navigate, location]);

  return <></>;
};

export default AppLayout;
