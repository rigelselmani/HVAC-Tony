import { useState } from "react"
import { send } from "emailjs-com"

import "./Schedule.css"

export default function Schedule (){

    
    const [yesText, yesSetText]=useState("");
    const [searching,setSearching]=useState("");
    const [service, setService]=useState("");
    const [text,setText]=useState("");
    const [fullName, setFullName]=useState("");
    const [number, setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [region,setRegion]=useState("");
    const [postalCode,setPostalCode]=useState("");
    const [hour,setHour]=useState("");

    console.log("1:",yesText, "2:",searching, "3:",service, "4:",text , "5:",fullName, "6:",number, "7:",email, "8:",address, "9:",city, "10:",region, "11:",postalCode, "12:",hour)

    function handleSubmit(e){
       e.preventDefault()
       send(
        "service_gb3qix7",
        "template_5vl4eys",
        {yesText, searching, service, text , fullName, number, email, address, city, region, postalCode, hour},
        "cg_p1GRyMNmDPq4tH"
      ).then((response)=> {
        console.log("Message sent successfully", response.status,response.text)
      })
      .catch((err) =>{
        console.log("Failed", err)
      })
       yesSetText("");
       setSearching("");
       setService("");
       setText("");
       setFullName("");
       setNumber("");
       setEmail("");
       setAddress("");
       setCity("");
       setRegion("");
       setPostalCode("");
       setHour("");
    }
        
        return (
        <div className="schedule">
            <h1 className="schedule-h1">CONTACT TONY HVAC</h1>
            <a className="schedule-h3" href="tel:7038706927">703-737-3117</a>
            <p className="schedule-p">Professional HVAC, based in Ashburn VA.</p>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div className="wrapper-schedule">
                    <label htmlFor="yes_no_radio">Have you used Pure Carpet services before?</label>
                    <input type="radio" value="yes" name="yes_no" onChange={e=>yesSetText(e.target.value)}  />Yes
                    <input type="radio" value="no" name="yes_no" onChange={e=>yesSetText(e.target.value)}  />No
                </div>
                <br/>
                <div className="wrapper-schedule">
                    <label htmlFor="service">Service needed:</label>
                    <input  onChange={(e)=>setSearching(e.target.value)} type="radio" value="consultation" name="service"  />Consultation
                    <input  onChange={(e)=>setSearching(e.target.value)} type="radio" value="cleaning" name="service"  />Cleaning
                </div>
                <br/>
                <div className="wrapper-schedule">
                    <label htmlFor="type-service">Type of establishment:</label>
                    <input  onChange={(e)=>setService(e.target.value)} type="radio" value="residential" name="type-service" />Residential
                    <input  onChange={(e)=>setService(e.target.value)} type="radio" value="comercial" name="type-service"  />Commercial
                </div>
                <br/>
                <div className="wrapper-schedule">
                    <label htmlFor="text-message">Can we text you?</label>
                    <input onChange={(e)=>setText(e.target.value)} type="radio" value="yes" name="text-message" />yes
                    <input onChange={(e)=>setText(e.target.value)} type="radio" value="no" name="text-message" />no
                </div>
                <br/>
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
                <div className="wrapper-schedule">
                     <label htmlFor="appt">Time to Avalable:</label>

                     <input onChange={e=>{setHour(e.target.value)}} value={hour} type="time" id="appt" name="appt"min="08:00" max="17:00" required />
                     <small>Office hours are 8am to 6pm</small>
                </div>
                <button className="btn">Submit</button>
            </form>
            
        </div>
    )
}