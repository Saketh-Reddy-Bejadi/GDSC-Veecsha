import "./Header.css";
import veecsha from "../assets/Veecsha.png"

export const Header = () => {



  return (
    <>
      <nav>
        <img src={veecsha} height="30px" alt="" />
        <ul >
          <a href="Roadmaps"><li className='optdrop' >Roadmaps</li></a>
          <a href=""><li className='optdrop' >Cheatsheets</li></a>
          <a href=""><li className='optdrop' >Installations</li></a>
        </ul>

      </nav>
    </>
  )
}
