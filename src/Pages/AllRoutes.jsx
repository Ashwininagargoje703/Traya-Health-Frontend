import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import FeedbackForm from "../Components/Feedback";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FeedbackForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
