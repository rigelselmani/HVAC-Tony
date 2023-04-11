import { useState } from "react"
import { send } from "emailjs-com"

import "./Contact.css";


export default function Contact(){
 
    
    const [name, setName]=useState("");
    const [lastName, setLastName]=useState("");
    const [number, setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    function handleSubmit(e){
       e.preventDefault()
       console.log( "1:",name, "2:",lastName, "3",number, "3:",email, "4:",email,)
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
        <div>
             <form onSubmit={handleSubmit} className="wrapper">
                    <input onChange={(e)=> setName(e.target.value)}  value={name}  required type="text" id="name" name="name" placeholder="Name" /><br/>
                    <input onChange={(e)=> setLastName(e.target.value)} value={lastName} required type="text" id="lname" name="lname" placeholder="Last Name" /><br/>
                    <input onChange={(e)=> setNumber(e.target.value)} value={number} required type="contact" id="number" name="number" placeholder="Phone" /><br/>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} required type="email" id="email" name="email" placeholder="Email"/><br/>
                    <input onChange={(e)=> setMessage(e.target.value)} value={message} type="message" placeholder="Message"/><br/>
                    <button className="Contact-btn">Submit</button>
             </form>
                
        </div>
    )
}