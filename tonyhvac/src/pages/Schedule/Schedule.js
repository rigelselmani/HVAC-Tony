import { useState } from "react"
import { send } from "emailjs-com"

import "./Schedule.css"

export default function Schedule (){

    const [fullName, setFullName]=useState("");
    const [number, setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [region,setRegion]=useState("");
    const [postalCode,setPostalCode]=useState("");

    function handleSubmit(e){
       e.preventDefault()
       console.log( "1:",fullName, "2:",number, "3:",email, "4:",address, "5:",city, "6:",region, "7:",postalCode)
       send(
        "service_qjoznwa",
        "template_5vl4eys",
        {fullName, number, email, address, city, region, postalCode},
        "cg_p1GRyMNmDPq4tH"
      ).then((response)=> {
        console.log("Message sent successfully", response.status,response.text)
      })
      .catch((err) =>{
        console.log("Failed", err)
      })
       setFullName("");
       setNumber("");
       setEmail("");
       setAddress("");
       setCity("");
       setRegion("");
       setPostalCode("");
    }
        
        return (
        <div className="schedule">
            <h1 className="schedule-h1">CONTACT TONY HVAC</h1>
            <a className="schedule-h3" href="tel:6178880467">617-888-0467</a>
            <p className="schedule-p">Professional HVAC, based in Quincy MA.</p>
            <hr></hr>
            <form onSubmit={handleSubmit}>
               
                <div className="wrapper-schedule">
                    <label htmlFor="fname">Full Name:</label>
                    <input onChange={(e)=> setFullName(e.target.value)}  value={fullName} required type="text" id="fname" name="fname" /><br/>
                    <label htmlFor="number">Number:</label>
                    <input onChange={(e)=> setNumber(e.target.value)} value={number} required type="number" id="number" name="number" /><br/>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} required type="email" id="email" name="email" /><br/>
                </div>
                <br/>
                <div className="wrapper-schedule">
                    <label htmlFor="street">Street Address</label>
                    <input onChange={e=>{setAddress(e.target.value)}} value={address} type="text" id="street" name="street" /><br/>
                    <label htmlFor="city">city</label>
                    <input onChange={e=>{setCity(e.target.value)}} value={city} type="text" id="city" name="city" /><br/>
                    <label htmlFor="state">State / Province / Region</label>
                    <input onChange={e=>{setRegion(e.target.value)}} value={region} type="text" id="State / Province / Region" name="State / Province / Region" /><br/>
                    <label htmlFor="postal code">Zip/postal-code</label>
                    <input onChange={e=>{setPostalCode(e.target.value)}} value={postalCode} type="text" id="postal-code" name="postal-code" /><br/>
                </div>
                <button className="btn">Submit</button>
            </form>
            
        </div>
    )
}