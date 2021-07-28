import {createContext, ReactNode, useState} from 'react';

interface FormDataContextProviderProps {
    children: ReactNode;
}

export const FormDataContext = createContext();

export function FormDataContextProvider(props: FormDataContextProviderProps){
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState([]);
    const [mileage, setMileage] = useState([]);
    const [price, setPrice] = useState(0);
    const [bodyStyle, setBodyStyle] = useState("");
    const [data, setNewData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedCar, setSelectedCar] = useState([]);

    return(
        <FormDataContext.Provider value={{
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
        }}>
            {props.children}
        </FormDataContext.Provider>
    )
}