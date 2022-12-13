import React from 'react';
import './App.css';
import {Cars} from "./hw1/Map/Cars";
import {Button} from "./hw1/Button/Button";
import {HookUseState} from "./hw1/HookUseState/HookUseState";
import {Filter} from "./hw1/Filter/Filter";
import {MessageApp} from "./hw1/Input/Task_1/MessageApp";
import {AppFile} from "./hw1/Input/Task_2/AppFile";

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
        {/*    <Filter/>*/}
        {/*    <MessageApp/>*/}
            <AppFile/>
        </div>
    );
}

export default App;
