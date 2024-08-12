import React, { useEffect, useState } from "react";
import { getEnquiry } from "./api";
import "./enquiries.css"; // Import CSS for styling the table

const Enquiries = () => {
  const [enquiries, setEnquiry] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const data = await getEnquiry();
        console.log("enq data", data);
        setEnquiry(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEnquiries();
  }, []);

  return (
    <div className="enquiryDiv">
      <h2  style={{ textAlign: "center" }}>User Enquiries</h2>
      <br />
      <table className="enquiryTable">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq) => (
            <tr key={enq.id}>
              <td>{enq.courseId}</td>
              <td>{enq.courseName}</td>
              <td>{enq.name}</td>
              <td>{enq.mail}</td>
              <td>{enq.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enquiries;
