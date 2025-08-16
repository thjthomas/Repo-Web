<template>
  <section id="projects" class="py-20 bg-muted/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref="sectionRef"
        class="text-center mb-16 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h2 class="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical skills and problem-solving abilities through various projects
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group hover:shadow-lg transition-all duration-700 border border-border/50 hover:border-accent/50 rounded-lg overflow-hidden bg-card"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="project.image || '/placeholder.svg'"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-6">
            <h3 class="font-serif text-xl text-card-foreground mb-2">{{ project.title }}</h3>
            <p class="text-muted-foreground mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="techIndex"
                class="bg-accent/10 text-accent hover:bg-accent/20 px-2 py-1 rounded-md text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="border border-border hover:bg-accent px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Github class="h-4 w-4" />
                Code
              </a>
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                <ExternalLink class="h-4 w-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Github, ExternalLink } from 'lucide-vue-next'

const sectionRef = ref(null)
const isVisible = ref(false)

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack web application with user authentication, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Machine Learning Classifier",
    description: "Image classification model using deep learning to identify objects with 95% accuracy.",
    image: "/ml-neural-network-visualization.png",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Mobile Task Manager",
    description: "Cross-platform mobile app for task management with real-time synchronization.",
    image: "/mobile-task-management-app.png",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain technology to ensure transparency and immutability.",
    image: "/blockchain-voting-interface.png",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

const useScrollAnimation = (threshold = 0.1) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold }
  )

  onMounted(() => {
    if (sectionRef.value) {
      observer.observe(sectionRef.value)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return { ref: sectionRef, isVisible }
}

useScrollAnimation(0.1)
</script>
