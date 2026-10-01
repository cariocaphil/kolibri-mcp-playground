import { useMemo, useRef, useState } from 'react'
import type { ErrorListPropType, MsgPropType } from '@public-ui/components'
import {
  KolAlert,
  KolButton,
  KolCard,
  KolForm,
  KolInputPassword,
  KolInputText,
} from '@public-ui/react-v19'

import './App.css'

/** Host element ids. They double as the focus targets for the form error list. */
const USERNAME_INPUT_ID = 'login-username'
const PASSWORD_INPUT_ID = 'login-password'

const FIELD_NAMES = ['username', 'password'] as const

type FieldName = (typeof FIELD_NAMES)[number]
type FieldValues = Record<FieldName, string>
type FieldTouched = Record<FieldName, boolean>
type FieldErrors = Partial<Record<FieldName, string>>

type Status = {
  id: number
  type: 'success'
  message: string
}

/**
 * A login form must only check presence, never password policy: the stored
 * account may legitimately be shorter than a "new password" rule allows.
 */
const VALIDATORS: Record<FieldName, (value: string) => string | undefined> = {
  username: (value) =>
    value.trim().length > 0 ? undefined : 'Please enter your username.',
  password: (value) =>
    value.length > 0 ? undefined : 'Please enter your password.',
}

const toText = (value: unknown): string =>
  typeof value === 'string' ? value : String(value ?? '')

function App() {
  const formRef = useRef<HTMLKolFormElement>(null)

  const [values, setValues] = useState<FieldValues>({
    username: '',
    password: '',
  })
  const [touched, setTouched] = useState<FieldTouched>({
    username: false,
    password: false,
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status | null>(null)

  const errorList = useMemo<ErrorListPropType[]>(() => {
    const list: ErrorListPropType[] = []
    if (errors.username) {
      list.push({ message: errors.username, selector: `#${USERNAME_INPUT_ID}` })
    }
    if (errors.password) {
      list.push({ message: errors.password, selector: `#${PASSWORD_INPUT_ID}` })
    }
    return list
  }, [errors])

  const handleInput =
    (name: FieldName) => (_event: Event, value: unknown) => {
      const nextValue = toText(value)
      setValues((previous) => ({ ...previous, [name]: nextValue }))
      // Never show an error while the user is still typing for the first time.
      if (touched[name]) {
        setErrors((previous) => ({
          ...previous,
          [name]: VALIDATORS[name](nextValue),
        }))
      }
      setStatus(null)
    }

  const handleBlur = (name: FieldName) => () => {
    setTouched((previous) =>
      previous[name] ? previous : { ...previous, [name]: true },
    )
    setErrors((previous) => {
      const nextError = VALIDATORS[name](values[name])
      return previous[name] === nextError
        ? previous
        : { ...previous, [name]: nextError }
    })
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault()

    const nextErrors: FieldErrors = {}
    for (const name of FIELD_NAMES) {
      const nextError = VALIDATORS[name](values[name])
      if (nextError) {
        nextErrors[name] = nextError
      }
    }

    setTouched({ username: true, password: true })
    setErrors(nextErrors)
    setStatus(null)

    if (Object.keys(nextErrors).length > 0) {
      // Moves focus to the first link of the error summary rendered by KolForm.
      formRef.current?.focusErrorList()
      return
    }

    setStatus({
      id: Date.now(),
      type: 'success',
      message: 'Sign-in data is valid. This demo has no backend connection.',
    })
  }

  const handleReset = (event: Event) => {
    event.preventDefault()
    setValues({ username: '', password: '' })
    setTouched({ username: false, password: false })
    setErrors({})
    setStatus(null)
  }

  // KoliBri only renders `_msg` once `_touched` is true, so the two always
  // change together and no error flashes up before the user has typed.
  const usernameError = touched.username ? errors.username : undefined
  const passwordError = touched.password ? errors.password : undefined
  const usernameMsg: MsgPropType | undefined =
    usernameError !== undefined
      ? { _description: usernameError, _type: 'error' }
      : undefined
  const passwordMsg: MsgPropType | undefined =
    passwordError !== undefined
      ? { _description: passwordError, _type: 'error' }
      : undefined

  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <div className="login">
        <KolCard _label="Sign in" _level={2}>
          <KolForm
            ref={formRef}
            _errorList={errorList}
            _on={{ onSubmit: handleSubmit, onReset: handleReset }}
          >
            {status && (
              <KolAlert
                key={status.id}
                _alert
                _type={status.type}
                _label={status.message}
              />
            )}

            <div className="login__fields">
              <KolInputText
                id={USERNAME_INPUT_ID}
                _label="Username"
                _name="username"
                _required
                _autoComplete="username"
                _value={values.username}
                _touched={touched.username}
                _msg={usernameMsg}
                _on={{
                  onInput: handleInput('username'),
                  onBlur: handleBlur('username'),
                }}
              />

              <KolInputPassword
                id={PASSWORD_INPUT_ID}
                _label="Password"
                _name="password"
                _required
                _autoComplete="current-password"
                _visibilityToggle
                _value={values.password}
                _touched={touched.password}
                _msg={passwordMsg}
                _on={{
                  onInput: handleInput('password'),
                  onBlur: handleBlur('password'),
                }}
              />
            </div>

            <div className="login__actions">
              <KolButton _type="submit" _label="Sign in" _variant="primary" />
              <KolButton _type="reset" _label="Reset form" />
            </div>
          </KolForm>
        </KolCard>
      </div>
    </main>
  )
}

export default App
