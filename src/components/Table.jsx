import React, { useState } from "react";
import Edit from "./Edit";
import DefaultList from "../Data";
export default function Table() {
  const [list, setList] = useState(DefaultList);
  const [filteredList, setFilteredList] = useState(DefaultList);

  const defaultData = {
    id: Date.now(),
    firstname: "",
    lastname: "",
    address: "",
  };

  const [addFormData, setAddFormData] = useState(defaultData);

  const [updateState, setUpdateState] = useState(-1);

  function onValChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let newValue = (res) => ({
      ...res,
      [name]: value,
    });
    setAddFormData(newValue);
  }

  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = list;
    console.log(updatedList);
    updatedList = updatedList.filter(
      (item) => item.firstname.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredList(updatedList);
  };

  function onFormSubmit(e) {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      firstname: addFormData.firstname,
      lastname: addFormData.lastname,
      address: addFormData.address,
    };
    const newStudents = [newStudent, ...list];
    setList(newStudents);
    setFilteredList(newStudents);
    setAddFormData(defaultData);
  }

  // Delete
  function onDelete(id) {
    console.log(id);
    let updatedList = filteredList.filter((item) => item.id !== id);
    setFilteredList(updatedList);
    setList(updatedList);
  }
  // Edit
  function onEdit(id) {
    console.log(id);
    console.log(updateState);
    setUpdateState(id);
  }

  return (
    <div className="container">
      {/* <button className="add-btn">+ Add New</button> */}
      <div>
        <form action="/action_page.php" />
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          onChange={onValChange}
          value={addFormData.firstname}
        />

        <label>Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          onChange={onValChange}
          value={addFormData.lastname}
        />

        <label>address</label>
        <input
          type="text"
          placeholder="Your address.."
          name="address"
          onChange={onValChange}
          value={addFormData.address}
        />
        <input type="submit" value="Add" onClick={onFormSubmit} />
      </div>

      <input
        type="text"
        placeholder="Search student"
        className="search"
        onChange={filterBySearch}
      />
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>address</th>
            <th>Action</th>
          </tr>
          {filteredList.map(({ firstname, lastname, address, id }) => {
            return updateState === id ? (
              <Edit
                setUpdateState={setUpdateState}
                setFilteredList={setFilteredList}
                filteredList={filteredList}
                firstname={firstname}
                lastname={lastname}
                address={address}
                key={id}
                id={id}
              />
            ) : (
              <tr key={id}>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{address}</td>
                <td>
                  <button
                    onClick={() => onEdit(id)}
                    className="action edit-btn"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <span> || </span>
                  <button
                    onClick={() => onDelete(id)}
                    className="action delete-btn"
                  >
                    <i className="fa-solid fa-trash-can"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
          <td>Azizbek</td>
          <td>Juraev</td>
          <td>Namangan city</td>
          <td>
            <button>Edit</button>
            <span>||</span>
            <button>Delete</button>
          </td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
}
