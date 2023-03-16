

import "./Contact.css";


export default function Contact(){
 
    return (
        <div>
             <form className="wrapper">
                    <input  required type="text" id="name" name="name" placeholder="Name" /><br/>
                    <input  required type="text" id="lname" name="lname" placeholder="Last Name" /><br/>
                    <input  required type="contact" id="number" name="number" placeholder="Phone" /><br/>
                    <input  required type="email" id="email" name="email" placeholder="Email"/><br/>
                    <input type="message" placeholder="Message"/><br/>
                    <button className="Contact-btn">Submit</button>
             </form>
                
        </div>
    )
}