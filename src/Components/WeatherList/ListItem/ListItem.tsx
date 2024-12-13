import {FC} from 'react';
import {convertFToC} from "../../../helpers/utils.ts";
import {IPropsListItem} from './types';
import {ListItemWrapper} from "./listItemStyle.ts";
import {IMG_URL} from "../../../helpers/configs.ts";

const ListItem: FC<IPropsListItem> = ({item}) => {
    const celsius = item.main ? convertFToC(item.main.temp) : 0;
    const icon = item.weather && item.weather[0] ? `${IMG_URL}${item.weather[0].icon}.png` : null

    return (
        <ListItemWrapper>
            <div>{item.dt_txt}</div>
            <div>{celsius}</div>
            {icon ? (<img src={icon} alt='icon'/>) : null}
        </ListItemWrapper>
    )
}

export default ListItem;