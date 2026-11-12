import { useState, type FormEvent } from 'react'
import { Mark } from './App'
import { auth, useSession, type AuthError } from './auth'
import { useT } from './i18n'

// Customer sign-in (#/login) and the signed-in app (#/app). Accounts are invite-only, so there is no sign-up form.
export function Login() {
  const { t } = useT()
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | AuthError>('idle')

  const run = async (go: () => Promise<void>, after: 'sent' | 'idle') => {
    setState('sending')
    try { await go(); setState(after) } catch (e) {
      const code = (e as Error).message
      setState(code === 'not_connected' || code === 'no_account' ? code : 'failed')
    }
  }
  const submit = (e: FormEvent) => { e.preventDefault(); run(() => auth.sendMagicLink(email.trim()), 'sent') }

  return (
    <section className="login">
      <div className="login-card">
        <Mark className="login-mark" />
        <h1>{t('loginTitle')}</h1>
        <p className="login-sub">{t('loginSub')}</p>

        {state === 'sent' ? (
          <p className="login-note ok" role="status">{t('loginSent')} <b>{email}</b>.</p>
        ) : (
          <>
            <form onSubmit={submit} className="login-form">
              <label className="field" htmlFor="login-email">{t('loginEmail')}</label>
              <input id="login-email" type="email" required autoComplete="email" placeholder="name@company.com"
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="btn on-dark" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? t('loginSending') : t('loginSend')}
              </button>
            </form>
            <div className="login-or"><span>{t('loginOr')}</span></div>
            <button className="btn ghost" type="button" disabled={state === 'sending'} onClick={() => run(() => auth.signInWithGoogle(), 'idle')}>
              {t('loginGoogle')}
            </button>
            {state !== 'idle' && state !== 'sending' && (
              <p className="login-note" role="alert">{t(state === 'not_connected' ? 'loginNotConnected' : state === 'no_account' ? 'loginNoAccount' : 'loginFailed')}</p>
            )}
          </>
        )}

        <p className="login-foot">{t('loginNoAccountHelp')}</p>
      </div>
      <a className="login-back" href="#/">← {t('loginBack')}</a>
    </section>
  )
}

export function CustomerApp() {
  const { t } = useT()
  const session = useSession()
  if (!session) return <Login />
  return (
    <section className="login">
      <div className="login-card">
        <h1>{t('appHello')}</h1>
        <p className="login-sub">{session.email}{session.company ? ` · ${session.company}` : ''}</p>
        <p className="login-note">{t('appBuilding')}</p>
        <button className="btn ghost" onClick={() => auth.signOut()}>{t('appSignOut')}</button>
      </div>
    </section>
  )
}
