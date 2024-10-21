import PropTypes from 'prop-types'
const Button = ({color,text,action}) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={action}>{text}</button>
  )
}

Button.defaultProps = {
    color: "black",
    text: "Add"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.func
}

export default Button