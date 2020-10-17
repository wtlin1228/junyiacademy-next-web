import cookie from 'cookie'

const FAKE_AUTH_TOKEN = '123456789'

export default async function login(req, res) {
  await new Promise((resolve) => setTimeout(() => resolve(), 1500))

  if (req.method === 'POST') {
    const { email, password } = req.body

    if (email === '' || password === '') {
      res.status(400).json({ message: 'Email/Password cannot be empty' })
    } else {
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
      res.json({ message: 'Welcome back to the app!' })
    }
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}
