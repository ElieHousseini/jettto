import React from 'react'
import PropTypes from 'prop-types'


/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (for null if `sucess` prop is )
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congradulations! You guessed the world!
          </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats' />
    )
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats