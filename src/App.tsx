import React from 'react';
import './App.css';
import {Cars} from "./hw1/Cars";
import {Button} from "./hw1/Button/Button";
import {HookUseState} from "./hw1/HookUseState/HookUseState";
import {Filter} from "./hw1/Filter/Filter";

function App() {
    // const ButtonFoo1=(follower:string, age:number)=>{
    //     console.log(follower, age)
    // }
    // const ButtonFoo2=(follower:string)=>{
    //     console.log(follower)
    // }
    // const ButtonFoo3=(follower:string)=>{
    //     console.log(follower)
    // }

    return (
        <div className="App">
        {/*<Cars/>*/}
        {/*    <Button name={"first button"} callBack={()=>ButtonFoo1("first follower", 22)}/>*/}
        {/*    <Button name={"second button"} callBack={()=>ButtonFoo2("second follower")}/>*/}
        {/*    <Button name={"button"} callBack={()=>ButtonFoo3("I stupid button")}/>*/}
        {/*    <HookUseState/>*/}
            <Filter/>
        </div>
    );
}

export default App;
