import React, { useState } from "react";
import { addEnquiry } from "./api";

const EnquiryForm = ({ courseId }) => {
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
      alert("Form submission successful");
    } catch (error) {
      console.log("Form upload error", error);
      alert("Failed upload form data");
    }
  };

  return (
    <div>
      <h2>EnquiryForm</h2>
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
