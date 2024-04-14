import { useState } from "react";
import style from './Students.module.css'

export function Students() {
  const [answer, setAnswer] = useState('...');
  const [count, setCount] = useState(0);

  const name = answer[count].name;
  const age = answer[count].age;
  const objLength = answer.length -1;

  const n = typeof name === 'undefined' ? '' : name;
  const a = typeof age === 'undefined' ? '' : `${age}metai`;
  
  const aboutStudents = `${n} ${a}`;
  
  function handleFormSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:4831/api/students')
      .then(res => res.json())
      .then(data => setAnswer(data))
      .catch(e => console.error(e));

      setCount(count < objLength ? count + 1 : count - objLength);
  }

  return (
    <>
      <main className={style.container}>
        <form onSubmit={handleFormSubmit}>
          <button>Info</button>
        </form>
        <div className={style.result} >{aboutStudents.length < 2 ? 'Press the button' : aboutStudents}</div>
      </main>
    </>
  );
}
