import React from 'react';

const Registration = () => {
    return (
        <div>
             <div class="container" id="container">
           <div class="form-container sign-up">
            <form>
                <h1>Register With</h1>
                <div class="icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <hr/>
                <h1>OR</h1>
                <hr/>
                <span>Fill Out The Following Info For Registeration</span>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button>Sign Up</button>
            </form>
          </div>
          </div>
        </div>
    );
}

export default Registration;
