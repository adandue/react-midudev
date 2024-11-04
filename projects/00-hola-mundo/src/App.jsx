import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    const [isFollowing, setIsFollowing] = useState(false)
    const changeState = () => {
        setIsFollowing(!isFollowing)
    }

    console.log('[App] render with isFollowing: ', isFollowing)

    return (
        <section className='App'>
            <TwitterFollowCard userName='adandue' initialIsFollowing={isFollowing}>
                Adán Dueñas Escobar
            </TwitterFollowCard>

            <button onClick={changeState}>
                Cambiar estado de App
            </button>
        </section>

    )
}

export { App }