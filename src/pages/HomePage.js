import React from 'react'
import { database } from '../firebase';
import { useSelector } from 'react-redux';



function HomePage() {
    const [data, setData] = React.useState()

    const {loading, equipments, error} = useSelector(state => state.equipmentsReducer)
    
    console.log(equipments['-LHXpVfII4J53rgKtuAi'])
    console.log(loading)
    console.log(error)
    return (
        <div>
            {loading}
            {error}
        </div>
    )
}

export default HomePage
