import axios from 'axios'
import { useState, useEffect } from 'react'


function SearchTrends() {

    const [trends, setTrends] = useState([])
    const [id, setId] = useState('1')

    useEffect(() => getTrends(), [id])

    function getTrends() {
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

    function listTrends() {
        return (
            <ul>
                {trends.map((trend, index) => {
                    return (
                        <li key={index}>
                            <a href={trend.url}>{trend.name}</a>
                            {trend.tweet_volume && (
                                <span>{trend.tweet_volume}</span>
                            )}
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
    <div>
        <form>
            <select
            type='text'
            placeholder='enter'
            onChange={e => setId(e.target.value)}>
                <option value='1'>#world wide</option>
                <option value='551801'>#vienna</option>
                <option value='906057'>#stockholm</option>
                <option value='1118370'>#tokyo</option>
                <option value='615702'>#paris</option>
                <option value='2514815'>#washington</option>
                <option value='44418'>#london</option>
                <option value='638242'>#berlin</option>
                <option value='766273'>#madrid</option>
            </select>
        </form>
        <div>{listTrends()}</div>
    </div>)
}

export default SearchTrends


