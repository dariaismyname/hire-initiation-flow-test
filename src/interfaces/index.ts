export interface DocumentItem {
  id: number;
  title: string;
  items: DocumentExamples[];
}

export interface DocumentExamples {
  id: number;
  name: string;
}