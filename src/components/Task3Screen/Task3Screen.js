import React, { useEffect, useRef } from 'react'
import { startGame } from '../../helpers/task3';

export const Task3Screen = () => {
    const td_0 = useRef();
    const td_1 = useRef();
    const td_2 = useRef();
    const td_3 = useRef();
    const td_4 = useRef();
    const td_5 = useRef();
    const td_6 = useRef();
    const td_7 = useRef();
    const td_8 = useRef();
    const endgame = useRef();
    const text = useRef();

    useEffect(() => {
        startGame([
            td_0.current,
            td_1.current,
            td_2.current,
            td_3.current,
            td_4.current,
            td_5.current,
            td_6.current,
            td_7.current,
            td_8.current
        ],
        endgame.current,
        text.current
        );
    }, [])

    const startGame1=()=>{
        startGame([
            td_0.current,
            td_1.current,
            td_2.current,
            td_3.current,
            td_4.current,
            td_5.current,
            td_6.current,
            td_7.current,
            td_8.current
        ],
        endgame.current,
        text.current
        );
    }

    return (
        <>
            <div className="container mt-3">
                <h1 className="text-center">Three-in-line</h1>
                <p className="text-left mt-5">Make a game of three-in-line with two players.</p>
                <div className="mt-4">
                    <table>
                        <thead>
                            <tr>
                                <td ref={td_0} id="0"></td>
                                <td ref={td_1} id="1"></td>
                                <td ref={td_2} id="2"></td>
                            </tr>
                            <tr>
                                <td ref={td_3}id="3"></td>
                                <td ref={td_4} id="4"></td>
                                <td ref={td_5} id="5"></td>
                            </tr>
                            <tr>
                                <td ref={td_6} id="6"></td>
                                <td ref={td_7} id="7"></td>
                                <td ref={td_8} id="8"></td>
                            </tr>
                        </thead>
                    </table>
                    <div className="task3_endgame" ref={endgame}>
                        <div className="text" ref={text}></div>
                    </div>
                    <button 
                        onClick={startGame1}
                        className="btn btn-outline-primary"
                    >Replay</button>
                </div>
            </div>
        </>
    )
}
