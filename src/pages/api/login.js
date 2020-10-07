import cookie from 'cookie'

const FAKE_AUTH_TOKEN = '123456789'

export default async function login(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (email === '' || password === '') {
      res.status(400).json({ message: 'Email/Password cannot be empty' })
    }

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('_junyi_session', FAKE_AUTH_TOKEN, {
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        maxAge: 3600,
        path: '/',
      })
    )

    setTimeout(() => res.json({ message: 'Welcome back to the app!' }), 1500)
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}
