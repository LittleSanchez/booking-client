import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'

function Layout({children}) {
    return (
        <>
            <Header/>

            {children}
        </>
    );
}


export default Layout;