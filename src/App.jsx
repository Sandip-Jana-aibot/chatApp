import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ProfileUpdate from "./pages/profileUpdate/profileUpdate";
import { useEffect } from "react";
import { auth } from "./config/firebase";

function App() {
  const navigate = useNavigate()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        navigate("/chat");
      } else {
        // User is logged out
        navigate("/");
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </div>
  );
}
export default App;
