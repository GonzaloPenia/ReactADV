import { ChangeEvent, useState } from "react";

export const useForm = <T>( initState : T) => { 
        // Crear un generico. T va a ser igual al tipo de dato que recibo.
    const [formData, setFormData] = useState(initState);

    const onChange = (event:ChangeEvent<HTMLInputElement>) => { 
        setFormData(prev => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }
    
    const resetForm =() =>{
        setFormData({...initState})
    }
    
    return {
        //Properties
        ...formData,
        formData,
        //Methods
        onChange,
        resetForm
    }
 }