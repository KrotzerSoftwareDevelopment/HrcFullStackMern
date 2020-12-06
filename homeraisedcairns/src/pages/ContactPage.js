import React from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Thank You for your time and interest! \n Home Raised Cairns sent your message successfully."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({firstName: "", lastName: "", phone: "", email: "", message: ""})
  }

render(){
  return (
    <div className="ContactContainer">
    <div className="PageContainer">
      <h1> Contact </h1>
        <Row>
        <div className="contactHeader">
 <Col>
    Email: <a href="mailto:homeraisedcustomercare@gmail.com"> homeraisedcustomercare@gmail.com </a>
    </Col>
    

    <Col>

    Phone:  <a href="tel:5418199410"> (541) 819 9410 </a>

    </Col>
  
    </div>
    <br />
   
    </Row>
    
    <br />
 
  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
    
            
              <Row>
                <Col>
              <input type="text" className="form-control" placeholder="First Name" id="firstName" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
              </Col>
              <br />
              <Col>
              <input type="text" className="form-control" placeholder="Last Name" id="lastName" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
              </Col>
              </Row>
              <br />
              
              
              <input type="text" className="form-control" placeholder="Phone Number" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
          
              <br />
              
              <div className="email">
              <input type="email" className="form-control" id="email" placeholder="Email"  aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              
          </div>
         
          <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" rows="10" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
        <div className="Mobile">
          <div class="g-recaptcha" data-sitekey="6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"></div>
          </div>
          <br />
      <button type="submit" id="submitbutton" value="Submit"> Submit </button>
     
        </form>
<br />
        </div>
        </div>

        
      );
  }
  onFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  onLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }
  onPhoneChange(event) {
    this.setState({phone: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

export default Contact;