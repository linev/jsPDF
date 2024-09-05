let atob, btoa;

// @if MODULE_FORMAT!='cjs'
atob = globalThis.atob;
btoa = globalThis.btoa;
// @endif

// @if MODULE_FORMAT='cjs'
atob = str => Buffer.from(str, 'base64').toString('latin1')
btoa = str => Buffer.from(str, 'latin1').toString('base64');
// @endif

export { atob, btoa };
