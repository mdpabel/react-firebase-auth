import "milligram/dist/milligram.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./contexts/auth-context";
import { AuthProvider } from "./contexts/auth-context";
import FourOFour from "./screens/FourOFour";
import Login from "./screens/Login";
import Me from "./screens/Me";
import ResetPassword from "./screens/ResetPassword";
import Signup from "./screens/Signup";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <PrivateRoute path="/me" element={<Me />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
