import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavagationBar() {
    
    return (
        <div style={{
            display: 'block'
          }}>
            <Navbar color="dark" light expand="md">
                <Nav className="mx-auto" navbar>
                    <NavItem className="p-3">
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem className="p-3">
                        <NavLink to="/cards">Cards</NavLink>
                    </NavItem>
                    <NavItem className="p-3">
                        <NavLink to="/decks">Decks</NavLink>
                    </NavItem>
                    <NavItem className="p-3">
                        <NavLink to="/create">Create a Deck</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavagationBar;