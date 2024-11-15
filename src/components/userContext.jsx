import React, { createContext, useState, useContext } from "react";

// Create User Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  // Placeholder user role state, in practice, this will be fetched from an API or authentication provider

  const [user, setUser] = useState({
    name: "Abu",
    role: "teacher",
    email: "abc@abc.com",
    id: "00011",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use User Context
export const useUser = () => useContext(UserContext);
