import React, { useState } from "react";
import { addEnquiry } from "./api";

const EnquiryForm = ({ courseId,courseName }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enquiry = { courseId, name, mail };
    
    try {
      await addEnquiry(enquiry);
      setMail("");
      setName("");
      console.log("set name",name)
      alert("Form submission successful");
    } catch (error) {
      console.log("Form upload error", error);
      alert("Failed upload form data");
    }
  };
console.log("course ID ",courseId)
  return (
    <div>
      <h2>EnquiryForm</h2>
      <p>Course Name : {courseName}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
