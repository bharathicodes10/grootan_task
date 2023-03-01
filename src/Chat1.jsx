import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Segment } from "semantic-ui-react";
import Thanks from './Thanks';

const Chat=() =>{
  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const steps = [
    {
      id: 'Greet',
      message: 'Hey there! welcome to Goods Return services!',
      trigger: 'Ask name'
    },
    {
      id: 'Ask name',
      message: 'Please enter your name',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, what do you want to do?',
      trigger: 'services',
    },
    {
      id: 'services',
      options: [
        { value: "Service", label: "Service", trigger: "Service" },
        { value: "Return", label: "Return", trigger: "Return" },
      ],
    },
    {
      id: 'Service',
      message: 'Thanks for choosing Service',
      end: true,
    },
    {
      id: 'Return',
      message: 'Sure! what is the reason for return?',
      trigger:'reason'
    },
    {
      id:'reason',
      options: [
        { value: "malfunction", label: "malfunction", trigger: "malfunction" },
        { value: "damage", label: "damage", trigger: "damage" },
      ],
    },
    {
      id:'damage',
      message:'Sorry to hear that! Can you describe more?',
      trigger:'desc0',
    },
    {
      id:'desc0',
      user:true,
      trigger:'ty',
    },
    {
      id:'ty',
      message:'sorry for your {previousValue} thanks for submitting',
      end:true,
    },
    {
      id:'malfunction',
      message:'Could you describe more?',
      trigger:'desc',
    },
    {
      id:'desc',
      user:true,
      trigger:'thanks',
    },
    {
      id:'thanks',
      message:'thanks for submitting',
      end:true,
    }
  ];

  return (
    <div>
      <ThemeProvider theme={theme}>
         <React.Fragment>
      <Segment floated="center">
        <ChatBot steps={steps} />
      </Segment>
    </React.Fragment>
      </ThemeProvider>
      </div>
    );
  
}

export default Chat;


