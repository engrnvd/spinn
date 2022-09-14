import type { Handle } from '@sveltejs/kit'
import * as cookie from 'cookie'

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  event.locals.userid = cookies['userid'] || crypto.randomUUID()

  const appTheme = cookies['appTheme'] || 'light'

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%appTheme%', appTheme)
  })

  if (!cookies['userid']) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers.set(
      'set-cookie',
      cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true
      })
    )
  }

  return response
}