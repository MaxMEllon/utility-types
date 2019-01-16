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
export type Nullable<T extends object> = { [P in keyof T]: T[P] | null }

/**
 * @example
 * type Tree<T> = {
 *    value: T
 * } & Partial<{
 *    left: Tree<T>
 *    right: Tree<T>
 * }
 */
export type Partial<T extends object> = { [P in keyof T]?: T[P] }

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

/// flow aliases
// See: https://flow.org/en/docs/types/utilities/
export type $Keys<T> = keyof T
export type $Call<T extends (...args: any[]) => any> = ReturnType<T>
export type $Readonly<T> = Readonly<T>
export type $Diff<U, T> = T extends U ? never : T;
export type $Rest<T, K> = Pick<T, Exclude<keyof T, keyof K>>
export type $PropertyType<T, k extends keyof T> = T[k]
export type $Shape<T> = { [P in keyof T]?: T[P] }