import './message.css'

const Message = ({ text, from }) => {
  return (
    <div className="MessageContainer" id={from}>
      <div className="Message">
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Message