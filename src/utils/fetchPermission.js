import axios from 'axios'

const fetchPermission = (cookies) =>
  axios
    .get('http://localhost:3000/api/permission', {
      headers: { Cookie: cookies },
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data
      } else {
        return {
          roles: [],
        }
      }
    })

export default fetchPermission
