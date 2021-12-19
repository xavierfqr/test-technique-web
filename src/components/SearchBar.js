import React from 'react'
import { useDispatch } from 'react-redux';
import { filterEquipments } from '../actions/equipmentsActions';
import styles from './SearchBar.module.css'

function SearchBar() {

    const [option, setOption] = React.useState('name');
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(filterEquipments(option, input))
    }

    return (
        <form onClick={handleForm} className={styles.container}>
            <input onChange={(event) => setInput(event.target.value)} type="text" placeholder='Rechercher un item'>
            </input>
            <select onChange={(event) => setOption(event.target.value)}>
                <option value="name">nom</option>
                <option value="domain">domaine</option>
            </select>
            <button type='submit'>Rechercher</button>
        </form>
    )
}

export default SearchBar
