import React from "react";
import list from "../Data";
import { useState } from "react";
export default function Table() {
  const [filteredList, setFilteredList] = new useState(list);

  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = [...list];
    console.log(updatedList);
    updatedList = updatedList.filter(
      (item) => item.firstname.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredList(updatedList);
  };

  return (
    <div className="container">
      <button className="add-btn">+ Add New</button>
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
            <th>Adress</th>
            <th>Action</th>
          </tr>
          {filteredList.map(({ firstname, lastname, adress, id }) => {
            return (
              <tr key={id}>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{adress}</td>
                <td>
                  <button className="action edit-btn">
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <span> || </span>
                  <button className="action delete-btn">
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
