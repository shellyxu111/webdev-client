"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { users, createUser, updateUser, deleteUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [user, setUser] = useState<User>(emptyUser);

  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
    ),
  );

  function addUser() {
    if (!user.firstName.trim() || !user.lastName.trim()) return;

    const newUser = createUser(user);
    enroll(newUser._id, cid);
    setUser(emptyUser);
  }

  function removeUser(userId: string) {
    for (const enrollment of enrollments) {
      if (enrollment.user === userId) {
        unenroll(userId, enrollment.course);
      }
    }

    deleteUser(userId);
    if (user._id === userId) setUser(emptyUser);
  }

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          id="wd-user-first-name"
          placeholder="First name"
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          id="wd-user-last-name"
          placeholder="Last name"
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <button
          id="wd-add-user-click"
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={addUser}
        >
          Add
        </button>
        <button
          id="wd-update-user-click"
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm"
          disabled={!user._id}
          onClick={() => updateUser(user)}
        >
          Update
        </button>
      </div>

      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <button type="button" onClick={() => setUser(user)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => removeUser(user._id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
