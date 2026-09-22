import React from "react";
import { Route, Link, Routes } from 'react-router-dom'
const Header = () => {
    return (<>
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
            <div className="navRight"><Link to="/Login">Login</Link></div>
        </nav>
    </>);
}
export default Header;