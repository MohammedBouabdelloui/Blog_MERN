import { useState } from "react";


const Register = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    async function register(ev){
        ev.preventDefault();

        await fetch('http://localhost:5000/register' , {
            method :  'POST' ,
            body :JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        })
    }

    return ( 
    <div className="register" >
        <h1>Register</h1>

        <form onSubmit={register}>
            <input type="text" placeholder="username"
             value={username} 
            onChange={ev => setUsername(ev.target.value)}
            />

            <input type="password" placeholder="password" 
            value={password} 
            onChange={ev=> setPassword(ev.target.value)} 
            />

            <button>registert</button>
        </form>
    </div> );
}
 
export default Register;