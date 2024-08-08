import React, { useState, useEffect } from 'react';
import { getCourse } from './api';
import EnquiryForm from './EnquiryForm';
import Modal from 'react-modal';
import Enquiries from './Enquiries';

import { getEnquiry } from './api';

// Set the app element for accessibility purposes
Modal.setAppElement('#root');

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalIsOpen, setModalIsOpen]=useState(false)

  const [enquiries,setEnquiries]=useState([])

  useEffect(()=>{
    const fetchEnquiry=async ()=>{
    const response=await getEnquiry()
    setEnquiries(response)
  };
  fetchEnquiry();
  },[])

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourse();
      setCourses(courses);
    };
    fetchCourses();
  }, []);



  const openModal = (course)=>{
    setSelectedCourse(course)
    setModalIsOpen(true)
  }

  const closeModal =()=>{
    setModalIsOpen(false)
    setSelectedCourse(null)
  }

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.description}
            <button onClick={() => openModal(course)}>Enquire</button>
          </li>
        ))}
      </ul>
<h2>Enquiry List</h2>
<ul>
  {enquiries.map(enquiry=>(
    <li key={enquiry.id}>
   <p> name: { enquiry.name}</p>
     {enquiry.id}
    </li>
  ))}
</ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enquiry Form"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)' // Dark background color with 75% opacity
          },
          content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
           backgroundColor:'white',
           padding:'5%'
          }
        }}
      >
        <button onClick={closeModal}>Close</button>
        {selectedCourse && (
          <EnquiryForm courseId={selectedCourse.id} courseName={selectedCourse.name} />
        )}
      </Modal>

      <Enquiries/>
    </div>
  );
};

export default CourseList;
