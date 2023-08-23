
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './health/Home';
import Home1 from './placement/Home'
import {
  createBrowserRouter,
  RouterProvider,
}
  from 'react-router-dom';
import About from './components/About';
import './static/about.css'
import Cold from './health/Cold';
import Cough from './health/Cough';
import Fever from './health/Fever';
import Allergies from './health/Allergies';
import Headache from './health/Headache';
import Prehome from './components/Prehome';
import VideoCourse from './placement/VideoCourse';
import TextCourse from './placement/TextCourse';
import ProgramPractice from './placement/ProgramPractice';
import InterviewT from './placement/InterviewT';
import InterviewH from './placement/InterviewH';
import SkinInfection from './health/SkinInfection';
import Digestion from './health/Digestion';
import SkinProblems from './health/SkinProblems';
import HairLoss from './health/Hairloss';
import SleepIssue from './health/SleepIssue';
import Malaria from './health/Malaria';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/health',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>

  },
  {
    path:'/health/cold',
    element:<Cold/>
  },
  {
    path:"/health/cough",
    element:<Cough/>
  },
  {
    path:'/health/fever',
    element:<Fever/>
  },
  {
    path:'/health/allergies',
    element:<Allergies/>
  },
  {
    path:'health/headache',
    element:<Headache/>
  },
  {
    path:'health/skin-infection',
    element:<SkinInfection/>
  },
  {
    path:'health/skin-problems',
    element:<SkinProblems/>
  },
  {
    path:'health/hair-loss',
    element:<HairLoss/>
  },
  {
    path:'health/sleep-issue',
    element:<SleepIssue/>
  },
  {
    path:'health/digestion',
    element:<Digestion/>
  },
  {
    path:'health/malariya',
    element:<Malaria/>
  },
  {
    path:'placement',
    element:<Home1/>
  },
  {
    path:'/placement/video-courses',
    element:<VideoCourse/>
  },
  {
    path:'/placement/text-course',
    element:<TextCourse/>
  },
  {
    path:'/placement/practice',
    element:<ProgramPractice/>
  },
  {
    path:'/placement/tech-interview',
    element:<InterviewT/>
  },
  {
    path:'/placement/hr-interview',
    element:<InterviewH/>
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
