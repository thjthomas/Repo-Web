<template>
  <header class="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="font-serif font-bold text-xl text-primary">Portfolio</div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <button
            @click="scrollToSection('home')"
            class="nav-link"
          >
            Home
          </button>
          <button
            @click="scrollToSection('projects')"
            class="nav-link"
          >
            Projects
          </button>
          <button
            @click="scrollToSection('skills')"
            class="nav-link"
          >
            Skills
          </button>
          <button
            @click="scrollToSection('contact')"
            class="nav-link"
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
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
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
