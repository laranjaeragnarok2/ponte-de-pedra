// Polyfill broken Node.js 25 localStorage on the server side
// Node.js 25 exposes a global localStorage but it throws errors
// when --localstorage-file isn't properly set. This breaks SSR.
if (typeof window === 'undefined' && typeof globalThis.localStorage !== 'undefined') {
    try {
        globalThis.localStorage.getItem('__polyfill_test__');
    } catch {
        // localStorage exists but is broken - replace with a no-op implementation
        const store = new Map<string, string>();
        (globalThis as any).localStorage = {
            getItem: (key: string) => store.get(key) ?? null,
            setItem: (key: string, value: string) => store.set(key, String(value)),
            removeItem: (key: string) => store.delete(key),
            clear: () => store.clear(),
            get length() { return store.size; },
            key: (index: number) => [...store.keys()][index] ?? null,
        };
    }
}

export { };
