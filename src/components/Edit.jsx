import React, { useState } from "react";

const Edit = ({
  id,
  firstname,
  lastname,
  address,
  filteredList,
  setFilteredList,
  setUpdateState,
}) => {
  const [data, setData] = useState({
    firstname: firstname,
    lastname: lastname,
    address: address,
  });

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleUpdate(e) {
    e.preventDefault();
    setUpdateState(-1);
    const newFilteredList = filteredList.map((student) =>
      student.id === id ? { ...student, ...data } : student
    );
    setFilteredList(newFilteredList);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          name="firstname"
          value={data.firstname}
          onChange={handleInput}
        />
      </td>
      <td>
        <input
          type="text"
          name="lastname"
          value={data.lastname}
          onChange={handleInput}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleInput}
        />
      </td>
      <td>
        <button type="Submit" onClick={handleUpdate}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default Edit;
