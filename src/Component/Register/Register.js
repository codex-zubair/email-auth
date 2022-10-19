import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../../Firebase/Firebase.config';

const Register = () => {
    // Authentication Setup Start
    const auth = getAuth(app);
    // Authentication Setup End


    //Firebase User State Set start
    const [loginUser, setLoginUser] = useState({});
    //Firebase User State Set End



    //  Error Start
    const [ErrorState, setErrorState] = useState('Please Set Password');
    //  Error End




    const submitForm = (event) => {
        event.preventDefault();



        const email = event.target.email.value;
        const password = event.target.password.value;
        const form = event.target;


        if (password.length < 5) {
            setErrorState("Password Must be 6 Character!")
            return;
        }



        if (!/[A-Z] *[A-Z]/.test(password)) {
            setErrorState("Please provide at Least Two upper case!");
            return;
        }

        if (!/[!#%^*@]/.test(password)) {
            setErrorState("Please Provide at least one Special Character");
            return;
        }



        // Creating User with Email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setLoginUser(result.user);
                setErrorState("User Created Successful!");
                form.reset();
                console.log(loginUser);
            })
            .catch(error => setErrorState(error.message));



            


        
        



    }
    return (
        <div>
            <h1>
                Sign Up
            </h1>

            <form onSubmit={submitForm}>
                <input required type="text" name='email' placeholder='Email' />
                <br />
                <input required style={{ marginTop: '5px' }} name='password' type="text" placeholder='Password' />
                <br />
                <p>{ErrorState}</p>
                <button style={{ marginTop: '5px' }} type='submit'>Register</button>

            </form>
        </div>
    );
};

export default Register;