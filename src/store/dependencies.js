export const request = (query) =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          foo: query,
        }),
      1000
    )
  })
