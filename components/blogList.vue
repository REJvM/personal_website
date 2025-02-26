<script setup>
const props = defineProps({
    items: Array,
    apiStatus: String
})
</script>

<template>
    <div v-if="items.length > 0">
        <ul>
            <li 
                v-for="item in items" 
                :key="item.id"
                :class="item.category"
            >        
                <NuxtLink 
                    :to="{ 
                        path: '/blog-posts/' + item.id, 
                        query: { category: item.category } 
                    }"
                >
                    {{ item.title }}
                    <span class="modifiedDate">{{ formatDate(item.last_modified_on) }}</span>
                </NuxtLink>
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
