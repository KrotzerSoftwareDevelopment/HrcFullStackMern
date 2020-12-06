import React, { useEffect } from 'react';
import { addToDeposit, removeFromDeposit } from '../actions/depositActions';
import { useDispatch, useSelector } from 'react-redux';
const DepositPage = (props) => {

  const deposit = useSelector(state => state.deposit);

  const { depositPuppies } = deposit;

  const puppyId = props.match.params.id;

  const dispatch = useDispatch();
  const removeFromDepositHandler = (puppyId) => {
    dispatch(removeFromDeposit(puppyId));
  }
  useEffect(() => {
    if (puppyId) {
      dispatch(addToDeposit(puppyId));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/SigninPage?redirect=shipping");
  }

  return <div className="PageContainer" >
    <div >
      <ul >
        <li>
          <h3>
            Deposit 
          </h3>
          <div>
            Price 
          </div>
        </li>
      
      </ul>

    </div>
    <div className="deposit-action">
     
      <button onClick={checkoutHandler} >
        Proceed to Checkout
      </button>

    </div>

  </div>
}

export default DepositPage;