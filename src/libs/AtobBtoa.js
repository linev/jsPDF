let atob, btoa;

if ((typeof process === 'object') && (typeof process.versions === 'object') && process.versions.node && process.versions.v8) {
   atob = str => Buffer.from(str, 'base64').toString('latin1');
   btoa = str => Buffer.from(str, 'latin1').toString('base64');
} else {
   atob = globalThis.atob;
   btoa = globalThis.btoa;
}

export { atob, btoa };
