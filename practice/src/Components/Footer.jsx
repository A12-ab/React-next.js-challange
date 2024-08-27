import { Link } from "react-router-dom";
const Footer = ()=>{
    return(
        <footer style={{
            padding: '60px 100px',
            background: '#03011c',
            display: 'flex',
            gap: '48px',
            
        }}>
            <div style={{width: '100%'}}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Codeschool</h2>
                <p style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown</p>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Social Links</h2>
                <ul style={{
                    padding:0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Facebook</a></li>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Instagram</a></li>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Twitter</a></li>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>WhatsApp</a></li>
                    <li><a href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Youtube</a></li>
                </ul>
                
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>usefull Links</h2>

                <ul style={{
                    padding:0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <li><Link to="/" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Home</Link></li>
                    <li><Link to="/teachers" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Teachers</Link></li>
                    <li><Link to="/holidays" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Holidays</Link></li>
                    <li><Link to="/contact-us" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Contact</Link></li>
                    <li><Link to="/contact" href="#" style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>Talk to us</Link></li>
                </ul>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Enquiry</h2>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <input
                      name="fullname"
                      placeholder="Fullname"
                      required
                      style={{
                        border: 'none',
                        padding: 12,
                        borderRadius: 4
                      }}
                    />
                    <input
                      name="email"
                      placeholder="email"
                      required
                      style={{
                        border: 'none',
                        padding: 12,
                        borderRadius: 4
                      }}
                    />
                    <textarea
                      name="message"
                      placeholder="message"
                      required
                      style={{
                        border: 'none',
                        padding: 12,
                        borderRadius: 4
                      }}
                    />

                    <button style={{
                        width: 'fit-content',
                        border: 'none',
                        color: 'white',
                        borderRadius: 4,
                        background: 'orange',
                        padding: '12px 24px'
                        
                    }}>Submit</button>
                </form>
                
            </div>
        </footer>
    )
}

export default Footer;