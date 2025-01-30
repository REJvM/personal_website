<script setup>
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
    <section>
        <header>
            <h1>Latest Blogposts</h1>
            <p>All new and updated blogposts.</p>
        </header>
        <div>
            <BlogList 
                :api-status="apiStatus"
                :blog-posts="blogPosts"
                :items="items"
            />
        </div>
    </section>
</template>