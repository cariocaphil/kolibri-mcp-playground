import { KolButton, KolForm, KolInputCheckbox, KolInputText } from '@public-ui/react-v19'

function App() {
  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <KolForm
        _on={{
          onSubmit: () => console.log('submitted'),
        }}
      >
        <KolInputText _label="Name" _name="name" />
        <KolInputCheckbox _label="Subscribe to the newsletter" _name="subscribe" />
        <KolButton _label="Submit" _type="submit" />
      </KolForm>
    </main>
  )
}

export default App
