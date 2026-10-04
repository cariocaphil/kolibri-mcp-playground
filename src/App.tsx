import { KolButton, KolForm, KolInputCheckbox, KolInputText } from '@public-ui/react-v19'

function App() {
  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <KolForm
        _on={{
          onSubmit: (event) => console.log('submitted:', event),
        }}
      >
        <KolInputText _label="Name" />
        <KolInputCheckbox _label="Accept terms" />
        <KolButton _label="Submit" _variant="primary" _type="submit" />
      </KolForm>
    </main>
  )
}

export default App
