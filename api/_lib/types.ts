export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
    path: string;
    id: string;
    width?: number;
}