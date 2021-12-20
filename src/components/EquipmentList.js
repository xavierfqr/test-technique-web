import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentCard from './EquipmentCard';
import styles from './EquipmentList.module.css'


function EquipmentList() {

    const [pageCount, setPageCount] = React.useState(0);
    const {equipments, filterOption, filterValue} = useSelector(state => state.equipmentsReducer)

    React.useEffect(() => {
        setPageCount(0)
    }, [filterOption, filterValue])

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageCount])
    
    const equipmentKeys = Object.keys(equipments);

    const equipmentList = equipmentKeys.map(key => {
        const {name, domain, nbFaults, photo, brand, niveau} = equipments[key]
        let shouldDisplay = false; 
        switch (filterOption) {
            case 'name':
                shouldDisplay = name.toLowerCase().includes(filterValue.toLowerCase());
                break;
            case 'domain':
                shouldDisplay = domain.toLowerCase().includes(filterValue.toLowerCase());
                break;
            case 'brand':
                shouldDisplay = brand.toLowerCase().includes(filterValue.toLowerCase());
                break;
            case 'niveau':
                shouldDisplay = niveau.toLowerCase().includes(filterValue.toLowerCase());
                break;
            default:
                shouldDisplay = true;
        }
        if (!shouldDisplay) return null;
        
        return <EquipmentCard key={key} id={key} name={name} domain={domain} nbFaults={nbFaults} photo={photo}></EquipmentCard>
    }).filter(elem => elem !== null).slice(pageCount * 10, (pageCount + 1) * 10);

    return (
        <div className={styles.container}>
            {equipmentList}
            <div className={styles.pageButtons}>
                <button disabled={pageCount === 0} onClick={() => setPageCount(count => count - 1)}>Précédent</button>
                <button disabled={equipmentList.length < 10} onClick={() => setPageCount(count => count + 1)}>Suivant</button>
            </div>
        </div>
    )
}

export default EquipmentList
