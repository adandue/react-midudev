import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const users = [
    {
        userName:'adandue',
        name: 'Adán Dueñas Escobar',
        isFollowing: true,
    },
    {
        userName:'veroo_monteroo',
        name: 'monTeroo!',
        isFollowing: false,
    },
    {
        userName:'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    }
]

const App = () => {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

export { App }