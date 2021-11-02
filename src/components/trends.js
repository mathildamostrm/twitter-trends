import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/trends.css'

function Trends() {

    const [trends, setTrends] = useState([])
    const [id, setId] = useState('')
    const [locations, setLocations] = useState([])

    useEffect(() => getTrends(), [id])

    function getTrends() {
        axios.get('/trends', {
        params: {
            id,
        },
        }).then(response => {
            setTrends(response.data[0].trends)
            setLocations(response.data[0].locations)
        })
        .catch(error => console.log(error.message))
    }

    function listTrends() {
        return (
            <ol>
                {locations.map((location, index) => {
                    return (
                        <h4 key={index}>Trending hashtags in {location.name}</h4>
                    )
                })}
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
            <select
            type='text'
            placeholder='enter'
            onChange={e => setId(e.target.value)}>
                <option value="" selected disabled hidden>Choose Location</option>
                <option value='1'>World Wide</option>
                <option value='551801'>Vienna</option>
                <option value='906057'>Stockholm</option>
                <option value='1118370'>Tokyo</option>
                <option value='615702'>Paris</option>
                <option value='2514815'>Washington</option>
                <option value='44418'>London</option>
                <option value='638242'>Berlin</option>
                <option value='766273'>Madrid</option>
            </select>
        </form>
        <div>{listTrends()}</div>
    </div>)
}

export default Trends


