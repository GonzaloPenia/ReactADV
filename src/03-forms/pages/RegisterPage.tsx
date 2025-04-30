import {  FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    
    const { formData, onChange, name, email, password1, password2, resetForm} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
        }
    );

    const onSubmit = (event:FormEvent<HTMLFormElement>) => { 
        event.preventDefault();
        console.log(formData);
        
     }
  
    return (
    <div>
        <h1>RegisterPage</h1>

        <form noValidate onSubmit={(ev) => onSubmit(ev)} >
            <input type="text" placeholder="name" name="name" value={name} onChange={onChange}/>
            {name.trim().length<=0 && <span>Este campo es necesario.</span> }
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
            <input type="password" placeholder="Password" name="password1" value={password1} onChange={onChange}/>
            <input type="password" placeholder="Repeat password" name="password2" value={password2} onChange={onChange}/>
            <button type="submit">Create</button>
            <button type="submit" onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}

