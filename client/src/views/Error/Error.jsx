import React from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.css";

function Error() {
  return (
    <div className={style.background}>
      <h1>404 Error Page</h1>
      <p className={style.zoomArea}>
        <b>OOPS!</b> Page not found
      </p>
      <section className={style.errorContainer}>
        <span className={style.four}>
          <span className={style.screenText}>4</span>
        </span>
        <span className={style.zero}>
          <span className={style.screenText}>0</span>
        </span>
        <span className={style.four}>
          <span className={style.screenText}>4</span>
        </span>
      </section>
      <div className={style.linkContainer}>
        <Link to="/home">
          <button className={style.moreLink}>BACK HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
