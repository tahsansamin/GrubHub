import "./App.css";
import cartSVG from "./undraw_empty_cart_co35.svg";
import { Button, Card } from "react-bootstrap";
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
import   CartContext  from "./contexts/cartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const {Orders} = useContext(CartContext);
  


  let Navigate = useNavigate();
  return (
    <div className="App">
      
      <Navbar variant="light" className="custom-nav">
        <Container width="100%" height="40px">
          <Navbar.Brand href="/">
            <h2 className="logo-Style">GrubHub</h2>
          </Navbar.Brand>
          <Nav className="href-Links col-md-4">
            <Nav.Link  href="/values">Values</Nav.Link>
            <Nav.Link href="/contacts">Contact</Nav.Link>
          </Nav>
          <Navbar.Brand href="/checkout">
            <img src={cartSVG} className="Cart" alt="Your cart" />
          </Navbar.Brand>
          
            <h4>{Orders}</h4>
          
        </Container>
      </Navbar>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            alt="First slide"
            height="500px"
          />
          <Carousel.Caption>
            <h3>Cobb Salad</h3>
            <p className="carOptions">Our world renown salad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://imghippy.hippygourmet.com/what-is-organic-mct-oil-used-for-.jpg"
            alt="Second slide"
            height="500px"
          />

          <Carousel.Caption>
            <h3>Mixed fruits</h3>
            <p className="carOptions">Satisfy your cravings in a healthy way</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://restaurantden.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg"
            alt="Third slide"
            height="500px"
          />

          <Carousel.Caption>
            <h3>Fish steak</h3>
            <p className="carOptions">Full of healthy Omega three</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="jumbotron jumbotron-fluid bg-warning">
        <div className="container">
          <div className="row">
            <div className="col md">
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/photos/vegetarian-samosas-with-chutney-picture-id181073533?b=1&k=20&m=181073533&s=170667a&w=0&h=c0_b_crGDe3QcGcSVKHcEe8R0cp5eqfYTC8Y_ZuP9jQ="
                />
                <Card.Body>
                  <Card.Title>Appetisers</Card.Title>
                  <Card.Text>
                    Bewilder your taste buds with our fresh,home made snacks.
                  </Card.Text>
                  <Button variant="primary" onClick={() => Navigate("/appetisers")}>Order</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col md">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/photos/grilled-chicken-legs-with-chips-and-vegetables-picture-id824623884?b=1&k=20&m=824623884&s=170667a&w=0&h=5BAmNysuPQKX40JSmKN6-GrfMC3FHZLeXkBVXk9UbVg="
                />
                <Card.Body>
                  <Card.Title>Main course</Card.Title>
                  <Card.Text>
                    Stuff your belly with a hearty meal with a side of your
                    choice
                  </Card.Text>
                  <Button variant="primary" onClick={() => Navigate("/maincourse")}>Order</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col md">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/photos/strawberry-ice-cream-with-fresh-strawberries-picture-id1313871755?b=1&k=20&m=1313871755&s=170667a&w=0&h=dg2P5aDxBUfB_zrNSzLOcMHJxANbJ3ol12gg6DjHHOc="
                />
                <Card.Body>
                  <Card.Title>Desert</Card.Title>
                  <Card.Text>
                    Extinguish the demon in your stomach with our frothy deserts
                  </Card.Text>
                  <Button variant="primary" onClick={() => Navigate("/desert")}>Order</Button>
                </Card.Body>
              </Card>
            </div>

          </div>
        </div>
        <h6>&copy; Tahsan Samin 2022</h6>
      </div>
      
    
      
    </div>
  );
}

export default App;
