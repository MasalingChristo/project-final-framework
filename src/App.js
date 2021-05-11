import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
    return(

        <ChatEngine
            height="100vh"
            projectID="90ae6b1b-0545-45bf-9ac8-b7b528144def"
            userName="javascriptmastery"
            userSecret="123123"
            renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps} />}

        />

    );
}

export default App;