export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: config.public.apiUrl,
        onRequest({ options }) {
            options.headers.set('API_KEY', config.public.apiKey)
        },
    })
    return {
        provide: {
            api
        }
    }
})