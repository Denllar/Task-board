import React from 'react'
import { setCount } from '../../redux/slices/firstSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import Navigation from '../../components/Navigation/Navigation';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Navigation/>
        </div>
    )
}

export default Home;