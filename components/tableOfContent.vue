<script setup>
const props = defineProps({
    content: String,
    links: Array,
})
const route = useRoute()
const regexConst = new RegExp('<h2 id=".*?">(.*?)<\/h2>?', 'gm')
let headings = [...props.content.matchAll(regexConst)]
</script>

<template>
    <aside>
        <div>
            <p>Table of Content</p>
            <ol>
                <li v-for="heading in headings"> 
                    <NuxtLink :to="{ path: route.fullPath, hash: '#' + slugify(heading[1]) }" no-prefetch>
                        {{ heading[1] }}
                    </NuxtLink>
                </li>
            </ol>
        </div>
        <div v-if="links.length"> 
            <p>Resources</p>
            <ol>
                <li v-for="link in links">
                    <NuxtLink :to="link.url" target="_blank" class="external">
                        {{ link.icon }}
                    </NuxtLink>
                </li>
            </ol>
        </div>
    </aside>
</template>