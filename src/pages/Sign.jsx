// import React, { useRef, useState } from 'react';
// import SignatureCanvas from 'react-signature-canvas';

// const Sign = () => {
    
//     const [sign, setSign] = useState()
//      const [url,setUrl] = useState()

//      const handleClear=() =>{
//       sign.clear();
//       setUrl('')

//      }
//      const handleGenerate= () =>{
//       setUrl(sign.getCanvas().toDataURL("image/png"));

//      }

//      console.log(sign);
//      console.log(url);

//      const myRefInput = useRef(null)
//      const handleInput=()=>{
//         myRefInput.current.focus()
//      }
     
//     return (
//         <div>
//              <h2>Employee Signature</h2>
//                 <div style={{border:"4px solid blue", width:"500px",height:"200px"}}>
//                   <SignatureCanvas
//                      canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
//                      ref={data=>setSign(data)}
//                   />
//                 </div>
//                 <button onClick={()=>handleClear()}>clear</button>
//                 <button onClick={()=>handleGenerate()}>save</button>

//                 <br />
//                 <input ref={myRefInput} type="text" />
//                 <button onClick={()=>handleInput()} >Focus</button>
//                 {/* <img src={url} alt="" /> */}
     


//         </div>
//     );
// }

// export default Sign;


   
              