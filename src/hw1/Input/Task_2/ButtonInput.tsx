type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const ButtonInput = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (<button onClick={onClickButtonHandler}>{props.name}</button>)
}