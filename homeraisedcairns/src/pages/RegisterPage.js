import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import '../App.css';
const RegisterPage = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return <div className="">
  <div className="">
    <form onSubmit={submitHandler} >
    <div className="homePageCardContainer">
          <h1 >Create Account</h1>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
       <br />
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
 <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
       <br />
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
       <br />
          <button type="submit" className="button primary">Register</button>
        <br />
          Already have an account?
          <br />
          <Link to={redirect === "/" ? "SigninPage" : "SigninPage?redirect=" + redirect} className="button secondary text-center" >Create your Home Raised Cairns account</Link>
      </div>
    </form>
  </div>
  </div>
}
export default RegisterPage;