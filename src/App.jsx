import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Component from './Components/Component';
function App() {
  const jobs = [ // here we have created a array of object so we can give diff prop to each card
    {
      title: "Frontend Developer",
      desc: "React developer needed for UI work",
      price: 25,
      time: "2 days ago"
    },
    {
      title: "Backend Developer",
      desc: "Node.js API development",
      price: 30,
      time: "1 day ago"
    },
    {
      title: "Full Stack Developer",
      desc: "MERN stack project",
      price: 40,
      time: "3 days ago"
    },
    {
      title: "UI Designer",
      desc: "Figma + UX design",
      price: 20,
      time: "5 hours ago"
    },
    {
      title: "Java Developer",
      desc: "Spring Boot project",
      price: 35,
      time: "4 days ago"
    },
    {
      title: "Python Developer",
      desc: "Django backend work",
      price: 28,
      time: "6 days ago"
    },
    {
      title: "Data Analyst",
      desc: "Excel + SQL work",
      price: 22,
      time: "2 hours ago"
    },
    {
      title: "DevOps Engineer",
      desc: "AWS + CI/CD",
      price: 45,
      time: "1 week ago"
    },
    {
      title: "Mobile App Dev",
      desc: "React Native app",
      price: 33,
      time: "3 hours ago"
    },
    {
      title: "Tester",
      desc: "Manual + Automation testing",
      price: 18,
      time: "1 day ago"
    }
  ];
  return (
   <div className="container d-flex flex-wrap justify-content-center">
  {jobs.map((job,index)=>(
    <Component
    key={index}
    title={job.title}
    desc={job.desc}
    price={job.price}
    time={job.time}
    />
     ))}
   </div>
 
  )
}

export default App
