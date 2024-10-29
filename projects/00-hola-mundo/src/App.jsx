import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName='adandue' 
                name='Adán Dueñas Escobar' 
                />
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName='veroo_monteroo' 
                name='monTeroo!'
                />
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName='midudev' 
                name='Miguel Ángel Durán' 
                />
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName='freddier' 
                name='Freddy Vega' 
                />
        </section>
    )
}

export { App }