import { lazy } from 'react'

export const AboutePageAsync = lazy(
	() =>
		new Promise((resolve) =>
			// @ts-ignore
			setTimeout(() => resolve(import('./AboutePage')), 1000)
		)
)
