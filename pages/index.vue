<script setup>
const { data: blogPosts, status } = useApi('/blog-posts')

</script>

<template>
    <section>
        <header>
            <h1>
                <span></span>
                Latest Blogposts
            </h1>
            <p>All new and updated blogposts.</p>
        </header>
    </section>
        <main>
            <BlogList 
                :status="status"
                :blog-posts="blogPosts"
            />
        </main>
</template>