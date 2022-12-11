import {useState} from "react";
import {Content} from "./Content";

export type FilterType="all"|'Dollars'|'RUBLS'

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
const [filter,setFilter]=useState<FilterType>("all")

let currentMoney=money

if(filter==='RUBLS'){
    currentMoney=money.filter((m)=>m.banknots ==='RUBLS')
}
if(filter==='Dollars'){
    currentMoney=money.filter((m)=>m.banknots ==='Dollars')
}

const onClickFilterHandler =(nameButton:FilterType)=>{
    setFilter(nameButton)
}

    return (
        <div>
            <Content money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </div>
    )
}


// const [filter,setFilter]=useState<FilterType>("all")
//
// let currentMoney=money
//
// if(filter==='RUBLS'){
//     currentMoney=money.filter((m)=>m.banknots ==='RUBLS')
// }
// if(filter==='Dollars'){
//     currentMoney=money.filter((m)=>m.banknots ==='Dollars')
// }
//
// const onClickFilterHandler =(nameButton:FilterType)=>{
//     setFilter(nameButton)
// }