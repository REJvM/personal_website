<script setup>
const { data: blogPosts, status } = useApi('/blog-posts?category=area')

</script>

<template>
    <section class="blog-list area">
        <header>
            <h1>    
                <span></span>
                Area
            </h1>
            <p>Long Term responsibilities you need to manage over a longer time.</p>
        </header>
        <main>
            <BlogList 
                :status="status"
                :blog-posts="blogPosts"
            />
        </main>
    </section>
</template>