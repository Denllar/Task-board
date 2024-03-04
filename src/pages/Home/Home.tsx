import React from 'react'

const Home = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            {
                count
            }
            <button onClick={()=>setCount(prev => prev+1)}>Жми!!!</button>
        </div>
    )
}

export default Home;