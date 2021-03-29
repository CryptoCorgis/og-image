export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
    id: string;
    path: string;
    width?: number;
    height?: number;
}