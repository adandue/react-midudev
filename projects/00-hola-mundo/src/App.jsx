import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    const adandue = { isFollowing: true, userName: 'adandue'}
    const veroo_monteroo = { isFollowing: false, userName: 'veroo_monteroo'}
    const midudev = { isFollowing: true, userName: 'midudev'}
    
    
    return (
        <section className='App'>
            <TwitterFollowCard {...adandue}>
                Adán Dueñas Escobar
            </TwitterFollowCard>
            <TwitterFollowCard {...veroo_monteroo} >
                monTeroo!
            </TwitterFollowCard>
            <TwitterFollowCard {...midudev} >
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}

export { App }