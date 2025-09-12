import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const ContainerFormStyle={
        width:"70%",
        height:"600px",
        backgroundColor:"yellow",
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
        top:"120px",
        left:"450px",
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
    const [name1, setName1] = useState("");
    const [password1, setPassword1] = useState("");
    const handleFormLogin=()=>{
        const regFullName = localStorage.getItem("name");
        const fName= regFullName.split(" ")[0]
        const regPsswrd = localStorage.getItem("password");

        if (name1 == fName && password1 == regPsswrd)  {
            alert("valid user");
            localStorage.setItem("loggedUser", name1);
            navigate("/home");
           
        }
        else{
            alert("Invalid user");
        }
    }
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
                    <form action="">
                        <h4>Sign in</h4>
                        <div className="field">
                            <input type="name"placeholder="User Name" onChange={(e => setName1(e.target.value))} value={name1} />
                        </div>
                        <div className="field">
                            <input type="password"placeholder="Password" onChange={e=> setPassword1(e.target.value)} value={password1} />
                             
                        </div>
                        <div className="btn_signIn">
                            <button type="button" onClick={()=>handleFormLogin()} style={{color:"white"}}>Sign In</button> 
                        </div>
                        
                        <div class="hr-text"><span>or</span></div>
                        
                        <span>
                            Dont have an Account ? 
                            <span>
                                <Link to="register" style={{textDecoration:"none"}}> Register Here</Link>
                            </span>
                          
                        </span>
                    </form>
                    <div className="smallCircle" style={smallCircleStyle2}></div>
                </div>
            </div>
            <br />
            username:{localStorage.getItem("name")} <br />
            password:{localStorage.getItem("password")} 

            username:{localStorage.getItem("name1")} <br />
            password:{localStorage.getItem("password1")} 

        </div>
    );
}

export default Login;
