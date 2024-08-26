import './container.css'
import InputArea from '../../components/input_area'
import ChatArea from '../../components/chat_area'

const Container = () => {
  return (
    <div className="Container">
      <ChatArea />
      <InputArea />
    </div>
  )
}

export default Container