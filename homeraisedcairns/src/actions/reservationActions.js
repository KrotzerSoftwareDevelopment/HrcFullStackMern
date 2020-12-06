import { RESERVATION_LIST_REQUEST, RESERVATION_LIST_SUCCESS, RESERVATION_LIST_FAIL } from '../constants/reservationConstants';
import axios from 'axios';

const listReservations = () => async (dispatch) => {
try {
    dispatch({ type: RESERVATION_LIST_REQUEST });
    const { data } = await axios.get('/api/reservations');
    dispatch({ type: RESERVATION_LIST_SUCCESS, payload: data});

}
catch (error) {

    dispatch({ type: RESERVATION_LIST_FAIL, payload: error.message });
    }
}

export { listReservations };