import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='adandue'>
                Adán Dueñas Escobar
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName='veroo_monteroo' >
                monTeroo!
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName='midudev' >
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}

export { App }