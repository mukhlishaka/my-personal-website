import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
            <FooterSection />
        </>
    )
}

export default Home