# Quick start

## Create New Page

Create `src/pages/<YOUR_PAGE_NAME>.js`, choose the layout and permission level.

Example:

```js
import React from 'react'
import { StudentLayout } from '@/packages/layout'
import { requireDeveloper } from '@/packages/permission'

function Index() {
  return <StudentLayout>{/* page content start */}</StudentLayout>
}

export default requireDeveloper(Index)
```

### [Optional] getServerSideProps

If the permission level for this page is set. You can authenticate the user on server side.

Example:

```js
// ...

import { fetchPermission, getAuthToken } from '@/utils'

// ...

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie || ''

  const serverSideAuthToken = getAuthToken(cookies)
  const { roles } = await fetchPermission(cookies)

  return {
    props: {
      serverSideAuthToken,
      initialReduxState: {
        permission: {
          roles,
        },
      },
    }, // will be passed to the page component as props
  }
}
```

## Create New Package

To create a package, run `$ npm run init:package -- <YOUR_PACKAGE_NAME>`.
