import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import {NotificationContainer} from 'react-notifications';

import Login from './Login';
import Chat from './Chat';

const App = () => {
  const [user, setUser] = useState(null);

  const renderApp = () => {
    // Render Chat component when user state is not null
    if (user) {
      return <Chat user={user} />;
    } else {
      return <Login setUser={setUser} />;
    }
  };

  return (
    <div className='container'>
      <NotificationContainer />
      {renderApp()}
    </div>
  );
};

export default App;
