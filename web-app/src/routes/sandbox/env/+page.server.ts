import type { PageServerLoad } from './$types'
import { MY_SECRET } from '$env/static/private'
import type { ServerLoadEvent } from '@sveltejs/kit'
import { _sleep } from '$lib/helpers/misc'

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
  console.log('event', event)
  await _sleep(100)
  return {
    secret: MY_SECRET
  }
}
