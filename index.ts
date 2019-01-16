/**
 * Get return type of async function
 *
 * @typeparam F - typeof async function
 * @example
 *
 * const plusOne = async (a: number) => a + 1
 * type Response = AsyncFunctionReturnType<typeof plusOne>
 *      // => number
 */
export type AsyncFunctionReturnType<F> = F extends () => Promise<infer R> ? R : never

/**
 * Get resolve type of promise
 *
 * @typeparam P - typeof Promise
 * @example
 *
 * const promise = axios<Response>(...)
 *
 * type Resolve = PromiseResolveType<typeof promise>
 *      // => Response
 */
export type PromiseResolveType<P> = P extends Promise<infer R> ? R : never

/**
 * Set nullable property
 *
 * @example
 * type Tree<T> = {
 *    value: T
 * } & Nullable<{
 *    left: Tree<T>
 *    right: Tree<T>
 * }>
 */
export type Nullable<T> = { [P in keyof T]: T[P] | null }

/**
 * @example
 * type Tree<T> = {
 *    value: T
 * } & Partial<{
 *    left: Tree<T>
 *    right: Tree<T>
 * }
 */
export type Partial<T> = { [P in keyof T]?: T[P] }

/**
 * drop `readonly` modifier
 *
 * @example
 * type User = Readonly<{
 *    name: string
 *    age: number
 * }>
 *
 * type MutableUser = NotReadonly<User>
 */
export type NotReadonly<T> = { -readonly [P in keyof T]: T[P] }