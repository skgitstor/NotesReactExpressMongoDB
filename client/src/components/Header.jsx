import React from "react";
import { Route, Link, Routes } from 'react-router-dom'
const Header = () => {
    return (<>
        <header>

            <nav>
                <div className="navLeft"><Link to="/">Notes</Link></div>
                <div className="navCenter">
                    <ul className="navlinks">
                        <li className="navlink homelink">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navlink noteslink">
                            <Link to="/Notes">Notes</Link>
                        </li>
                        <li className="navlink addnotelink">
                            <Link to="/StarNotes">StarNotes</Link>
                        </li>
                        <li className="navlink settingslink">
                            <Link to="/Settings">Settings</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="navRight"><Link to="/Profile">Profile</Link></div> */}
                <div className="navRight"><Link to="/authPage/login">Login</Link></div>
            </nav>
        </header>
    </>);
}
export default Header;