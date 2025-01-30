<script setup>
import LoadMoreButton from '~/components/loadMoreButton.vue';

const route = useRoute();

let parameters = {
    category:'projects', 
    limit: 2,
    offset: 1
}

let blogPosts = ref({})
let apiStatus = ref('PENDING')

useAPI('/blog-posts', parameters, {
    onResponse({ response }) {
        blogPosts.value = response._data
        apiStatus = response.statusText
    },
})


</script>

<template>
    <section class="blog-list projects">
        <header>
            <h1>{{ route.name }}</h1>
            <p>Short Term projects in work or private life that keeps you currently busy.</p>
        </header>
        <div>
            <BlogList 
                :api-status="apiStatus"
                :blog-posts="blogPosts"
                :items="blogPosts.items"
            />
        </div>
    </section>
</template>
