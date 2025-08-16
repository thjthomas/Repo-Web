<template>
  <section id="contact" class="py-20 bg-muted/30">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref="sectionRef"
        class="text-center mb-16 transition-all duration-1000"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h2 class="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
                 <div class="grid grid-cols-1 lg:grid-cols-2 gap-48">
          <!-- Contact Form -->
          <div
            class="transition-all duration-1000"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
            style="transition-delay: 200ms"
          >
            <h3 class="font-serif text-2xl font-bold text-foreground mb-6">Send me a message</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+60123456789"
                />
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell me anything that you want to say!"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div
            class="transition-all duration-1000"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
            style="transition-delay: 400ms"
          >
            <h3 class="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 class="font-medium text-foreground">Email</h4>
                  <a href="mailto:hongjunteh2@gmail.com" class="text-muted-foreground hover:text-primary transition-colors">
                    hongjunteh2@gmail.com
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 class="font-medium text-foreground">Location</h4>
                  <p class="text-muted-foreground">Penang, Malaysia</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 class="font-medium text-foreground">Availability</h4>
                  <p class="text-muted-foreground">Studying, wait for me to graduate!</p>
                </div>
              </div>
                         </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Mail, MapPin, Clock } from 'lucide-vue-next'

const sectionRef = ref(null)
const isVisible = ref(false)
const isSubmitting = ref(false)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

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

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  alert('Message sent successfully! (This is a demo)')
}
</script>
