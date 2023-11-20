import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../Firebase';
import { UserAuth } from '../context/AuthContext';

const SendMessage = () => {
  const [value, setValue] = useState('');
  const { currentUser } = UserAuth();
  const handleSendMessage = async (e) => {
    // Menghindari Ketik Langsung Send
    e.preventDefault();

    if (value.trim() === '') {
      alert(' Harus  kata-kata bang ');
      return;
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, 'messages'), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    // Setelah hit enter Balik ke string kosong
    setValue('');
    console.log(value);
  };

  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
      <form onSubmit={handleSendMessage} className='px-2 containerWrap flex'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='input w-full focus:outline-none bg-white rounded-r-none'
          type='text'
        />
        <button
          type='submit'
          className='w-auto bg-slate-500 text-white rounded-r-lg px-5 text-sm'
        >
          send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
