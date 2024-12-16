# useState

1. useState bu React hooki bo'lib, u komponentda ma'lumotlarni saqlash va o'zgartirish uchun ishlatiladi.

const [timer, setTimer] = useState(")

Bunda timer ozgaruvchi boladi, setTimer bosa shu ozgaruvchini ozgartiradigan funksiya hisoblanadi.



# useRef

useRef - bu DOM elementlariga toridan tori kirish imkonini beradi, bu bizani ishimizani ancha osonlashtiradi.

import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Input elementni fokus qiladi
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Fokus qil</button>
    </div>
  );
}



# useContext 


useContext - bu bizaga butun proyektga kere boladigan loyihalani boshqa komponentlada koddi boshqa qismida ishlatishga yordam beradi.
Bu bizaga **props drilling** ni olishga yordam beradi. Ya'ni uni parentb komponentdan childga props orqali otqazish shartamas.


# useEffect


useEffect Yon ta'sirlarni boshqarish uchun ishlatiladi (masalan, ma'lumot olish, taymer sozlash, DOMni o'zgartirish).
Qanday ishlaydi: Renderdan keyin ishlaydi va uni qachon ishlashini dependency orqali boshqarish mumkin.
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []); // Faqat bir marta ishlaydi

  return <div>{data ? data.title : 'Yuklanmoqda...'}</div>;
}
5. useReducer
Nima uchun kerak: Murakkab holatlar boshqaruvini soddalashtirish uchun ishlatiladi (bu useStatega alternativ).
Qanday ishlaydi: Bir funksiyani (reducer) va boshlang'ich holatni oladi, keyin holatni va uni o'zgartirish uchun "dispatch" funksiyasini qaytaradi.
Misol:



import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

