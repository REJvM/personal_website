<script setup>
const route = useRoute();

const parameters = {
    category:'resources', 
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
    <section class="blog-list resources">
        <header>
            <h1>{{ route.name }}</h1>
            <p>Topics and interests that could be useful in the future.</p>
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