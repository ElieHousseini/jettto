import React from 'react'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (for null if `sucess` prop is )
 */

export default (props) => {
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