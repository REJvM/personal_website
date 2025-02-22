import type { NitroFetchRequest, $Fetch } from "nitropack";
type BlogPosts = {
  items: [
    {
      id: Number;
      title: String;
      category: "projects" | "area" | "resources" | "archive";
      last_modified_on: Date;
    }
  ];
  pagination: {
    total: Number;
    page: Number;
    limit: Number;
    totalPages: Number;
  };
};

type BlogPost = {
  title: String;
  content: HTMLElement;
  category: "projects" | "area" | "resources" | "archive";
  links: Link;
  last_modified_on: Date;
};

type Link = {
  url: String;
  icon: String;
};

export const repository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getMoreBlogposts(parameters: string[][]): Promise<BlogPosts[]> {
    let apiUrl = "/blog-posts/";
    if (parameters) {
      let searchParameters = new URLSearchParams(parameters).toString();
      apiUrl = apiUrl + "?" + searchParameters;
    }
    return fetch<BlogPosts[]>(apiUrl);
  },
  async getSingleBlogpost(id: Number): Promise<BlogPost> {
    return fetch<BlogPost>("/blog-posts/" + id);
  },
});
