import { useState } from "react";

function Registration() {
  return (
    <div className="register">
      <div className="input-wrapper">
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button>Register</button>
    </div>
  );
}

function Login() {
  return (
    <div className="login">
      <div className="input-wrapper">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button>Login</button>
    </div>
  );
}

function UnauthPage() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [rgisterFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
      email: "",
      password: "",
    });
  const handleRegisterFormChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginFormChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
  });
}
  return (
    <div className="unauth-page-container">
      <div className="unauth-tab-view-container">
        <button onClick={() => setIsLoginView(false)}>Register View</button>
        <button onClick={() => setIsLoginView(true)}>Login View</button>
      </div>
      {
        isLoginView ? <Login formData={loginFormData} setFormData={setLoginFormData} /> : <Registration formData={rgisterFormData} setFormData={setRegisterFormData} />
      }
    </div>
  );
}

export default UnauthPage;
