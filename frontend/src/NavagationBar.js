import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavagationBar() {
    
    return (
        <div style={{
            display: 'block', padding: 30
          }}>
            <Navbar color="light" light expand="md">
                <Nav className="mr-autp" navbar>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/cards">Cards</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/decks">Decks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/create">Create a Deck</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavagationBar;