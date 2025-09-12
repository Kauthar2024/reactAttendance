import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";


const Home = () => {
    const location = useLocation();
   
    const username = location.state?.username || "Guest";
      console.log(location.state?.username)
 const name = "Kauthar"


const [tableData, setTableData] = useState([]);


const [fname, setfname] = useState('');
const [lname, setlname] = useState('');
const [empId, setEmpId] = useState('');
const [department, setdepartment] = useState('');
const [status, setStatus] = useState('');


 useEffect(()=>{
   const fullName = localStorage.getItem("name");
   const fullNameArr = fullName.split(" ");


   setEmpId(localStorage.getItem("empId") || "");

   setfname(fullNameArr[0] || "");
   setlname(fullNameArr[1] || "");

 },[])

//Signature
    const [sign, setSign] = useState()
     const [url,setUrl] = useState()

     const handleClear=() =>{
      sign.clear();
      setUrl('')

     }
     const handleGenerate= () =>{
      setUrl(sign.getCanvas().toDataURL("image/png"));

     }

//btn check in n out
const [checkIn, setCheckIn] = useState(null);
const [checkOut, setCheckOut] = useState(null);
const handleCheckIn=()=>{
  const now = new Date()
  const nowFormat = now.toLocaleString()
  setCheckIn(nowFormat)
  // alert("Check in at ", now)
  console.log(now);
}
const handleCheckOut=()=>{
  if (!checkIn) {
    alert("You must check in before checking out")
  }
  const now = new Date().toLocaleString()
  setCheckOut(now)
  // alert("Check out at ", now)
}

// const lastCheckIn = checkIn
// const lastCheckOut = checkOut
//     if (status === "ABSENT") {
//       lastCheckIn="-"
//       lastCheckOut="-"
//     }
//form submit
const formData = {
      fname:fname,
      lname:lname,
      empId:empId,
      status:status,
      department:department,
      signature:url,
      checkInTime:checkIn,
      checkOutTime:checkOut
    }
// try {
  const handleAttendForm = async(e)=>{
    e.preventDefault();
    const res = await axios.post("https://jsonplaceholder.typicode.com//posts",formData)
    const resFormData = res.data

    setTableData([...tableData, resFormData])
  
    console.log("form submitted successfully", res.data);

    //clear form after submittion
    setfname("")
    setlname("")
    setEmpId("")
    setStatus("")
    setCheckIn("")
    setCheckOut("")
    setUrl("")
  }
  
// } catch (error) {
  
// }
    return (
        <>
        <main> 
             <div className="container"> 
       
              <div className="form-container">
                 {/* <h1>Welcome employee {username} attendance form</h1> */}
                 <h1>
                  Welcome {fname} {lname} <br />Fill attendance form
                  {/* Welcome employee  {fname && lname ? `${fname} ${lname}` : GUEST } to attendance form */}
                  </h1>
            <form action="">

                <div className="names">
                   <div className="fname input-names">
                    <label for="fname">First name </label><br />
                    <input type="text" name="fname" readOnly value={fname}/> 
                    </div>
                     <div className="lname input-names">
                       <label for="lname">Last name </label> <br />
                      <input type="text" name="lname" readOnly value={lname}/>
                    </div>
                </div>
                 <div className="field">
                      <label for="id"> Employee ID </label> <br/>
                    <input type="text" number="id" placeholder="e.g 23" readOnly value={empId}/>
                      </div>
           
                <div className="field">
                     <label htmlFor="status">status</label> <br />
                      <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)} required>
                         <option value="present">PRESENT </option>
                         <option value="absent">ABSENT</option>
                         <option value="late">LATE</option>
                      </select>
                </div>
                <div className="field">
                      <label htmlFor="department"> Department </label> <br/>
                    {/* <input type="text" name="department" /> */}
                    <select name="department" id="department" values={department} onChange={(e)=>setdepartment(e.target.value)} required>
                        <option value="it">IT</option>
                        <option value="accountancy">ACCOUNTANCY</option>
                        <option value="hr">HR</option>

                    </select>
                </div>
                   {/* <div className="field">
                      <label for="Position"> Position/Title </label><br/>
                    <input type="text" name="Position" />
                </div> */}

            </form>
             <div className="btn_checkIn" style={{marginTop:"15px"}}>
                    <button onClick={()=>handleCheckIn()} style={{border:"none",marginRight:"15px",width:"100px",height:"40px",fontSize:"18px",backgroundColor:"red",color:"white"}}>Check In</button>
                    <span>{checkIn? checkIn : "Not checked in yet"}</span>
                    <span>
                      <button onClick={()=>handleCheckOut()} style={{marginLeft:"15px",marginRight:"15px",border:"none",width:"100px",height:"40px",fontSize:"18px",backgroundColor:"green",color:"white"}}>Check Out</button>
                      <span>{checkOut ? checkOut : "Not checked out yet"}</span>

                    </span>
              </div>
             {/* <div className="btn_checkOut" style={{marginTop:"15px"}}>
              <span>
                    <button onClick={()=>handleCheckOut()} style={{marginRight:"15px",border:"none",width:"100px",height:"40px",fontSize:"18px",backgroundColor:"green",color:"white"}}>Check Out</button>
                    <span>{checkOut ? checkOut : "Not checked out yet"}</span>
              </span>
             </div> */}
                      <h2>Employee Signature</h2>
                               <div style={{border:"1px solid black", width:"300px",height:"100px"}}>
                                 <SignatureCanvas
                                    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} 
                                    ref={data=>setSign(data)}
                                 />
                               </div>
                               <div className="btn_clear" style={{marginTop:"10px"}}>
                                 <button onClick={()=>handleClear()} style={{border:"none",width:"80px",height:"30px",fontSize:"18px",backgroundColor:"red",color:"white"}}>
                                  clear
                                  </button>
                                  <span>
                                    <button onClick={()=>handleGenerate()} style={{marginLeft:"15px",border:"none",width:"80px",height:"30px",fontSize:"18px",backgroundColor:"green",color:"white"}}>save</button>
                                  </span>
                               </div>
               
                               <br />
                              
                               {/* <img src={url} alt="" /> */}
                     
                      <div className="btn">
                        <button type="submit" onClick={(e)=>handleAttendForm(e)}>submit</button>
                      </div>
        </div>
        {/* <About username={name}/> */}
          
            </div>
            <table>
              <thead>
                 {/* fname:fname,
      lname:lname,
      empId:empId,
      status:status,
      department:department,
      signature:url,
      checkInTime:checkIn,
      checkOutTime:checkOut */}
              <tr>
                <th> S/N</th>
                <th style={{width:"200px"}}> FullName</th>
                <th> Employee Id</th>
                <th> status</th>
                <th> Department</th>
                <th> Signature</th>
                <th> Check In Time</th>
                <th> Check Out Time</th>
              </tr>

              </thead>
              <tbody>
                {tableData.map((data)=>(

                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.fname} {data.lname}</td>
                    <td>{data.empId}</td>
                    <td>{data.status}</td>
                    <td>{data.department}</td>
                    <td>
                      {data.signature ? (

                        <img src={data.signature} alt="signature" style={{width: "100px", height: "50px" }}/>
                      ):(
                        <h1>No Signature</h1>
                      )}
                    </td>
                    <td>{data.status? data.checkInTime : data.checkInTime="-"}</td>
                    <td>{data.status? data.checkOutTime : data.checkOutTime="-"}</td>
                    {/* <td>{data.checkOutTime}</td> */}

                  </tr>
                ))}
              </tbody>
              
               
                
              
        
            </table>
           
         </main>
       
        </>
    );
  
}
export default Home;
