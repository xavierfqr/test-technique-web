import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentCard from './EquipmentCard';
import styles from './EquipmentList.module.css'


function EquipmentList() {

    const {equipments, filterOption, filterValue} = useSelector(state => state.equipmentsReducer)
    
    const equipmentKeys = Object.keys(equipments);

    const equipmentList = equipmentKeys.map(key => {
        const {name, domain, nbFaults, photo} = equipments[key]
        let shouldDisplay = false; 
        switch(filterOption) {
            case 'name':
                shouldDisplay = name.toLowerCase().includes(filterValue.toLowerCase());
                break;
            case 'domain':
                shouldDisplay = domain.toLowerCase().includes(filterValue.toLowerCase());
                break;
            default:
                shouldDisplay = true;
        }
        if (!shouldDisplay) return null;
        
        return <EquipmentCard key={key} id={key} name={name} domain={domain} nbFaults={nbFaults} photo={photo}></EquipmentCard>
    })

    return (
        <div className={styles.container}>
            {equipmentList}
        </div>
    )
}

export default EquipmentList
