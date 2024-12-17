
import React, { useEffect, useState } from 'react';

function Curriculum() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('/api/lessons')
      .then((response) => response.json())
      .then((data) => setLessons(data));
  }, []);

  return (
    <div>
      <h2>Bootcamp Curriculum</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Curriculum;
