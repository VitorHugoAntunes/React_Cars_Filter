import {useContext} from 'react';
import {FormDataContext} from '../contexts/FormContext';

export function useFormData(){
    const context = useContext(FormDataContext);
    const {
        brand, setBrand,
        model, setModel,
        year, setYear,
        mileage, setMileage,
        price, setPrice,
        bodyStyle, setBodyStyle,
        data, setNewData,
        selected, setSelected,
        selectedBrand, setSelectedBrand,
        selectedCar, setSelectedCar,
    } = context;

    return {
        brand, setBrand,
        model, setModel,
        year, setYear,
        mileage, setMileage,
        price, setPrice,
        bodyStyle, setBodyStyle,
        data, setNewData,
        selected, setSelected,
        selectedBrand, setSelectedBrand,
        selectedCar, setSelectedCar
    };
}