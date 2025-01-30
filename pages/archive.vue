<script setup>
const route = useRoute();
const parameters = {
    category:'archive', 
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
    <section class="blog-list archive">
        <header>
            <h1>{{ route.name }}</h1>
            <p>Older and not-active items.</p>
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