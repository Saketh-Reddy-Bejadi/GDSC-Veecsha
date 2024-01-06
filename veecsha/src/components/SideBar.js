import "./SideBar.css"

export const SideBar = ({viewBox}) => {

  
  return (
    <>
        <div id='sidebarHide' className={(viewBox)?"sidebar":"disnone"}>
            <p>Menu</p>
            <div className="SBcontents" >
              <a href="Home" >Home</a>
              <a href="Services">Services</a>
              <a href="Web Dev">Web Dev</a>
              <a href="DSA">DSA</a>
            </div>
        </div>
    </>   
  )
}
