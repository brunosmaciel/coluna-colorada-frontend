import { PostData } from '../../domain/posts/post';
import axios from '../axios';

export const getAllPosts = async (): Promise<PostData[]> => {
  const response = await axios.get('/posts?populate=*&sort=id:desc');
  const data: PostData[] = response.data.data;

  return data;
};
