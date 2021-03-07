import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SocketContext, socket } from './Socket.js';

import { Chat } from './Components/Chat.js';
import { Join } from './Components/Join.js';
import {Footer} from './Components/Footer.js';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router basename="/MChat">
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
        <Footer />
      </Router>
    </SocketContext.Provider>

  );
}

export default App;
