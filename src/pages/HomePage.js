import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentList from '../components/EquipmentList';
import SearchBar from '../components/SearchBar';


function HomePage() {

    const {loading, error} = useSelector(state => state.equipmentsReducer)
    
    return (
        <div>
            <h1>Liste des équipements</h1>
            {loading ? 
            <div>Loading...</div>
            :
            error ? 
                <div>An error occured while fetching data</div>
                :
                <div>
                    <SearchBar/>
                    <EquipmentList></EquipmentList>
                </div>
                }
        </div>
    )
}

export default HomePage
