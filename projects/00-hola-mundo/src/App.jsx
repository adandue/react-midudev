import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    const format = (userName) => `@${userName}`

    const formattedUserName = <span>@adandue</span>
    return (
        <section className='App'>
            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing 
                userName='adandue' 
                name='Adán Dueñas Escobar' 
                />
            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing={false} 
                userName='veroo_monteroo' 
                name='monTeroo!'
                />
            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing 
                userName='midudev' 
                name='Miguel Ángel Durán' 
                />
            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                isFollowing={false} 
                userName='freddier' 
                name='Freddy Vega' 
                />
        </section>
    )
}

export { App }