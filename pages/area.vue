<script setup>
const route = useRoute();
const parameters = {
    category:'area',
    limit: 2
}
let blogPosts = ref({})
let apiStatus = ref('PENDING')

useAPI('/blog-posts', parameters, {
    onResponse({ response }) {
        blogPosts.value = response._data
        apiStatus = response.statusText
    }
})

</script>

<template>
    <section class="blog-list area">
        <header>
            <h1>{{ route.name }}</h1>
            <p>Long Term responsibilities you need to manage over a longer time.</p>
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