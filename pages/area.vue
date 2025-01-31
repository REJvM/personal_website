<script setup>
const { $api } = useNuxtApp()
const blogPostRepository = repository($api)
const route = useRoute();
const parameters = {
    category:'area',
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
    <section class="blog-list area">
        <header>
            <h1>{{ route.name }}</h1>
            <p>Long Term responsibilities you need to manage over a longer time.</p>
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