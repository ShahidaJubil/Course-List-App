import React, { useEffect, useState } from "react";
import { getCourse } from "./api";
import EnquiryForm from "./EnquiryForm";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const courses = await getCourse();
        setCourseList(courses);
      } catch (error) {
        console.log("error - courseList.js", error);
      }
    };
    getCourses();
  }, []);

  return (
    <div>
      courses
      {courseList &&
        courseList.map((course) => (
          <li key={course.id}>
            {course.name} :- {course.description}
          </li>
        ))}
        <EnquiryForm/>
    </div>
  );
};

export default CourseList;
