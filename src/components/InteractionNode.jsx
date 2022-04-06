import { useState } from 'react';

export const InteractionNode = ({icon, iconHover, iconClick, onClick, number, title}) => {
  
  const [isHover, setIsHover] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const clicked = () => {
    setIsClicked(true);
    onClick()
  }
  return (
    <div 
      style={styles.wrapper} 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={clicked}
    >
    { icon && (
      <div style={styles.iconContainer}>
        <img 
          src={isHover ? iconHover : isClicked ? iconClick : icon} 
          alt='icon'
          style={styles.icon}
        />
      </div>
   
      )
    }
    <div style={styles.text}>
      <b>{number}</b>&nbsp;
      {title}
    </div>
  </div>
  )
}

const styles = {
  wrapper: {
    display: "flex",
  },
  icon: {
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    marginRight: 5,
  },
  text: {
    display: "flex",
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    alignItems: "center",
    marginRight: 13,
  }
}