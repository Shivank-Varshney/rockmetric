import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    age: "",
    maritalStatus: "",
    primaryEd: "",
    secondaryEd: "",
    graduate: "",
  });
  const [dataAf, setDataAf] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    age: "",
    maritalStatus: "",
    primaryEd: "",
    secondaryEd: "",
    graduate: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitEvent = (e) => {
    e.preventDefault();
    setDataAf({
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      gender: data.gender,
      age: data.age,
      maritalStatus: data.maritalStatus,
      primaryEd: data.primaryEd,
      secondaryEd: data.secondaryEd,
      graduate: data.graduate,
    });
  };

  return (
    <>
      <section id="formPage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <form onSubmit={submitEvent}>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      value={data.fname}
                      onChange={inputEvent}
                      placeholder="First Name"
                      id="FirstName"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      value={data.lname}
                      onChange={inputEvent}
                      placeholder="Last Name"
                      id="LastName"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="Email">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={data.email}
                      onChange={inputEvent}
                      placeholder="Email Id"
                      id="Email"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="Gender">Gender</label>
                    <select
                      id="Gender"
                      className="form-control"
                      name="gender"
                      value={data.gender}
                      onChange={inputEvent}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="Age">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={data.age}
                      onChange={inputEvent}
                      placeholder="Age"
                      id="Age"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="MaritalStatus">Marital Status</label>
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="radio"
                          id="Single"
                          name="maritalStatus"
                          value="single"
                          onChange={inputEvent}
                          className="radioBtn"
                        />
                        <label htmlFor="Single">Single</label>
                      </div>
                      <div className="col-6">
                        <input
                          type="radio"
                          id="Married"
                          name="maritalStatus"
                          value="married"
                          onChange={inputEvent}
                          className="radioBtn"
                        />
                        <label htmlFor="Married">Married</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="Qualification">Qualification</label>
                    <div className="row">
                      <div className="col-4">
                        <input
                          type="checkbox"
                          id="10th"
                          name="primaryEd"
                          value="10th"
                          onChange={inputEvent}
                          className="checkBox"
                        />
                        <label htmlFor="10th">10th</label>
                      </div>
                      <div className="col-4">
                        <input
                          type="checkbox"
                          id="12th"
                          name="secondaryEd"
                          value="12th"
                          onChange={inputEvent}
                          className="checkBox"
                        />
                        <label htmlFor="12th">12th</label>
                      </div>
                      <div className="col-4">
                        <input
                          type="checkbox"
                          id="graduate"
                          name="graduate"
                          value="B.Tech"
                          onChange={inputEvent}
                          className="checkBox"
                        />
                        <label htmlFor="graduate">B.Tech</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="submitBtn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <div className="rightCard">
                <ul>
                  <li>
                    Full Name <span>{`${dataAf.fname} ${dataAf.lname}`}</span>
                  </li>
                  <li>
                    Email Id<span>{dataAf.email}</span>
                  </li>
                  <li>
                    Gender<span>{dataAf.gender}</span>
                  </li>
                  <li>
                    Age<span>{dataAf.age}</span>
                  </li>
                  <li>
                    Marital Status<span>{dataAf.maritalStatus}</span>
                  </li>
                  <li>
                    Qualification
                    <span>{`${dataAf.primaryEd} ${dataAf.secondaryEd} ${dataAf.graduate}`}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
