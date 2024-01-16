export function AllSizes(sizes: string[]) {
    const set = new Set(sizes);
    const uniq = Array.from(set);
    return uniq
}