<template>
  <header class="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="font-serif font-bold text-xl text-primary">Portfolio</div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <button
            @click="scrollToSection('home')"
            class="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            @click="scrollToSection('projects')"
            class="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            @click="scrollToSection('skills')"
            class="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            @click="scrollToSection('contact')"
            class="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 hover:bg-accent rounded-md transition-colors" 
          @click="isMenuOpen = !isMenuOpen"
        >
          <Menu v-if="!isMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="isMenuOpen" class="md:hidden py-4 space-y-2">
        <button
          @click="scrollToSection('home')"
          class="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
        >
          Home
        </button>
        <button
          @click="scrollToSection('projects')"
          class="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
        >
          Projects
        </button>
        <button
          @click="scrollToSection('skills')"
          class="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
        >
          Skills
        </button>
        <button
          @click="scrollToSection('contact')"
          class="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
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
