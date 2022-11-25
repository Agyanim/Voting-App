import React, { useState } from "react";

const Forms = () => {
  const person = {
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    isResgistered: false,
    program: [],
  };
  const [student, setStudent] = useState(person);
  const { fullName, email, dob, gender, isResgistered, program } = student;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const checkHandler = (e) => {
    const { checked } = e.target;
    setStudent({ ...student, isResgistered: checked });
  };
  console.log(student);

  return (
    <div className="flex justify-center">
      <section className="bg-blue-300 w-[90vw]  h-[90vh] my-[5%] rounded-md ">
        <div className="text-center mt-4 p-4">
          <p className="text-2xl font-extrabold text-white">
            REGISTRATION FORM
          </p>
        </div>
        <div className=" w-[95%] m-auto">
          <form action="#">
            <div className=" text-black/80 w-[100%] p-5">
              <div className="flex flex-col gap-4 w-[98%] [&_input]:py-3 [&_input]:pl-4 [&_input]:rounded-md">
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={changeHandler}
                  placeholder="Enter Name"
                />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  placeholder="Enter email"
                />

                <input
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={changeHandler}
                />
              </div>
              <div className="w-[80%] mt-2 [&_input]:ml-2">
                <label className="font-bold" htmlFor="gender">Gender</label>
                <br />
                <div className="">
                  <label htmlFor="male">Male</label>
                  <input className=""
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <section className="ml-0 relative  w-[80%]">
                <div className="mt-4  text-black/80 w-[80%]">
                  <label className="font-bold" htmlFor="program">Select Program: </label>
                  <select
                    className="px-8 py-2 rounded-md "
                    name="program"
                    value={program}
                    onChange={changeHandler}
                  >
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                  </select>
                </div>
                <div className="mt-4 text-black/80 w-[80%]">
                  <input
                    type="checkBox"
                    name="isRegistered"
                    value="Registered"
                    checked={isResgistered}
                    onChange={checkHandler}
                  />
                  <label className="ml-2" htmlFor="isRestered">Registered? :</label>
                </div>
              </section>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Forms;
