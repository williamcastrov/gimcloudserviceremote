import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "./NavBar.css";
import swal from 'sweetalert';
import logonegro from "../../assets/img/logologistralnegro.jpg"
//import { PoweroffOutlined } from "@ant-design/icons";

//Firebase
import firebase from "../../server/firebase";
import { getAuth, signOut } from "firebase/auth";

function NavBar(props) {

    const Salir = () => {
        swal({
            title: "LOGISTRAL S.A.",
            text: "Oprima OK para salir de GIM Cloud!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                const auth = getAuth(firebase);
                signOut(auth).then(() => {
                    // Sign-out successful.
                    console.log("Sesión Cerrada")
                    window.location.reload();

                }).catch((error) => {
                    // An error happened.
                    console.log("Error Cerrando Sesión")
                });
            });
    }

    return (
        <div>
            <Navbar className="container-fluid" expand="lg" bg="#1F1410" variant="dark" >
                <Navbar.Brand className="gimcloud" href="/gimremote">GIM Cloud</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cumplimiento/cumplirordentecnico">Actividades OT</Nav.Link>
                        <Nav.Link href="/mantenimiento/inventarioequipo">Registrar Inventario</Nav.Link>
                        <NavDropdown title="Gestión" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">OT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Calificación</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Productividad</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Pendientes</NavDropdown.Item>
                        </NavDropdown>
                        <div className='logo'>
                            <img
                                width={200}
                                height={80}
                                src={logonegro}
                            />
                        </div>
                    </Nav>

                    <Button className="buttonsalir" onClick={Salir} >
                        Salir
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;