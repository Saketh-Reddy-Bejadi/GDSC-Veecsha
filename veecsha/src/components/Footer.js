import "./Footer.css";


export const Footer = () => {
  return (
    <div className='Footer' >
        <div className="Sub1">
        <div className="QuickLinks" >
            <a href="#0" className="FHead" >HELPFul LINKS</a>
            <a href="#0" className="FContent" >Home</a>
            <a href="#0" className="FContent" >Srevices</a>
            <a href="#0" className="FContent" >Web Dev</a>
            <a href="#0" className="FContent" >DSA</a>
        </div>
        <div className="Contact">
            <a href="#0" className="FHead" >CONNECT WITH US</a>
            <a href="#0"><p className="FContent" >Linkedin</p></a>
            <a href="#0" className="FContent" >Twitter</a>
            <a href="#0" className="FContent" >Facebook</a>
            <a href="#0" className="FContent" >Instagram</a>
        </div>
        <div className="Contact">
            <a href="#0" className="FHead" >GET IN TOUCH</a>
            <a href="#0"><p className="FContent" >webdev@veecsha.in</p></a>
            <a href="#0" className="FContent" >dsa@veecsha.in</a>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright &copy; 2024</p>
      </div>

    </div>
  )
}
