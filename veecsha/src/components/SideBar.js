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
              <a onClick={ClickedBtn} href="/#Home" >Home</a>
              <a onClick={ClickedBtn} href="/#Services">Services</a>
              <Link onClick={ClickedBtn} to="/WebDev">Web Dev</Link>
              <a onClick={ClickedBtn} href="DSA">DSA</a>
            </div>
        </div>
    </>   
  )
}
