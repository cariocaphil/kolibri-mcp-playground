import { useState } from 'react'
import { KolButton, KolForm, KolInputCheckbox, KolInputText, KolTextarea } from '@public-ui/react-v19'

function App() {
  const [name, setName] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [message, setMessage] = useState('')
  const words = message.trim() === '' ? 0 : message.trim().split(/\s+/).length

  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <KolForm
        _on={{
          onSubmit: (event) => {
            event.preventDefault()
            console.log({ name, subscribed, message })
          },
        }}
      >
        <KolInputText _label="Name" _value={name} _on={{ onInput: (_event, value) => setName(String(value)) }} />
        <KolInputCheckbox
          _label="Subscribe to newsletter"
          _checked={subscribed}
          _on={{ onChange: (_event, value) => setSubscribed(Boolean(value)) }}
        />
        <KolTextarea _label="Message" _value={message} _rows={4} _on={{ onInput: (_event, value) => setMessage(String(value)) }} />
        <p>{words} words</p>
        <KolButton _label="Submit" _variant="primary" _type="submit" />
      </KolForm>
    </main>
  )
}

export default App
