import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
    
    return (
        <div>
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/cards">Cards</NavLink>
                        <NavLink to="/decks">Decks</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;