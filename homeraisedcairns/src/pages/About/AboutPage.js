import React from 'react';

import AboutHomeRaised from './AboutHomeRaised';
import AboutDiet from './AboutDiet';
import { Nav, Col, Row, Tab} from 'react-bootstrap';
import CairnCare from './CairnCare';
import CairnMaintenance from './CairnMaintenance';

const About = () => {
      return (
        <div className="AboutContainer">
          
          <div className="PageContainer">
<br />
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    
    <Col sm={3}>
    <div className="tabsnavi">
    
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> About </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Diet </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Cairn Maintenance </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Cairn Care</Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
        </div>
    </Col>
   
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <AboutHomeRaised />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <AboutDiet />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <CairnMaintenance />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <CairnCare />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>



</div>


</div>
    

      ); 
    
  }

  export default About;
  