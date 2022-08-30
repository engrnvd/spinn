import type { PageServerLoad } from './$types'
import { MY_SECRET } from '$env/static/private'

export const load: PageServerLoad = async ({ locals }) => {
  return {
    secret: MY_SECRET
  }
}
