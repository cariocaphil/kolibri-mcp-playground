import { useRef, useState } from 'react'
import { KolAlert, KolButton, KolForm, KolInputPassword, KolInputText } from '@public-ui/react-v19'
import type { ErrorListPropType } from '@public-ui/components'

type FieldName = 'username' | 'password'
type FieldValues = Record<FieldName, string>
type FieldErrors = Partial<Record<FieldName, string>>

const FIELD_ORDER: FieldName[] = ['username', 'password']

function validateField(field: FieldName, value: string): string | undefined {
  if (field === 'username') {
    const username = value.trim()
    if (username === '') {
      return 'Please enter your username.'
    }
    if (username.length < 3) {
      return 'The username must consist of at least 3 characters.'
    }
    return undefined
  }
  if (value === '') {
    return 'Please enter your password.'
  }
  if (value.length < 8) {
    return 'The password must consist of at least 8 characters.'
  }
  return undefined
}

function validateValues(values: FieldValues): FieldErrors {
  const errors: FieldErrors = {}
  for (const field of FIELD_ORDER) {
    const message = validateField(field, values[field])
    if (message !== undefined) {
      errors[field] = message
    }
  }
  return errors
}

function App() {
  const formRef = useRef<HTMLKolFormElement | null>(null)

  const [values, setValues] = useState<FieldValues>({ username: '', password: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    username: false,
    password: false,
  })
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const applyInput = (field: FieldName, value: unknown): void => {
    const nextValues: FieldValues = {
      ...values,
      [field]: typeof value === 'string' ? value : String(value ?? ''),
    }
    setValues(nextValues)
    setSuccessMessage(null)
    // Keep the visible error in sync while the user fixes a field.
    if (touched[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: validateField(field, nextValues[field]),
      }))
    }
  }

  const applyBlur = (field: FieldName): void => {
    setTouched((previous) => ({ ...previous, [field]: true }))
    setErrors((previous) => ({ ...previous, [field]: validateField(field, values[field]) }))
  }

  const handleSubmit = (): void => {
    const validationErrors = validateValues(values)
    const hasErrors = FIELD_ORDER.some((field) => validationErrors[field] !== undefined)
    setTouched({ username: true, password: true })
    setErrors(validationErrors)
    setSubmitAttempted(true)
    if (hasErrors) {
      setSuccessMessage(null)
      // The form renders the error list first and focuses it after a short delay.
      formRef.current?.focusErrorList()
      return
    }
    setSuccessMessage(
      `Signed in as “${values.username.trim()}”. (Demo only – no data was transmitted.)`,
    )
  }

  const visibleErrors: Array<{ field: FieldName; message: string }> = []
  for (const field of FIELD_ORDER) {
    const message = errors[field]
    if (touched[field] && message !== undefined) {
      visibleErrors.push({ field, message })
    }
  }

  const errorList: ErrorListPropType[] | undefined = submitAttempted
    ? visibleErrors.map(({ field, message }) => ({ message, selector: `#login-${field}` }))
    : undefined

  const usernameError = visibleErrors.find((entry) => entry.field === 'username')?.message
  const passwordError = visibleErrors.find((entry) => entry.field === 'password')?.message

  return (
    <main>
      <h1>Sign in</h1>

      {successMessage !== null && (
        <KolAlert _type="success" _alert _label="Sign-in successful">
          <p>{successMessage}</p>
        </KolAlert>
      )}

      <section
        style={{
          maxWidth: '28rem',
          margin: '0 auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <KolForm ref={formRef} _errorList={errorList} _on={{ onSubmit: handleSubmit }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <KolInputText
              id="login-username"
              _label="Username"
              _name="username"
              _required
              _autoComplete="username"
              _value={values.username}
              _touched={touched.username}
              _msg={usernameError ? { _type: 'error', _description: usernameError } : undefined}
              _on={{
                onInput: (_event: Event, value: unknown) => applyInput('username', value),
                onBlur: () => applyBlur('username'),
              }}
            />
            <KolInputPassword
              id="login-password"
              _label="Password"
              _name="password"
              _required
              _autoComplete="current-password"
              _visibilityToggle
              _value={values.password}
              _touched={touched.password}
              _msg={passwordError ? { _type: 'error', _description: passwordError } : undefined}
              _on={{
                onInput: (_event: Event, value: unknown) => applyInput('password', value),
                onBlur: () => applyBlur('password'),
              }}
            />
            <div>
              <KolButton _label="Sign in" _type="submit" _variant="primary" />
            </div>
          </div>
        </KolForm>
      </section>
    </main>
  )
}

export default App
