<script setup>
const props = defineProps({
    category: String | undefined,
    pageTitle: String | undefined
})

</script>

<template>
    <div class="breadcrumbs">
        <RouterLink to="/">Home</RouterLink> 
        <template v-if="category !== undefined">
           / <RouterLink :to="'/' + category">{{ category }}</RouterLink>
        </template>
        <template v-if="pageTitle != undefined">
            / {{ pageTitle }}
        </template>
    </div>
</template>