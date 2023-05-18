// import React, { useState, Fragment } from "react";
// import Form from "./components/Form";
// import Table from "./components/Table";

// function Profile() {
//   const [tableData, setTableData] = useState([]);

//   const [formObject, setFormObject] = useState({
//     firstname: "",
//     lastname: "",
//     address: "",
//   });

//   function onValChange(e) {
//     const { name, value } = e.target;
//     const finalValue = (res) => ({
//       ...res,
//       [name]: value,
//     });
//     setFormObject(finalValue);
//   }

//   function onFormSubmit(e) {
//     e.preventDefault();
//     const checkVal = !Object.values(formObject).every((res) => res === "");
//     if (checkVal) {
//       const dataObj = (data) => [...data, formObject];
//       setTableData(dataObj);
//       const isEmpty = { firstname: "", lastname: "", address: "" };
//       setFormObject(isEmpty);
//     }
//   }

//   return (
//     <Fragment>
//       <Form
//         onValChange={onValChange}
//         formObject={formObject}
//         onFormSubmit={onFormSubmit}
//       />
//       <Table tableData={tableData} />
//     </Fragment>
//   );
// }

// export default Profile;
