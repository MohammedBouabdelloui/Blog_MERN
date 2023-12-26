const Register = () => {
    return ( 
    <div className="register">
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <input type="text" placeholder="password reset" />
            <button>registert</button>
        </form>
    </div> );
}
 
export default Register;