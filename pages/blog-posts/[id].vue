<script setup>

const route = useRoute()

let blogPost = ref({})
let status = ref('PENDING')

useAPI('/blog-posts/' + route.params.id, {}, {
    onResponse({ response }) {
        blogPost.value = response._data
        status = response.statusText
    }
})

</script>

<template>
    <section class="blog-list" :class="blogPost.category">
        <div v-if="status === 'PENDING'">
            <p>Loading...</p>
        </div>
        <div v-else-if="status !== 'OK'">
            <p>There has been an error loading the blog posts. Try again later.</p>
        </div>
        <div v-else-if="blogPosts === null || blogPosts.items.length === 0">
            <p>No blog posts have been found.</p>
        </div>
        <div v-else>
            <header>
                <h1>
                    {{ blogPost.title }}
                </h1>
                <p>Last modified on: {{ $dayjs(blogPost.lastModifiedOn).utc().format('DD-MM-YYYY HH:mm').toString() }}</p>
            </header>
            
            <article v-html="blogPost.content" ></article>
        </div>
    </section>
</template>
