import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard'

const App = () => {
    return (
        <section className='App'>
            <TwitterFollowCard userName='Adan_Duenas' name='Adán Dueñas Escobar' />
            <TwitterFollowCard userName='veroo_monteroo' name='monTeroo!' />
        </section>
    )
}

export { App }