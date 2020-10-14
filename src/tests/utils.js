import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'

// material-ui
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/styles/theme'

// redux
import { Provider as StateProvider } from 'react-redux'
import { initStore } from '@/store'

const AllTheProviders = ({ children, initialState }) => {
  const store = initStore(initialState)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StateProvider store={store}>{children}</StateProvider>
    </ThemeProvider>
  )
}

AllTheProviders.propTypes = {
  children: PropTypes.element.isRequired,
  initialState: PropTypes.object.isRequired,
}

const customRender = (ui, options) => {
  const { initialState, ...others } = options
  return render(ui, {
    wrapper: ({ children }) => AllTheProviders({ children, initialState }),
    ...others,
  })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
