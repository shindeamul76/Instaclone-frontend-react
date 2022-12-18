import { FavoriteBorder, Telegram } from '@mui/icons-material';
import React from 'react';

export default function Card(props) {
    let { likes, description, name, date, img, location } = props;
    return (
        <div className='card'>
            <div className="head">
                <div className="n-c">

                    <div className="name">
                        <strong>{ name }</strong>
                    </div>
                    <div className="city text-light">
                        { location }
                    </div>
                </div>
                <div className="options">
                    ...
                </div>
            </div>
            <div className="img">
                <img src={ img } alt={ name } />
            </div>
            <div className="icons">
                <div className="like">
                    <FavoriteBorder/>
                </div>
                <div className="send">
                    <Telegram/>
                </div>
                <div className="date">
                    { date }
                </div>
            </div>
            <div className="likes">
                { likes } likes
            </div>
            <div className="description text-bold">
                <strong>{ description }</strong>
            </div>
        </div>
    )
}
