import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);
    const { width, height } = (query || {});
    const [path, id] = (pathname as string).slice(1).split("/");
    const parsedRequest: ParsedRequest = {
        path,
        id,
        width: width ? parseInt(width as string, 10) : undefined,
        height: height ? parseInt(height as string, 10) : undefined
    };
    return parsedRequest;
}
