<script setup>

const { data: blogPosts, status } = useApi('/blog-posts?category=projects')


</script>

<template>
    <section class="blog-list projects">
        <header>
            <h1>
                <span></span>
                Projects
            </h1>
            <p>Short Term projects in work or private life that keeps you currently busy.</p>
        </header>
        <main>
            <BlogList 
                :status="status"
                :blog-posts="blogPosts"
            />
        </main>
    </section>
</template>
