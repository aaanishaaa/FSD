import React from 'react';

const Register = () => {
    async function sendData(e) {
        e.preventDefault();
        const { name, email, password } = e.target;
        const response = await fetch('http://localhost:3007/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value,   
            }),
        });
        const data = await response.json();
        console.log(data);
        alert(data.msg);
    }

    return (
        <div style={{
            maxWidth: '400px',
            margin: '40px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9'
        }}>
            <h3 style={{ marginBottom: '15px' }}>Register</h3>
            <form onSubmit={sendData}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        style={{
                            display: 'block',
                            width: '100%',
                            marginTop: '5px',
                            padding: '8px'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email address</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            display: 'block',
                            width: '100%',
                            marginTop: '5px',
                            padding: '8px'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        style={{
                            display: 'block',
                            width: '100%',
                            marginTop: '5px',
                            padding: '8px'
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
