import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    const [name, setName] = useState('adan_due')
    const changeName = () => {
        setName('veroo_monteroo')
    }

    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
                Adán Dueñas Escobar
            </TwitterFollowCard>
            <TwitterFollowCard userName='veroo_monteroo' >
                monTeroo!
            </TwitterFollowCard>
            <TwitterFollowCard  userName='midudev' >
                Miguel Ángel Durán
            </TwitterFollowCard>
            <button onClick={changeName}>
            Cambiar nombre
            </button>
        </section>

    )
}

export { App }