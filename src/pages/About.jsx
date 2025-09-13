import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold text-blue-500">Karthick Raja</span>, a passionate full-stack developer with experience in 
          building modern web applications using <span className="font-medium">React</span> for the frontend and 
          <span className="font-medium"> Python + PostgreSQL</span> on the backend. I enjoy solving problems, building 
          scalable apps, and continuously learning new technologies.
        </p>
      </div>
    </section>
  );
}
