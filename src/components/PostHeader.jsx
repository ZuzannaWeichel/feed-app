import PropTypes from 'prop-types';

export const PostHeader = ({ isComment, avatarPath, title, subtitle }) => {
  return (
    <div style={styles.wrapper}>
      <img 
        src={avatarPath} 
        style={isComment ? styles.avatarComment : styles.avatarPost} 
        alt='avatar'/>
      <div style={styles.textContainer}>
        <div style={isComment ? styles.titleComment : styles.titlePost}>{title}</div>  
        <div style={styles.subtitle}>{subtitle}</div>
      </div>
      
    </div>
  )
}

PostHeader.propTypes = {
  isComment: PropTypes.bool,
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
  titlePost: {
    fontSize: 18,
    fontFamily: "Poppins, sans-serif"
  },
  titleComment: {
    fontSize: 16,
    fontFamily: "Poppins, sans-serif"
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Open Sans, sans-serif",
    color: "rgba(18, 21, 29, 0.6)"
  },
  avatarPost: {
    width: 60,
    height: 60
  },
  avatarComment: {
    width: 40,
    height: 40
  }

}