import cookie from 'cookie'

const getAuthToken = (cookies) => {
  const parsedCookies = cookie.parse(cookies)
  return parsedCookies._junyi_session
}

export default getAuthToken
