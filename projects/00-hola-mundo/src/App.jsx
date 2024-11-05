import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {

    return (
        <section className='App'>
            <TwitterFollowCard userName='adandue' initialIsFollowing={true}>
                Adán Dueñas Escobar
            </TwitterFollowCard>
            {/*Así se pueden escribir comentarios en jsx */}
            <TwitterFollowCard userName='veroo_monteroo' >
                monTeroo!
            </TwitterFollowCard>
            <TwitterFollowCard  userName='midudev' >
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}

export { App }