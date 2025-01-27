<script setup>
const { data: blogPosts, status } = useApi('/blog-posts?category=archive')

</script>

<template>
    <section class="blog-list archive">
        <header>
            <h1> 
                <span></span>
                Archive
            </h1>
            <p>Older and not-active items.</p>
        </header>
        <main>
            <BlogList 
                :status="status"
                :blog-posts="blogPosts"
            />
        </main>
    </section>
</template>