import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AdminDashboard from "./pages/adminpage";
import HRDashboard from "./pages/hrpage";
import EmployeeDashboard from "./pages/employeepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/hr-dashboard" element={<HRDashboard />} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
    </Routes>
  );
}

export default App;
