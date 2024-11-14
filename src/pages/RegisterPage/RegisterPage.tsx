import { FC, useRef, useState } from 'react';
import useForm from '../../hooks/useForm';
import { useAppDispatch } from '../../hooks/useDispatchType';
import { register } from '../../store/features/usersSlice';
import { useNavigate } from 'react-router-dom';
import { OrganizationName } from '../../types/userModel';

interface FormState {
  [key: string]: string;
}

const Register: FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  
  const organizationsRef = useRef<HTMLSelectElement>(null);
  const zoneRef = useRef<HTMLSelectElement>(null);
  
  console.log('organizationName', organizationsRef.current?.value);
  console.log('zone', zoneRef.current?.value);

  const initialValues: FormState = {
    username: '',
    password: '',
   
  }

  const onSubmit = (values: FormState) => {
    dispatch(register({ username: values.username, password: values.password, organizationName: organizationsRef.current?.value, zone: zoneRef.current?.value  })).then(
      (action) => {
        if (register.fulfilled.match(action)) {
          navigate("/login");
        }
      }
    );
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
  });
  
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username:
          <input
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Register</button>
        <select name="organizationName" id="organization" ref={organizationsRef}>
          <option value="">Select an organization"</option>
          <option value="IDF" id='IDF'>IDF</option>
          <option value="Hezbollah">Hezbollah</option>
          <option value="Hamas">Hamas</option>
          <option value="IRGC">IRGC</option>
          <option value="Houthis">Houthis</option>


        </select>
        <select name="zone" id="zone" ref={zoneRef}>
        <option value="">Select an zone"</option>
          <option value="North">NORTH</option>
          <option value="South">SOUTH</option>
          <option value="Center">CENTER</option>
          <option value="judea and samaria">JUDEA AND SAMARIA</option>
        </select>
        
      </form>
      
    </div>
  );
};

export default Register;