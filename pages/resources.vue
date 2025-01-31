<script setup>
const { $api } = useNuxtApp()
const blogPostRepository = repository($api)
const route = useRoute();
const parameters = {
    category:'resources', 
    limit: 10,
    offset: 1
}
const items = ref([])
const { data: blogPosts, status, execute } = await useAsyncData(
    () => blogPostRepository.getMoreBlogposts(parameters),
)
items.value.push(...blogPosts.value.items);

async function loadMore() {
    parameters.offset = parameters.offset == undefined ? 1 : parameters.offset + 1
    await execute()
}

watch(blogPosts, async () => {
    items.value.push(...blogPosts.value.items);
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
                :api-status="status"
                :items="items"
            />
            <LoadMoreButton 
                :api-status="status"
                :blog-posts="blogPosts"
                @load="loadMore()"
            />
        </div>
    </section>
</template>