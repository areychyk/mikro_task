import {useState} from "react";
import {FilterType} from "./Filter";



type BillPropsType={
    banknots:string
    value:number
    number:string
}

type MoneyPropsType={
    money:BillPropsType[]
    onClickFilterHandler:(status:FilterType)=>void
}


export const Content=(props:MoneyPropsType)=>{



    return(
        <>
            <ul>
                {props.money.map((m,i) => {
                    return (
                        <li key={i}>
                            <span> {m.banknots} </span>
                            <span> {m.value} </span>
                            <span> {m.number} </span>
                        </li>
                    )
                })}

            </ul>

            <div style={{marginLeft: "35px"}}>

                <button onClick={()=>props.onClickFilterHandler("all")}>all</button>
                <button onClick={()=>props.onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={()=>props.onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </>
    )
}




// <>
//     <ul>
//         {currentMoney.map((m,i) => {
//             return (
//                 <li key={i}>
//                     <span> {m.banknots} </span>
//                     <span> {m.value} </span>
//                     <span> {m.number} </span>
//                 </li>
//             )
//         })}
//     </ul>
//
//     <div style={{marginLeft: "35px"}}>
//
//         <button onClick={()=>onClickFilterHandler("all")}>all</button>
//         <button onClick={()=>onClickFilterHandler("RUBLS")}>RUBLS</button>
//         <button onClick={()=>onClickFilterHandler("Dollars")}>Dollars</button>
//     </div>
// </>