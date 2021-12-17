import { database } from '../firebase';

export const FETCH_EQUIPMENTS_REQUEST = "FETCH_EQUIPMENTS_REQUEST";
export const FETCH_EQUIPMENTS_SUCCESS = "FETCH_EQUIPMENTS_SUCCESS";
export const FETCH_EQUIPMENTS_FAILURE = "FETCH_EQUIPMENTS_FAILURE";


export const fetchEquipments = () => async (dispatch) => {
    const dbRef = database.ref();
    dispatch({
        type: FETCH_EQUIPMENTS_REQUEST
    })
    try {
        const snapshot = await dbRef.child('Equipments').get()
        dispatch({
            type: FETCH_EQUIPMENTS_SUCCESS,
            payload: snapshot.val()
        })
    }
    catch(error) {
        dispatch({
            type: FETCH_EQUIPMENTS_FAILURE,
            payload: error.message
        })
    }
}