import { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';

export function Register(){

    const { register, handleSubmit, formState, watch, reset } = useForm();

    let [dataForm, setDataForm] = useState();

    // UN ESTADO: Se actualiza cada vez que un input se modifica para validar si los datos son correctos o posibles...

    return(
        <form className="form" onSubmit={ handleSubmit((data) => {
            localStorage.setItem("form", JSON.stringify(data));

            setDataForm(data);
            reset();

            console.log("Data: ", JSON.parse(localStorage.getItem("form")));
        }) }>
            <div className="space-color">
                 <img src="plant.png" />
            </div>
            <div className="white-space"></div>

            <img className="star" src="star.png" />

            <h2>Registrarse</h2>

            <div className="input-sector">
                { formState.errors.nombre && <span>{formState.errors.nombre.message}</span> }
                <input type="text" className="input" { ...register("nombre", {
                    required: {
                        value: true,
                        message: "El nombre es obligatorio"
                    },
                    minLength: {
                        value: 2,
                        message: "El nombre debe tener al menos 2 caracteres"
                    },
                    maxLength: {
                        value: 24,
                        message: "El nombre no puede tener más de 24 caracteres"
                    },
                    pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Este nombre no es valido",
                    }
                }) } />
                <label>Nombre Completo</label>
            </div>
            <div className="input-sector">
                { formState.errors.correo && <span>{formState.errors.correo.message}</span> }
                <input type="text" className="input" { ...register("correo", {
                    required: {
                        value: true,
                        message: "El correo es obligatorio"
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Este correo no es valido",
                    }
                }) } />
                <label>Correo electrónico</label>
            </div>
            <div className="input-sector">
                { formState.errors.pass && <span>{formState.errors.pass.message}</span> }
                <input type="password" className="input" { ...register("pass", {
                    required: {
                        value: true,
                        message: "La contraseña es obligatoria"
                    },
                    minLength: {
                        value: 8,
                        message: "La contraseña debe tener mínimo 8 caracteres"
                    },
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[\W]).+$/,
                        message: "Debe tener 1 mayúscula y 1 simbolo"
                    }
                }) } />
                <label>Contraseña</label>
            </div>
            <div className="input-sector">
                { formState.errors.passtwo && <span>{formState.errors.passtwo.message}</span> }
                <input type="password" className="input" { ...register("passtwo", {
                    required: {
                        value: true,
                        message: "La contraseña es obligatoria"
                    },
                    validate: () => {
                        if (watch("pass") !== watch("passtwo")) {
                            return "Las contraseñas no coinciden"
                        }
                    },
                }) } />
                <label>Repetir Contraseña</label>
            </div>
            <input type="submit" className="button" />
        </form>
    );
}