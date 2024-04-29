import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
export const Header = () => {
  const navigate = useNavigate();
  const setHomePage = () => {
    navigate("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <h3 className={styles.homeLink} onClick={setHomePage}>
            Кино справочник
          </h3>
          <div>
            <h3>Выполнил: Егоров А.М{"   "}</h3>
            <Link to={"https://t.me/yasasha12"} className={styles.me}>
              tg: @yasasha12
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
