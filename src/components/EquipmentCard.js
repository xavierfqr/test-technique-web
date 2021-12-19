import React from 'react'
import { Link } from 'react-router-dom'

function EquipmentCard({id, name, domain, nbFaults, photo}) {

    return (
        <Link to={`${id}`}>
            {name}
            {domain}
            {nbFaults}
            <img width={100} height={100} src={photo} />
        </Link>
    )
}

export default EquipmentCard
