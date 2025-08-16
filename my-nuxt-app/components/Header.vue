<template>
  <header class="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="font-serif font-bold text-xl text-primary">Portfolio</div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-12 relative">
                     <div 
             class="absolute bottom-[-8px] h-0.5 bg-primary transition-all duration-300 ease-out"
             :style="{
               left: underlinePosition.left + 'px',
               width: underlinePosition.width + 'px'
             }"
           ></div>
          <button
            @click="scrollToSection('home')"
            class="nav-link"
            :class="{ 'nav-link-active': activeSection === 'home' }"
            ref="homeRef"
          >
            Home
          </button>
          <button
            @click="scrollToSection('projects')"
            class="nav-link"
            :class="{ 'nav-link-active': activeSection === 'projects' }"
            ref="projectsRef"
          >
            Projects
          </button>
          <button
            @click="scrollToSection('skills')"
            class="nav-link"
            :class="{ 'nav-link-active': activeSection === 'skills' }"
            ref="skillsRef"
          >
            Skills
          </button>
          <button
            @click="scrollToSection('contact')"
            class="nav-link"
            :class="{ 'nav-link-active': activeSection === 'contact' }"
            ref="contactRef"
          >
            Contact
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 hover:bg-accent rounded-md transition-colors" 
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <Menu v-if="!isMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="isMenuOpen" class="md:hidden py-4 space-y-2 border-t border-border">
        <button
          @click="scrollToSection('home')"
          class="nav-link-mobile"
        >
          Home
        </button>
        <button
          @click="scrollToSection('projects')"
          class="nav-link-mobile"
        >
          Projects
        </button>
        <button
          @click="scrollToSection('skills')"
          class="nav-link-mobile"
        >
          Skills
        </button>
        <button
          @click="scrollToSection('contact')"
          class="nav-link-mobile"
        >
          Contact
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const activeSection = ref('home')

// Refs for navigation buttons
const homeRef = ref(null)
const projectsRef = ref(null)
const skillsRef = ref(null)
const contactRef = ref(null)

// Computed property for underline position
const underlinePosition = computed(() => {
  const refs = {
    home: homeRef.value,
    projects: projectsRef.value,
    skills: skillsRef.value,
    contact: contactRef.value
  }
  
  const activeRef = refs[activeSection.value]
  if (!activeRef) return { left: 0, width: 0 }
  
  const rect = activeRef.getBoundingClientRect()
  const navRect = activeRef.closest('nav').getBoundingClientRect()
  
  return {
    left: rect.left - navRect.left,
    width: rect.width
  }
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

const updateActiveSection = () => {
  const sections = ['home', 'projects', 'skills', 'contact']
  const scrollPosition = window.scrollY + 100 // Offset for better detection

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(async () => {
  await nextTick()
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // Set initial active section
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.nav-link {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground);
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:focus {
  outline: none;
}

.nav-link-active {
  color: var(--primary);
}

.nav-link-mobile {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground);
  background: none;
  border: none;
  padding: 0.5rem 0.75rem;
  margin: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.nav-link-mobile:hover {
  color: var(--primary);
  background-color: rgba(var(--accent), 0.5);
}

.nav-link-mobile:focus {
  outline: none;
}
</style>
