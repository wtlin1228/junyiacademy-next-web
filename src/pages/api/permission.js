import cookie from 'cookie'

export default async function permission(req, res) {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie || '')
    const authToken = cookies._junyi_session

    if (authToken) {
      setTimeout(() => {
        res.json({ roles: ['developer'] })
      }, 1500)
    } else {
      res.json({ roles: [] })
    }
  } else {
    res.status(405).json({ message: 'We only support GET' })
  }
}
