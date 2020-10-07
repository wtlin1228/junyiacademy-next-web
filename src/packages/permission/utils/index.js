import Cookies from 'js-cookie'

export function getAuthToken() {
  return Cookies.get('_junyi_session')
}
