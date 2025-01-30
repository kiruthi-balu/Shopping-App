import React from "react";
import "./Contact.css";

function Contact({ setName }) {
  const addName = (event) => {
    event.preventDefault();
    let name = event.target.uname.value;
    setName(name);
  };
  return (
    <div>
      <div id="User_Form">
        <form onSubmit={addName}>
          <h1>User Registration Form</h1>
          <table>
            <tr>
              <td>
                <h4>User Name</h4>
              </td>
              <td>
                <input type="text" name="uname" placeholder="Enter User name" />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Enter User Number</h4>
              </td>
              <td>
                <input
                  type="number"
                  name="unumber"
                  placeholder="Enter User Number"
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4>Enter User Email</h4>
              </td>
              <td>
                <input
                  type="email"
                  name="uemail"
                  placeholder="Enter User Email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Contact;
