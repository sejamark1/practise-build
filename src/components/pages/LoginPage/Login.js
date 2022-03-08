import React from 'react'
import "./login.css"


function Login() {
  return (
    <section> 
      <div id="login_container"> 
        <div id="top"> 
          <h1> Login </h1>
          <p> Please enter your username and password </p>
        </div>
        <div id="login_username"> 
          <input type="email" id="typeEmailX" placeholder='Email' class="form-control " />
        </div>
        <div id="login_password"> 
          <input type="password" id="typeEmailX" placeholder='Password' class="form-control " />
        </div>
        
        <p> Forgot password? </p>
        <button class="login_btn" type="submit">Login</button>

      <div class="d-flex justify-content-center text-center mt-4 pt-1">
        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
      </div>

      </div>





    </section> 

    


  )
}

export default Login