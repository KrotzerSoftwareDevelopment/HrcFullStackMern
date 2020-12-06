import Axios from "axios";
import Cookie from "js-cookie";
import { DEPOSIT_ADD_ITEM, DEPOSIT_REMOVE_ITEM, DEPOSIT_SAVE_SHIPPING, DEPOSIT_SAVE_PAYMENT } from "../constants/depositConstants";

const addToDeposit = (puppyId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/puppies/" + puppyId);
    dispatch({
        type: DEPOSIT_ADD_ITEM, payload:{
            puppy: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stats: data.stats
        }});
    const { deposit: { depositItems } } = getState();
    Cookie.set("depositItems", JSON.stringify(depositItems));

  } catch (error) {

  }
}
const removeFromDeposit = (puppyId) => (dispatch, getState) => {
  dispatch({ type: DEPOSIT_REMOVE_ITEM, payload: puppyId });

  const { deposit: { depositItems } } = getState();
  Cookie.set("depositItems", JSON.stringify(depositItems));
}
const saveShipping = (data) => (dispatch) => {
  dispatch({ type: DEPOSIT_SAVE_SHIPPING, payload: data });
}
const savePayment = (data) => (dispatch) => {
  dispatch({ type: DEPOSIT_SAVE_PAYMENT, payload: data });
}
export { addToDeposit, removeFromDeposit, saveShipping, savePayment }
