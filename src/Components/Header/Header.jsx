import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
    
    <header className="header">
    <Container>
        <Row>
          <Col md={12}>
             
             <div className="header-container">
             <div className="logo col-md-4">

           <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbB3NTw6bUtZ0kySFp9qsEZAmKTd61m5psZcqQXFcGAa733aIKy-Ep2LsPV0LOu4Uej5H6G9ttPUoKrRu2FBGht01SoKgUfAg8w0vdJIsPRp.png?r=680" />
 
</div>

<div className="right-bar col-md-5">
<ul>
  <li>
    <Link>TODO APP</Link>
  </li>
</ul>
</div>
             </div>

          </Col>
        </Row>
      </Container>
    

    </header>
    
    </>
  )
}

export default Header