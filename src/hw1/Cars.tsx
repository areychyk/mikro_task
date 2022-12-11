import {Car} from "./Car";



export const Cars = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <table>
            <tbody>
            <tr>
                <th>Number</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
           <Car cars={topCars}/>
            <tr>


            </tr>
            </tbody>
        </table>
    )
}

