// fix-localstorage.js
// Polyfill for Node.js 25 broken localStorage
// Run with: node -r ./fix-localstorage.js
if (typeof globalThis.localStorage !== 'undefined') {
    try {
        globalThis.localStorage.getItem('__test__');
    } catch {
        const store = new Map();
        globalThis.localStorage = {
            getItem(key) { return store.get(key) ?? null; },
            setItem(key, value) { store.set(key, String(value)); },
            removeItem(key) { store.delete(key); },
            clear() { store.clear(); },
            get length() { return store.size; },
            key(index) { return [...store.keys()][index] ?? null; },
        };
    }
}
