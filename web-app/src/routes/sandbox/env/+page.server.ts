import type { PageServerLoad } from './$types'
import { MY_SECRET } from '$env/static/private'
import type { ServerLoadEvent } from '@sveltejs/kit'

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
  console.log('event', event)
  return {
    secret: MY_SECRET
  }
}
