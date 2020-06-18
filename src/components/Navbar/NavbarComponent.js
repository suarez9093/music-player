import React, { useContext } from 'react';
import LoadMusicButton from '../Buttons/LoadMusicButton'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { AppContext } from '../../context';

function NavbarComponent() {
    const { navisOpen, toggleNavbar } = useContext(AppContext);



    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Musix</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={navisOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <LoadMusicButton />
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;