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
        <form onSubmit={handleForm} className={styles.container}>
            <input onChange={(event) => setInput(event.target.value)} type="text" placeholder='Rechercher un item'/>
            <button type='submit'><img width={100} height={100} src="search.png"/></button>
            <select onChange={(event) => setOption(event.target.value)}>
                <option value="name">nom</option>
                <option value="domain">domaine</option>
                <option value="brand">marque</option>
                <option value="niveau">niveau</option>
            </select>
        </form>
    )
}

export default SearchBar
