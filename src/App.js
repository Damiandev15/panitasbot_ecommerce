import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './containers/auth/Signup';
import Login from './containers/auth/Login';
import Activate from './containers/auth/Activate';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';

import Home from './containers/Home';
import Error404 from './containers/errors/Error404';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />

          {/* Auth Routes */}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/password-confirm" element={<ResetPasswordConfirm />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
