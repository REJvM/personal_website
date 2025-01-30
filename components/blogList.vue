<script setup>
const dayjs = useDayjs();
const props = defineProps(['apiStatus', 'blogPosts', 'items'])

function blogPostUrl(item) {
  return '/blog-posts/' + item.id
}

function formatDate(date) {
    return dayjs(date).utc().format('DD-MM-YYYY HH:mm').toString()
}
</script>

<template>
    <div v-if="apiStatus === 'PENDING'">
        <p>Loading...</p>
    </div>
    <div v-else-if="apiStatus !== 'OK'">
        <p>There has been an error loading the blog posts. Try again later.</p>
    </div>
    <div v-else-if="blogPosts === null || blogPosts.items.length === 0">
        <p>No blog posts have been found.</p>
    </div>
    <div v-else>
        <ul>
            <li v-for="
                item in items" 
                :key="item.id"
            >
                <a :href="blogPostUrl(item)">
                    {{ item.title }}
                    <span class="modifiedDate">{{ formatDate(item.last_modified_on) }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
