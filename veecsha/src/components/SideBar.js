import Menu from './Menu';
import "./SideBar.css"

export const SideBar = ({viewBox,setVewBox,MenuOpen}) => {

  
  return (
    <>
        <div id='sidebarHide' className={(viewBox)?"sidebar":"disnone"}>
            <Menu/>
            <h1>menu side</h1>
        </div>
    </>
  )
}
