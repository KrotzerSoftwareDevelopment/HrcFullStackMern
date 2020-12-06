import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

const SigninPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
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
    dispatch(signin(email, password));

  }
  return <div className="homePageCardContainer">
    <div className="">
    <form onSubmit={submitHandler} >
          <h1>Sign-In</h1>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
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
          <button type="submit" className="button primary">Signin</button>
   <br />
          New to Home Raised Cairns?
       
  <br />
          <Link to={redirect === "/" ? "RegisterPage" : "RegisterPage?redirect=" + redirect} className="button secondary text-center" >Create your Home Raised Cairns account</Link>
    </form>

</div>
</div>
}
export default SigninPage;