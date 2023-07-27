import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import EnterOptions from "../EnterOptions/EnterOptions";
import { useContext, useState } from "react";
import { LocationContext } from "../../../context/locationContext";

const Register = () => {
  const { updateLocations } = useContext(LocationContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user: "",
    name: "",
    surname: "",
    birth_date: "",
    nationality: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const validations = {
      user: "El nombre de usuario es obligatorio.",
      name: "El nombre es obligatorio.",
      surname: "Los apellidos son obligatorios.",
      birth_date: "La fecha de nacimiento es obligatoria.",
      nationality: "Seleccione una nacionalidad.",
      email: "El email es obligatorio.",
      password: "La contraseña debe tener al menos 6 caracteres, una mayúscula y un dígito.",
      repeatPassword: "Las contraseñas no coinciden.",
    };

    const errors = {};

    for (const field in validations) {
      if (!formData[field]) {
        errors[field] = validations[field];
      }
    }

    if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = validations.repeatPassword;
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async(event) => {
    event.preventDefault();

    const { password, repeatPassword } = formData;

    // if (password !== repeatPassword) {
    //   alert("Las contraseñas no coinciden");
    //   return;
    // }
    const isValid = validateForm();

    if (isValid) {
    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Usuario registrado')
      } else{
        alert('Error al crear usuario')
      }
    } catch(error){
      console.log('error')
    }
    }
  }

  return (
    <>
      <BackButton />
      <section className="form-register">
        <h2 className="title-register">¡Hola! Regístrate para empezar</h2>
        <form className="form"  onSubmit={handleSubmit} >
          <label htmlFor="user">
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Nombre de usuario"
              value={formData.user}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange} /> 
            {errors.name && <span className="error-message">{errors.name}</span>}
          </label>
          <label htmlFor="surname">
            <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Apellidos"
            value={formData.surname}
            onChange={handleChange}/> 
            {errors.surname && <span className="error-message">{errors.surname}</span>}
          </label>
          <label htmlFor="birth_date">
            <input
            type="date"
            min="1950-01-01" 
            max="2018-12-31"
            id="birth_date"
            name="birth_date"
            placeholder="Fecha de nacimiento"
            value={formData.birth_date} 
            onChange={handleChange}/> 
            {errors.birth_date && <span className="error-message">{errors.birth_date}</span>}
          </label>
          <select htmlFor="nationality"  id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
          <option value="NULL">Seleccione una nacionalidad</option>
            <option value='ES'>ES</option>
            <option value="FR">FR</option>
            <option value="GR">GR</option>
          </select>
          {errors.nationality && <span className="error-message">{errors.nationality}</span>}
          <label htmlFor="email">
            <input 
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}/>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>          
          <label htmlFor="password">
            <input
              pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$"
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </label>
          <label htmlFor="repeatPassword">
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
            />
            {errors.repeatPassword && <span className="error-message">{errors.repeatPassword}</span>}
          </label>
          <button>Registrarse</button>
        </form>
        <EnterOptions />
      </section>
      <span className="login-link">
        ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar sesión</Link>
      </span>
    </>
  );
};

export default Register;
