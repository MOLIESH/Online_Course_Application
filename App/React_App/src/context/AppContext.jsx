import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  /* =========================
     Load Session on Start
  ========================= */

  useEffect(() => {

    try {

      const savedUser =
        localStorage.getItem("user");

      const token =
        localStorage.getItem("token");

      const savedTheme =
        localStorage.getItem("theme");

      // Restore user only if token exists
      if (savedUser && token) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }

      // Restore theme
      if (savedTheme) {
        setTheme(savedTheme);
      }

    } catch (err) {

      console.error("Session restore error:", err);

      // Reset on error
      localStorage.clear();
      setUser(null);

    } finally {

      setLoading(false);

    }

  }, []);

  /* =========================
     Save Theme
  ========================= */

  useEffect(() => {

    localStorage.setItem("theme", theme);

  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        loading,
      }}
    >
      {!loading && children}
    </AppContext.Provider>
  );
}
