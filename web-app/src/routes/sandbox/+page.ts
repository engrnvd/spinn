import { browser } from '$app/environment'
import { LoadEvent } from '@sveltejs/kit'

export const load = async ({ fetch }: LoadEvent) => {
  const res = await fetch('http://localhost:3210/users')
  const users = await res.json()
  console.log('users', users)
  return {
    users
  }
}

export const csr = browser
export const ssr = true
export const prerender = false // set to true for static html pages

// pre render: compute page content at build time and store html files
// ssr: compute page content at every request and send html response
