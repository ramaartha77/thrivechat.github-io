import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../Firebase';
import Message from './Message';

const ChatBox = () => {
  const messageEndRef = useRef();
  const [messages, setMessages] = useState([]); // Fix typo here

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages); // Fix typo here
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className='pb-44 pt-20 containerWrap'>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default ChatBox;
