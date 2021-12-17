import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentCard from './EquipmentCard';


function EquipmentList() {

    const {equipments} = useSelector(state => state.equipmentsReducer)
    
    const equipmentKeys = Object.keys(equipments);
    console.log(equipmentKeys)
    const equipmentList = equipmentKeys.map((key, index) => {
        console.log(equipments[key])
        const {name, domain, nbFaults, photo} = equipments[key]
        return <EquipmentCard key={key} id={key} name={name} domain={domain} nbFaults={nbFaults} photo={photo}></EquipmentCard>
    })
    return (
        <div>
            {equipmentList}
            youhou
        </div>
    )
}

export default EquipmentList
