import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses.js";
import Home from "./pages/Home.js";
import Login from "./component/auth/Login.js";
import Register from "./component/auth/Register.js";
import Detail from "./pages/Detail.js";
import Dashboard from "./pages/Dashboard.js";
// import DetailCourse from "./component/DetailCourse.js";
import DetailCoursePage from "./pages/DetailCoursePage.js";
import AddCourse from "./component/course/AddCourse.js";
import TableCourse from "./component/course/TableCourse.js";
import NotFound from "./component/NotFound.js";
import TableTrainer from "./component/trainer/TableTrainer.js";
import AddTrainer from "./component/trainer/AddTrainer.js";
import EditCourse from "./component/course/EditCourse.js";
import EditTrainer from "./component/trainer/EditTrainer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/detail" element={<Detail />}></Route> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/course/:id" element={<DetailCourse/>}></Route> */}

          <Route path="/course/:id" element={<DetailCoursePage />}></Route>
          <Route path="/course/add" element={<AddCourse />}></Route>
          <Route path="/course/edit/:id" element={<EditCourse />}></Route>
          <Route path="/table-course" element={<TableCourse />}></Route>

          <Route path="/table-trainer" element={<TableTrainer />}></Route>
          <Route path="/trainer/add" element={<AddTrainer />}></Route>
          <Route path="/trainer/edit/:id" element={<EditTrainer />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
