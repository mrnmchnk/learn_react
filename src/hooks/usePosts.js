import React, {useMemo} from "react";

export const UseSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if (sort) {
      return [...posts].sort( ( a, b ) => a[sort].localeCompare( b[sort] ) )
    }
    return posts;
  }, [sort, posts]);
  
  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = UseSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter( post => post.title.toLocaleLowerCase().includes(query) )
  }, [query, sortedPosts])
  return sortedAndSearchedPosts;
}