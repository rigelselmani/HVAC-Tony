import { useState } from "react"
import { send } from "emailjs-com"

import "./Schedule.css"

export default function Schedule (){

    const [name, setName]=useState("");
    const [lastName, setLastName]=useState("");
    const [number, setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    function handleSubmit(e){
       e.preventDefault()
       console.log( "1:",name, "2:",lastName, "3",number, "3:",email, "4:",message)
       send(
        "service_qjoznwa",
        "template_5vl4eys",
        {name, lastName, number, email, message},
        "cg_p1GRyMNmDPq4tH"
      ).then((response)=> {
        console.log("Message sent successfully", response.status,response.text)
      })
      .catch((err) =>{
        console.log("Failed", err)
      })
       setName("");
       setLastName("")
       setNumber("");
       setEmail("");
       setMessage("");
    }
        
        return (
          <div className="schedule">
              <h1 className="schedule-h1">CONTACT GR Comfort</h1>
              <a className="schedule-h3" href="tel:6178880467">617-888-0467</a>
              <p className="schedule-p">Professional HVAC, based in Quincy MA.</p>
              <hr></hr>
                  <form onSubmit={handleSubmit}>
                      <div className="wrapper-schedule">
                          <input className="page-input" onChange={(e)=> setName(e.target.value)}  value={name} required type="text" id="name" name="name" placeholder="Name" /><br/>
                          <input className="page-input" onChange={(e)=> setLastName(e.target.value)}  value={lastName} required type="text" id="name" name="name" placeholder="Last Name" /><br/>
                          <input className="page-input" onChange={(e)=> setNumber(e.target.value)} value={number} required type="phone" id="number" name="number" placeholder="Number" /><br/>
                          <input className="page-input" onChange={(e)=> setEmail(e.target.value)} value={email} required type="email" id="email" name="email" placeholder="Email" /><br/>
                          <textarea className="page-input" id="message" onChange={(e)=>setMessage(e.target.value)} value={message} name="message" rows="4" placeholder="Message" />
                      </div>
                      <br/>
                      <button className="btn">Submit</button>
                  </form>
          </div>
    )
}