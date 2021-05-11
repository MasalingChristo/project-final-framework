import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm />
    return(

        <ChatEngine
            height="100vh"
            projectID="90ae6b1b-0545-45bf-9ac8-b7b528144def"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps} />}

        />

    );
}

export default App;