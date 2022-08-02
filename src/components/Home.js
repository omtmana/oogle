// Home will be the landing page to login to be able to use the website 
//  [ ] Create a home page that will allow log-in for users to be able to use it
import React , {useState} from "react"

const Home = () => {

const[username, setUsername]=useState("")
const[password, setPassword]=useState("")

const handleSubmit= ((e) => {
   e.preventDefault()
})

   return(
      <div className="sign-in-container">
         <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChane={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Sign-in</button>
         </form>

      </div>
   )
}

export default Home;