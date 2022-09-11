export const BASE_URL = 'https://desolate-citadel-62765.herokuapp.com/api';
export const POSTS_URL = `${BASE_URL}/posts`;
export const AUTHOR_URL = `${BASE_URL}/author`;

export const QUERY_GET_LAST_3_POSTS =
  '&paginatio[page]=1&pagination[pageSize]=3';

export const DISQUS_URL = process.env.DISQUSURL || 'http://vcap.me:3000';
