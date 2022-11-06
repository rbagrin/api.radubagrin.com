import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPosts(): string[] {
    console.log("GET /posts");
    
    return ['Hello from the Backend World!', 'Getting posts works!'];
  }
}