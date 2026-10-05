import { useState } from 'react'
import { KolButton, KolForm, KolInputCheckbox, KolInputText, KolTextarea } from '@public-ui/react-v19'

function App() {
  const [message, setMessage] = useState('')
  const words = message.split(/\s+/).filter(Boolean).length

  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <KolForm>
        <KolInputText _label="Name" _name="name" />
        <KolInputCheckbox _label="Subscribe to the newsletter" _name="subscribe" />
        <KolTextarea
          _label="Message"
          _name="message"
          _value={message}
          _on={{ onInput: (_event: Event, value: unknown) => setMessage(String(value ?? '')) }}
          _hint={`${words} ${words === 1 ? 'word' : 'words'}`}
        />
        <KolButton _label="Submit" _type="submit" />
      </KolForm>
    </main>
  )
}

export default App
