<script setup>
const dayjs = useDayjs()
const props = defineProps({
    items: Array,
    apiStatus: String
})

function blogPostUrl(item) {
  return '/blog-posts/' + item.id
}

function formatDate(date) {
    return dayjs(date).utc().format('DD-MM-YYYY HH:mm').toString()
}
</script>

<template>
    <div v-if="items.length > 0">
        <ul>
            <li 
                v-for="item in items" 
                :key="item.id"
                :class="item.category"
            >
                <a :href="blogPostUrl(item)">
                    {{ item.title }}
                    <span class="modifiedDate">{{ formatDate(item.last_modified_on) }}</span>
                </a>
            </li>
        </ul>
    </div>
    <div v-else-if="apiStatus === 'pending'">
        <p>Loading...</p>
    </div>
    <div v-else-if="apiStatus !== 'success'">
        <p>There has been an error loading the blog posts. Try again later.</p>
    </div>
    <div v-else-if="items.length === 0">
        <p>No blog posts have been found.</p>
    </div>
</template>
