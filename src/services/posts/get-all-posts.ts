import { PostData } from '../../domain/posts/post';
import axios from '../axios';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const response = await axios.get(`/posts?populate=*&sort=id:desc&${query}`);
  const data: PostData[] = response.data.data;

  return data;
};
