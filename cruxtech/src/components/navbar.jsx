import { Link } from 'react-router-dom'
export function Navbar(){
    return(
        <div className="navbar">
            <div className="orgname">
                <h1>CrUxTeCh Services</h1>
            </div>
            <div className="nav_btns">
                <ul> 
                    <Link><li>Home</li></Link>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}