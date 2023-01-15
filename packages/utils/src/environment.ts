type Phase = 'development' | 'test' | 'stage' | 'production'

export const PHASE = (process.env.PHASE as Phase | undefined) ?? 'development'

export const IS_DEV = PHASE === 'development'

export const IS_BROWSER = typeof window !== 'undefined'
