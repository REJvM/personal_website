<script setup>
const props = defineProps({
    blogPostCategory: String | undefined
})

const route = useRoute()
const leave = ref(false)
const routeName = ref(props.blogPostCategory ?? route.name)

onBeforeRouteLeave((to, from, next) => {
    routeName.value = to.name
    leave.value = true
    next()
})
</script>

<template>
    <div
        v-if="leave"
        v-motion
        class="transition exit-transition" 
        :class="routeName"
        :initial="{
            height: '0vh',
        }"
        :enter="{
            height: '100vh',
            transition: {
                type: 'spring',
                stiffness: 180,
                damping: 25,
                mass: 0.5,
            },
        }"
        :duration="50"
    >
    </div>
    <div
        v-motion
        class="transition enter-transition" 
        :class="routeName"
        :initial="{
            height: '100vh',
        }"
        :enter="{
            height: '0vh',
            transition: {
                type: 'spring',
                stiffness: 180,
                damping: 25,
                mass: 0.5,
            },
        }"
        :delay="100"
        :duration="300"
    >
    </div>
</template>