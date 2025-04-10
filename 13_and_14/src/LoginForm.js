import React, { useState } from "react";  

function LoginForm() {  
  const [formData, setFormData] = useState({  
    username: "",  
    password: "",  
    city: "",  
    webServer: "",  
    role: "",  
    signOn: [],  
  });  

  const handleChange = (e) => {  
    const { name, value, type, checked } = e.target;  

    if (type === "checkbox") {  
      setFormData((prev) => ({  
        ...prev,  
        signOn: checked ? [...prev.signOn, value] : prev.signOn.filter((item) => item !== value),  
      }));  
    } else {  
      setFormData({ ...formData, [name]: value });  
    }  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    alert(JSON.stringify(formData, null, 2));  
  };  

  const handleReset = () => {  
    setFormData({  
      username: "",  
      password: "",  
      city: "",  
      webServer: "",  
      role: "",  
      signOn: [],  
    });  
  };  

  return (  
    <div style={{ width: "350px", margin: "auto", fontFamily: "Arial" }}>  
      <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>  
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>  
        <div style={{ display: "flex", justifyContent: "space-between" }}>  
          <label>Username:</label>  
          <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ width: "200px" }} />  
        </div>  
        <div style={{ display: "flex", justifyContent: "space-between" }}>  
          <label>Password:</label>  
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: "200px" }} />  
        </div>  
        <div style={{ display: "flex", justifyContent: "space-between" }}>  
          <label>City of Employment:</label>  
          <input type="text" name="city" value={formData.city} onChange={handleChange} required style={{ width: "200px" }} />  
        </div>  
        <div style={{ display: "flex", justifyContent: "space-between" }}>  
          <label>Web Server:</label>  
          <select name="webServer" value={formData.webServer} onChange={handleChange} required style={{ width: "208px" }}>  
            <option value="">-- Choose a server --</option>  
            <option value="server1">Server 1</option>  
            <option value="server2">Server 2</option>  
          </select>  
        </div>  
        <label>Please specify your role:</label>  
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>  
          <label><input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleChange} /> Admin</label>  
          <label><input type="radio" name="role" value="Engineer" checked={formData.role === "Engineer"} onChange={handleChange} /> Engineer</label>  
          <label><input type="radio" name="role" value="Manager" checked={formData.role === "Manager"} onChange={handleChange} /> Manager</label>  
          <label><input type="radio" name="role" value="Guest" checked={formData.role === "Guest"} onChange={handleChange} /> Guest</label>  
        </div>  
        <label>Single Sign-on to the following:</label>  
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>  
          <label><input type="checkbox" name="signOn" value="Mail" checked={formData.signOn.includes("Mail")} onChange={handleChange} /> Mail</label>  
          <label><input type="checkbox" name="signOn" value="Payroll" checked={formData.signOn.includes("Payroll")} onChange={handleChange} /> Payroll</label>  
          <label><input type="checkbox" name="signOn" value="Self-service" checked={formData.signOn.includes("Self-service")} onChange={handleChange} /> Self-service</label>  
        </div>  
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>  
          <button type="submit">Login</button>  
          <button type="button" onClick={handleReset}>Reset</button>  
        </div>  
      </form>  
    </div>  
  );  
}  

export default LoginForm;  