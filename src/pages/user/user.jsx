import React from 'react'
import { Link } from 'react-router-dom'

export const User = () => {
    const [abror, setData] = React.useState(null)
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(abror);
    

    return (
        <div>
            {abror?.map((item) =>(

            <div key={item.id}>
                <Link to={'/user/detail'}>
                    <h2>{item.name}</h2>
                </Link>
            </div>    
        ))}
        </div>
    )
}
