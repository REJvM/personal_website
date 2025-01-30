import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(
  url: string,
  parameters?: string[][],
  options?: UseFetchOptions<T>,
) {
    let apiUrl = url
    if(parameters){
        let searchParameters = new URLSearchParams(parameters).toString()
        apiUrl = apiUrl + '?' + searchParameters
    }
    return useFetch(apiUrl, {
        ...options,
        $fetch: useNuxtApp().$api as typeof $fetch
    })
}