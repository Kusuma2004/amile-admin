import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import StudentsList from './components/StudentsList';
import MentorsList from './components/MentorsList';
import TransactionsList from './components/TransactionsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<StudentsList />} />
          <Route path="mentors" element={<MentorsList />} />
          <Route path="transactions" element={<TransactionsList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
