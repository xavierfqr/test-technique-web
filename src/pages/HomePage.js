import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentList from '../components/EquipmentList';


function HomePage() {

    const {loading, error} = useSelector(state => state.equipmentsReducer)
    

    return (
        <div>
            {loading ? 
            <div>Loading...</div>
            :
            error ? 
                <div>an error occured while fetching data</div>
                :
                <EquipmentList></EquipmentList>}
        </div>
    )
}

export default HomePage
