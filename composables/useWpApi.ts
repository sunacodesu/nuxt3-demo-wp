export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  // Fetch utility function
  const get = async <T>(endpoint: string) => {
    const { data, error } = await useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);
    if (error.value) {
      console.error('Error fetching data from API:', error.value);
      return { data: null, error: error.value };
    }
    return { data, error: null };
  };

  // Get All Posts
  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 9
  ) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    return get<T>(query);
  };

  // Get a Single Post
  const getPost = async <T>(slug: string) => {
    return get<T>(`posts?slug=${slug}&_embed`);
  };

  // Get All Categories
  const getCategories = async <T>() => {
    return get<T>("categories");
  };

  // Get a Single Category
  const getCategory = async <T>(slug: string) => {
    return get<T>(`categories?slug=${slug}`);
  };

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
