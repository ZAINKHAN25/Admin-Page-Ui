import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoadingPage from './pages/LoadingPage/index.jsx';
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';
import AddStudent from './pages/AddStudent/index.jsx';
import AddCourse from './pages/AddCourse/index.jsx';
import GetCourses from './pages/GetCourses/index.jsx';
import ProfilePage from './pages/ProfilePage/index.jsx';
import ViewAttendence from './pages/ViewAttendence/index.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching initial data)
    const fetchData = async () => {
      // Simulate a delay (remove this in your actual implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Once data is loaded, set isLoading to false
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isLoading ? (
          <Route path="/*" element={<LoadingPage />} />
        ) : (
          <>
            <Route index element={<Home />} />
            <Route path="/view-attendence" element={<ViewAttendence />} />
            <Route path="/get-courses" element={<GetCourses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/admin-profile" element={<ProfilePage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
