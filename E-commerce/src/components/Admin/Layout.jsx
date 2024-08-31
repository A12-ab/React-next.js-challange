import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({children}) =>{

    const [size, setSize] = useState(280);
    const [mobileSize, setMobileSize] = useState(0);
    const [accountmenu, setAccountmenu] = useState(false);
    const location = useLocation();
    const menu = [
        {
            label: 'Dashboard',
            icon: <i className="ri-dashboard-2-line mr-2"></i> ,
            link: '/admin/dashboard'
        },
        {
            label: 'Customers',
            icon: <i className="ri-user-line mr-2"></i> ,
            link: '/admin/customers'
        },
        {
            label: 'Products',
            icon: <i className="ri-shopping-cart-line mr-2"></i> ,
            link: '/admin/products'
        },
        {
            label: 'Orders',
            icon: <i className="ri-shape-line mr-2"></i>,
            link: '/admin/orders'

        },
        {
            label: 'Payments',
            icon: <i className="ri-refund-2-line mr-2"></i>,
            link: '/admin/payments'

        },
        {
            label: 'Settings',
            icon: <i className="ri-settings-3-line mr-2"></i>,
            link: '/admin/settings'

        }
        
    ]
    return(
        <>
           
           <div className="md:block hidden">
            <aside className=" bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden" style={{
                width: size,
                transition: '0.3s'
            }}>
                <div className="flex flex-col">
                    {
                        menu.map((item, index)=>(
                            <Link key={index} to={item.link} 
                              className="px-4 py-2 text-gray-50 text-[18px] hover:bg-rose-600 hover:text-white"
                              style={{
                                background: (location.pathname === item.link ? '#E11D48' : 'transparent')
                              }}
                            >
                                 {item.icon}
                                 {item.label}
                           </Link>
                        ))
                    }
                    <button className="px-4 py-2 text-gray-50 text-left text-[18px] hover:bg-rose-600 hover:text-white">
                       <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                    </button>
                    
                </div>
            </aside>
            <section className="bg-gray-100 h-screen" style={{
                marginLeft: size,
                transition: '0.3s'
            }}>
                <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                    <div className="flex gap-4 items-center">
                        <button onClick={()=>setSize(size===280 ? 0:280)} className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8">
                            <i className="ri-menu-2-line text-xl"></i>
                        </button>
                        <h1 className="text-md font-semibold">Nizam furniture doors & interior</h1>
                    </div>

                    <div>
                        <button className="relative">
                            <img src="/images/my_photo.jpg" className="w-10 h-10 rounded-full" onClick={()=>setAccountmenu(!accountmenu)}/>
                            {
                                accountmenu &&
                                <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                                <div>
                                    <h1 className="text-lg font-semibold">Abid saharia</h1>
                                    <p>example@gmail.com</p>
                                    <div className="h-px bg-gray-200 my-4">
                                        <button>
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout

                                        </button>
                                    </div>
                                </div>
                            </div>
                            }
                            
                        </button>
                        
                    </div>
                </nav>
                {children}
            </section>
           </div>

           <div className="md:hidden block">
            <aside className=" bg-indigo-600 fixed top-0 left-0 z-50 h-full overflow-hidden" style={{
                width: mobileSize,
                transition: '0.3s'
            }}>
                <div className="flex flex-col">
                    <button className="text-left mx-4 mt-4"  onClick={()=>setMobileSize(mobileSize===0 ? 280:0)}>
                        <i className="ri-menu-2-line text-white text-xl"></i>
                    </button>
                    {
                        menu.map((item, index)=>(
                            <Link key={index} to={item.link} 
                              className="px-4 py-2 text-gray-50 text-[18px] hover:bg-rose-600 hover:text-white"
                              style={{
                                background: (location.pathname === item.link ? '#E11D48' : 'transparent')
                              }}
                            >
                                 {item.icon}
                                 {item.label}
                           </Link>
                        ))
                    }
                    
                </div>
            </aside>
            <section className="bg-gray-100 h-screen">
                <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                    <div className="flex gap-4 items-center">
                        <button onClick={()=>setMobileSize(mobileSize===0 ? 280:0)} className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8">
                            <i className="ri-menu-2-line text-xl"></i>
                        </button>
                        <h1 className="text-md font-semibold">Shopcode</h1>
                    </div>

                    <div>
                        <button className="relative">
                            <img src="/images/my_photo.jpg" className="w-10 h-10 rounded-full" onClick={()=>setAccountmenu(!accountmenu)}/>
                            {
                                accountmenu &&
                                <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                                <div>
                                    <h1 className="text-lg font-semibold">Abid saharia</h1>
                                    <p>example@gmail.com</p>
                                    <div className="h-px bg-gray-200 my-4">
                                        <button>
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout

                                        </button>
                                    </div>
                                </div>
                            </div>
                            }
                            
                        </button>
                        
                    </div>
                </nav>
                {children}
            </section>
           </div>
        </>
        
    )
}
export default Layout;