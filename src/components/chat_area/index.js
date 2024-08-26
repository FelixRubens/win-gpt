import Message from '../message'
import { useContext } from 'react'
import { Context } from '../../context'
import './chat_area.css'


const ChatArea = () => {
  const { messages } = useContext(Context)

  return (
    <div className="ChatAreaContainer">
      {messages.map(({content, from}) => {
        return (
          <Message text={content} from={from} />
        )
      })}
    </div>
  )
}

export default ChatArea