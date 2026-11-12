import { useEffect, useState } from 'react'

// Sign-in contract for the customer app. The UI only calls these functions; the backend replaces the bodies.
// With Supabase Auth, for example: sendMagicLink → signInWithOtp({ email, options: { shouldCreateUser: false, emailRedirectTo: origin + '/#/app' } }),
// signInWithGoogle → signInWithOAuth({ provider: 'google' }), getSession/onChange → getSession/onAuthStateChange, signOut → signOut.
// Accounts are invite-only: sending a link to an email that has no account must fail with 'no_account', never create one.
// shortcut: no backend yet, every sign-in rejects with 'not_connected' and the login page says so; replace when the backend lands.

export type Session = { email: string; company?: string; role?: 'ap' | 'ops' | 'pricing' | 'admin' } | null
export type AuthError = 'not_connected' | 'no_account' | 'failed'

export const auth = {
  async sendMagicLink(_email: string): Promise<void> { throw new Error('not_connected' satisfies AuthError) },
  async signInWithGoogle(): Promise<void> { throw new Error('not_connected' satisfies AuthError) },
  async signOut(): Promise<void> {},
  getSession(): Session { return null },
  onChange(_cb: (session: Session) => void): () => void { return () => {} },
}

export function useSession() {
  const [session, setSession] = useState<Session>(() => auth.getSession())
  useEffect(() => auth.onChange(setSession), [])
  return session
}
