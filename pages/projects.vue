<script setup>

const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl + '/blog-posts';
const { status, data: blogPosts } = useLazyFetch(
    apiUrl,
    {
        headers: {
            'API_KEY': config.public.apiKey
        } 
    }
)

function sortByDate(items) {
  return items.sort((a, b) => a.last_modified_on - b.last_modified_on)
}

function blogPostUrl(item) {
  return '/blogposts/' + item.id + '/' + item.title
}
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
            <div v-if="status === 'error'">
                There has been an error loading the blog posts. Try again later
            </div>
            <div v-else-if="status === 'pending'">
                Loading
            </div>
            <div v-else>
                <li v-for="item in sortByDate(blogPosts.items)" :key="item.id">
                    <a :href="blogPostUrl(item)">
                        {{ item.title }} - {{ $dayjs(item.last_modified_on).utc().format('DD-MM-YYYY HH:mm').toString() }}
                    </a>
                </li>
            </div>
        </main>
    </section>
</template>
