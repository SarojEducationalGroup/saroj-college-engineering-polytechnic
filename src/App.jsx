import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ChairmanMessage from './pages/ChairmanMessage'
import AboutUsPage from './pages/AboutusPage'
import VisionMission from './pages/VisionAndMission'
import ResearchProjects from './pages/R&DProjects'
import CoursesOffered from './pages/CoursesOffered'
import TechnologiesDeveloped from './pages/TechnologiesDeveloped'
import AwardWinningProjects from './pages/AwardProjects'
import ResearchPublications from './pages/ResearchPublications'
import ContactPage from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFoundPage from './pages/NotFound'
import PlacementPage from './pages/PlacementsPage'

export default function App() {
  return (
   <Routes>
    <Route path='*' element={<NotFoundPage/>} />
   <Route path='/' element={<HomePage/>} />

    <Route path='/chairman-message' element={<ChairmanMessage/>} />
    <Route path='/about-scep' element={<AboutUsPage/>} />
    <Route path='/vision-mission' element={<VisionMission/>} />
    <Route path='/research-development' element={<ResearchProjects/>} />
    <Route path='/courses-offered' element={<CoursesOffered/>} />
    <Route path='/technologies-developed' element={<TechnologiesDeveloped/>} />
    <Route path='/award-winning-projects' element={<AwardWinningProjects/>} />
    <Route path='/research-and-publications' element={<ResearchPublications/>} />
    <Route path='/contact-us' element={<ContactPage/>} />
    <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
    <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
    <Route path='/placements' element={<PlacementPage/>} />






    
    

   </Routes>
  )
}
