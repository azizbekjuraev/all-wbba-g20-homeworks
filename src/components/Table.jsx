import React from "react";
import list from "../Data";
export default function Table() {
  return (
    <div className="container">
      <button className="add-btn">+ Add New</button>
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
          {list.map(({ firstname, lastname, adress, id }) => {
            return (
              <tr key={id}>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{adress}</td>
                <td>
                  <button className="action edit-btn">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <span> || </span>
                  <button className="action delete-btn">
                    <i class="fa-solid fa-trash-can"></i> Delete
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
