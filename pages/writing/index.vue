<template>
  <div class="flex-grow px-4 mt-12">
    <div class="mb-8">
      <ul class="flex space-x-6 text-xl">
        <li v-for="category in categories" :key="category" @click="setActiveCategory(category)" :class="['cursor-pointer',activeCategory === category ? 'text-black font-semibold' : 'text-gray-400']">
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="space-y-8">
      <Blog v-for="post in filteredPosts" :key="post.id" :title="post.title" :description="post.description" :author="post.author" :date="post.date" :slug="post.slug" :link="post.link" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Blog from '../../components/Card/Blog.vue'
import { BlogPosts } from "../../constants/blogs"

const categories = ['All', 'Research', 'News']
const activeCategory = ref('All')

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All') {
    return BlogPosts
  }
  return BlogPosts.filter(post => post.tags.includes(activeCategory.value))
})

const setActiveCategory = (category: string) => {
  activeCategory.value = category
}

const getCategoryOffset = () => {
  const index = categories.indexOf(activeCategory.value)
  return `${index * 6}rem`
}
</script>