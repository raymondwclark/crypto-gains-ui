import React, { useEffect, useState } from 'react';
import BalanceComponent from './BalanceComponent';
import axios from 'axios';
import moment from 'moment';

const DashboardComponent = () => {
    const [balances, setBalances] = useState({});
    const [lastPulled, setLastPulled] = useState(undefined);

    useEffect(() => {
        getBalances();

        // Refresh data every 10 seconds
        setInterval(() => {
            getBalances();
        }, 600000)
    }, [setBalances, setLastPulled]);

    const getBalances = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_BALANCE_SERVICE_BASE_URL + '/api/balances');
            setBalances(res.data.balances);
            setLastPulled(res.data.lastPulled);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{marginTop: '120px'}}>
            <BalanceComponent balance={balances?.binance?.current} last={balances?.binance?.last} title='binance'></BalanceComponent>
            <BalanceComponent balance={balances?.safemoon?.current} last={balances?.safemoon?.last} title='safemoon'></BalanceComponent>
            <BalanceComponent balance={balances?.bonfire?.current} last={balances?.bonfire?.last} title='bonfire'></BalanceComponent>
            <BalanceComponent balance={balances?.total?.current} last={balances?.total?.last} title='total'></BalanceComponent>
            <label style={{textAlign: 'center', marginTop: '40px', color: 'rgb(120, 120, 120)', fontSize: '12px'}}>
                Since {moment(lastPulled).format('MMMM Do YYYY, h:mm:ss a') || 'now'}
            </label>
            <label style={{textAlign: 'center', color: 'rgb(120, 120, 120)', fontSize: '10px'}}>
                (Resets every 24 hrs)
            </label>
            <label style={{textAlign: 'center', color: 'rgb(120, 120, 120)', fontSize: '10px'}}>
                Last refreshed {moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}
            </label>
        </div>
    )
}

export default (DashboardComponent);