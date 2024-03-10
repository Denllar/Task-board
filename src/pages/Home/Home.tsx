import React from 'react'
import { setCount } from '../../redux/slices/firstSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import Navigation from '../../components/Navigation/Navigation';
import RightBar from '../../components/RightBar/RightBar';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <RightBar/>
        </div>
    )
}

export default Home;