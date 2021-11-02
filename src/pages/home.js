import Trends from '../components/trends'
import '../styles/home.css'
import logo from './geotarget-tweets.png'

function Home() {
    return (
        <>
        <div className='header-container'>
        <div className='title'>#twitter #trends</div>
        <img className='image' src={logo} alt='twitter logo' />
        </div>
        <Trends />
        </>
    )
}

export default Home