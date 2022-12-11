import {useState} from "react";


export const HookUseState=()=>{
    // let a=1
    let [a, senA]=useState(1)
    const onClickHendler=()=>{
        senA(++a)
        console.log(a)
    }
    const onClickHendlerNull=()=>{
        senA(0)

    }
    return(
        <div>
            <h2>{a}</h2>
            <button onClick={onClickHendler}>+1</button>
            <button onClick={onClickHendlerNull}>0</button>
            <button onClick={onClickHendlerNull}>0</button>
        </div>
    )
}