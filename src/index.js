import React from 'react';
import ReactDOM from 'react-dom';
import {CometChat} from '@cometchat-pro/chat';

import App from './components/App';
import config from './config';

CometChat.init(config.appID);

ReactDOM.render(<App />, document.getElementById('root'));
