import { Link } from "react-router-dom";
import "./SideBar.css"

export const SideBar = ({viewBox,toggleMenu}) => {

  const ClickedBtn=()=>{
    toggleMenu();
  }
  
  return (
    <>
        <div id='sidebarHide' className={(viewBox)?"sidebar":"disnone"}>
            <p>Menu</p>
            <div className="SBcontents" >
              <Link onClick={ClickedBtn} to="/GDSC-Veecsha/Home" >Home</Link>
              <Link onClick={ClickedBtn} to="/GDSC-Veecsha/WebDev">Web Dev</Link>
              <Link onClick={ClickedBtn} to="/GDSC-Veecsha/DSA">DSA</Link>
            </div>
        </div>
    </>   
  )
}
