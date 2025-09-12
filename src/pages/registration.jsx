// import React from 'react';
// import { Link } from 'react-router-dom';

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registration = () => {
   const ContainerFormStyle={
        width:"70%",
        height:"600px",
        marginLeft:"250px",
        marginTop:"50px", 
        marginBottom:"150px", 
        display:"flex",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
        borderRadius:"30px",
        overflow:"hidden"
        
    }
    const circleForm={
        float:"left",
        width:"45%",
        backgroundColor:"rgb(0, 179, 255) ",

    }
    const smallCircleStyle3={
       backgroundColor:"rgba(2, 7, 73, 1)",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
        width:"590px",
        height:"590px",
        borderRadius:"48%",
        position:"relative",
        bottom:"80px",
        right:"120px",
        justifyContent:"center"
       
    }
    const smallCircleStyle = {
        width:"165px",
        height:"165px",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.4)",
        borderRadius:"50%",
        position:"relative",
        bottom:"250px",
        left:"280px",
        zIndex:1,
        backgroundColor:"rgba(2, 7, 73, 1)"
        
    }
    const smallCircleStyle1 = {
        width:"250px",
        height:"250px",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.4)",
        borderRadius:"50%",
        position:"relative",
        bottom:"370px",
        right:"70px",
        backgroundColor:"rgba(2, 7, 73, 1)"
        
    }
    const smallCircleStyle2 = {
        width:"180px",
        height:"180px",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.4)",
        borderRadius:"50%",
        position:"relative",
        bottom:"20px",
        left:"440px",
        backgroundColor:"rgba(2, 7, 73, 1)"

    }
    const circleTextStyle = {
        position:"relative",
        top:"180px",
        left:"190px",
        padding:"10px",
        width:"350px",
       
    }
    const signInDiv={
        backgroundColor:"rgb(0, 179, 255) ",
        float:"right",
        width:"55%",
        padding:"50px"

    }
    const navigate = useNavigate();
     const [name, setName] = useState("");
     const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
     const [empId, setEmpId] = useState("");
     const [confirmPassword, setconfirmPassword] = useState("");

    const handleFormSubmit=(e)=>{
        e.preventDefault();  //prevent the default behaviour of a form from refreshing the web page which can clear/ lose the input data
        if (password !== confirmPassword) {
            alert("Password do not match!")
            return;
        }
        // save user info in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);
        localStorage.setItem("empId", empId);
       
        
        alert("Registration Successfully! You can now log in")

        navigate("/");

        setEmail("");
        setName("");
        setEmpId("");
        setPassword("");
        setconfirmPassword("");
    };

    
    return (
        <div>
            <div className="container_form" style={ContainerFormStyle}>
                <div className="circleForm" style={circleForm}>
                    <div className="smallCircle" style={smallCircleStyle3}>
                    <div className="circleText" style={circleTextStyle}>
                        <h1>Welcome</h1>
                        <h3>YOUR  HEADLINE NAME</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio, tempora dolor aspernatur perspiciatis quae nostrum ad aliquam vitae temporibus?</p>
                    </div>
                    </div>

                    <div className="smallCircle" style={smallCircleStyle}>
                    </div>
                    <div className="smallCircle" style={smallCircleStyle1}>
                      
                    </div>
                </div>
                <div className="signIn" style={signInDiv}>
                    <form onSubmit={(e)=>handleFormSubmit(e)}>
                        <h4>Sign Up</h4>
                        <div className="fiel">
                            <input type="name"placeholder="Full Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </div>
                        <div className="fiel">
                            <input type="email"placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="fiel">
                            <input type="employee ID"placeholder="Employee ID" onChange={(e)=>setEmpId(e.target.value)} value={empId}/>
                        </div>
                   
                             
                        <div className="fiel">
                            <input type="password"placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                             
                        </div>
                          <div className="fiel">
                            <input type="confirmPassword"placeholder="Confirm Password" onChange={(e)=>setconfirmPassword(e.target.value)} value={confirmPassword}/>
                             
                        </div>
                        <div className="fiel">

                             <input type="checkbox" id="remember" name="remember" />
                              <label for="word">Remember me</label>
                         </div>
                        <div className="btn_signIn">
                            <button style={{color:"white",bottom:"20px"}}>Sign Up</button> 
                        </div>
               
                    </form>
                    <div className="smallCircle" style={smallCircleStyle2}></div>
                </div>
            </div>
        </div>
    );
}
export default Registration;
