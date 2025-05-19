<template>
    <section id="about">
      <div class="profile">
        <img src="/api/placeholder/150/150" alt="Profile Image" class="profile-img">
        <div>
          <h2>About Me</h2>
          <p>Hello! I'm a Computer Science major focused on building efficient, practical solutions. My approach is straightforward - I believe in clean code that gets straight to the point.</p>
          <p>I enjoy developing applications across multiple platforms, from Windows desktop apps to Android mobile experiences. My projects demonstrate my versatility with languages like C#, Java, and Python, as well as my ability to implement effective design patterns and architectures.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { onMounted } from 'vue'
  import { gsap } from 'gsap'
  
  export default {
    name: 'AboutSection',
    setup(props, { emit }) {
      onMounted(() => {
        // Check when this section enters viewport
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            emit('enter-viewport')
          }
        }, { threshold: 0.3 })
        
        observer.observe(document.querySelector('#about'))
        
        // GSAP animation
        gsap.from('.profile', {
          duration: 1,
          x: -50,
          opacity: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.profile',
            start: 'top 80%'
          }
        })
      })
    }
  }
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #333;
    border: 2px solid var(--accent-color);
    box-shadow: var(--glow-effect);
  }
  
  @media (max-width: 768px) {
    .profile {
      flex-direction: column;
      text-align: center;
    }
  }
  </style>