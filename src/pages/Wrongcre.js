import React from 'react'
import '../index.css'
function Wrongcre() {
  return (
    <div class="containererror">
        <h1>Wrong Credentials</h1>
        <p>The username or password you entered is incorrect.</p>
        <p>Please <a href="/login">try again</a> or <a href="/">go back to home</a>.</p>
    </div>
  )
}

export default Wrongcre