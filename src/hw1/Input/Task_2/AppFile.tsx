import {useState} from "react";

import {Input} from "./Input";
import {ButtonInput} from "./ButtonInput";


export const AppFile = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},

    ])
let [title, setTitle]=useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])

    }

    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <Input setTitle={setTitle} title={title}/>
            <ButtonInput name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>

    )
}