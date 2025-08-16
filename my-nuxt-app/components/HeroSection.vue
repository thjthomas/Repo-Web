<template>
  <section id="home" class="py-16 lg:py-12 relative overflow-hidden min-h-[80vh]">
    <!-- Video Background -->
         <video
       autoplay
       muted
       loop
       playsinline
               class="absolute inset-0 w-full h-full object-cover z-0"
     >
      <source src="/hero-background.mp4" type="video/mp4">
    </video>
    
    
    
                   <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                 <div
           ref="heroRef"
           class="max-w-xl ml-auto text-right transition-all duration-1000"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
         >
        <div
          class="mb-8 transition-all duration-1000 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'"
        >
        </div>

                                   <h1
            class="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-6"
          >
                       <span class="typing-text">{{ typedHeading }}</span><span v-if="typedHeading === fullHeading" class="text-primary">{{ typedHighlight }}</span><span v-if="isTypingComplete" class="cursor">|</span>
         </h1>

                                       <p
             class="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg ml-auto"
           >
                       <span class="typing-text">{{ typedDescription }}</span><span v-if="isTypingComplete" class="cursor">|</span>
         </p>



                 <div
           class="flex justify-end space-x-6 transition-all duration-1000 delay-900"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
         >
                     <a
             href="https://github.com"
             target="_blank"
             rel="noopener noreferrer"
             class="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-110"
           >
             <Github class="h-6 w-6" />
             <span class="sr-only">GitHub</span>
           </a>
           <a
             href="https://linkedin.com"
             target="_blank"
             rel="noopener noreferrer"
             class="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-110"
           >
             <Linkedin class="h-6 w-6" />
             <span class="sr-only">LinkedIn</span>
           </a>
           <a
             href="mailto:your.email@example.com"
             class="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-110"
           >
             <Mail class="h-6 w-6" />
             <span class="sr-only">Email</span>
           </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const heroRef = ref(null)
const isVisible = ref(false)
const typedHeading = ref('')
const typedDescription = ref('')
const typedHighlight = ref('')
const isTypingComplete = ref(false)
const hasStartedTyping = ref(false)

const fullHeading = "Hi, I'm "
const fullHeadingHighlight = "Hong Jun"
const fullDescription = "Final year Computer Science student passionate about building innovative solutions and exploring cutting-edge technologies."

const typeText = (text, targetRef, speed = 100) => {
  return new Promise((resolve) => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        targetRef.value += text[index]
        index++
      } else {
        clearInterval(timer)
        resolve()
      }
    }, speed)
  })
}

const useScrollAnimation = (threshold = 0.1) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Only start typing if it hasn't started yet
        if (!hasStartedTyping.value) {
          hasStartedTyping.value = true
          startTypingAnimation()
        }
      }
    },
    { threshold }
  )

  const startTypingAnimation = async () => {
    // Reset text if not complete
    if (!isTypingComplete.value) {
      typedHeading.value = ''
      typedHighlight.value = ''
      typedDescription.value = ''
    }
    
    // Start typing sequence
    await typeText(fullHeading, typedHeading, 80)
    await typeText(fullHeadingHighlight, typedHighlight, 80)
    await typeText(fullDescription, typedDescription, 50)
    
    // Mark typing as complete
    isTypingComplete.value = true
  }

  onMounted(() => {
    if (heroRef.value) {
      observer.observe(heroRef.value)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return { ref: heroRef, isVisible }
}

useScrollAnimation(0.2)
</script>

<style scoped>
.cursor {
  animation: blink 1s infinite;
  color: var(--color-primary);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.typing-text {
  white-space: pre-wrap;
}
</style>
