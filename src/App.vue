<template>
    <LoadingScreen />
    <ProgressBar />
    <div>
      <Header />
      <Navigation :activeSection="activeSection" />
      <main class="container">
        <AboutSection 
          ref="about" 
          :class="{visible: visibleSections.about}" 
          @enter-viewport="setActiveSection('about')" 
        />
        <ProjectsSection 
          ref="projects" 
          :class="{visible: visibleSections.projects}" 
          @enter-viewport="setActiveSection('projects')" 
          :projects="projects" 
        />
        <SkillsSection 
          ref="skills" 
          :class="{visible: visibleSections.skills}" 
          @enter-viewport="setActiveSection('skills')" 
          :skills="skills" 
        />
        <ContactSection 
          ref="contact" 
          :class="{visible: visibleSections.contact}" 
          @enter-viewport="setActiveSection('contact')" 
        />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { gsap } from 'gsap'
  import Header from './components/Header.vue'
  import Navigation from './components/Navigation.vue'
  import AboutSection from './components/AboutSection.vue'
  import ProjectsSection from './components/ProjectsSection.vue'
  import SkillsSection from './components/SkillsSection.vue'
  import ContactSection from './components/ContactSection.vue'
  import Footer from './components/Footer.vue'
  import LoadingScreen from './components/LoadingScreen.vue'
  import ProgressBar from './components/ProgressBar.vue'
  import { projects } from './data/projects'
  import { skills } from './data/skills'
  
  export default {
    name: 'App',
    components: {
      Header,
      Navigation,
      AboutSection,
      ProjectsSection,
      SkillsSection,
      ContactSection,
      Footer,
      LoadingScreen,
      ProgressBar
    },
    setup() {
      const activeSection = ref('about')
      const visibleSections = ref({
        about: false,
        projects: false,
        skills: false,
        contact: false
      })
      
      const setActiveSection = (section) => {
        activeSection.value = section
        visibleSections.value[section] = true
      }
      
      const updateProgressBar = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll/height) * 100
        document.querySelector('.progress-bar').style.width = scrolled + "%"
      }
      
      const handleScroll = () => {
        updateProgressBar()
      }
      
      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        
        // Initialize section visibility
        visibleSections.value.about = true
        
        // Hide loader
        setTimeout(() => {
          document.querySelector('.loader').classList.add('loaded')
        }, 1000)
      })
      
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
      
      return {
        activeSection,
        visibleSections,
        setActiveSection,
        projects,
        skills
      }
    }
  }
  </script>