type CarsPropsType = {
    cars: ModelCarsPropsType[]
}
type ModelCarsPropsType = {
    manufacturer: string,
    model: string
}

export const Car = (props:CarsPropsType) => {
    return (<>

            {props.cars.map((c, i) => <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.manufacturer}</td>
                <td>{c.model}</td>
            </tr>)}
    </>
    )
}


