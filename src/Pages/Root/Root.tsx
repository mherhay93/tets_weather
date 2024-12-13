import {FC} from 'react';
import Home from "../Home/Home.tsx";
import {IPropsRoot} from './types';

const Root: FC<IPropsRoot> = () => {
    return (
        <div>
            <Home />
        </div>
    )
}

export default Root;