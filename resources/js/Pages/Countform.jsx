import React, { useRef, useState, useEffect } from "react";

const Countform = (props) => {
    const FormhourRef = useRef(0);
    const FormminutesRef = useRef(0);
    const FormsecondsRef = useRef(0);


const[Formhour, setFormhour] = useState(0);
const[Formminutes, setFormminutes] = useState(0);
const[Formseconds, setFormseconds] = useState(0);

const setHour = () =>
{
    for (let i=0; i<24; i++)
    {
        const option = document.createElement('option');
        option.value=i;
        option.text=i;
        FormhourRef.current.appendChild(option);
        
    }
}

const setMinutes = () =>
{
    for (let i=0; i<60; i++)
    {
        const option = document.createElement('option');
        option.value=i;
        option.text=i;
        FormminutesRef.current.appendChild(option);
        
    }
}

const setSecond = () =>
{
    for (let i=0; i<60; i++)
    {
        const option = document.createElement('option');
        option.value=i;
        option.text=i;
        FormsecondsRef.current.appendChild(option);
        
    }
}

const selecthour = (e) =>{
    setFormhour(e.target.value);
}

const selectseconds = (e) =>{
    setFormseconds(e.target.value);
}

const selectminutes = (e) =>{
    setFormminutes(e.target.value);
}


const{
    countdownTime,
    setCountdownTime
}=props;

useEffect(() => {
    setHour();
    setMinutes();
    setSecond();
},[]);
console.log({setCountdownTime});

const resultTime=Number(((Formhour)*60*60))+Number(((Formminutes)*60))+Number(Formseconds)
console.log(resultTime)

return (
    <div>
    <p>時間を入力してください</p>
    <p>{resultTime}</p>
    <label>
        <select ref={FormhourRef} value={Formhour} onChange={selecthour}></select>時間
    </label>
        <label>
        <select ref={FormminutesRef} value={Formminutes} onChange={selectminutes}></select>分
    </label>
        <label>
        <select ref={FormsecondsRef} value={Formseconds} onChange={selectseconds}></select>秒
    </label>
    <button onClick={e =>setCountdownTime(resultTime)}>start</button>
   </div>

    )
}
export default Countform;