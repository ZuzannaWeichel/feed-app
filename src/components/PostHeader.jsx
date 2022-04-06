import PropTypes from 'prop-types';

export const PostHeader = ({ avatarPath, title, subtitle }) => {
  return (
    <div style={styles.wrapper}>
      <img src={avatarPath} width="60" height="60" alt='avatar'/>
      <div style={styles.textContainer}>
        <div style={styles.title}>{title}</div>  
        <div style={styles.subtitle}>{subtitle}</div>
      </div>
      
    </div>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatarPath: PropTypes.string
}

const styles = {
  wrapper: {
    display: "flex",
    margin: "30px 30px 0px 30px"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins, sans-serif"
  },
  
  subtitle: {
    fontSize: 12,
    fontFamily: "Open Sans, sans-serif",
    color: "rgba(18, 21, 29, 0.6)"
  }

}