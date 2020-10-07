import authorization from './hoc/authorization'

export const requireAdmin = authorization('admin')
export const requireDeveloper = authorization('developer')
export const requireModerator = authorization('moderator')
export const requireUser = authorization('user')
