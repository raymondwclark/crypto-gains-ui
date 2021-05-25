import React from 'react';
import '../styles/main.css';

import binanceImage from '../images/binance.png';
import safemoonImage from '../images/safemoon.png';
import bonfireImage from '../images/bonfire.png';
import totalImage from '../images/total.png';

const BalanceComponent = ({balance, title, last}) => {
    let image;
    switch (title) {
        case 'binance':
            image = binanceImage;
            break;
        case 'bonfire':
            image = bonfireImage;
            break;
        case 'safemoon':
            image = safemoonImage;
            break;
        case 'total':
            image = totalImage;
            break;
        default:
            break;
    }

    const getBalanceDifference = () => {
        let percentageDiff = ((Math.abs(last - balance) / last) * 100).toFixed(2);
        if (isNaN(percentageDiff)) percentageDiff = '0.00';

        let emoji = (balance > last) ? '🚀' : '🔻'

        return `${emoji} ${percentageDiff}%`
    }

    return (
        <div className='balance-div'>
            <div>
                <img src={image} alt='coin logo'/>
                <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                <label>{getBalanceDifference()}</label>
            </div>
            <label>${balance}</label>
        </div>
    )
}

export default (BalanceComponent);