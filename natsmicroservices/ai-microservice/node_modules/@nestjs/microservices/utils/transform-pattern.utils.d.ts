import { MsPattern } from '../interfaces';
/**
 * Transforms the Pattern to Route safely.
 *
 * @param pattern - client pattern
 * @param depth - current recursion depth
 * @param maxDepth - maximum allowed recursion depth
 * @param maxKeys - maximum allowed keys per object
 * @returns string
 */
export declare function transformPatternToRoute(pattern: MsPattern, depth?: number, maxDepth?: number, maxKeys?: number): string;
