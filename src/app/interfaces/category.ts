// Interfaces
export interface CategoryResults {
    info: Info;
    data: Category[];
  }
  
  // Interface para la sección "info"
  export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
  // Interface para cada elemento en el array "data"
  export interface Category {
    id: number;
    category: string;
  }
