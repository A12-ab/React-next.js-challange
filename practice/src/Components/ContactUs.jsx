import Nav from "./Nav";
import Footer from "./Footer";
import Swal from 'sweetalert2';
import { useState } from "react";
const Contact = ()=>{
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage ] = useState("");

    const contactUs = (e)=>{
        e.preventDefault();
        console.log(fullname, email, message);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Thank You!'
        })
    }
    return(
        <div>
            <Nav/>
             <div style={{
                display: 'flex',
                padding: 64,
                gap: 50
             }}>
                <img 
                   src="./images/contact-us.svg"
                   width="50%"
                />
                <div style={{
                    width: '50%',
                }}>
                    <form onSubmit={contactUs} style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 24
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500,
                            }} >Fullname</label>
                            <input
                             value={fullname}
                             onChange={(e)=> setFullname(e.target.value)}
                             type="text"
                             name="fullname"
                             required
                             placeholder="Enter your name"
                             style={{
                                border: '1px solid #ccc',
                                borderRadius: 4,
                                padding: 14
                            }}/>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500,
                            }} >Email</label>
                            <input
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             type="email"
                             name="Email"
                             required
                             placeholder="example@gmail.com"
                             style={{
                                border: '1px solid #ccc',
                                borderRadius: 4,
                                padding: 14
                            }}/>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500,
                            }} >Message</label>
                            <textarea
                             value={message}
                             onChange={(e)=>setMessage(e.target.value)}
                             type="text"
                             name="Message"
                             required
                             placeholder="Write your query"
                             rows={4}
                             style={{
                                border: '1px solid #ccc',
                                borderRadius: 4,
                                padding: 14
                            }}/>
                            
                        </div>

                        <button style={{
                            border: 'none',
                            width: 'fit-content',
                            padding: '14px 32px',
                            borderRadius: 4,
                            background: '#6C63FF',
                            color: 'white',
                            fontWeight: 500,
                            cursor: "pointer"
                        }}>SUBMIT</button>
                    </form>
                </div>
             </div>
            <Footer/>
        </div>
       
    )
}
export default Contact;