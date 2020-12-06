import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { update } from '../actions/userActions';
// import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import '../App.css';
const ProfilePage = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    // dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  // const myOrderList = useSelector(state => state.myOrderList);
  // const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    // dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  return <div className="">
    <div className="homePageCardContainer">
      <div className="">
        <form onSubmit={submitHandler} >
          <div className="">
         
              <h1> Dashboard </h1>
        
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
             <label htmlFor="name">
               <br />
                Name
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
          <br />
              <label htmlFor="email">
                Email
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
           <br />
              <label htmlFor="password">Password</label>
              <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
           <br />
           <Row>
              <Col>
              <button type="submit" id="submitbutton" className="button primary">Update</button>
              </Col>
          <br />
       <Col>
              <button type="button" id="submitbutton" onClick={handleLogout} className="button secondary full-width">Logout</button>
              </Col>
              </Row>

          </div>
        </form>
      </div>
    </div>
  
  </div>
}

export default ProfilePage;

/*
  <div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {/* {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)} 
                </tbody>
                </table>
          }
        </div>

*/