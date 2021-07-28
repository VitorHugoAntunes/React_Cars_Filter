import './styles.css';

interface carProps {
    photo: string;
    brand: string;
    model: string;
    year: number;
    mileage: number;
    price: number;
    bodyStyle: string;
    fuelType: string;
}

export default function VehicleCard(props: carProps) {
    return (
        <div className="cardContainer">
            <div className="vehicleImage">
                <img src={props.photo} alt="car" />
            </div>
            <div>
                <div>
                    <span>{props.brand} {props.model}</span>
                    <span>{props.price}</span>
                </div>
                <div>
                    <div>
                        <span>Year</span>
                        <span>{props.year}</span>
                    </div>
                    <div>
                        <span>Body Style</span>
                        <span>{props.bodyStyle}</span>
                    </div>
                    <div>
                        <span>FuelType</span>
                        <span>{props.fuelType}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}