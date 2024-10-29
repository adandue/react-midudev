import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='adandue' name='Adán Dueñas Escobar' />
            <TwitterFollowCard isFollowing={false} userName='veroo_monteroo' name='monTeroo!' />
            <TwitterFollowCard isFollowing userName='midudev' name='Miguel Ángel Durán' />
            <TwitterFollowCard isFollowing={false} userName='freddier' name='Freddy Vega' />
        </section>
    )
}

export { App }