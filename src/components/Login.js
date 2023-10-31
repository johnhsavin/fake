import { useState, useEffect } from "react"


export default function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState()

useEffect(() => {
  if(isLoggedIn) {
    document.title = "Watch your back!"
  } else {
    document.title = "Enter if you dare!"
  }
}, [isLoggedIn])    //perform function when it mounts, one time

const handleLoginForm = (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  // never do this in the real world
  if(email === 'johnsavindev@proton.me' && password === 'password123') {
    setIsLoggedIn(true)
    setError() 
    } else {
      setError('Invalid email or password')
    }
  }



if(isLoggedIn) {
return (
  <main>
    <h2>You're Logged In!</h2>
<button onClick={() => setIsLoggedIn(false)}>
  Logout</button>

  </main>
)


}
  return (
    <main>
<h2>You're Logged In!</h2>

<h2>Login</h2>
<section className="login-form">
  <form onSubmit={handleLoginForm}>

    <label htmlFor="email">
      Email:
      <input type="email" name="email" />
    </label>

    <label htmlFor="password">
      Password:
    <input type="password" name="password" />
    </label>

    {error &&
    <p style={{ color: 'red'}}>{error}</p>
    }

    <input type="submit" value="Login" />

  </form>
</section>
    </main>
  )
}