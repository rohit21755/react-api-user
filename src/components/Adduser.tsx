import React from "react";

const Adduser = ({ onAdd }:{onAdd:any}) => {

const handleOnSubmit = (e:any) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default Adduser;
