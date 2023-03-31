import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAlert } from "react-alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
function SecondHeader() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        height: "4rem",
        backgroundColor: "#19bc9b",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ color: "white" }}>
          <Nav className="me-auto mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/bestselling">Bestselling</Nav.Link>
            <Nav.Link href="/bestselling">OurServices</Nav.Link>
            <Nav.Link href="/bestselling">Blogs</Nav.Link>
          </Nav>

          {user ? (
            <>
              <Nav>
                {user?.isseller ? (
                  <>
                    <Nav.Link as={Link} to="/user/dashboard">
                      SellerDashboard
                    </Nav.Link>
                  </>
                ) : (
                  ""
                )}
                <Nav.Link as={Link} to="/orders">
                  MyOrders
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  <AiOutlineShoppingCart size={25} />
                </Nav.Link>
                <Nav.Link as={Link} to="/account">
                  <AiOutlineUser size={25} />
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout());
                    alert.success("Logout Successfully");
                  }}
                >
                  <AiOutlineLogout size={25} />
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Button
                className="mx-3"
                style={{ backgroundColor: "black" }}
                onClick={() => {
                  navigate("/sellerlogin");
                }}
              >
                Become a seller
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  login
                  <AiOutlineLogin size={25} />
                </div>
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SecondHeader;
