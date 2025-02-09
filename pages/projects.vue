<script setup>
const { $api } = useNuxtApp()
const blogPostRepository = repository($api)
const route = useRoute();
const parameters = {
    category:'projects', 
    limit: 50,
    offset: 1
}
const searchQuery = ref("")

const items = ref([])
const { data: blogPosts, status, execute } = await useAsyncData(
    () => blogPostRepository.getMoreBlogposts(parameters),
)
if(blogPosts.value) {
    items.value.push(...blogPosts.value.items);
}

async function loadMore() {
    parameters.offset = parameters.offset == undefined ? 1 : parameters.offset + 1
    await execute()
}

watch(blogPosts, async () => {
    items.value.push(...blogPosts.value.items);
})

const filteredItems = computed(() => {
    if (searchQuery.value.length > 0) {
        return items.value.filter((item) => {
            return searchQuery.value
                .toLowerCase()
                .split(" ")
                .every((v) => item.title.toLowerCase().includes(v));
        });
    } else {
        return items.value;
    }
});
</script>

<template>
    <section class="blog-list projects">
        <Breadcrumbs
            :pageTitle="route.name"
        />
        <header>
            <h1>{{ route.name }}</h1>
            <p>Short Term projects in work or private life that keeps you currently busy.</p>
            
            <form>
                <div class="fieldset">
                    <input
                        v-model="searchQuery"
                        type="search"
                        id="searchbar"
                        placeholder="Search" 
                        aria-label="Search"
                    />
                </div>
            </form>
        </header>
        <div>
            <BlogList 
                :api-status="status"
                :items="filteredItems"
                :search-query="searchQuery"
            />
            <LoadMoreButton 
                :api-status="status"
                :blog-posts="blogPosts"
                @load="loadMore()"
            />
        </div>
    </section>
</template>
