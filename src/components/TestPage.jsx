import React from "react";
import css from "../../styles/TestPage.module.css";

const TestPage = () => {
  return (
    <>
      <div className={css.container}>
        <div className={`${css.box1} ${css.box}`}>
          <h1>X-plore Changing to Xplore</h1>
        </div>
        <div className={`${css.box2} ${css.box}`}></div>
        <div className={`${css.box3} ${css.box}`}></div>
        <div className={`${css.box4} ${css.box}`}></div>
        <div className={`${css.box5} ${css.box}`}></div>
        <div className={`${css.box6} ${css.box}`}></div>
        <div className={`${css.box7} ${css.box}`}></div>
        <div className={`${css.box8} ${css.box}`}></div>
      </div>
    </>
  );
};

export default TestPage;
