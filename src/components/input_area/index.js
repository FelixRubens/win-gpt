import { useEffect, useState } from 'react'
import { useContext, useRef } from 'react'
import { Context } from '../../context'
import './input_area.css'
import SendIcon from '@mui/icons-material/Send';
import OpenAI from "openai"

const openai = new OpenAI({ apiKey: '<API_KEY>', dangerouslyAllowBrowser: true })

const InputArea = () => {
  const inputRef = useRef()
  const { messages, setMessages, setLoading } = useContext(Context)
  const [text, setText] = useState('')
  const [response, setResponse] = useState({})

  const getResponse = async () => {
    setLoading(true)

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: text }],
      model: 'gpt-3.5-turbo',
    })

    setLoading(false)

    const responseMessage = completion.choices[0].message.content
    const newMessage = {
      content: responseMessage,
      from: 'gpt'
    }
    setResponse(newMessage)
  }

  useEffect(() => {
    if (response.content) setMessages([...messages, response])
  }, [response])

  const sendMessage = async () => {
    if (!text.length) return
    
    const newMessage = {
      content: text,
      from: 'user'
    }
    setMessages([...messages, newMessage])

    inputRef.current.innerHTML = ''
    
    setText('')
    await getResponse()
  }

  return (
    <div className='InputContainer'>
      <div className='InputArea'>
        <span
          className='Input'
          role="textbox"
          contentEditable
          ref={inputRef}
          value={text}
          onInput={(e) => setText(e.currentTarget.textContent)}
        />
      </div>
      <SendIcon className='SendIcon' onClick={sendMessage}/>
    </div>
  )
}

export default InputArea