<script setup>
const props = defineProps({
    content: String,
})
const route = useRoute()
const regexConst = new RegExp('<h2 id=".*?">(.*?)<\/h2>?', 'gm')
let headings = [...props.content.matchAll(regexConst)]
</script>

<template>
    <aside>
        <p>Table of Content</p>
        <ol>
            <li v-for="heading in headings"> 
                <NuxtLink :to="{ path: route.fullPath, hash: '#' + slugify(heading[1]) }" no-prefetch>
                    {{ heading[1] }}
                </NuxtLink>
            </li>
       </ol>
    </aside>
</template>