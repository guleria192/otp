import { useEffect, useRef, useState } from "react";

function App() {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  useEffect(()=>{
    pin1Ref.current.focus()  
  },[])

  return (
    <div className="App">
      <input
        type="text"
        ref={pin1Ref}
        maxLength="1"
        onChange={(pin1) => {
          setPin1(pin1);
          if (pin1 !== "") pin2Ref.current.focus();
        }}
      />

      <input
        type="text"
        ref={pin2Ref}
        maxLength="1"
        onChange={(pin2) => {
          setPin2(pin2);
          if (pin2 !== "") pin3Ref.current.focus();
        }}
      />

      <input
        type="text"
        ref={pin3Ref}
        maxLength="1"
        onChange={(pin3) => {
          setPin3(pin3);
          if (pin3 !== "") pin4Ref.current.focus();
        }}
      />

      <input
        type="text"
        ref={pin4Ref}
        maxLength="1"
        onChange={(pin4) => {
          setPin4(pin4);
          if (pin4 !== "") pin5Ref.current.focus();
        }}
      />

      <input
        type="text"
        ref={pin5Ref}
        maxLength="1"
        onChange={(pin5) => {
          setPin5(pin5);
          if (pin5 !== "") pin6Ref.current.focus();
        }}
      />

      <input
        type="text"
        ref={pin6Ref}
        maxLength="1"
        onChange={(pin6) => {
          setPin6(pin6);
          // if (pin6 !== "") pin2Ref.current.focus();
        }}
      />
    </div>
  );
}

export default App;
