<script setup>
const props = defineProps(['status', 'blogPosts'])

function sortByDate(items) {
  return items.sort((a, b) => a.last_modified_on - b.last_modified_on)
}

function blogPostUrl(item) {
  return '/blog-posts/' + item.id
}
</script>

<template>
    <div v-if="status === 'error'">
        <p>There has been an error loading the blog posts. Try again later.</p>
    </div>
    <div v-else-if="status === 'pending'">
        <p>Loading...</p>
    </div>
    <div v-else-if="blogPosts.items.length === 0">
        <p>No blog posts have been found.</p>
    </div>
    <div v-else>
        <li v-for="item in sortByDate(blogPosts.items)" :key="item.id">
            <a :href="blogPostUrl(item)">
                {{ item.title }} - {{ $dayjs(item.last_modified_on).utc().format('DD-MM-YYYY HH:mm').toString() }}
            </a>
        </li>
    </div>
</template>