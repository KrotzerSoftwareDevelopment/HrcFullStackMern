import {RESERVATION_LIST_REQUEST, RESERVATION_LIST_SUCCESS, RESERVATION_LIST_FAIL} from "../constants/reservationConstants";
const reservationsListReducer = (state = { reservations: [] }, action) => {

    switch (action.type) {
        case RESERVATION_LIST_REQUEST:
            return { loading: true};
        case RESERVATION_LIST_SUCCESS:
            return { loading: false, reservations: action.payload };
        case RESERVATION_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
    }
    
export { reservationsListReducer }