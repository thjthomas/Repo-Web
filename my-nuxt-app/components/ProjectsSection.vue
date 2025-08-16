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
            class="group hover:shadow-lg transition-all duration-700 border border-border/50 hover:border-accent/50 rounded-lg overflow-hidden bg-card flex flex-col"
            :class="[
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
              index === projects.length - 1 && projects.length % 2 === 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
            ]"
            :style="{ transitionDelay: `${index * 200}ms` }"
          >
          <div class="aspect-video overflow-hidden">
            <img
              :src="project.image || '/placeholder.svg'"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
                                           <div class="p-6 flex flex-col flex-1">
              <div class="flex-1">
                <h3 class="font-serif text-xl text-card-foreground mb-2">{{ project.title }}</h3>
                <p class="text-muted-foreground mb-4">{{ project.description }}</p>
              </div>
              <div v-if="!project.hideDetails" class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tech, techIndex) in project.technologies"
                  :key="techIndex"
                  class="bg-amber-900/20 backdrop-blur-sm text-amber-900 hover:bg-amber-900/30 px-2 py-1 rounded-md text-sm font-sans font-medium border border-amber-900/30"
                >
                  {{ tech }}
                </span>
              </div>
                             <div v-if="!project.hideDetails" class="flex gap-3 mt-auto">
                <a
                  v-if="!project.hideCode"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-sans text-sm flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <Github class="h-4 w-4" />
                  Code
                </a>
               <a
                 v-if="!project.hideLiveDemo"
                 :href="project.liveUrl"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="btn-primary font-sans text-sm flex items-center gap-2"
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
    title: "Gmail Automation",
    description: "Developed and implemented Gmail Automation to simplify bulk email sending, while the user just need to input needed information into Google Sheet.",
    image: "/Gmail-Automation.png",
    technologies: ["Google Script"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    hideLiveDemo: true,
  },
  {
    title: "Referrer System Website",
    description: "Co-Developed a website for a referrer system for my internship company, where the user can refer a friend and get a reward.",
    image: "/Referrer-System-Website.png",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://program.vilor.com/",
    hideCode: true,
  },
  {
    title: "Final Year Project",
    description: "My final year project still on the way! Stay tuned!",
    image: "/placeholder.svg",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
    hideDetails: true,
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
