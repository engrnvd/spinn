import { browser, dev } from '$app/environment'
import { LoadEvent, Load, json } from '@sveltejs/kit'

export const load: Load = async ({ fetch }: LoadEvent) => {
  // console.log('event', event)
  const res = await fetch('http://localhost:3210/users', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  const users = await res.json()
  console.log('users', users)
  return {
    users
  }
}

export const csr = browser

export const prerender = false
