const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <div className="border w-40">
                <form>
                    <div>
                        <input placeholder="Email" className="border border-black-100" />
                    </div>
                    <div>
                        <input placeholder="Password" className="border border-black"></input>
                    </div>
                    <button className="w-full bg-red-400">Login</button>

                </form>
            </div>
        </>
    );
}

export default Login;