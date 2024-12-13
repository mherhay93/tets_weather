import {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {weatherActions} from "../../redux/weather/actions.ts";
import {Button, HeaderWrapper, Input, InputGroup} from "./headerStyle.ts";

const Header: FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const handleClick = () => {
        dispatch(weatherActions.getWeatherAction(value))
        dispatch(weatherActions.getWeatherItemAction(value))
    }

    const handleChange = (v: string) => {
        setValue(v)
    }

    return (
        <HeaderWrapper>
            <InputGroup>
                <Input onChange={(e) => handleChange(e.target.value)}/>
                <Button onClick={handleClick}>Search</Button>
            </InputGroup>
        </HeaderWrapper>
    )
}

export default Header;