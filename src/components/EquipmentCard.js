import React from 'react'
import { Link } from 'react-router-dom'
import styles from './EquipmentCard.module.css'

function EquipmentCard({id, name, domain, nbFaults, photo}) {

    return (
        <Link to={`${id}`} className={styles.container}>
            <figure className={styles.img}>
                <img alt="equipement" src={photo}/>
            </figure>
            <div className={styles.details}>
                <p className={styles.name}>{name}</p>
                <p>{domain}</p>
                <p>Nombre de défauts : {nbFaults}</p>
            </div>
            
        </Link>
    )
}

export default EquipmentCard
