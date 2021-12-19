import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { database } from '../firebase';
import styles from './DetailsPage.module.css';

function EquipmentPage() {
    
    const [checkpoints, setCheckpoints] = React.useState([]);
    const {id} = useParams();
    const equipment = useSelector(state => state.equipmentsReducer.equipments[id]);


    React.useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchCheckpoints() {
            const dbRef = database.ref();
            const snapshot = await dbRef.child('Checkpoints').get()
            const allCheckpoints = snapshot.val();
            const cpKeys = Object.keys(allCheckpoints);
            setCheckpoints(cpKeys.filter(elem => allCheckpoints[elem].equipmentKey === id).map(elem => allCheckpoints[elem]));
        }
        fetchCheckpoints()
    }, [])


    return (
        <div className={styles.container}>
            <section className={styles.infos}>
                <div>
                    <p>{equipment.name}</p>
                    <p>{equipment.domain}</p>
                </div>
                <img width={100} height={100} src={equipment.photo}/>
            </section>
            <section>
                <header>Caractéristiques de l'équipement</header>
                <table>
                    <tbody className={styles.characteristics}>
                        <tr>
                            <td>Building</td>
                            <td>{equipment.building}</td>
                        </tr>
                        <tr>
                            <td>Niveau</td>
                            <td>{equipment.niveau}</td>
                        </tr>
                        <tr>
                            <td>Local</td>
                            <td>{equipment.local}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>{equipment.brand}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{equipment.model}</td>
                        </tr>
                        <tr>
                            <td>Numéro de serie</td>
                            <td>{equipment.serialNumber || '-'}</td>
                        </tr>
                        <tr>
                            <td>Quantité</td>
                            <td>{equipment.quantity}</td>
                        </tr>
                        <tr>
                            <td>Statut</td>
                            <td>{equipment.status}</td>
                        </tr>
                        <tr>
                            <td>Prise de note</td>
                            <td>{equipment.notes}</td>
                        </tr>
                        <tr>
                            <td>Nombre de défauts</td>
                            <td>{equipment.nbFaults}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <header>Liste des points de contrôle</header>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Défaut</th>
                            <th>Recommandation</th>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkpoints.map((checkpoint, index) => {
                        const name = checkpoint.name || '-'
                        const fault = checkpoint.fault || '-'
                        const recommandation = checkpoint.recommandation || '-'
                        const photo = checkpoint.photo ? <img width={100} height={100} src={checkpoint.photo}></img> : '-';

                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{fault}</td>
                                <td>{recommandation}</td>
                                <td>{photo}</td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default EquipmentPage
