import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebaseAppConfig from "../utils/firebase-config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);
const Layout = ({children})=>{

    const [open, setOpen] = useState(false);
    const [accountMenu, setAccountMenu] = useState(false);
    const [session, setSession] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setSession(user)

            }else{
                setSession(false)

            }
        })
    },[])

    const menus = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Products',
            href: '/products'
        },
        {
            label: 'Category',
            href: '/category'
        },     
        {
            label: 'Contact us',
            href: '/contact-us'
        }
    ]

    if(session===null)

    return(
        <div className="bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center">
            <span className="relative flex h-6 w-6">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
            </span>
        </div>
    )

    
    return(
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white z-50">
                <div className="w-10/12 mx-auto flex items-center justify-between">
                    <img 
                      src="/images/logo.jpg"
                      className="w-[100px]"

                    />

                    <button className="md:hidden" onClick={()=>setOpen(!open)}>
                          <i className="ri-menu-2-line text-3xl"></i>
                    </button>

                    <ul className="md:flex gap-6 items-center hidden">
                        {
                            menus.map((item, index)=>(
                                <li key={index}>
                                    <Link 
                                       to={item.href}
                                       className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                                    >{item.label}</Link>
                                </li>

                            ))
                        }

                        {
                            !session && 
                            <>
                               <Link
                                  to="/login"
                                  className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                               >Login</Link>

                               <Link
                                  to="/signup"
                                  className="bg-blue-600 py-3 px-12 text-md rounded font-semibold block text-center hover:bg-rose-500 hover:text-white"
                               >Register</Link>
                            
                            </>
                        }

                        {
                            session &&
                            <button className="relative" onClick={()=>setAccountMenu(!accountMenu)}>
                                <img src={session.photoURL ? session.photoURL : "/images/my_photo.jpg"} className="w-10 h-10 rounded-full"/>
                                {
                                    accountMenu && 
                                    <div className=" flex flex-col items-start animate__animated animate__pulse w-[150px] py-3 bg-white  absolute top-12 right-0 shadow-xl">
                                        <Link to="/profile" className="w-full text-left px-3 py-2 hover:bg-gray-200">
                                             <i className="ri-user-line mr-2"></i>
                                             My profile
                                        </Link>

                                        <Link to="/cart" className="w-full text-left px-3 py-2 hover:bg-gray-200">
                                            <i className="ri-shopping-cart-line mr-2"></i>
                                             Cart
                                        </Link>

                                        <Link to="#" className="w-full text-left px-3 py-2 hover:bg-gray-200" onClick={()=>signOut(auth)}>
                                            <i className="ri-logout-circle-r-line mr-2"></i> 
                                             Logout
                                        </Link>

                                    </div>
                                }
                                
                            </button>
                        }
                        
                    </ul>

                    
                </div>
            </nav>

             <div>{children}</div>

            <footer className="bg-[#a16207] py-16">
                <div className="w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
                        <p className="text-gray-100 mb-6">Lorem ipsum dolor sit amet vero est nesciunt, sint soluta amet dignissimos laboriosam explicabo optio saepe nisi quas eum suscipit aspernatur quam eos esse beatae quia.</p>
                        <img src="/images/logo.jpg"
                             className="w-[100px]"
                        />
                        
                    </div>

                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-4 text-slate-300">
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li><Link to="/login">login</Link></li>
                            <li><Link to="/signup">signup</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-4 text-slate-300">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Contact us</h1>
                        <form className="space-y-5">
                            <input 
                                 required
                                 type="text"
                                 name="fullname"
                                 className="bg-white w-full rounded p-3"
                                 placeholder="Your name" 
                            />

                            <input 
                                  required
                                  type="email" 
                                  name="email"
                                  className="bg-white w-full rounded p-3"
                                  placeholder="Enter your email"
                            
                            />

                            <textarea
                                   required
                                   name="message"
                                   className="bg-white w-full rounded p-3"
                                   placeholder="Message"
                                   rows={3}
                            />

                            <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>



                <aside className="md:hidden bg-slate-900 shadow-lg fixed top-0 left-0 h-full z-50 overflow-hidden"
                       style={{
                        width: (open ? 300:0),
                        transition: '0.3s'
                       }}
                >

                    <div className="flex flex-col p-8 gap-6 ">
                        {
                            session &&
                            <button className="relative" onClick={()=>setAccountMenu(!accountMenu)}>
                                <div className="flex items-center gap-2">
                                    <img src={session.photoURL ? session.photoURL : "/images/my_photo.jpg"} className="w-10 h-10 rounded-full"/>
                                    <div>
                                        <p className="text-white capitalize text-left">{session.displayName}</p>
                                        <p className="text-white">{session.email}</p>
                                    </div>
                                    
                                </div>
                                
                                {
                                    accountMenu && 
                                    <div className=" flex flex-col items-start animate__animated animate__pulse w-[150px] py-3 bg-white  absolute top-12 right-0 shadow-xl">
                                        <Link to="/profile" className="w-full text-left px-3 py-2 hover:bg-gray-200">
                                             <i className="ri-user-line mr-2"></i>
                                             My profile
                                        </Link>

                                        <Link to="/cart" className="w-full text-left px-3 py-2 hover:bg-gray-200">
                                            <i className="ri-shopping-cart-line mr-2"></i>
                                             Cart
                                        </Link>

                                        <Link to="#" className="w-full text-left px-3 py-2 hover:bg-gray-200" onClick={()=>signOut(auth)}>
                                            <i className="ri-logout-circle-r-line mr-2"></i> 
                                             Logout
                                        </Link>

                                    </div>
                                }
                                
                            </button>
                        }

                        {
                            menus.map((item,index)=>(
                                <Link to={item.href} key={index} className="text-white">
                                     {item.label}
                                </Link>
                            ))
                        }
                    </div>

                </aside>
            

            
        </div>
        
    )
}
export default Layout;