import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { database } from '../firebase';

function EquipmentPage() {
    
    const [details, setDetails] = React.useState();
    const {id} = useParams();
    const res = useSelector(state => state);
    const equipment = useSelector(state => state.equipmentsReducer.equipments[id]);

    React.useEffect(() => {
        async function fetchCheckpoints() {
            const dbRef = database.ref();
            const snapshot = await dbRef.child('Checkpoints').get()
            const allCheckpoints = snapshot.val();
            const cpKeys = Object.keys(allCheckpoints);
            const checkpointList = cpKeys.filter(elem => allCheckpoints[elem].equipmentKey === id).map(elem => allCheckpoints[elem]);
        }
        fetchCheckpoints()
    }, [])

    return (
        <div>
            {id}
        </div>
    )
}

export default EquipmentPage
