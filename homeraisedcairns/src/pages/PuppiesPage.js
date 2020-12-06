import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { listPuppies } from '../actions/puppyActions';
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import { If, Then, ElseIf} from 'react-if-elseif-else-render';
import ReservationsPage from './ReservationsPage';
import Spinner from 'react-bootstrap/Spinner'

const PuppiesPage = (props) => {
  
    const puppyList = useSelector(state => state.puppyList);
    const { puppies, loading, error } = puppyList;
    let puppyAvailable = 0;
    // let puppycounted = puppyAvailable + 1;
    // const puppySubtracted = puppyAvailable - 1;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPuppies());
        return () => {
        };
    }, [])
    return loading? <div><Spinner animation="border" variant="success" />loading...</div>:
    error? <div>{error}</div>:
    <div className="PageContainer">
{/* <div className="PageBody"> */}
<h1>Puppies</h1>
{/* <div>Puppies Available =  </div>
  {puppyAvailable}
  <br />
  ---------
  <br/>
  <div> {puppies.length} </div>  */}
    <div className=""> 
    <div className=""> 
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <div className="PuppiesNavi">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> Available for Adoption </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Previously Adopted </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <If condition={puppies.filter(puppies => puppies.rank === "Available" ).map((puppy, puppycounted ) => 
          <li condition={puppyAvailable++}>
            {puppy}
          </li>
        )} >
<Then>
  <div><br /></div>
</Then>
    </If>
      <If condition={puppyAvailable > 0}>
        <Then>
          <div>
        {puppies.filter(puppies => puppies.rank === 'Available' ).map(puppy => 
            <div >
            <Link to={'/puppy/' + puppy._id}>
      <div id="PuppyHomeCard"> 
              <Row>
                  <Col>
                  
            <img src={puppy.icon} id="puppyIcon"/>
      
                  </Col>
                  <Col>
               <div id="">
                   Name: {puppy.name}
               </div>
                <div className="puppy-gender">{puppy.gender}</div>
                <div className="puppy-price"> ${puppy.price}</div>
                </Col>
                </Row>
        </div>
        </Link>
        </div>
        )
}
 </div>
</Then>
<ElseIf condition ={puppyAvailable <= 0  }> 
<ReservationsPage />
      <div>
  </div></ElseIf>
</If>
        </Tab.Pane>

        <Tab.Pane eventKey="second">
        
        {puppies.filter(puppies => puppies.rank === 'Adopted'  ).map(puppy => 
        <div puppySubtracted>
            <Link to={'/puppy/' + puppy._id}>
      <div id="PuppyHomeCard" > 
          
              <Row>
                  <Col>
                   <div id="puppyIcon">
            <img src={puppy.icon} className="icon"/>
            </div>
                  </Col>
                  <Col>
                  
               <div id="puppyiconInfo">
                   Name: {puppy.puppyName}
               </div>
                <div id="puppyiconInfo" > Gender: {puppy.gender}</div>
                <div id="puppyiconInfo"> Adoption price: ${puppy.price}</div>
                </Col>
                </Row>
           
        </div>
        </Link>
        
        </div>)
    
}

        </Tab.Pane>
        
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
   
   

   

   
    </div>
    </div>
  



    </div>
}
export default PuppiesPage;