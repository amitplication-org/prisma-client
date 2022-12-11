
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  createdAt: Date
  firstName: string | null
  id: string
  lastName: string | null
  password: string
  roles: Prisma.JsonValue
  updatedAt: Date
  username: string
}

/**
 * Model Order
 * 
 */
export type Order = {
  createdAt: Date
  customerId: string | null
  discount: number | null
  id: string
  productId: string | null
  quantity: number | null
  totalPrice: number | null
  updatedAt: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  addressId: string | null
  createdAt: Date
  email: string | null
  firstName: string | null
  id: string
  lastName: string | null
  phone: string | null
  updatedAt: Date
}

/**
 * Model Address
 * 
 */
export type Address = {
  address_1: string | null
  address_2: string | null
  city: string | null
  createdAt: Date
  id: string
  state: string | null
  updatedAt: Date
  zip: number | null
}

/**
 * Model Product
 * 
 */
export type Product = {
  createdAt: Date
  description: string | null
  id: string
  itemPrice: number | null
  name: string | null
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Order: 'Order',
    Customer: 'Customer',
    Address: 'Address',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgres?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect = {
    orders?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     * 
    **/
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type AddressCountOutputType
   */


  export type AddressCountOutputType = {
    customers: number
  }

  export type AddressCountOutputTypeSelect = {
    customers?: boolean
  }

  export type AddressCountOutputTypeGetPayload<S extends boolean | null | undefined | AddressCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AddressCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AddressCountOutputTypeArgs)
    ? AddressCountOutputType 
    : S extends { select: any } & (AddressCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AddressCountOutputType ? AddressCountOutputType[P] : never
  } 
      : AddressCountOutputType




  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     * 
    **/
    select?: AddressCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    orders: number
  }

  export type ProductCountOutputTypeSelect = {
    orders?: boolean
  }

  export type ProductCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductCountOutputTypeArgs)
    ? ProductCountOutputType 
    : S extends { select: any } & (ProductCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
      : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    createdAt: Date | null
    firstName: string | null
    id: string | null
    lastName: string | null
    password: string | null
    updatedAt: Date | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    createdAt: Date | null
    firstName: string | null
    id: string | null
    lastName: string | null
    password: string | null
    updatedAt: Date | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    createdAt: number
    firstName: number
    id: number
    lastName: number
    password: number
    roles: number
    updatedAt: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    createdAt?: true
    firstName?: true
    id?: true
    lastName?: true
    password?: true
    updatedAt?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    createdAt?: true
    firstName?: true
    id?: true
    lastName?: true
    password?: true
    updatedAt?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    createdAt?: true
    firstName?: true
    id?: true
    lastName?: true
    password?: true
    roles?: true
    updatedAt?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    createdAt: Date
    firstName: string | null
    id: string
    lastName: string | null
    password: string
    roles: JsonValue
    updatedAt: Date
    username: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    createdAt?: boolean
    firstName?: boolean
    id?: boolean
    lastName?: boolean
    password?: boolean
    roles?: boolean
    updatedAt?: boolean
    username?: boolean
  }


  export type UserGetPayload<S extends boolean | null | undefined | UserArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const userWithCreatedAtOnly = await prisma.user.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    discount: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    discount: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    createdAt: Date | null
    customerId: string | null
    discount: number | null
    id: string | null
    productId: string | null
    quantity: number | null
    totalPrice: number | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    createdAt: Date | null
    customerId: string | null
    discount: number | null
    id: string | null
    productId: string | null
    quantity: number | null
    totalPrice: number | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    createdAt: number
    customerId: number
    discount: number
    id: number
    productId: number
    quantity: number
    totalPrice: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    discount?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    discount?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    createdAt?: true
    customerId?: true
    discount?: true
    id?: true
    productId?: true
    quantity?: true
    totalPrice?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    createdAt?: true
    customerId?: true
    discount?: true
    id?: true
    productId?: true
    quantity?: true
    totalPrice?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    createdAt?: true
    customerId?: true
    discount?: true
    id?: true
    productId?: true
    quantity?: true
    totalPrice?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: Array<OrderScalarFieldEnum>
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    createdAt: Date
    customerId: string | null
    discount: number | null
    id: string
    productId: string | null
    quantity: number | null
    totalPrice: number | null
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    createdAt?: boolean
    customer?: boolean | CustomerArgs
    customerId?: boolean
    discount?: boolean
    id?: boolean
    product?: boolean | ProductArgs
    productId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    updatedAt?: boolean
  }


  export type OrderInclude = {
    customer?: boolean | CustomerArgs
    product?: boolean | ProductArgs
  } 

  export type OrderGetPayload<S extends boolean | null | undefined | OrderArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order :
    S extends undefined ? never :
    S extends { include: any } & (OrderArgs | OrderFindManyArgs)
    ? Order  & {
    [P in TrueKeys<S['include']>]:
        P extends 'customer' ? CustomerGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'product' ? ProductGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : S extends { select: any } & (OrderArgs | OrderFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'customer' ? CustomerGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'product' ? ProductGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof Order ? Order[P] : never
  } 
      : Order


  type OrderCountArgs = Merge<
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }
  >

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const orderWithCreatedAtOnly = await prisma.order.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): PrismaPromise<Array<OrderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find one Order that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where: OrderWhereUniqueInput
  }

  /**
   * Order: findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order: findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     * 
    **/
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     * 
    **/
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     * 
    **/
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     * 
    **/
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order: findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = OrderFindUniqueArgsBase
      

  /**
   * Order: findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = OrderFindFirstArgsBase
      

  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    addressId: string | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    id: string | null
    lastName: string | null
    phone: string | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    addressId: string | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    id: string | null
    lastName: string | null
    phone: string | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    addressId: number
    createdAt: number
    email: number
    firstName: number
    id: number
    lastName: number
    phone: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    addressId?: true
    createdAt?: true
    email?: true
    firstName?: true
    id?: true
    lastName?: true
    phone?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    addressId?: true
    createdAt?: true
    email?: true
    firstName?: true
    id?: true
    lastName?: true
    phone?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    addressId?: true
    createdAt?: true
    email?: true
    firstName?: true
    id?: true
    lastName?: true
    phone?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: Array<CustomerScalarFieldEnum>
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    addressId: string | null
    createdAt: Date
    email: string | null
    firstName: string | null
    id: string
    lastName: string | null
    phone: string | null
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    address?: boolean | AddressArgs
    addressId?: boolean
    createdAt?: boolean
    email?: boolean
    firstName?: boolean
    id?: boolean
    lastName?: boolean
    orders?: boolean | OrderFindManyArgs
    phone?: boolean
    updatedAt?: boolean
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    address?: boolean | AddressArgs
    orders?: boolean | OrderFindManyArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  } 

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'address' ? AddressGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'orders' ? Array < OrderGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'address' ? AddressGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'orders' ? Array < OrderGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = Merge<
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }
  >

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `addressId`
     * const customerWithAddressIdOnly = await prisma.customer.findMany({ select: { addressId: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find one Customer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    address<T extends AddressArgs= {}>(args?: Subset<T, AddressArgs>): Prisma__AddressClient<AddressGetPayload<T> | Null>;

    orders<T extends OrderFindManyArgs= {}>(args?: Subset<T, OrderFindManyArgs>): PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer: findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     * 
    **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer: findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     * 
    **/
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     * 
    **/
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     * 
    **/
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     * 
    **/
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     * 
    **/
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     * 
    **/
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer: findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = CustomerFindUniqueArgsBase
      

  /**
   * Customer: findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = CustomerFindFirstArgsBase
      

  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    zip: number | null
  }

  export type AddressSumAggregateOutputType = {
    zip: number | null
  }

  export type AddressMinAggregateOutputType = {
    address_1: string | null
    address_2: string | null
    city: string | null
    createdAt: Date | null
    id: string | null
    state: string | null
    updatedAt: Date | null
    zip: number | null
  }

  export type AddressMaxAggregateOutputType = {
    address_1: string | null
    address_2: string | null
    city: string | null
    createdAt: Date | null
    id: string | null
    state: string | null
    updatedAt: Date | null
    zip: number | null
  }

  export type AddressCountAggregateOutputType = {
    address_1: number
    address_2: number
    city: number
    createdAt: number
    id: number
    state: number
    updatedAt: number
    zip: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    zip?: true
  }

  export type AddressSumAggregateInputType = {
    zip?: true
  }

  export type AddressMinAggregateInputType = {
    address_1?: true
    address_2?: true
    city?: true
    createdAt?: true
    id?: true
    state?: true
    updatedAt?: true
    zip?: true
  }

  export type AddressMaxAggregateInputType = {
    address_1?: true
    address_2?: true
    city?: true
    createdAt?: true
    id?: true
    state?: true
    updatedAt?: true
    zip?: true
  }

  export type AddressCountAggregateInputType = {
    address_1?: true
    address_2?: true
    city?: true
    createdAt?: true
    id?: true
    state?: true
    updatedAt?: true
    zip?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    address_1: string | null
    address_2: string | null
    city: string | null
    createdAt: Date
    id: string
    state: string | null
    updatedAt: Date
    zip: number | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    address_1?: boolean
    address_2?: boolean
    city?: boolean
    createdAt?: boolean
    customers?: boolean | CustomerFindManyArgs
    id?: boolean
    state?: boolean
    updatedAt?: boolean
    zip?: boolean
    _count?: boolean | AddressCountOutputTypeArgs
  }


  export type AddressInclude = {
    customers?: boolean | CustomerFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  } 

  export type AddressGetPayload<S extends boolean | null | undefined | AddressArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Address :
    S extends undefined ? never :
    S extends { include: any } & (AddressArgs | AddressFindManyArgs)
    ? Address  & {
    [P in TrueKeys<S['include']>]:
        P extends 'customers' ? Array < CustomerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (AddressArgs | AddressFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'customers' ? Array < CustomerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Address ? Address[P] : never
  } 
      : Address


  type AddressCountArgs = Merge<
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface AddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `address_1`
     * const addressWithAddress_1Only = await prisma.address.findMany({ select: { address_1: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): PrismaPromise<Array<AddressGetPayload<T>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find one Address that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    customers<T extends CustomerFindManyArgs= {}>(args?: Subset<T, CustomerFindManyArgs>): PrismaPromise<Array<CustomerGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }

  /**
   * Address: findUnique
   */
  export interface AddressFindUniqueArgs extends AddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address: findFirst
   */
  export interface AddressFindFirstArgs extends AddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     * 
    **/
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     * 
    **/
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     * 
    **/
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     * 
    **/
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     * 
    **/
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     * 
    **/
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address: findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs = AddressFindUniqueArgsBase
      

  /**
   * Address: findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs = AddressFindFirstArgsBase
      

  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    itemPrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    itemPrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    id: string | null
    itemPrice: number | null
    name: string | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    id: string | null
    itemPrice: number | null
    name: string | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    createdAt: number
    description: number
    id: number
    itemPrice: number
    name: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    itemPrice?: true
  }

  export type ProductSumAggregateInputType = {
    itemPrice?: true
  }

  export type ProductMinAggregateInputType = {
    createdAt?: true
    description?: true
    id?: true
    itemPrice?: true
    name?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    createdAt?: true
    description?: true
    id?: true
    itemPrice?: true
    name?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    createdAt?: true
    description?: true
    id?: true
    itemPrice?: true
    name?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    createdAt: Date
    description: string | null
    id: string
    itemPrice: number | null
    name: string | null
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    createdAt?: boolean
    description?: boolean
    id?: boolean
    itemPrice?: boolean
    name?: boolean
    orders?: boolean | OrderFindManyArgs
    updatedAt?: boolean
    _count?: boolean | ProductCountOutputTypeArgs
  }


  export type ProductInclude = {
    orders?: boolean | OrderFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  } 

  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'orders' ? Array < OrderGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'orders' ? Array < OrderGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const productWithCreatedAtOnly = await prisma.product.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find one Product that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orders<T extends OrderFindManyArgs= {}>(args?: Subset<T, OrderFindManyArgs>): PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product: findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product: findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product: findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = ProductFindUniqueArgsBase
      

  /**
   * Product: findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = ProductFindFirstArgsBase
      

  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AddressScalarFieldEnum: {
    address_1: 'address_1',
    address_2: 'address_2',
    city: 'city',
    createdAt: 'createdAt',
    id: 'id',
    state: 'state',
    updatedAt: 'updatedAt',
    zip: 'zip'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    addressId: 'addressId',
    createdAt: 'createdAt',
    email: 'email',
    firstName: 'firstName',
    id: 'id',
    lastName: 'lastName',
    phone: 'phone',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const OrderScalarFieldEnum: {
    createdAt: 'createdAt',
    customerId: 'customerId',
    discount: 'discount',
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    createdAt: 'createdAt',
    description: 'description',
    id: 'id',
    itemPrice: 'itemPrice',
    name: 'name',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    createdAt: 'createdAt',
    firstName: 'firstName',
    id: 'id',
    lastName: 'lastName',
    password: 'password',
    roles: 'roles',
    updatedAt: 'updatedAt',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    createdAt?: DateTimeFilter | Date | string
    firstName?: StringNullableFilter | string | null
    id?: StringFilter | string
    lastName?: StringNullableFilter | string | null
    password?: StringFilter | string
    roles?: JsonFilter
    updatedAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
  }

  export type UserOrderByWithRelationInput = {
    createdAt?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    createdAt?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    id?: StringWithAggregatesFilter | string
    lastName?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
    roles?: JsonWithAggregatesFilter
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    createdAt?: DateTimeFilter | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
    customerId?: StringNullableFilter | string | null
    discount?: FloatNullableFilter | number | null
    id?: StringFilter | string
    product?: XOR<ProductRelationFilter, ProductWhereInput> | null
    productId?: StringNullableFilter | string | null
    quantity?: IntNullableFilter | number | null
    totalPrice?: IntNullableFilter | number | null
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderOrderByWithRelationInput = {
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    customerId?: SortOrder
    discount?: SortOrder
    id?: SortOrder
    product?: ProductOrderByWithRelationInput
    productId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderWhereUniqueInput = {
    id?: string
  }

  export type OrderOrderByWithAggregationInput = {
    createdAt?: SortOrder
    customerId?: SortOrder
    discount?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    customerId?: StringNullableWithAggregatesFilter | string | null
    discount?: FloatNullableWithAggregatesFilter | number | null
    id?: StringWithAggregatesFilter | string
    productId?: StringNullableWithAggregatesFilter | string | null
    quantity?: IntNullableWithAggregatesFilter | number | null
    totalPrice?: IntNullableWithAggregatesFilter | number | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    address?: XOR<AddressRelationFilter, AddressWhereInput> | null
    addressId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    email?: StringNullableFilter | string | null
    firstName?: StringNullableFilter | string | null
    id?: StringFilter | string
    lastName?: StringNullableFilter | string | null
    orders?: OrderListRelationFilter
    phone?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CustomerOrderByWithRelationInput = {
    address?: AddressOrderByWithRelationInput
    addressId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    phone?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerWhereUniqueInput = {
    id?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    addressId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    addressId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringNullableWithAggregatesFilter | string | null
    firstName?: StringNullableWithAggregatesFilter | string | null
    id?: StringWithAggregatesFilter | string
    lastName?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    address_1?: StringNullableFilter | string | null
    address_2?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    customers?: CustomerListRelationFilter
    id?: StringFilter | string
    state?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    zip?: IntNullableFilter | number | null
  }

  export type AddressOrderByWithRelationInput = {
    address_1?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    id?: SortOrder
    state?: SortOrder
    updatedAt?: SortOrder
    zip?: SortOrder
  }

  export type AddressWhereUniqueInput = {
    id?: string
  }

  export type AddressOrderByWithAggregationInput = {
    address_1?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    id?: SortOrder
    state?: SortOrder
    updatedAt?: SortOrder
    zip?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    address_1?: StringNullableWithAggregatesFilter | string | null
    address_2?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    id?: StringWithAggregatesFilter | string
    state?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    zip?: IntNullableWithAggregatesFilter | number | null
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    createdAt?: DateTimeFilter | Date | string
    description?: StringNullableFilter | string | null
    id?: StringFilter | string
    itemPrice?: FloatNullableFilter | number | null
    name?: StringNullableFilter | string | null
    orders?: OrderListRelationFilter
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    itemPrice?: SortOrder
    name?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    updatedAt?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductOrderByWithAggregationInput = {
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    itemPrice?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    description?: StringNullableWithAggregatesFilter | string | null
    id?: StringWithAggregatesFilter | string
    itemPrice?: FloatNullableWithAggregatesFilter | number | null
    name?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    firstName?: string | null
    id?: string
    lastName?: string | null
    password: string
    roles: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    username: string
  }

  export type UserUncheckedCreateInput = {
    createdAt?: Date | string
    firstName?: string | null
    id?: string
    lastName?: string | null
    password: string
    roles: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    username: string
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    createdAt?: Date | string
    firstName?: string | null
    id?: string
    lastName?: string | null
    password: string
    roles: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    username: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    discount?: number | null
    id?: string
    product?: ProductCreateNestedOneWithoutOrdersInput
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    createdAt?: Date | string
    customerId?: string | null
    discount?: number | null
    id?: string
    productId?: string | null
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneWithoutOrdersNestedInput
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    createdAt?: Date | string
    customerId?: string | null
    discount?: number | null
    id?: string
    productId?: string | null
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    address?: AddressCreateNestedOneWithoutCustomersInput
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateInput = {
    addressId?: string | null
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerUpdateInput = {
    address?: AddressUpdateOneWithoutCustomersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyInput = {
    addressId?: string | null
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    address_1?: string | null
    address_2?: string | null
    city?: string | null
    createdAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutAddressInput
    id?: string
    state?: string | null
    updatedAt?: Date | string
    zip?: number | null
  }

  export type AddressUncheckedCreateInput = {
    address_1?: string | null
    address_2?: string | null
    city?: string | null
    createdAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutAddressInput
    id?: string
    state?: string | null
    updatedAt?: Date | string
    zip?: number | null
  }

  export type AddressUpdateInput = {
    address_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutAddressNestedInput
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zip?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressUncheckedUpdateInput = {
    address_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutAddressNestedInput
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zip?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressCreateManyInput = {
    address_1?: string | null
    address_2?: string | null
    city?: string | null
    createdAt?: Date | string
    id?: string
    state?: string | null
    updatedAt?: Date | string
    zip?: number | null
  }

  export type AddressUpdateManyMutationInput = {
    address_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zip?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressUncheckedUpdateManyInput = {
    address_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zip?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    createdAt?: Date | string
    description?: string | null
    id?: string
    itemPrice?: number | null
    name?: string | null
    orders?: OrderCreateNestedManyWithoutProductInput
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    createdAt?: Date | string
    description?: string | null
    id?: string
    itemPrice?: number | null
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    itemPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutProductNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    itemPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    createdAt?: Date | string
    description?: string | null
    id?: string
    itemPrice?: number | null
    name?: string | null
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    itemPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    itemPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserCountOrderByAggregateInput = {
    createdAt?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    roles?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    createdAt?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type OrderCountOrderByAggregateInput = {
    createdAt?: SortOrder
    customerId?: SortOrder
    discount?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    discount?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    customerId?: SortOrder
    discount?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    createdAt?: SortOrder
    customerId?: SortOrder
    discount?: SortOrder
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    discount?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    addressId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    addressId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    addressId?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    id?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    address_1?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    id?: SortOrder
    state?: SortOrder
    updatedAt?: SortOrder
    zip?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    zip?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    address_1?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    id?: SortOrder
    state?: SortOrder
    updatedAt?: SortOrder
    zip?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    address_1?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    id?: SortOrder
    state?: SortOrder
    updatedAt?: SortOrder
    zip?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    zip?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    itemPrice?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    itemPrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    itemPrice?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    id?: SortOrder
    itemPrice?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    itemPrice?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressCreateNestedOneWithoutCustomersInput = {
    create?: XOR<AddressCreateWithoutCustomersInput, AddressUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCustomersInput
    connect?: AddressWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type AddressUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<AddressCreateWithoutCustomersInput, AddressUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCustomersInput
    upsert?: AddressUpsertWithoutCustomersInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutCustomersInput, AddressUncheckedUpdateWithoutCustomersInput>
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type CustomerCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutAddressInput>, Enumerable<CustomerUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutAddressInput>
    createMany?: CustomerCreateManyAddressInputEnvelope
    connect?: Enumerable<CustomerWhereUniqueInput>
  }

  export type CustomerUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutAddressInput>, Enumerable<CustomerUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutAddressInput>
    createMany?: CustomerCreateManyAddressInputEnvelope
    connect?: Enumerable<CustomerWhereUniqueInput>
  }

  export type CustomerUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutAddressInput>, Enumerable<CustomerUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<CustomerUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: CustomerCreateManyAddressInputEnvelope
    set?: Enumerable<CustomerWhereUniqueInput>
    disconnect?: Enumerable<CustomerWhereUniqueInput>
    delete?: Enumerable<CustomerWhereUniqueInput>
    connect?: Enumerable<CustomerWhereUniqueInput>
    update?: Enumerable<CustomerUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<CustomerUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<CustomerScalarWhereInput>
  }

  export type CustomerUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutAddressInput>, Enumerable<CustomerUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<CustomerUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: CustomerCreateManyAddressInputEnvelope
    set?: Enumerable<CustomerWhereUniqueInput>
    disconnect?: Enumerable<CustomerWhereUniqueInput>
    delete?: Enumerable<CustomerWhereUniqueInput>
    connect?: Enumerable<CustomerWhereUniqueInput>
    update?: Enumerable<CustomerUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<CustomerUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<CustomerScalarWhereInput>
  }

  export type OrderCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderCreateWithoutProductInput>, Enumerable<OrderUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutProductInput>
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderCreateWithoutProductInput>, Enumerable<OrderUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutProductInput>
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutProductInput>, Enumerable<OrderUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderCreateManyProductInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutProductInput>, Enumerable<OrderUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderCreateManyProductInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type CustomerCreateWithoutOrdersInput = {
    address?: AddressCreateNestedOneWithoutCustomersInput
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    addressId?: string | null
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type ProductCreateWithoutOrdersInput = {
    createdAt?: Date | string
    description?: string | null
    id?: string
    itemPrice?: number | null
    name?: string | null
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    createdAt?: Date | string
    description?: string | null
    id?: string
    itemPrice?: number | null
    name?: string | null
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    address?: AddressUpdateOneWithoutCustomersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    itemPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    itemPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateWithoutCustomersInput = {
    address_1?: string | null
    address_2?: string | null
    city?: string | null
    createdAt?: Date | string
    id?: string
    state?: string | null
    updatedAt?: Date | string
    zip?: number | null
  }

  export type AddressUncheckedCreateWithoutCustomersInput = {
    address_1?: string | null
    address_2?: string | null
    city?: string | null
    createdAt?: Date | string
    id?: string
    state?: string | null
    updatedAt?: Date | string
    zip?: number | null
  }

  export type AddressCreateOrConnectWithoutCustomersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomersInput, AddressUncheckedCreateWithoutCustomersInput>
  }

  export type OrderCreateWithoutCustomerInput = {
    createdAt?: Date | string
    discount?: number | null
    id?: string
    product?: ProductCreateNestedOneWithoutOrdersInput
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    createdAt?: Date | string
    discount?: number | null
    id?: string
    productId?: string | null
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: Enumerable<OrderCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutCustomersInput = {
    update: XOR<AddressUpdateWithoutCustomersInput, AddressUncheckedUpdateWithoutCustomersInput>
    create: XOR<AddressCreateWithoutCustomersInput, AddressUncheckedCreateWithoutCustomersInput>
  }

  export type AddressUpdateWithoutCustomersInput = {
    address_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zip?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressUncheckedUpdateWithoutCustomersInput = {
    address_1?: NullableStringFieldUpdateOperationsInput | string | null
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zip?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    customerId?: StringNullableFilter | string | null
    discount?: FloatNullableFilter | number | null
    id?: StringFilter | string
    productId?: StringNullableFilter | string | null
    quantity?: IntNullableFilter | number | null
    totalPrice?: IntNullableFilter | number | null
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CustomerCreateWithoutAddressInput = {
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutAddressInput = {
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutAddressInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
  }

  export type CustomerCreateManyAddressInputEnvelope = {
    data: Enumerable<CustomerCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutAddressInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutAddressInput, CustomerUncheckedUpdateWithoutAddressInput>
    create: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutAddressInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutAddressInput, CustomerUncheckedUpdateWithoutAddressInput>
  }

  export type CustomerUpdateManyWithWhereWithoutAddressInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutCustomersInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: Enumerable<CustomerScalarWhereInput>
    OR?: Enumerable<CustomerScalarWhereInput>
    NOT?: Enumerable<CustomerScalarWhereInput>
    addressId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    email?: StringNullableFilter | string | null
    firstName?: StringNullableFilter | string | null
    id?: StringFilter | string
    lastName?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderCreateWithoutProductInput = {
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    discount?: number | null
    id?: string
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutProductInput = {
    createdAt?: Date | string
    customerId?: string | null
    discount?: number | null
    id?: string
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutProductInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderCreateManyProductInputEnvelope = {
    data: Enumerable<OrderCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderCreateManyCustomerInput = {
    createdAt?: Date | string
    discount?: number | null
    id?: string
    productId?: string | null
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneWithoutOrdersNestedInput
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyAddressInput = {
    createdAt?: Date | string
    email?: string | null
    firstName?: string | null
    id?: string
    lastName?: string | null
    phone?: string | null
    updatedAt?: Date | string
  }

  export type CustomerUpdateWithoutAddressInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutAddressInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyWithoutCustomersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyProductInput = {
    createdAt?: Date | string
    customerId?: string | null
    discount?: number | null
    id?: string
    quantity?: number | null
    totalPrice?: number | null
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}