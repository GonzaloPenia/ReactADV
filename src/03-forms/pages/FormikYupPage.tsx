import {FormikErrors, useFormik} from 'formik';

import "../styles/styles.css";
import * as Yup from 'yup'
export const FormikYupPage = () => {
    
    
    const { handleSubmit, values, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: 'Gonzalo',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
            
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15,'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(15,'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            email: Yup.string()
                            .email('No tiene un formato valido')
                            .required('Requerido'),
        }) 
        
    });
    
    
    return (
    
    
    <div>
        <h1>Formilk Yup Tutorial</h1>

        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firstName"> First Name</label>
            <input 
                type="text" 
                {...getFieldProps('firstName')}
            />
            {touched.firstName && errors.firstName && <span> {errors.firstName} </span>}
            <br />

            <label htmlFor="firstName"> Last Name</label>
            <input 
                type="text" 
                {...getFieldProps('lastName')}
            />
            {touched.lastName && errors.lastName && <span> {errors.lastName} </span>}
            <br />

            <label htmlFor="firstName"> Email</label>
            <input 
                type="text" 
                {...getFieldProps('email')}
            />
            {touched.email && errors.email && <span> {errors.email} </span>}
            <br />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
