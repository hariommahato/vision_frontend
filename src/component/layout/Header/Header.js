import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useAlert } from "react-alert";
function Header() {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
      setKeyword("");
    } else {
      navigate(`/products`);
    }
  };
  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
  };
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className=" mx-16">
          EASYLINKECOMMERCE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", margin: "auto" }}
            navbarScroll
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0",
              }}
            >
              <Form className="d-flex" onSubmit={searchSubmitHandler}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  style={{
                    width: "30rem",
                  }}
                />
                <Button variant="outlined">
                  {" "}
                  <AiOutlineSearch />
                </Button>
              </Form>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
