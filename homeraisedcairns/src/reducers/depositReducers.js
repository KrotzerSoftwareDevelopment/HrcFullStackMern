import { DEPOSIT_ADD_ITEM } from '../constants/depositConstants';
const depositReducer = (state = { depositItems: [] }, action) => {
    switch(action.type){
        case DEPOSIT_ADD_ITEM:
            const item = action.payload;
            const puppy = state.depositItems.find(x => x.puppy === item.puppy);
            if (puppy) {
                return {
                    depositItems:
                    state.depositItems.map(x => x.puppy === puppy.puppy ? item: x)
                };
            }

            return { depositItems: [...state.depositItems, item ] };
            default:
                return state
        }
}
export { depositReducer };