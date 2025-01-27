<script setup>
const { data: blogPosts, status } = useApi('/blog-posts?category=resources')

</script>

<template>
    <section class="blog-list resources">
        <header>
            <h1>
                <span></span>
                Resources
            </h1>
            <p>Topics and interests that could be useful in the future.</p>
        </header>
        <main>
            <BlogList 
                :status="status"
                :blog-posts="blogPosts"
            />
        </main>
    </section>
</template>