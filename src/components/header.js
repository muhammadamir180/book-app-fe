import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import PrivateRoutes from "../routes/PrivateRoutes";
import Users from "./users/Users";
import NewUser from "./users/NewUser";
import EditUser from "./users/EditUser";
import Books from "./books/Books";
import NewBook from "./books/NewBook";
import EditBook from "./books/EditBook";
import ShowBook from "./books/ShowBook";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { logout } from "../helper/Helpers";

function BootstrapNavbar() {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/users">Users</Nav.Link>
                  <Nav.Link href="/books">Books</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                  <Button
                    className="ml-4"
                    variant="outline-danger"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>
              {/* <Route exact path="/">
                  <Home />
                </Route> */}
              <PrivateRoutes exact path="/users">
                <Users />
              </PrivateRoutes>
              <PrivateRoutes path="/users/new">
                <NewUser />
              </PrivateRoutes>
              <PrivateRoutes path="/users/:id/edit">
                <EditUser />
              </PrivateRoutes>
              <PrivateRoutes exact path="/books">
                <Books />
              </PrivateRoutes>
              <PrivateRoutes path="/books/new">
                <NewBook />
              </PrivateRoutes>
              <PrivateRoutes path="/books/:id/edit">
                <EditBook />
              </PrivateRoutes>
              <PrivateRoutes path="/books/:id/show">
                <ShowBook />
              </PrivateRoutes>
              <PrivateRoutes path="/login">
                <Login />
              </PrivateRoutes>
              <PrivateRoutes path="/signup">
                <Signup />
              </PrivateRoutes>
              {/*<Route path="/contact-us">
                  <ContactUs />
                </Route> */}
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default BootstrapNavbar;
