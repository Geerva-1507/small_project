import React, { useState } from "react";

function Registration({formData, setFormData}) {
  return (
    <div className="register">
      <div className="input-wrapper">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Enter Your Full Name"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Enter Your Email"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="Enter Your Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
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

  console.log(rgisterFormData);

  return (
    <div className="unauth-page-container">
      <div className="unauth-tab-view-container">
        <button
          onClick={() => setIsLoginView(false)}
          formData={rgisterFormData}
          setFormData={setRegisterFormData}
        >
          Register View
        </button>
        <button
          onClick={() => setIsLoginView(true)}
          formData={loginFormData}
          setFormData={setLoginFormData}
        >
          Login View
        </button>
      </div>
      {isLoginView ? <Login /> : <Registration />}
    </div>
  );
}

export default UnauthPage;
