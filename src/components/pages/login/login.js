import { Link } from "react-router-dom"
import "./login.css"

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
           <label>Email</label> 
           <input type="email" className="loginInput" placeholder="Enter Your Email....."/>
           <label>Pssword</label> 
           <input type="password" className="loginInput" placeholder="Enter Your Password.... "/>
           <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link className="link" to="/register">Register Yourself</Link></button>
        </div>
  )
}

export default Login