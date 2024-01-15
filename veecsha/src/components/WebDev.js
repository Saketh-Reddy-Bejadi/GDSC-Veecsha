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
          <img className="img1" src={html} alt="" />
          <img className="img2" src={css} alt="" />
          <img className="img3" src={js} alt="" />
          <img className="img4" src={reactJS} alt="" />
          <img className="img5" src={nodeJS} alt="" />


        <p className="webH brnd" >Web Development</p>
        </div>
    </div>
  )
}
