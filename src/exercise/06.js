// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    // We use the name on the input instead of array so we don't rely on order
    // onSubmitUsername(event.target[0].value)
    const value = event.target.elements.usernameInput.value
    onSubmitUsername(value)
  }

  const handleChange = (event) => {
    event.preventDefault()
    const onChangeValue = event.target.value
    const isLowerCase = onChangeValue === onChangeValue.toLowerCase()
    setError(isLowerCase ? null : 'username must be lowercase')
  }
  
  const setNewUsername = (event) => {
    event.preventDefault()
    setUsername(event.target.value.toLowerCase())
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label >Username:</label>
        <input onChange={setNewUsername} name='usernameInput' type="text" value={username}/>
      </div>
      <div style={{color:'red'}}>{error}</div>
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
