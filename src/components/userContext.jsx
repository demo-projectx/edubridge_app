import React, { createContext, useState, useContext } from "react";

// Create User Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  // Placeholder user role state, in practice, this will be fetched from an API or authentication provider
  const [userRole, setUserRole] = useState("teacher"); // 'parent', 'teacher', 'student'

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use User Context
export const useUser = () => useContext(UserContext);
