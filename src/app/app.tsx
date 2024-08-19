import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/404';
import { BaseTemplate } from '@/templates/base';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseTemplate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
