import "./SideBar.css"

export const SideBar = ({viewBox,MenuOpen}) => {

  
  return (
    <>
        <div id='sidebarHide' className={(viewBox)?"sidebar":"disnone"}>
            <h1>menu side</h1>

        </div>
    </>
  )
}
