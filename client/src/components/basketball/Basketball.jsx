import { useState } from 'react';
import style from './Basketball.module.css';
import { formatBasketballNumber } from '../../utils/formatBasketballNumber';
import { Points } from './Points';

export function Basketball() {
   const [firstTeamResult, setFirstTeamResult] = useState(0);
   const [secondTeamResult, setSecondTeamResult] = useState(0);
    

    function handleFirstTeamResult(scoreChange) {
        setFirstTeamResult(n => n + scoreChange)
    }

    function handleSecondTeamResult(scoreChange2) {
        setSecondTeamResult(n => n + scoreChange2)
    }

    return (
        <section className={style.basketballSec}>
            <div className={style.basketball}>
                <div className={style.screen}>{formatBasketballNumber(firstTeamResult, 2)}:{formatBasketballNumber(secondTeamResult, 2)}</div>
                <Points handleFirstTeamResult={handleFirstTeamResult} handleSecondTeamResult={handleSecondTeamResult}/>
            </div>
        </section>
    );
}