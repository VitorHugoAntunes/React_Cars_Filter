import React, {useEffect} from 'react'

import VehicleCard from '../VehicleCard';

import './styles.css'
import closeIcon from '../../assets/closeIcon.svg'

import carsJSON from '../../data/cars.json';
import {useFormData} from '../../hooks/useFormData';

export default function MainContent() {
    const carsData = Object.entries(carsJSON.cars)
    const {data} = useFormData();

    useEffect(() => {
        console.log(data)
    },[data])

    return (
        <div className="mainContainer">
            <div>
                <header>
                    <h1 className="mainTitle">{(data.length === 8) ? 1 : carsData.length} vehicle(s) found</h1>
                </header>
                <div className="filteredVehicles">
                    {data.length === 8 ? (  
                        <VehicleCard
                            brand={data[0]}
                            photo={data[1]}
                            model={data[2]}
                            fuelType={data[3]}
                            year={data[4]}
                            mileage={data[5]}
                            price={data[6]}
                            bodyStyle={data[7]}    
                        />
                    ) : (
                        carsData.map((car, key) => {
                            return (
                                <VehicleCard
                                    key={key} 
                                    photo={car[1].photo}
                                    brand={car[1].brand}
                                    model={car[1].model}
                                    year={car[1].year}
                                    mileage={car[1].mileage}
                                    price={car[1].price}
                                    bodyStyle={car[1].bodyStyle}    
                                    fuelType={car[1].fuelType}
                                />
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}