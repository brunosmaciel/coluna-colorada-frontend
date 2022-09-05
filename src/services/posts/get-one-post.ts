import { PostData } from '../../domain/posts/post';
import axios from '../axios';
export const getSinglePost = async (
  slug: string | string[],
): Promise<PostData> => {
  const response = await axios.get(
    `/posts?populate=*&filters[slug][$eq]=${slug}`,
  );
  const data: PostData[] = response.data.data;
  return data[0];
};
