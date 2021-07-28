import React, {FormEvent, useEffect, useState} from 'react'
import * as yup from 'yup';

import './styles.css'

import carsJSON from '../../data/cars.json';
import {useFormData} from '../../hooks/useFormData';

export default function AsideForm() {
    const carsData = Object.entries(carsJSON.cars)
    const [noBrand, setNoBrand] = useState(false);
    let carPhoto = [];
    let photo = "";
    let carFuel = [];
    let fuelType = "";

    const {
        brand, setBrand,
        model, setModel,
        year, setYear,
        mileage, setMileage,
        price, setPrice,
        bodyStyle, setBodyStyle,
        data, setNewData,
        selected, setSelected,
        selectedBrand, setSelectedBrand
    } = useFormData();

    let filtered = carsData.filter((item) => item[1].brand === selectedBrand);

    useEffect(() => {
        filtered = carsData.filter((item) => item[1].brand === selectedBrand)
        console.log(filtered)

        if(selectedBrand === ""){
            setNewData([])
        }
    }, [selectedBrand])

    let formData = [];

    const schema = yup.object().shape({
        brand_: yup.string().required(),
        price_: yup.number().required(),
        model_: yup.string().required(),
        year_: yup.number().required(),
        mileage_: yup.number().required(),
        bodyStyle_: yup.string().required(),
    })

    function handleFormData(event: FormEvent) {
        event.preventDefault();

        schema.isValid({
            brand_: brand,
            price_: price,
            model_: model,
            year_: year,
            mileage_: mileage,
            bodyStyle_: bodyStyle,
        }).then((valid) => {
            if(valid === true) {
                setSelected(false);
                setBrand("")
                setNoBrand(true)
                carPhoto = filtered.find((item) => item[1].photo)
                photo = carPhoto[1].photo
                carFuel = filtered.find((item) => item[1].fuelType)
                fuelType = carFuel[1].fuelType
                console.log("car photo")
                console.log(photo)
                formData = [brand, photo, model, fuelType, year, mileage, price, bodyStyle];
                setNewData(formData);
                console.log(`Data ${data}`)
            } else {
                alert("Please fill in all the fields on the form.")
            }
        });        
    }

    function disableInputs(selected){
        if(selected === false || brand === ""){
            return true;
        }
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleFormData}>
                <div>
                    <label>Make</label>
                    <select name="brand_" id="" defaultValue="1"  onChange={(e) => {
                        setSelected(true)
                        setBrand(e.target.value)
                        setSelectedBrand(e.target.value)
                    }}>
                        <option value="" selected={noBrand === true && true}></option>
                        {carsData.map((item, key) => {
                            return (
                                <option key={key} value={item[1].brand}>{item[1].brand}</option>
                            )
                        })}
                        
                    </select> 
                </div>
                <div>
                    <label>Price</label>
                    <select 
                        name="price_" id=""
                        onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                        className={(selected === false || brand === "") ? "disabled" : ""}
                        disabled={disableInputs(selected) === true && true}
                    >
                        <option value="" selected={(selected === false || brand === "") && true}></option>
                        {(selected === true || brand !== "") && filtered.map((item, key) => {
                            return (
                                <option key={key} value={item[1].price}>{item[1].price}</option>
                            )
                        })}                        
                    </select> 
                </div>
                <div>
                    <label>Model</label>
                    <select 
                        name="model_" 
                        id="" 
                        defaultValue="1" 
                        onChange={(e) => setModel(e.target.value)}
                        className={(selected === false || brand === "") ? "disabled" : ""}
                        disabled={disableInputs(selected) === true && true}
                    >
                        <option value="" selected={(selected === false || brand === "") && true}></option>
                        {(selected === true || brand !== "") && filtered.map((item, key) => {
                            return (
                                <option key={key} value={item[1].model}>{item[1].model}</option>
                            )
                        })}   
                    </select>    
                </div>
                <div>
                    <label>Year</label>
                    <div>
                        <select 
                            name="year_" 
                            id="" 
                            defaultValue="1" 
                            onChange={(e) => setYear(([e.target.value]))}
                            className={(selected === false || brand === "") ? "disabled" : ""}
                            disabled={disableInputs(selected) === true && true}
                        >
                            <option value="" selected={(selected === false || brand === "") && true}></option>
                            {(selected === true || brand !== "") && filtered.map((item, key) => {
                                return (
                                    <option key={key} value={item[1].year}>{item[1].year}</option>
                                )
                            })}      
                        </select>
                        <select 
                            name="year_" 
                            id="" 
                            defaultValue="1" 
                            onChange={(e) => setYear([e.target.value])}
                            className={(selected === false || brand === "") ? "disabled" : ""}
                            disabled={disableInputs(selected) === true && true}
                        >
                            <option value="" selected={(selected === false || brand === "") && true}></option>
                            {(selected === true || brand !== "") && filtered.map((item, key) => {
                                return (
                                    <option key={key} value={item[1].year}>{item[1].year}</option>
                                )
                            })}    
                        </select>
                    </div>
                </div>
                <div>
                    <label>Mileage</label>
                    <div>
                        <select 
                            name="mileage_" 
                            id="" 
                            defaultValue="1" 
                            onChange={(e) => setMileage([e.target.value])}
                            className={(selected === false || brand === "") ? "disabled" : ""}
                            disabled={disableInputs(selected) === true && true}
                        >
                            <option value="" selected={(selected === false || brand === "") && true}></option>
                            {(selected === true || brand !== "") && filtered.map((item, key) => {
                                return (
                                    <option key={key} value={item[1].mileage}>{item[1].mileage}</option>
                                )
                            })}   
                        </select>
                        <select 
                            name="mileage_" 
                            id="" defaultValue="1" 
                            onChange={(e) => setMileage([e.target.value])}
                            className={(selected === false || brand === "") ? "disabled" : ""}
                            disabled={disableInputs(selected) === true && true}
                        >
                            <option value="" selected={(selected === false || brand === "") && true}></option>
                            {(selected === true || brand !== "") && filtered.map((item, key) => {
                                return (
                                    <option key={key} value={item[1].mileage}>{item[1].mileage}</option>
                                )
                            })}   
                        </select>
                    </div>
                </div>
                <div>
                    <label>Body style</label>
                    <select 
                        name="bodyStyle_" 
                        id="" defaultValue="1" 
                        onChange={(e) => setBodyStyle(e.target.value)}
                        className={(selected === false || brand === "") ? "disabled" : ""}
                        disabled={disableInputs(selected) === true && true}
                    >
                        <option value="" selected={(selected === false || brand === "") && true}></option>
                        {(selected === true || brand !== "") && filtered.map((item, key) => {
                            return (
                                <option key={key} value={item[1].bodyStyle}>{item[1].bodyStyle}</option>
                            )
                        })} 
                    </select>
                </div>

                <button type="submit">Apply</button>
            </form>
        </div>
    )
};