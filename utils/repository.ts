import type { NitroFetchRequest, $Fetch } from 'nitropack'
type BlogPosts = {
    items: [
        {
            id: Number,
            title: String,
            category: 'projects' | 'area' | 'resources' | 'archive',
            last_modified_on: Date
        }
    ],
    pagination: {
        total: Number,
        page: Number,
        limit: Number,
        totalPages: Number
    }
};

type BlogPost = {
    title: String,
    content: HTMLElement,
    category: 'projects' | 'area' | 'resources' | 'archive',
    last_modified_on: Date
}

export const repository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
    async getMoreBlogposts(parameters: string[][]): Promise<BlogPosts[]> {
        let apiUrl = '/blog-posts/'
        if(parameters){
            let searchParameters = new URLSearchParams(parameters).toString()
            apiUrl = apiUrl + '?' + searchParameters
        }
        return fetch<BlogPosts[]>(apiUrl)
    },
    async getSingleBlogpost(id: Number): Promise<BlogPost> {
        let apiUrl = '/blog-posts/${id}' 
        console.log(apiUrl)
        return fetch<BlogPost>('/blog-posts/' + id)
    }
})