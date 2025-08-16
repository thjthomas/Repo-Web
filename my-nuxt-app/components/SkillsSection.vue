<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref="sectionRef"
        class="text-center mb-16 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h2 class="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(category, categoryIndex) in skillCategories"
          :key="categoryIndex"
          class="border border-border/50 rounded-lg p-6 bg-card transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{ transitionDelay: `${categoryIndex * 200}ms` }"
        >
          <div class="flex items-center gap-3 mb-6">
            <component :is="category.icon" class="h-6 w-6 text-primary" />
            <h3 class="font-serif text-xl text-card-foreground">{{ category.title }}</h3>
          </div>
          <div class="space-y-4">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-foreground">{{ skill.name }}</span>
                <span class="text-sm text-muted-foreground">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-muted rounded-full h-2">
                <div
                  class="bg-primary h-2 rounded-full transition-all duration-1000"
                  :style="{
                    width: `${animatedValues[`${categoryIndex}-${skillIndex}`] || 0}%`,
                    transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Code, Database, Smartphone } from 'lucide-vue-next'

const sectionRef = ref(null)
const isVisible = ref(false)
const animatedValues = ref({})

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "Mobile & AI",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "TensorFlow", level: 65 },
      { name: "Data Analysis", level: 80 },
    ],
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

// Animate progress bars when section becomes visible
watch(isVisible, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      const newValues = {}
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${categoryIndex}-${skillIndex}`
          newValues[key] = skill.level
        })
      })
      animatedValues.value = newValues
    }, 500)
  }
})
</script>
