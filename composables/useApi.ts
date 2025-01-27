export function useApi(endpoint: String) {
    const config = useRuntimeConfig()

    const apiUrl = config.public.apiUrl + endpoint
    const { data, status, error } = useLazyFetch(
        apiUrl,
        {
            headers: {
                'API_KEY': config.public.apiKey
            } 
        }
    )
    return { data, status, error }
}