import { SingleAuthor } from '../domain/author/authors';
import axios from './axios'

export const getAuthor = async (id: number): Promise<SingleAuthor> => {
  const response = await axios.get(`/authors/${id}?populate=*`);
  const data: SingleAuthor = response.data.data;

  return data;
};
