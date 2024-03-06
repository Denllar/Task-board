import React from 'react'
import { setCount } from '../../redux/slices/firstSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const {count} = useAppSelector(state=>state.firstSlice);
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch(setCount())}>Жми!!!</button>
        </div>
    )
}

export default Home;