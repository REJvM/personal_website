<script setup>
const props = defineProps({
    category: String | undefined,
    pageTitle: String | undefined
})

</script>

<template>
    <div class="breadcrumbs">
        <NuxtLink to="/">Home</NuxtLink> 
        <template v-if="category !== undefined">
           / <NuxtLink :to="'/' + category">{{ category }}</NuxtLink>
        </template>
        <template v-if="pageTitle != undefined">
            / {{ pageTitle }}
        </template>
    </div>
</template>