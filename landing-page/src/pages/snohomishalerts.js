import React from "react"
import styled from "styled-components"
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "gatsby";
import SnohomishData from "../components/Robin Datascrape Files/snohomishAlerts"

const Container = styled.div`
  position: relative;
  z-index: 20;
  // padding: 1.25rem 0;
  padding: 0.5rem 0;
  padding-bottom: 0;
  background: #ffffff;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1.25rem;
  margin-top: 0;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 48pt;
  padding-left: 150px;
  letter-spacing: 10px;
  @media (max-width: 768px) {
    font-size: 28pt;
  }
`;

const Header2 = styled.h2`
  padding-top: 1rem;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;

let dict = SnohomishData.dict;

class SnohomishAlerts extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
       return <div>
          <Container>
            <Header><Link to="/" style={{textDecoration: "none"}} className="link">RARET</Link></Header>
              <Content>
                <Line/>
                <Navbar style={{minHeight: '60px'}} bg="light" variant="light">
                  <Nav className="tabs">
                    <Nav.Link><Link to="/" className="link" style={{textDecoration: "none"}}>Home</Link></Nav.Link>
                    <Nav.Link >Resources</Nav.Link>
                    <Nav.Link style={{color: 'black'}}>Road Conditions</Nav.Link>
                  </Nav>
                </Navbar>
                <Header2>Snohomish County Road Conditions</Header2>
              </Content>
            </Container>
              </div>
       }
 }

 export default SnohomishAlerts;