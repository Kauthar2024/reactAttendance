import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
// import "./SignaturePad.css"; // 👈 import the CSS

const SignaturePad = ({ onSave }) => {
  const sigCanvas = useRef({});
  const [imageURL, setImageURL] = useState(null);

  const handleSave = () => {
    if (!sigCanvas.current.isEmpty()) {
      const data = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setImageURL(data);
      if (onSave) onSave(data);
    }
  };

  const handleClear = () => {
    sigCanvas.current.clear();
    setImageURL(null);
  };

  return (
    <div>
      
      <SignatureCanvas
        penColor="black"
        ref={sigCanvas}
        canvasProps={{
          width: 450,
          height: 150,
          className: "signature-canvas", 
        }}
      />
      <div className="sign">
        {/* <button onClick={handleSave}>Save </button> */}
        <button className="btn-sign" onClick={handleClear}>Clear</button>
      </div>

      {imageURL && (
        <div>
          <h3>Preview:</h3>
          <img src={imageURL} alt="Signature Preview" />
        </div>
      )}
    </div>
  );
};

export default SignaturePad;
