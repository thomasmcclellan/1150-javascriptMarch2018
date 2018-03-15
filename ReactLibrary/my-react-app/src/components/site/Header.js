import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar className='header'>
          <NavbarBrand href='/'>React Library</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='https://github.com/thomasmcclellan/1150-javascriptMarch2018'>Github</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;