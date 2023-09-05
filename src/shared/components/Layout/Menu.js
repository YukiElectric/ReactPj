import React from "react";
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <>
            <nav>
                <div id="menu" className="collapse navbar-collapse">
                    <ul>
                        <li className="menu-item"><Link to="/Category">iPhone</Link></li>
                        <li className="menu-item"><Link to="/Category">Samsung</Link></li>
                        <li className="menu-item"><Link to="/Category">HTC</Link></li>
                        <li className="menu-item"><Link to="/Category">Nokia</Link></li>
                        <li className="menu-item"><Link to="/Category">Sony</Link></li>
                        <li className="menu-item"><Link to="/Category">Blackberry</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Menu;