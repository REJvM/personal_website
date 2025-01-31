<script setup>
const props = defineProps({
    blogPosts: Object,
    apiStatus: String
})
const emit = defineEmits(['load'])
</script>

<template>
    <template v-if="blogPosts !== null && blogPosts.pagination !== undefined">
        <button 
            v-if="
                blogPosts !== null
                &&
                blogPosts.items.length > 0
                &&
                blogPosts.pagination.page !== blogPosts.pagination.totalPages
            "
            @click="emit('load')"
        >
            Load more
        </button>
    </template>
</template>