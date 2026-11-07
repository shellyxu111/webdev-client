"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();

  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const canManageCourses =
    !currentUser ||
    currentUser.role === "FACULTY" ||
    currentUser.role === "ADMIN";

  function isEnrolled(courseId: string) {
    return enrollments.some(
      (e) => e.user === currentUser?._id && e.course === courseId,
    );
  }

  const visibleCourses =
    canManageCourses || showAllCourses
      ? courses
      : courses.filter((course) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between gap-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            aria-pressed={showAllCourses}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      {canManageCourses && (
        <>
          <h5 className="flex flex-wrap items-center gap-2">
            New Course
            <button
              type="button"
              id="wd-add-new-course-click"
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
              onClick={() => addCourse(course)}
            >
              Add
            </button>
            <button
              type="button"
              id="wd-update-course-click"
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              onClick={() => updateCourse(course)}
            >
              Update
            </button>
          </h5>

        <input
          id="wd-course-name"
          aria-label="Course name"
          className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />

        <textarea
          id="wd-course-description"
          aria-label="Course description"
          className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
          rows={3}
          value={course.description}
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />

        <input
          id="wd-course-number"
          aria-label="Course number"
          className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
          value={course.number}
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />

        <input
          type="date"
          id="wd-course-start-date"
          aria-label="Course start date"
          className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        </>
      )}

      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            canManage={canManageCourses}
            enrollmentAction={
              currentUser && showAllCourses ? (
                isEnrolled(c._id) ? (
                  <button
                    type="button"
                    className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
                    onClick={() => unenroll(currentUser._id, c._id)}
                  >
                    Unenroll
                  </button>
                ) : (
                  <button
                    type="button"
                    className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
                    onClick={() => enroll(currentUser._id, c._id)}
                  >
                    Enroll
                  </button>
                )
              ) : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
