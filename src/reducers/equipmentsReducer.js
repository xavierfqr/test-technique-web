import {FETCH_EQUIPMENTS_REQUEST, FETCH_EQUIPMENTS_SUCCESS, FETCH_EQUIPMENTS_FAILURE, FILTER_EQUIPMENTS} from '../actions/equipmentsActions';

const initialState = { loading: true, equipments:[], error: '', filterOption: '', optionValue: ''}

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
        case FILTER_EQUIPMENTS:
            return {
                ...state,
                filterOption: action.payload.filterOption,
                filterValue: action.payload.filterValue
            }
        default:
            return state;
    }
}