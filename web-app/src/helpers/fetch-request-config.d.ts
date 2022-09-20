export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'DELETE' | 'HEAD' | 'CONNECT' | 'TRACE'

export type FetchRequestConfig = {
  method?: HttpMethod,
  headers?: any,
  body?: Blob | ArrayBuffer | DataView | FormData | URLSearchParams | string | ReadableStream | Object,
  mode?: 'cors' | 'no-cors' | 'same-origin',
  credentials?: 'omit' | 'same-origin' | 'include',
  cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached',
  redirect?: 'follow' | 'error' | 'manual',
  referrer?: string,
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'same-origin' | 'origin' | 'strict-origin' | 'origin-when-cross-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url',
  integrity?: string,
  keepalive?: any,
  signal?: any,
}
