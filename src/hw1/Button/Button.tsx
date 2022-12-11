// export const Button = ()=>{
//     // const MySubscriber=(event: MouseEvent<HTMLButtonElement>)=>{
//     //     console.log("i'm first subs")
//     // }
//     // const MyNextSubscriber=()=>{
//     //     console.log("i'm next subs")
//     // }
//
//     const onClickHandler = (name:string)=>{
//         console.log(name)
//     }
//
//     return(
//         <div>
//             {/*<button onClick={MySubscriber}>My first subscriber</button>*/}
//             <button onClick={(event)=>onClickHandler("vasia")}>My first subscriber</button>
//             <button onClick={(event)=>onClickHandler("petiy")}>My second subscriber</button>
//
//         </div>
//     )
// }

// export const Button = () => {
//
//     const foo1 = () => {
//         console.log("100200")
//
//     }
//     const foo2 = (num:number) => {
//         console.log(num)
//
//     }
//
//     return (
//         <div>
//             <button onClick={foo1}>1</button>
//             <button onClick={()=>foo2(100)}>2</button>
//
//         </div>
//     )
// }

type ButtonPropsType={
    name:string
    callBack:()=>void
}

export const Button = (props:ButtonPropsType) => {
    const onClickHandler =()=>{
        props.callBack()
    }


    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>


        </div>
    )
}