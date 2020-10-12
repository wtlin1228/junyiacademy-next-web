import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render, screen } from '../utils'

test('render with custom renderer', () => {
  function Greet({ greeting, subject }) {
    return (
      <div>
        <strong>
          {greeting} {subject}
        </strong>
      </div>
    )
  }

  Greet.propTypes = {
    greeting: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
  }

  const mapStateToProps = () => ({})

  const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

  const GreetWithRedux = connect(mapStateToProps, mapDispatchToProps)(Greet)

  const options = {
    initialState: {},
  }

  render(
    <GreetWithRedux greeting={'Hello'} subject={'Junyi Academy'} />,
    options
  )

  expect(screen.getByText('Hello Junyi Academy')).toBeInTheDocument()
})
