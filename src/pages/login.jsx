import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="form-container sign-in">
                <form action="">
                    <h1>login with </h1>
                    <icons/>
                <div className="icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>

                </div>
                <hr />
                <div className="log">
                   <span>Login With Your Email & Password </span> <br />
                   <input type="email"placeholder="Email" /><br />
                   <input type="password"placeholder="Password"/> <br />
                   <input type="checkbox" id="remember" name="remember" />
                   <label for="text">Remember me</label>
                   <button>Login</button>

                </div>

                </form>
            </div>
           
        </div>
          
        
    );
}

export default Login;
