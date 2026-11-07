"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];
export const emptyUser: User = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  createUser: (user: User) => User;
  updateUser: (user: User) => void;
  deleteUser: (userId: string) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(usersJson);

  function createUser(user: User) {
    const newUser = { ...user, _id: crypto.randomUUID() };
    setUsers((current) => [...current, newUser]);
    return newUser;
  }

  function updateUser(user: User) {
    setUsers((current) =>
      current.map((item) => (item._id === user._id ? user : item)),
    );
  }

  function deleteUser(userId: string) {
    setUsers((current) => current.filter((user) => user._id !== userId));
  }
  return (
    <AccountContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
