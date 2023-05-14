import { Result } from ".";

export interface ApiResponse {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
    timestamp: string;
  }
  
