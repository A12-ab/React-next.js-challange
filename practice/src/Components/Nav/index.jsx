import { Link } from "react-router-dom";
import './nav.css';

const menus = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Teachers',
        href: '/teachers'
    },
    {
        label: 'Holiydays',
        href: '/holidays'
    },
    {
        label: 'Contact',
        href: '/contact-us'
    },
    {
        label: 'Talk to us',
        href: '/'
    }
]
const Nav = ()=>{
    return(
        <nav 
            className="sticky top-0 left-0 z-50"
            style={{
            background: 'white',
            display: 'flex',
            justifyContent: "space-between",
            padding: '15px 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'
        }}>
            <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: '8px'
            
             }}>
                <img 
                  src="./images/logo.png"
                  width= "60"
                />
                <h1 className="text-2xl font-medium">code school</h1>

            </div>

            <ul style={{
                display: 'flex',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                
            }}>
                
                
                {
                    menus.map((menu,index)=>{
                        return (
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '16px 32px'
                             }} key={index}>
                                 <Link to={menu.href} style={{
                                     textDecoration: 'none',
                                     color: '#323232',
                                     fontSize: 19
                                 }} >{menu.label}</Link>
                             </li>
                        )
                    })
                }
                
            </ul>
            
        </nav>

    )
}
export default Nav;