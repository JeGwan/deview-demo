import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { Post } from './post.schema'
@Injectable()
export class PostService {
  private fetcher: AxiosInstance

  constructor() {
    this.fetcher = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    })
  }

  async getPosts() {
    const { data } = await this.fetcher.get<Post[]>('/posts')
    return data
  }
}
