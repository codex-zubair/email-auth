import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../Firebase/Firebase.config';

const Login = () => {


    //  Error Start
    const [Error, setError] = useState('');
    //  Error End



    const auth = getAuth(app)


    const submitForm = (event) => {
        event.preventDefault();



        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)


        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result))
        .catch(error => setError(error.message));
         

    }



    return (


        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 1fr' }}>
                <h1>Start Page</h1>

                <div>
                    <Link to='/'>Login</Link>
                    <Link>Sign Out</Link>
                </div>
            </div>

            <form onSubmit={submitForm}>

                <input required type="text" name='email' placeholder='Email' />
                <br />
                <input required style={{ marginTop: '5px' }} name='password' type="text" placeholder='Password' />
                <br />
                <p>{Error}</p>
                <button style={{ marginTop: '5px' }} type='submit'>Login</button>

                <p>New to this site: <Link to='/register'>Register</Link></p>
            </form>

        </div>


    );
};

export default Login;