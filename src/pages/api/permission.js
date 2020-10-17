import cookie from 'cookie'

export default async function permission(req, res) {
  // delay 1.5s for demo
  await new Promise((resolve) => setTimeout(() => resolve(), 1500))

  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie || '')
    const authToken = cookies._junyi_session

    if (authToken) {
      res.json({ roles: ['developer'] })
    } else {
      res.status(400).json({ roles: [] })
    }
  } else {
    res.status(405).json({ message: 'We only support GET' })
  }
}
