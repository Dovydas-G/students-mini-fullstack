/* eslint-disable react/prop-types */
import style from './Basketball.module.css';
import { useState } from 'react';


export function Points({handleFirstTeamResult, handleSecondTeamResult}) {
    // eslint-disable-next-line no-unused-vars
    const [score1, setScore1] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [score2, setScore2] = useState(0);

    const one = 1;
    const two = 2;
    const three = 3;
    
    function handleFirstTeamScoreOne() {
        setScore1(n => n + one);
        handleFirstTeamResult(one);
    }
    
    function handleFirstTeamScoreTwo() {
        setScore1(n => n + two);
        handleFirstTeamResult(two);
    }

    function handleFirstTeamScoreThree() {
        setScore1(n => n + three);
        handleFirstTeamResult(three);
    }

    function handleSecondTeamScoreOne() {
        setScore2(n => n + one);
        handleSecondTeamResult(one);
    }

    function handleSecondTeamScoreTwo() {
        setScore2(n => n + two);
        handleSecondTeamResult(two);
    }

    function handleSecondTeamScoreThree() {
        setScore2(n => n + three);
        handleSecondTeamResult(three);
    }
   
    return (
        <div className={style.controls}>
            <div className={style.team}>
                <button onClick={handleFirstTeamScoreOne} className={style.btn}>+1</button>
                <button onClick={handleFirstTeamScoreTwo} className={style.btn}>+2</button>
                <button onClick={handleFirstTeamScoreThree} className={style.btn}>+3</button>
            </div>
            <div className={style.team}>
                <button onClick={handleSecondTeamScoreOne} className={style.btn}>+1</button>
                <button onClick={handleSecondTeamScoreTwo} className={style.btn}>+2</button>
                <button onClick={handleSecondTeamScoreThree} className={style.btn}>+3</button>
            </div>
        </div>
    )
}
