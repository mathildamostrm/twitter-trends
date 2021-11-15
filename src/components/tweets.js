import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/components.css'

function Tweets() {

    const [tweets, setTweets] = useState([])
    const [q, setQ] = useState('Vienna')

   useEffect(() => {
    const getTweets = () => {
        axios.get('/tweets', {
        params: {
            q,
        },
        }).then(response => {
            console.log(response.data)
            setTweets(response.data.statuses)
        })
        .catch(error => console.log(error.message))
    }
    getTweets()
   }, [q])

    function listTweets() {
        return (
            <ol>
                {tweets.map((tweet, index) => {
                    return (
                        <li key={index}>
                            <a href={tweet.url}>{tweet.text}</a>
                        </li>
                    )
                })}
            </ol> 
        )
    }
    return (
    <div>
        <form>
            <input
            type='text'
            placeholder='search for tweets..'
            value={q}
            onChange={e => setQ(e.target.value)}/>
        </form>
        <div>{listTweets()}</div>
    </div>)
}

export default Tweets