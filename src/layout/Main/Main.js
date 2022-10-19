import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <div style={{display:'grid', gridTemplateColumns:'5fr 1fr'}}>
           <h2>Header Main Section </h2>
           <Link to='/'>Login</Link>
           </div>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;