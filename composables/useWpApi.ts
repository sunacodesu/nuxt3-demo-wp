export default () => {
  //Nuxt.js3の機能 nuxt.config.tsに定義されたrunTimeConfigの設定を取得する。
  //
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  //get
  const get = async <T>(endpoint: string)=> {
    return useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);
  }

  //Get All Posts
  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 9
  ) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if(categories) {
      query += `&categories=${categories}`;
    }
    return get<T>(query);
  }

  //Get a Single Posts
  const getPost = async <T>(slug: string) => get<T>(`posts?slug=${slug}&_embed`);
  
  //Get All Categories
  const getCategories = async <T>() => get<T>("categories");
  
  //Get a Single Categories
  const getCategory = async <T>(slug: string) => get<T>(`categories?slug=${slug}`);

  //Get All Works
  const getWorks = async <T>() => get<T>("works");
  
  //Get a Single Categories
  const getWork = async <T>(slug: string) => get<T>(`works?slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
    getWorks,
    getWork
  }
}
