import { useState } from "react";

export default function Clubregistration() {
  const [data, setData] = useState({ name:"", email:"", dept:"" });

  const handle = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Registered Successfully ✔");
    console.log(data);
  };

  return (
    <form onSubmit={submit} style={{ width:"270px", margin:"50px auto" }}>
      <h3>Club Registration</h3>

      <input name="name" placeholder="Name" onChange={handle} required /><br /><br />
      <input name="email" placeholder="Email" type="email" onChange={handle} required /><br /><br />
      <input name="dept" placeholder="Department" onChange={handle} required /><br /><br />

      <button>Register</button>
    </form>
  );
}
