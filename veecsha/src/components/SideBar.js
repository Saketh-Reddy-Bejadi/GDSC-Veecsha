import "./SideBar.css"

export const SideBar = ({viewBox}) => {

  
  return (
    <>
        <div id='sidebarHide' className={(viewBox)?"sidebar":"disnone"}>
            <p>Menu</p>

        </div>
    </>
  )
}
