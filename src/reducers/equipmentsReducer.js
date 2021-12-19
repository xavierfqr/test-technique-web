import {FETCH_EQUIPMENTS_REQUEST, FETCH_EQUIPMENTS_SUCCESS, FETCH_EQUIPMENTS_FAILURE} from '../actions/equipmentsActions';

const initialState = { loading: true, equipments:[], error: ''}

export const equipmentsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_EQUIPMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EQUIPMENTS_SUCCESS:
            return {
                loading: false,
                equipments: action.payload,
                error: ''
            }
        case FETCH_EQUIPMENTS_FAILURE:
            return {
                loading: false,
                equipments: [],
                error: action.payload
            }
        default:
            return state;
    }
}