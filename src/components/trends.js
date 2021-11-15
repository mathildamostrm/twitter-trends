import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/components.css'

function Trends() {

    const [trends, setTrends] = useState([])
    const [id, setId] = useState('551801')

   useEffect(() => {
    const getTrends = () => {
        axios.get('/trends', {
        params: {
            id,
        },
        }).then(response => {
            console.log(response.data)
            setTrends(response.data[0].trends)
        })
        .catch(error => console.log(error.message))
    }
    getTrends()
   }, [id])

    function listTrends() {
        return (
            <ol>
                {trends.map((trend, index) => {
                    return (
                        <li key={index}>
                            <a href={trend.url}>{trend.name}</a>
                            {trend.tweet_volume && (
                                <span> {trend.tweet_volume}</span>
                            )}
                        </li>
                    )
                })}
            </ol>
        )
    }
    return (
    <div>
        <form>
            <select /*TODO: Add more options*/
            type='text'
            onChange={e => setId(e.target.value)}>
                <option value='551801'>Vienna</option>
                <option value='906057'>Stockholm</option>
                <option value='1118370'>Tokyo</option>
                <option value='615702'>Paris</option>
                <option value='2514815'>Washington</option>
                <option value='44418'>London</option>
                <option value='638242'>Berlin</option>
                <option value='766273'>Madrid</option>
                <option value='1'>World Wide</option>
            </select>
        </form>
        <div>{listTrends()}</div>
    </div>)
}

export default Trends


