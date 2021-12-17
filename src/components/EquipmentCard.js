import React from 'react'

function EquipmentCard({id, name, domain, nbFaults, photo}) {

    return (
        <div>
            {name}
            {domain}
            {nbFaults}
            <img width={100} height={100} src={photo} />
        </div>
    )
}

export default EquipmentCard
