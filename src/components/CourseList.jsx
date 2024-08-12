import React, { useState, useEffect } from "react";
import { getCourse } from "./api";
import EnquiryForm from "./EnquiryForm";
import Modal from "react-modal";
import "./course.css";
import { useNavigate } from "react-router-dom";

// Set the app element for accessibility purposes
Modal.setAppElement("#root");

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleEnquiriesClick = () => {
    navigate("/enquiries"); // Redirect to the enquiries page
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourse();
      setCourses(courses);
    };
    fetchCourses();
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="main">
      <div className="coursePage">
        <h1>Course List App</h1>
        <div className="sections">
          <h1></h1>
          <button onClick={handleEnquiriesClick}>User Enquiries</button>
        </div>
        <table className="courseTable">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <button onClick={() => openModal(course)}>Enquire</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Enquiry Form"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark background color with 75% opacity
            },
            content: {
              top: "40%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "5%",
            },
          }}
        >
          <button onClick={closeModal}>Close</button>
          {selectedCourse && (
            <EnquiryForm
              courseId={selectedCourse.id}
              courseName={selectedCourse.name}
            />
          )}
        </Modal>

        {/* <Enquiries /> */}
      </div>
    </div>
  );
};

export default CourseList;
