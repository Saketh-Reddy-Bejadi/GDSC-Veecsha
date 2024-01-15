import "./WebDev.css";
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import reactJS from "../assets/reactJS.svg"
import nodeJS from "../assets/nodejs.svg"



export const WebDev = () => {
  return (
    <div className="WebDev" >
        <div className="WebCon1" >
          <img className="html" src={html} alt="" />
          <img className="css" src={css} alt="" />
          <img className="js" src={js} alt="" />
          <img className="reactJS" src={reactJS} alt="" />
          <img className="nodeJS" src={nodeJS} alt="" />


        <p className="webH brnd" >Web Development</p>
        </div>
    </div>
  )
}
