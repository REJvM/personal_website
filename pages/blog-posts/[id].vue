<script setup>

const route = useRoute()
const { data: blogPost, status } = useApi('/blog-posts/' + route.params.id)

</script>

<template>
    <section class="blog-list" :class="blogPost.category">
        <div v-if="status === 'error'">
            <p>There has been an error loading the blog posts. Try again later.</p>
        </div>
        <div v-else-if="status === 'pending'">
            <p>Loading...</p>
        </div>
        <div v-else>
            <header>
                <h1>
                    <span></span>
                    {{ blogPost.category }}
                </h1>
                <p>Last modified on: {{ $dayjs(blogPost.lastModifiedOn).utc().format('DD-MM-YYYY HH:mm').toString() }}</p>
            </header>
            <main>
                <h2>
                    {{ blogPost.title }}
                </h2>

                <div v-html="blogPost.content" ></div>
            </main>
        </div>
    </section>
</template>
