import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    return (
        <section className='App'>
            <TwitterFollowCard userName='adandue'>
                Adán Dueñas Escobar
            </TwitterFollowCard>
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