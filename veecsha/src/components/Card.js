import React from 'react'

export const Card = ({value,SubContent,Content,logo}) => {
    const SetColor=()=>{
        switch (value) {
            case 1:return "#a04df311";break;
            case 2:return "#4df38211";break;
            case 3:return "#f3ab4d11";break;
            case 4:return "#e0f34d11";break;
            case 5:return "#4df3f311";break;
            case 6:return "#4d60f311";break;
    
            default:
                break;
        }
    }
    

    const style={
        backgroundColor:SetColor(),
        
        border:`1px solid ${SetColor()}`

    }
  return (
    <div style={style} className="Card" >
        <img className='logo' src={logo} alt="" />
        <p className='CardSub'>{SubContent}</p>
        <p className='CardContent' >{Content}</p>
    </div>
  )
}
