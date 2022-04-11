import React from 'react'
import SideBar, {aNormalDecoration} from '../../layout/SidebarLayout/SideBar'
import "./login.css"



function Login() {
  return (
    <div class="main">
    <div class="login">
      <div id="log">
        <h1 id="title">Log In</h1>
        <form id="login">
          <div class="input_field">
            <img id="input_field_img" src="./img/user.png" alt="" />
            <input
              id="input_value_field"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="input_field">
            <img id="input_field_img" src="./img/user.png" alt="" />
            <input
              id="input_value_field"
              type="password"
              placeholder="Password"
            />
          </div>
          <button class="btn_login" > <a style={aNormalDecoration} href="/home">Login</a></button>
        </form>
      </div>
    </div>

    <div class="signup">
      <h1 id="title">Sign up</h1>

      <form id="sign_up" action="post">
        <div class="input_field">
          <img id="input_field_img" src="./img/user.png" alt="" />
          <input
            id="input_value_field"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div class="input_field">
          <img id="input_field_img" src="./img/user.png" alt="" />
          <input id="input_value_field" type="text" placeholder="Last Name" />
        </div>
        <div class="input_field">
          <img id="input_field_img" src="./img/user.png" alt="" />
          <input id="input_value_field" type="text" placeholder="Username" />
        </div>
        <div class="input_field">
          <img id="input_field_img" src="./img/user.png" alt="" />
          <input
            id="input_value_field"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div class="input_field">
          <img id="input_field_img" src="./img/user.png" alt="" />
          <input
            id="input_value_field"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="input_field">
          <img id="input_field_img" src="./img/user.png" alt="" />
          <input
            id="input_value_field"
            type="password"
            placeholder="Password"
          />
        </div>

        <button class="btn_signup">Sign Up</button>
      </form>
    </div>
  </div>
    


  )
}

export default Login