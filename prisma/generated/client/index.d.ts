
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Server
 * 
 */
export type Server = $Result.DefaultSelection<Prisma.$ServerPayload>
/**
 * Model Guild
 * 
 */
export type Guild = $Result.DefaultSelection<Prisma.$GuildPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemsOwners
 * 
 */
export type ItemsOwners = $Result.DefaultSelection<Prisma.$ItemsOwnersPayload>
/**
 * Model Epgp
 * 
 */
export type Epgp = $Result.DefaultSelection<Prisma.$EpgpPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Servers
 * const servers = await prisma.server.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Servers
   * const servers = await prisma.server.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<ExtArgs>;

  /**
   * `prisma.guild`: Exposes CRUD operations for the **Guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guild.findMany()
    * ```
    */
  get guild(): Prisma.GuildDelegate<ExtArgs>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.itemsOwners`: Exposes CRUD operations for the **ItemsOwners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsOwners
    * const itemsOwners = await prisma.itemsOwners.findMany()
    * ```
    */
  get itemsOwners(): Prisma.ItemsOwnersDelegate<ExtArgs>;

  /**
   * `prisma.epgp`: Exposes CRUD operations for the **Epgp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Epgps
    * const epgps = await prisma.epgp.findMany()
    * ```
    */
  get epgp(): Prisma.EpgpDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Server: 'Server',
    Guild: 'Guild',
    Player: 'Player',
    Item: 'Item',
    ItemsOwners: 'ItemsOwners',
    Epgp: 'Epgp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "server" | "guild" | "player" | "item" | "itemsOwners" | "epgp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Server: {
        payload: Prisma.$ServerPayload<ExtArgs>
        fields: Prisma.ServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findFirst: {
            args: Prisma.ServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findMany: {
            args: Prisma.ServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          create: {
            args: Prisma.ServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          createMany: {
            args: Prisma.ServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          delete: {
            args: Prisma.ServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          update: {
            args: Prisma.ServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          deleteMany: {
            args: Prisma.ServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          aggregate: {
            args: Prisma.ServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServer>
          }
          groupBy: {
            args: Prisma.ServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerCountArgs<ExtArgs>
            result: $Utils.Optional<ServerCountAggregateOutputType> | number
          }
        }
      }
      Guild: {
        payload: Prisma.$GuildPayload<ExtArgs>
        fields: Prisma.GuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findFirst: {
            args: Prisma.GuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          findMany: {
            args: Prisma.GuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          create: {
            args: Prisma.GuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          createMany: {
            args: Prisma.GuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>[]
          }
          delete: {
            args: Prisma.GuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          update: {
            args: Prisma.GuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          deleteMany: {
            args: Prisma.GuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildPayload>
          }
          aggregate: {
            args: Prisma.GuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuild>
          }
          groupBy: {
            args: Prisma.GuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildCountArgs<ExtArgs>
            result: $Utils.Optional<GuildCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemsOwners: {
        payload: Prisma.$ItemsOwnersPayload<ExtArgs>
        fields: Prisma.ItemsOwnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsOwnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsOwnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>
          }
          findFirst: {
            args: Prisma.ItemsOwnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsOwnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>
          }
          findMany: {
            args: Prisma.ItemsOwnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>[]
          }
          create: {
            args: Prisma.ItemsOwnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>
          }
          createMany: {
            args: Prisma.ItemsOwnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsOwnersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>[]
          }
          delete: {
            args: Prisma.ItemsOwnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>
          }
          update: {
            args: Prisma.ItemsOwnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>
          }
          deleteMany: {
            args: Prisma.ItemsOwnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsOwnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemsOwnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsOwnersPayload>
          }
          aggregate: {
            args: Prisma.ItemsOwnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemsOwners>
          }
          groupBy: {
            args: Prisma.ItemsOwnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsOwnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsOwnersCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsOwnersCountAggregateOutputType> | number
          }
        }
      }
      Epgp: {
        payload: Prisma.$EpgpPayload<ExtArgs>
        fields: Prisma.EpgpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpgpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpgpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>
          }
          findFirst: {
            args: Prisma.EpgpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpgpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>
          }
          findMany: {
            args: Prisma.EpgpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>[]
          }
          create: {
            args: Prisma.EpgpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>
          }
          createMany: {
            args: Prisma.EpgpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpgpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>[]
          }
          delete: {
            args: Prisma.EpgpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>
          }
          update: {
            args: Prisma.EpgpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>
          }
          deleteMany: {
            args: Prisma.EpgpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpgpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EpgpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpgpPayload>
          }
          aggregate: {
            args: Prisma.EpgpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpgp>
          }
          groupBy: {
            args: Prisma.EpgpGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpgpGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpgpCountArgs<ExtArgs>
            result: $Utils.Optional<EpgpCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServerCountOutputType
   */

  export type ServerCountOutputType = {
    players: number
    guilds: number
  }

  export type ServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | ServerCountOutputTypeCountPlayersArgs
    guilds?: boolean | ServerCountOutputTypeCountGuildsArgs
  }

  // Custom InputTypes
  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     */
    select?: ServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountGuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildWhereInput
  }


  /**
   * Count Type GuildCountOutputType
   */

  export type GuildCountOutputType = {
    players: number
  }

  export type GuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | GuildCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildCountOutputType
     */
    select?: GuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildCountOutputType without action
   */
  export type GuildCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    loots: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loots?: boolean | PlayerCountOutputTypeCountLootsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountLootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsOwnersWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    drops: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drops?: boolean | ItemCountOutputTypeCountDropsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountDropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsOwnersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Server
   */

  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerAvgAggregateOutputType = {
    id: number | null
  }

  export type ServerSumAggregateOutputType = {
    id: number | null
  }

  export type ServerMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
  }

  export type ServerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
  }

  export type ServerCountAggregateOutputType = {
    id: number
    name: number
    region: number
    _all: number
  }


  export type ServerAvgAggregateInputType = {
    id?: true
  }

  export type ServerSumAggregateInputType = {
    id?: true
  }

  export type ServerMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
  }

  export type ServerMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
  }

  export type ServerCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    _all?: true
  }

  export type ServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Server to aggregate.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithAggregationInput | ServerOrderByWithAggregationInput[]
    by: ServerScalarFieldEnum[] | ServerScalarFieldEnum
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _avg?: ServerAvgAggregateInputType
    _sum?: ServerSumAggregateInputType
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }

  export type ServerGroupByOutputType = {
    id: number
    name: string
    region: string | null
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    players?: boolean | Server$playersArgs<ExtArgs>
    guilds?: boolean | Server$guildsArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["server"]>

  export type ServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
  }, ExtArgs["result"]["server"]>

  export type ServerSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
  }

  export type ServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Server$playersArgs<ExtArgs>
    guilds?: boolean | Server$guildsArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Server"
    objects: {
      players: Prisma.$PlayerPayload<ExtArgs>[]
      guilds: Prisma.$GuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region: string | null
    }, ExtArgs["result"]["server"]>
    composites: {}
  }

  type ServerGetPayload<S extends boolean | null | undefined | ServerDefaultArgs> = $Result.GetResult<Prisma.$ServerPayload, S>

  type ServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServerCountAggregateInputType | true
    }

  export interface ServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Server'], meta: { name: 'Server' } }
    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerFindUniqueArgs>(args: SelectSubset<T, ServerFindUniqueArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Server that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerFindFirstArgs>(args?: SelectSubset<T, ServerFindFirstArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Server that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerFindManyArgs>(args?: SelectSubset<T, ServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
     */
    create<T extends ServerCreateArgs>(args: SelectSubset<T, ServerCreateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Servers.
     * @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerCreateManyArgs>(args?: SelectSubset<T, ServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servers and returns the data saved in the database.
     * @param {ServerCreateManyAndReturnArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servers and only return the `id`
     * const serverWithIdOnly = await prisma.server.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServerCreateManyAndReturnArgs>(args?: SelectSubset<T, ServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
     */
    delete<T extends ServerDeleteArgs>(args: SelectSubset<T, ServerDeleteArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerUpdateArgs>(args: SelectSubset<T, ServerUpdateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerDeleteManyArgs>(args?: SelectSubset<T, ServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerUpdateManyArgs>(args: SelectSubset<T, ServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
     */
    upsert<T extends ServerUpsertArgs>(args: SelectSubset<T, ServerUpsertArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
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
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Server model
   */
  readonly fields: ServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Server$playersArgs<ExtArgs> = {}>(args?: Subset<T, Server$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany"> | Null>
    guilds<T extends Server$guildsArgs<ExtArgs> = {}>(args?: Subset<T, Server$guildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Server model
   */ 
  interface ServerFieldRefs {
    readonly id: FieldRef<"Server", 'Int'>
    readonly name: FieldRef<"Server", 'String'>
    readonly region: FieldRef<"Server", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Server findUnique
   */
  export type ServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findFirst
   */
  export type ServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findMany
   */
  export type ServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server create
   */
  export type ServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to create a Server.
     */
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }

  /**
   * Server createMany
   */
  export type ServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
  }

  /**
   * Server createManyAndReturn
   */
  export type ServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
  }

  /**
   * Server update
   */
  export type ServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to update a Server.
     */
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
  }

  /**
   * Server upsert
   */
  export type ServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The filter to search for the Server to update in case it exists.
     */
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     */
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }

  /**
   * Server delete
   */
  export type ServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter which Server to delete.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServerWhereInput
  }

  /**
   * Server.players
   */
  export type Server$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Server.guilds
   */
  export type Server$guildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    where?: GuildWhereInput
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    cursor?: GuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Server without action
   */
  export type ServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
  }


  /**
   * Model Guild
   */

  export type AggregateGuild = {
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  export type GuildAvgAggregateOutputType = {
    id: number | null
    serverId: number | null
  }

  export type GuildSumAggregateOutputType = {
    id: number | null
    serverId: number | null
  }

  export type GuildMinAggregateOutputType = {
    id: number | null
    name: string | null
    serverId: number | null
  }

  export type GuildMaxAggregateOutputType = {
    id: number | null
    name: string | null
    serverId: number | null
  }

  export type GuildCountAggregateOutputType = {
    id: number
    name: number
    serverId: number
    _all: number
  }


  export type GuildAvgAggregateInputType = {
    id?: true
    serverId?: true
  }

  export type GuildSumAggregateInputType = {
    id?: true
    serverId?: true
  }

  export type GuildMinAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
  }

  export type GuildMaxAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
  }

  export type GuildCountAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    _all?: true
  }

  export type GuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guild to aggregate.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guilds
    **/
    _count?: true | GuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMaxAggregateInputType
  }

  export type GetGuildAggregateType<T extends GuildAggregateArgs> = {
        [P in keyof T & keyof AggregateGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuild[P]>
      : GetScalarType<T[P], AggregateGuild[P]>
  }




  export type GuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildWhereInput
    orderBy?: GuildOrderByWithAggregationInput | GuildOrderByWithAggregationInput[]
    by: GuildScalarFieldEnum[] | GuildScalarFieldEnum
    having?: GuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildCountAggregateInputType | true
    _avg?: GuildAvgAggregateInputType
    _sum?: GuildSumAggregateInputType
    _min?: GuildMinAggregateInputType
    _max?: GuildMaxAggregateInputType
  }

  export type GuildGroupByOutputType = {
    id: number
    name: string
    serverId: number
    _count: GuildCountAggregateOutputType | null
    _avg: GuildAvgAggregateOutputType | null
    _sum: GuildSumAggregateOutputType | null
    _min: GuildMinAggregateOutputType | null
    _max: GuildMaxAggregateOutputType | null
  }

  type GetGuildGroupByPayload<T extends GuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildGroupByOutputType[P]>
            : GetScalarType<T[P], GuildGroupByOutputType[P]>
        }
      >
    >


  export type GuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serverId?: boolean
    server?: boolean | ServerDefaultArgs<ExtArgs>
    players?: boolean | Guild$playersArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serverId?: boolean
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guild"]>

  export type GuildSelectScalar = {
    id?: boolean
    name?: boolean
    serverId?: boolean
  }

  export type GuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServerDefaultArgs<ExtArgs>
    players?: boolean | Guild$playersArgs<ExtArgs>
    _count?: boolean | GuildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServerDefaultArgs<ExtArgs>
  }

  export type $GuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guild"
    objects: {
      server: Prisma.$ServerPayload<ExtArgs>
      players: Prisma.$PlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      serverId: number
    }, ExtArgs["result"]["guild"]>
    composites: {}
  }

  type GuildGetPayload<S extends boolean | null | undefined | GuildDefaultArgs> = $Result.GetResult<Prisma.$GuildPayload, S>

  type GuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GuildFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GuildCountAggregateInputType | true
    }

  export interface GuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guild'], meta: { name: 'Guild' } }
    /**
     * Find zero or one Guild that matches the filter.
     * @param {GuildFindUniqueArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildFindUniqueArgs>(args: SelectSubset<T, GuildFindUniqueArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Guild that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GuildFindUniqueOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildFindFirstArgs>(args?: SelectSubset<T, GuildFindFirstArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Guild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindFirstOrThrowArgs} args - Arguments to find a Guild
     * @example
     * // Get one Guild
     * const guild = await prisma.guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guild.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildWithIdOnly = await prisma.guild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildFindManyArgs>(args?: SelectSubset<T, GuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Guild.
     * @param {GuildCreateArgs} args - Arguments to create a Guild.
     * @example
     * // Create one Guild
     * const Guild = await prisma.guild.create({
     *   data: {
     *     // ... data to create a Guild
     *   }
     * })
     * 
     */
    create<T extends GuildCreateArgs>(args: SelectSubset<T, GuildCreateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Guilds.
     * @param {GuildCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildCreateManyArgs>(args?: SelectSubset<T, GuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guilds and returns the data saved in the database.
     * @param {GuildCreateManyAndReturnArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guild = await prisma.guild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guilds and only return the `id`
     * const guildWithIdOnly = await prisma.guild.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Guild.
     * @param {GuildDeleteArgs} args - Arguments to delete one Guild.
     * @example
     * // Delete one Guild
     * const Guild = await prisma.guild.delete({
     *   where: {
     *     // ... filter to delete one Guild
     *   }
     * })
     * 
     */
    delete<T extends GuildDeleteArgs>(args: SelectSubset<T, GuildDeleteArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Guild.
     * @param {GuildUpdateArgs} args - Arguments to update one Guild.
     * @example
     * // Update one Guild
     * const guild = await prisma.guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildUpdateArgs>(args: SelectSubset<T, GuildUpdateArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Guilds.
     * @param {GuildDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildDeleteManyArgs>(args?: SelectSubset<T, GuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guild = await prisma.guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildUpdateManyArgs>(args: SelectSubset<T, GuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guild.
     * @param {GuildUpsertArgs} args - Arguments to update or create a Guild.
     * @example
     * // Update or create a Guild
     * const guild = await prisma.guild.upsert({
     *   create: {
     *     // ... data to create a Guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guild we want to update
     *   }
     * })
     */
    upsert<T extends GuildUpsertArgs>(args: SelectSubset<T, GuildUpsertArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guild.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends GuildCountArgs>(
      args?: Subset<T, GuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuildAggregateArgs>(args: Subset<T, GuildAggregateArgs>): Prisma.PrismaPromise<GetGuildAggregateType<T>>

    /**
     * Group by Guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildGroupByArgs} args - Group by arguments.
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
      T extends GuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildGroupByArgs['orderBy'] }
        : { orderBy?: GuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guild model
   */
  readonly fields: GuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends ServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServerDefaultArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    players<T extends Guild$playersArgs<ExtArgs> = {}>(args?: Subset<T, Guild$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guild model
   */ 
  interface GuildFieldRefs {
    readonly id: FieldRef<"Guild", 'Int'>
    readonly name: FieldRef<"Guild", 'String'>
    readonly serverId: FieldRef<"Guild", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Guild findUnique
   */
  export type GuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findUniqueOrThrow
   */
  export type GuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild findFirst
   */
  export type GuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findFirstOrThrow
   */
  export type GuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guild to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild findMany
   */
  export type GuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildOrderByWithRelationInput | GuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guilds.
     */
    cursor?: GuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    distinct?: GuildScalarFieldEnum | GuildScalarFieldEnum[]
  }

  /**
   * Guild create
   */
  export type GuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Guild.
     */
    data: XOR<GuildCreateInput, GuildUncheckedCreateInput>
  }

  /**
   * Guild createMany
   */
  export type GuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
  }

  /**
   * Guild createManyAndReturn
   */
  export type GuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Guilds.
     */
    data: GuildCreateManyInput | GuildCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guild update
   */
  export type GuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Guild.
     */
    data: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
    /**
     * Choose, which Guild to update.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild updateMany
   */
  export type GuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildWhereInput
  }

  /**
   * Guild upsert
   */
  export type GuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Guild to update in case it exists.
     */
    where: GuildWhereUniqueInput
    /**
     * In case the Guild found by the `where` argument doesn't exist, create a new Guild with this data.
     */
    create: XOR<GuildCreateInput, GuildUncheckedCreateInput>
    /**
     * In case the Guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildUpdateInput, GuildUncheckedUpdateInput>
  }

  /**
   * Guild delete
   */
  export type GuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
    /**
     * Filter which Guild to delete.
     */
    where: GuildWhereUniqueInput
  }

  /**
   * Guild deleteMany
   */
  export type GuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to delete
     */
    where?: GuildWhereInput
  }

  /**
   * Guild.players
   */
  export type Guild$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Guild without action
   */
  export type GuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guild
     */
    select?: GuildSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    serverId: number | null
    guildId: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    serverId: number | null
    guildId: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    serverId: number | null
    guildId: number | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    serverId: number | null
    guildId: number | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    serverId: number
    guildId: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    serverId?: true
    guildId?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    serverId?: true
    guildId?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    guildId?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    guildId?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    serverId?: true
    guildId?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    name: string
    serverId: number
    guildId: number
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serverId?: boolean
    guildId?: boolean
    server?: boolean | ServerDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    loots?: boolean | Player$lootsArgs<ExtArgs>
    epgp?: boolean | Player$epgpArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serverId?: boolean
    guildId?: boolean
    server?: boolean | ServerDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    serverId?: boolean
    guildId?: boolean
  }

  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServerDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
    loots?: boolean | Player$lootsArgs<ExtArgs>
    epgp?: boolean | Player$epgpArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServerDefaultArgs<ExtArgs>
    guild?: boolean | GuildDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      server: Prisma.$ServerPayload<ExtArgs>
      guild: Prisma.$GuildPayload<ExtArgs>
      loots: Prisma.$ItemsOwnersPayload<ExtArgs>[]
      epgp: Prisma.$EpgpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      serverId: number
      guildId: number
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends ServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServerDefaultArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    guild<T extends GuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildDefaultArgs<ExtArgs>>): Prisma__GuildClient<$Result.GetResult<Prisma.$GuildPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    loots<T extends Player$lootsArgs<ExtArgs> = {}>(args?: Subset<T, Player$lootsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findMany"> | Null>
    epgp<T extends Player$epgpArgs<ExtArgs> = {}>(args?: Subset<T, Player$epgpArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */ 
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly name: FieldRef<"Player", 'String'>
    readonly serverId: FieldRef<"Player", 'Int'>
    readonly guildId: FieldRef<"Player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
  }

  /**
   * Player.loots
   */
  export type Player$lootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    where?: ItemsOwnersWhereInput
    orderBy?: ItemsOwnersOrderByWithRelationInput | ItemsOwnersOrderByWithRelationInput[]
    cursor?: ItemsOwnersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsOwnersScalarFieldEnum | ItemsOwnersScalarFieldEnum[]
  }

  /**
   * Player.epgp
   */
  export type Player$epgpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    where?: EpgpWhereInput
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    itemId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    name: string | null
    quality: string | null
    itemString: string | null
    iconUrl: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    name: string | null
    quality: string | null
    itemString: string | null
    iconUrl: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    itemId: number
    name: number
    quality: number
    itemString: number
    iconUrl: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    itemId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    itemId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    itemId?: true
    name?: true
    quality?: true
    itemString?: true
    iconUrl?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    itemId?: true
    name?: true
    quality?: true
    itemString?: true
    iconUrl?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    itemId?: true
    name?: true
    quality?: true
    itemString?: true
    iconUrl?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    itemId: number
    name: string
    quality: string
    itemString: string
    iconUrl: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    name?: boolean
    quality?: boolean
    itemString?: boolean
    iconUrl?: boolean
    drops?: boolean | Item$dropsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    name?: boolean
    quality?: boolean
    itemString?: boolean
    iconUrl?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    itemId?: boolean
    name?: boolean
    quality?: boolean
    itemString?: boolean
    iconUrl?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drops?: boolean | Item$dropsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      drops: Prisma.$ItemsOwnersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemId: number
      name: string
      quality: string
      itemString: string
      iconUrl: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drops<T extends Item$dropsArgs<ExtArgs> = {}>(args?: Subset<T, Item$dropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly itemId: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly quality: FieldRef<"Item", 'String'>
    readonly itemString: FieldRef<"Item", 'String'>
    readonly iconUrl: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item.drops
   */
  export type Item$dropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    where?: ItemsOwnersWhereInput
    orderBy?: ItemsOwnersOrderByWithRelationInput | ItemsOwnersOrderByWithRelationInput[]
    cursor?: ItemsOwnersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsOwnersScalarFieldEnum | ItemsOwnersScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemsOwners
   */

  export type AggregateItemsOwners = {
    _count: ItemsOwnersCountAggregateOutputType | null
    _avg: ItemsOwnersAvgAggregateOutputType | null
    _sum: ItemsOwnersSumAggregateOutputType | null
    _min: ItemsOwnersMinAggregateOutputType | null
    _max: ItemsOwnersMaxAggregateOutputType | null
  }

  export type ItemsOwnersAvgAggregateOutputType = {
    itemId: number | null
    playerId: number | null
    gpCost: number | null
  }

  export type ItemsOwnersSumAggregateOutputType = {
    itemId: number | null
    playerId: number | null
    gpCost: number | null
  }

  export type ItemsOwnersMinAggregateOutputType = {
    itemId: number | null
    playerId: number | null
    assignedAt: Date | null
    gpCost: number | null
  }

  export type ItemsOwnersMaxAggregateOutputType = {
    itemId: number | null
    playerId: number | null
    assignedAt: Date | null
    gpCost: number | null
  }

  export type ItemsOwnersCountAggregateOutputType = {
    itemId: number
    playerId: number
    assignedAt: number
    gpCost: number
    _all: number
  }


  export type ItemsOwnersAvgAggregateInputType = {
    itemId?: true
    playerId?: true
    gpCost?: true
  }

  export type ItemsOwnersSumAggregateInputType = {
    itemId?: true
    playerId?: true
    gpCost?: true
  }

  export type ItemsOwnersMinAggregateInputType = {
    itemId?: true
    playerId?: true
    assignedAt?: true
    gpCost?: true
  }

  export type ItemsOwnersMaxAggregateInputType = {
    itemId?: true
    playerId?: true
    assignedAt?: true
    gpCost?: true
  }

  export type ItemsOwnersCountAggregateInputType = {
    itemId?: true
    playerId?: true
    assignedAt?: true
    gpCost?: true
    _all?: true
  }

  export type ItemsOwnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsOwners to aggregate.
     */
    where?: ItemsOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsOwners to fetch.
     */
    orderBy?: ItemsOwnersOrderByWithRelationInput | ItemsOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemsOwners
    **/
    _count?: true | ItemsOwnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsOwnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsOwnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsOwnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsOwnersMaxAggregateInputType
  }

  export type GetItemsOwnersAggregateType<T extends ItemsOwnersAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsOwners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsOwners[P]>
      : GetScalarType<T[P], AggregateItemsOwners[P]>
  }




  export type ItemsOwnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsOwnersWhereInput
    orderBy?: ItemsOwnersOrderByWithAggregationInput | ItemsOwnersOrderByWithAggregationInput[]
    by: ItemsOwnersScalarFieldEnum[] | ItemsOwnersScalarFieldEnum
    having?: ItemsOwnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsOwnersCountAggregateInputType | true
    _avg?: ItemsOwnersAvgAggregateInputType
    _sum?: ItemsOwnersSumAggregateInputType
    _min?: ItemsOwnersMinAggregateInputType
    _max?: ItemsOwnersMaxAggregateInputType
  }

  export type ItemsOwnersGroupByOutputType = {
    itemId: number
    playerId: number
    assignedAt: Date
    gpCost: number
    _count: ItemsOwnersCountAggregateOutputType | null
    _avg: ItemsOwnersAvgAggregateOutputType | null
    _sum: ItemsOwnersSumAggregateOutputType | null
    _min: ItemsOwnersMinAggregateOutputType | null
    _max: ItemsOwnersMaxAggregateOutputType | null
  }

  type GetItemsOwnersGroupByPayload<T extends ItemsOwnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsOwnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsOwnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsOwnersGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsOwnersGroupByOutputType[P]>
        }
      >
    >


  export type ItemsOwnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    playerId?: boolean
    assignedAt?: boolean
    gpCost?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsOwners"]>

  export type ItemsOwnersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    playerId?: boolean
    assignedAt?: boolean
    gpCost?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsOwners"]>

  export type ItemsOwnersSelectScalar = {
    itemId?: boolean
    playerId?: boolean
    assignedAt?: boolean
    gpCost?: boolean
  }

  export type ItemsOwnersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ItemsOwnersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $ItemsOwnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemsOwners"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      playerId: number
      assignedAt: Date
      gpCost: number
    }, ExtArgs["result"]["itemsOwners"]>
    composites: {}
  }

  type ItemsOwnersGetPayload<S extends boolean | null | undefined | ItemsOwnersDefaultArgs> = $Result.GetResult<Prisma.$ItemsOwnersPayload, S>

  type ItemsOwnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemsOwnersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemsOwnersCountAggregateInputType | true
    }

  export interface ItemsOwnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemsOwners'], meta: { name: 'ItemsOwners' } }
    /**
     * Find zero or one ItemsOwners that matches the filter.
     * @param {ItemsOwnersFindUniqueArgs} args - Arguments to find a ItemsOwners
     * @example
     * // Get one ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsOwnersFindUniqueArgs>(args: SelectSubset<T, ItemsOwnersFindUniqueArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ItemsOwners that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemsOwnersFindUniqueOrThrowArgs} args - Arguments to find a ItemsOwners
     * @example
     * // Get one ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsOwnersFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsOwnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ItemsOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersFindFirstArgs} args - Arguments to find a ItemsOwners
     * @example
     * // Get one ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsOwnersFindFirstArgs>(args?: SelectSubset<T, ItemsOwnersFindFirstArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ItemsOwners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersFindFirstOrThrowArgs} args - Arguments to find a ItemsOwners
     * @example
     * // Get one ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsOwnersFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsOwnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ItemsOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.findMany()
     * 
     * // Get first 10 ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemsOwnersWithItemIdOnly = await prisma.itemsOwners.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemsOwnersFindManyArgs>(args?: SelectSubset<T, ItemsOwnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ItemsOwners.
     * @param {ItemsOwnersCreateArgs} args - Arguments to create a ItemsOwners.
     * @example
     * // Create one ItemsOwners
     * const ItemsOwners = await prisma.itemsOwners.create({
     *   data: {
     *     // ... data to create a ItemsOwners
     *   }
     * })
     * 
     */
    create<T extends ItemsOwnersCreateArgs>(args: SelectSubset<T, ItemsOwnersCreateArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ItemsOwners.
     * @param {ItemsOwnersCreateManyArgs} args - Arguments to create many ItemsOwners.
     * @example
     * // Create many ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsOwnersCreateManyArgs>(args?: SelectSubset<T, ItemsOwnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemsOwners and returns the data saved in the database.
     * @param {ItemsOwnersCreateManyAndReturnArgs} args - Arguments to create many ItemsOwners.
     * @example
     * // Create many ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemsOwners and only return the `itemId`
     * const itemsOwnersWithItemIdOnly = await prisma.itemsOwners.createManyAndReturn({ 
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsOwnersCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsOwnersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ItemsOwners.
     * @param {ItemsOwnersDeleteArgs} args - Arguments to delete one ItemsOwners.
     * @example
     * // Delete one ItemsOwners
     * const ItemsOwners = await prisma.itemsOwners.delete({
     *   where: {
     *     // ... filter to delete one ItemsOwners
     *   }
     * })
     * 
     */
    delete<T extends ItemsOwnersDeleteArgs>(args: SelectSubset<T, ItemsOwnersDeleteArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ItemsOwners.
     * @param {ItemsOwnersUpdateArgs} args - Arguments to update one ItemsOwners.
     * @example
     * // Update one ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsOwnersUpdateArgs>(args: SelectSubset<T, ItemsOwnersUpdateArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ItemsOwners.
     * @param {ItemsOwnersDeleteManyArgs} args - Arguments to filter ItemsOwners to delete.
     * @example
     * // Delete a few ItemsOwners
     * const { count } = await prisma.itemsOwners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsOwnersDeleteManyArgs>(args?: SelectSubset<T, ItemsOwnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsOwnersUpdateManyArgs>(args: SelectSubset<T, ItemsOwnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemsOwners.
     * @param {ItemsOwnersUpsertArgs} args - Arguments to update or create a ItemsOwners.
     * @example
     * // Update or create a ItemsOwners
     * const itemsOwners = await prisma.itemsOwners.upsert({
     *   create: {
     *     // ... data to create a ItemsOwners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsOwners we want to update
     *   }
     * })
     */
    upsert<T extends ItemsOwnersUpsertArgs>(args: SelectSubset<T, ItemsOwnersUpsertArgs<ExtArgs>>): Prisma__ItemsOwnersClient<$Result.GetResult<Prisma.$ItemsOwnersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ItemsOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersCountArgs} args - Arguments to filter ItemsOwners to count.
     * @example
     * // Count the number of ItemsOwners
     * const count = await prisma.itemsOwners.count({
     *   where: {
     *     // ... the filter for the ItemsOwners we want to count
     *   }
     * })
    **/
    count<T extends ItemsOwnersCountArgs>(
      args?: Subset<T, ItemsOwnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsOwnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsOwnersAggregateArgs>(args: Subset<T, ItemsOwnersAggregateArgs>): Prisma.PrismaPromise<GetItemsOwnersAggregateType<T>>

    /**
     * Group by ItemsOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsOwnersGroupByArgs} args - Group by arguments.
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
      T extends ItemsOwnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsOwnersGroupByArgs['orderBy'] }
        : { orderBy?: ItemsOwnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemsOwnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsOwnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemsOwners model
   */
  readonly fields: ItemsOwnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemsOwners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsOwnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemsOwners model
   */ 
  interface ItemsOwnersFieldRefs {
    readonly itemId: FieldRef<"ItemsOwners", 'Int'>
    readonly playerId: FieldRef<"ItemsOwners", 'Int'>
    readonly assignedAt: FieldRef<"ItemsOwners", 'DateTime'>
    readonly gpCost: FieldRef<"ItemsOwners", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemsOwners findUnique
   */
  export type ItemsOwnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * Filter, which ItemsOwners to fetch.
     */
    where: ItemsOwnersWhereUniqueInput
  }

  /**
   * ItemsOwners findUniqueOrThrow
   */
  export type ItemsOwnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * Filter, which ItemsOwners to fetch.
     */
    where: ItemsOwnersWhereUniqueInput
  }

  /**
   * ItemsOwners findFirst
   */
  export type ItemsOwnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * Filter, which ItemsOwners to fetch.
     */
    where?: ItemsOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsOwners to fetch.
     */
    orderBy?: ItemsOwnersOrderByWithRelationInput | ItemsOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsOwners.
     */
    cursor?: ItemsOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsOwners.
     */
    distinct?: ItemsOwnersScalarFieldEnum | ItemsOwnersScalarFieldEnum[]
  }

  /**
   * ItemsOwners findFirstOrThrow
   */
  export type ItemsOwnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * Filter, which ItemsOwners to fetch.
     */
    where?: ItemsOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsOwners to fetch.
     */
    orderBy?: ItemsOwnersOrderByWithRelationInput | ItemsOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsOwners.
     */
    cursor?: ItemsOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsOwners.
     */
    distinct?: ItemsOwnersScalarFieldEnum | ItemsOwnersScalarFieldEnum[]
  }

  /**
   * ItemsOwners findMany
   */
  export type ItemsOwnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * Filter, which ItemsOwners to fetch.
     */
    where?: ItemsOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsOwners to fetch.
     */
    orderBy?: ItemsOwnersOrderByWithRelationInput | ItemsOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemsOwners.
     */
    cursor?: ItemsOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsOwners.
     */
    skip?: number
    distinct?: ItemsOwnersScalarFieldEnum | ItemsOwnersScalarFieldEnum[]
  }

  /**
   * ItemsOwners create
   */
  export type ItemsOwnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemsOwners.
     */
    data: XOR<ItemsOwnersCreateInput, ItemsOwnersUncheckedCreateInput>
  }

  /**
   * ItemsOwners createMany
   */
  export type ItemsOwnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemsOwners.
     */
    data: ItemsOwnersCreateManyInput | ItemsOwnersCreateManyInput[]
  }

  /**
   * ItemsOwners createManyAndReturn
   */
  export type ItemsOwnersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ItemsOwners.
     */
    data: ItemsOwnersCreateManyInput | ItemsOwnersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsOwners update
   */
  export type ItemsOwnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemsOwners.
     */
    data: XOR<ItemsOwnersUpdateInput, ItemsOwnersUncheckedUpdateInput>
    /**
     * Choose, which ItemsOwners to update.
     */
    where: ItemsOwnersWhereUniqueInput
  }

  /**
   * ItemsOwners updateMany
   */
  export type ItemsOwnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemsOwners.
     */
    data: XOR<ItemsOwnersUpdateManyMutationInput, ItemsOwnersUncheckedUpdateManyInput>
    /**
     * Filter which ItemsOwners to update
     */
    where?: ItemsOwnersWhereInput
  }

  /**
   * ItemsOwners upsert
   */
  export type ItemsOwnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemsOwners to update in case it exists.
     */
    where: ItemsOwnersWhereUniqueInput
    /**
     * In case the ItemsOwners found by the `where` argument doesn't exist, create a new ItemsOwners with this data.
     */
    create: XOR<ItemsOwnersCreateInput, ItemsOwnersUncheckedCreateInput>
    /**
     * In case the ItemsOwners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsOwnersUpdateInput, ItemsOwnersUncheckedUpdateInput>
  }

  /**
   * ItemsOwners delete
   */
  export type ItemsOwnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
    /**
     * Filter which ItemsOwners to delete.
     */
    where: ItemsOwnersWhereUniqueInput
  }

  /**
   * ItemsOwners deleteMany
   */
  export type ItemsOwnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsOwners to delete
     */
    where?: ItemsOwnersWhereInput
  }

  /**
   * ItemsOwners without action
   */
  export type ItemsOwnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsOwners
     */
    select?: ItemsOwnersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsOwnersInclude<ExtArgs> | null
  }


  /**
   * Model Epgp
   */

  export type AggregateEpgp = {
    _count: EpgpCountAggregateOutputType | null
    _avg: EpgpAvgAggregateOutputType | null
    _sum: EpgpSumAggregateOutputType | null
    _min: EpgpMinAggregateOutputType | null
    _max: EpgpMaxAggregateOutputType | null
  }

  export type EpgpAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    ep: number | null
    gp: number | null
  }

  export type EpgpSumAggregateOutputType = {
    id: number | null
    playerId: number | null
    ep: number | null
    gp: number | null
  }

  export type EpgpMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    ep: number | null
    gp: number | null
    updatedAt: Date | null
  }

  export type EpgpMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    ep: number | null
    gp: number | null
    updatedAt: Date | null
  }

  export type EpgpCountAggregateOutputType = {
    id: number
    playerId: number
    ep: number
    gp: number
    updatedAt: number
    _all: number
  }


  export type EpgpAvgAggregateInputType = {
    id?: true
    playerId?: true
    ep?: true
    gp?: true
  }

  export type EpgpSumAggregateInputType = {
    id?: true
    playerId?: true
    ep?: true
    gp?: true
  }

  export type EpgpMinAggregateInputType = {
    id?: true
    playerId?: true
    ep?: true
    gp?: true
    updatedAt?: true
  }

  export type EpgpMaxAggregateInputType = {
    id?: true
    playerId?: true
    ep?: true
    gp?: true
    updatedAt?: true
  }

  export type EpgpCountAggregateInputType = {
    id?: true
    playerId?: true
    ep?: true
    gp?: true
    updatedAt?: true
    _all?: true
  }

  export type EpgpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epgp to aggregate.
     */
    where?: EpgpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epgps to fetch.
     */
    orderBy?: EpgpOrderByWithRelationInput | EpgpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpgpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epgps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epgps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Epgps
    **/
    _count?: true | EpgpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpgpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpgpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpgpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpgpMaxAggregateInputType
  }

  export type GetEpgpAggregateType<T extends EpgpAggregateArgs> = {
        [P in keyof T & keyof AggregateEpgp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpgp[P]>
      : GetScalarType<T[P], AggregateEpgp[P]>
  }




  export type EpgpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpgpWhereInput
    orderBy?: EpgpOrderByWithAggregationInput | EpgpOrderByWithAggregationInput[]
    by: EpgpScalarFieldEnum[] | EpgpScalarFieldEnum
    having?: EpgpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpgpCountAggregateInputType | true
    _avg?: EpgpAvgAggregateInputType
    _sum?: EpgpSumAggregateInputType
    _min?: EpgpMinAggregateInputType
    _max?: EpgpMaxAggregateInputType
  }

  export type EpgpGroupByOutputType = {
    id: number
    playerId: number
    ep: number
    gp: number
    updatedAt: Date
    _count: EpgpCountAggregateOutputType | null
    _avg: EpgpAvgAggregateOutputType | null
    _sum: EpgpSumAggregateOutputType | null
    _min: EpgpMinAggregateOutputType | null
    _max: EpgpMaxAggregateOutputType | null
  }

  type GetEpgpGroupByPayload<T extends EpgpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpgpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpgpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpgpGroupByOutputType[P]>
            : GetScalarType<T[P], EpgpGroupByOutputType[P]>
        }
      >
    >


  export type EpgpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    ep?: boolean
    gp?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epgp"]>

  export type EpgpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    ep?: boolean
    gp?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epgp"]>

  export type EpgpSelectScalar = {
    id?: boolean
    playerId?: boolean
    ep?: boolean
    gp?: boolean
    updatedAt?: boolean
  }

  export type EpgpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type EpgpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $EpgpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Epgp"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      ep: number
      gp: number
      updatedAt: Date
    }, ExtArgs["result"]["epgp"]>
    composites: {}
  }

  type EpgpGetPayload<S extends boolean | null | undefined | EpgpDefaultArgs> = $Result.GetResult<Prisma.$EpgpPayload, S>

  type EpgpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EpgpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpgpCountAggregateInputType | true
    }

  export interface EpgpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Epgp'], meta: { name: 'Epgp' } }
    /**
     * Find zero or one Epgp that matches the filter.
     * @param {EpgpFindUniqueArgs} args - Arguments to find a Epgp
     * @example
     * // Get one Epgp
     * const epgp = await prisma.epgp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpgpFindUniqueArgs>(args: SelectSubset<T, EpgpFindUniqueArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Epgp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EpgpFindUniqueOrThrowArgs} args - Arguments to find a Epgp
     * @example
     * // Get one Epgp
     * const epgp = await prisma.epgp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpgpFindUniqueOrThrowArgs>(args: SelectSubset<T, EpgpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Epgp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpFindFirstArgs} args - Arguments to find a Epgp
     * @example
     * // Get one Epgp
     * const epgp = await prisma.epgp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpgpFindFirstArgs>(args?: SelectSubset<T, EpgpFindFirstArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Epgp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpFindFirstOrThrowArgs} args - Arguments to find a Epgp
     * @example
     * // Get one Epgp
     * const epgp = await prisma.epgp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpgpFindFirstOrThrowArgs>(args?: SelectSubset<T, EpgpFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Epgps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Epgps
     * const epgps = await prisma.epgp.findMany()
     * 
     * // Get first 10 Epgps
     * const epgps = await prisma.epgp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epgpWithIdOnly = await prisma.epgp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpgpFindManyArgs>(args?: SelectSubset<T, EpgpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Epgp.
     * @param {EpgpCreateArgs} args - Arguments to create a Epgp.
     * @example
     * // Create one Epgp
     * const Epgp = await prisma.epgp.create({
     *   data: {
     *     // ... data to create a Epgp
     *   }
     * })
     * 
     */
    create<T extends EpgpCreateArgs>(args: SelectSubset<T, EpgpCreateArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Epgps.
     * @param {EpgpCreateManyArgs} args - Arguments to create many Epgps.
     * @example
     * // Create many Epgps
     * const epgp = await prisma.epgp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpgpCreateManyArgs>(args?: SelectSubset<T, EpgpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Epgps and returns the data saved in the database.
     * @param {EpgpCreateManyAndReturnArgs} args - Arguments to create many Epgps.
     * @example
     * // Create many Epgps
     * const epgp = await prisma.epgp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Epgps and only return the `id`
     * const epgpWithIdOnly = await prisma.epgp.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpgpCreateManyAndReturnArgs>(args?: SelectSubset<T, EpgpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Epgp.
     * @param {EpgpDeleteArgs} args - Arguments to delete one Epgp.
     * @example
     * // Delete one Epgp
     * const Epgp = await prisma.epgp.delete({
     *   where: {
     *     // ... filter to delete one Epgp
     *   }
     * })
     * 
     */
    delete<T extends EpgpDeleteArgs>(args: SelectSubset<T, EpgpDeleteArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Epgp.
     * @param {EpgpUpdateArgs} args - Arguments to update one Epgp.
     * @example
     * // Update one Epgp
     * const epgp = await prisma.epgp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpgpUpdateArgs>(args: SelectSubset<T, EpgpUpdateArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Epgps.
     * @param {EpgpDeleteManyArgs} args - Arguments to filter Epgps to delete.
     * @example
     * // Delete a few Epgps
     * const { count } = await prisma.epgp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpgpDeleteManyArgs>(args?: SelectSubset<T, EpgpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epgps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Epgps
     * const epgp = await prisma.epgp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpgpUpdateManyArgs>(args: SelectSubset<T, EpgpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Epgp.
     * @param {EpgpUpsertArgs} args - Arguments to update or create a Epgp.
     * @example
     * // Update or create a Epgp
     * const epgp = await prisma.epgp.upsert({
     *   create: {
     *     // ... data to create a Epgp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Epgp we want to update
     *   }
     * })
     */
    upsert<T extends EpgpUpsertArgs>(args: SelectSubset<T, EpgpUpsertArgs<ExtArgs>>): Prisma__EpgpClient<$Result.GetResult<Prisma.$EpgpPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Epgps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpCountArgs} args - Arguments to filter Epgps to count.
     * @example
     * // Count the number of Epgps
     * const count = await prisma.epgp.count({
     *   where: {
     *     // ... the filter for the Epgps we want to count
     *   }
     * })
    **/
    count<T extends EpgpCountArgs>(
      args?: Subset<T, EpgpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpgpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Epgp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpgpAggregateArgs>(args: Subset<T, EpgpAggregateArgs>): Prisma.PrismaPromise<GetEpgpAggregateType<T>>

    /**
     * Group by Epgp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpgpGroupByArgs} args - Group by arguments.
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
      T extends EpgpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpgpGroupByArgs['orderBy'] }
        : { orderBy?: EpgpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EpgpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpgpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Epgp model
   */
  readonly fields: EpgpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Epgp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpgpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Epgp model
   */ 
  interface EpgpFieldRefs {
    readonly id: FieldRef<"Epgp", 'Int'>
    readonly playerId: FieldRef<"Epgp", 'Int'>
    readonly ep: FieldRef<"Epgp", 'Int'>
    readonly gp: FieldRef<"Epgp", 'Int'>
    readonly updatedAt: FieldRef<"Epgp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Epgp findUnique
   */
  export type EpgpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * Filter, which Epgp to fetch.
     */
    where: EpgpWhereUniqueInput
  }

  /**
   * Epgp findUniqueOrThrow
   */
  export type EpgpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * Filter, which Epgp to fetch.
     */
    where: EpgpWhereUniqueInput
  }

  /**
   * Epgp findFirst
   */
  export type EpgpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * Filter, which Epgp to fetch.
     */
    where?: EpgpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epgps to fetch.
     */
    orderBy?: EpgpOrderByWithRelationInput | EpgpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epgps.
     */
    cursor?: EpgpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epgps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epgps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epgps.
     */
    distinct?: EpgpScalarFieldEnum | EpgpScalarFieldEnum[]
  }

  /**
   * Epgp findFirstOrThrow
   */
  export type EpgpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * Filter, which Epgp to fetch.
     */
    where?: EpgpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epgps to fetch.
     */
    orderBy?: EpgpOrderByWithRelationInput | EpgpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epgps.
     */
    cursor?: EpgpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epgps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epgps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epgps.
     */
    distinct?: EpgpScalarFieldEnum | EpgpScalarFieldEnum[]
  }

  /**
   * Epgp findMany
   */
  export type EpgpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * Filter, which Epgps to fetch.
     */
    where?: EpgpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epgps to fetch.
     */
    orderBy?: EpgpOrderByWithRelationInput | EpgpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Epgps.
     */
    cursor?: EpgpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epgps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epgps.
     */
    skip?: number
    distinct?: EpgpScalarFieldEnum | EpgpScalarFieldEnum[]
  }

  /**
   * Epgp create
   */
  export type EpgpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * The data needed to create a Epgp.
     */
    data: XOR<EpgpCreateInput, EpgpUncheckedCreateInput>
  }

  /**
   * Epgp createMany
   */
  export type EpgpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Epgps.
     */
    data: EpgpCreateManyInput | EpgpCreateManyInput[]
  }

  /**
   * Epgp createManyAndReturn
   */
  export type EpgpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Epgps.
     */
    data: EpgpCreateManyInput | EpgpCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Epgp update
   */
  export type EpgpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * The data needed to update a Epgp.
     */
    data: XOR<EpgpUpdateInput, EpgpUncheckedUpdateInput>
    /**
     * Choose, which Epgp to update.
     */
    where: EpgpWhereUniqueInput
  }

  /**
   * Epgp updateMany
   */
  export type EpgpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Epgps.
     */
    data: XOR<EpgpUpdateManyMutationInput, EpgpUncheckedUpdateManyInput>
    /**
     * Filter which Epgps to update
     */
    where?: EpgpWhereInput
  }

  /**
   * Epgp upsert
   */
  export type EpgpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * The filter to search for the Epgp to update in case it exists.
     */
    where: EpgpWhereUniqueInput
    /**
     * In case the Epgp found by the `where` argument doesn't exist, create a new Epgp with this data.
     */
    create: XOR<EpgpCreateInput, EpgpUncheckedCreateInput>
    /**
     * In case the Epgp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpgpUpdateInput, EpgpUncheckedUpdateInput>
  }

  /**
   * Epgp delete
   */
  export type EpgpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
    /**
     * Filter which Epgp to delete.
     */
    where: EpgpWhereUniqueInput
  }

  /**
   * Epgp deleteMany
   */
  export type EpgpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epgps to delete
     */
    where?: EpgpWhereInput
  }

  /**
   * Epgp without action
   */
  export type EpgpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epgp
     */
    select?: EpgpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpgpInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const GuildScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serverId: 'serverId'
  };

  export type GuildScalarFieldEnum = (typeof GuildScalarFieldEnum)[keyof typeof GuildScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serverId: 'serverId',
    guildId: 'guildId'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    name: 'name',
    quality: 'quality',
    itemString: 'itemString',
    iconUrl: 'iconUrl'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemsOwnersScalarFieldEnum: {
    itemId: 'itemId',
    playerId: 'playerId',
    assignedAt: 'assignedAt',
    gpCost: 'gpCost'
  };

  export type ItemsOwnersScalarFieldEnum = (typeof ItemsOwnersScalarFieldEnum)[keyof typeof ItemsOwnersScalarFieldEnum]


  export const EpgpScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    ep: 'ep',
    gp: 'gp',
    updatedAt: 'updatedAt'
  };

  export type EpgpScalarFieldEnum = (typeof EpgpScalarFieldEnum)[keyof typeof EpgpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ServerWhereInput = {
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    id?: IntFilter<"Server"> | number
    name?: StringFilter<"Server"> | string
    region?: StringNullableFilter<"Server"> | string | null
    players?: PlayerListRelationFilter
    guilds?: GuildListRelationFilter
  }

  export type ServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrderInput | SortOrder
    players?: PlayerOrderByRelationAggregateInput
    guilds?: GuildOrderByRelationAggregateInput
  }

  export type ServerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    region?: StringNullableFilter<"Server"> | string | null
    players?: PlayerListRelationFilter
    guilds?: GuildListRelationFilter
  }, "id" | "name">

  export type ServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrderInput | SortOrder
    _count?: ServerCountOrderByAggregateInput
    _avg?: ServerAvgOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
    _sum?: ServerSumOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    OR?: ServerScalarWhereWithAggregatesInput[]
    NOT?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Server"> | number
    name?: StringWithAggregatesFilter<"Server"> | string
    region?: StringNullableWithAggregatesFilter<"Server"> | string | null
  }

  export type GuildWhereInput = {
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    id?: IntFilter<"Guild"> | number
    name?: StringFilter<"Guild"> | string
    serverId?: IntFilter<"Guild"> | number
    server?: XOR<ServerRelationFilter, ServerWhereInput>
    players?: PlayerListRelationFilter
  }

  export type GuildOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    server?: ServerOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
  }

  export type GuildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GuildWhereInput | GuildWhereInput[]
    OR?: GuildWhereInput[]
    NOT?: GuildWhereInput | GuildWhereInput[]
    serverId?: IntFilter<"Guild"> | number
    server?: XOR<ServerRelationFilter, ServerWhereInput>
    players?: PlayerListRelationFilter
  }, "id" | "name">

  export type GuildOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    _count?: GuildCountOrderByAggregateInput
    _avg?: GuildAvgOrderByAggregateInput
    _max?: GuildMaxOrderByAggregateInput
    _min?: GuildMinOrderByAggregateInput
    _sum?: GuildSumOrderByAggregateInput
  }

  export type GuildScalarWhereWithAggregatesInput = {
    AND?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    OR?: GuildScalarWhereWithAggregatesInput[]
    NOT?: GuildScalarWhereWithAggregatesInput | GuildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guild"> | number
    name?: StringWithAggregatesFilter<"Guild"> | string
    serverId?: IntWithAggregatesFilter<"Guild"> | number
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    serverId?: IntFilter<"Player"> | number
    guildId?: IntFilter<"Player"> | number
    server?: XOR<ServerRelationFilter, ServerWhereInput>
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
    loots?: ItemsOwnersListRelationFilter
    epgp?: XOR<EpgpNullableRelationFilter, EpgpWhereInput> | null
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
    server?: ServerOrderByWithRelationInput
    guild?: GuildOrderByWithRelationInput
    loots?: ItemsOwnersOrderByRelationAggregateInput
    epgp?: EpgpOrderByWithRelationInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_serverId_guildId?: PlayerNameServerIdGuildIdCompoundUniqueInput
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    serverId?: IntFilter<"Player"> | number
    guildId?: IntFilter<"Player"> | number
    server?: XOR<ServerRelationFilter, ServerWhereInput>
    guild?: XOR<GuildRelationFilter, GuildWhereInput>
    loots?: ItemsOwnersListRelationFilter
    epgp?: XOR<EpgpNullableRelationFilter, EpgpWhereInput> | null
  }, "id" | "name_serverId_guildId">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    name?: StringWithAggregatesFilter<"Player"> | string
    serverId?: IntWithAggregatesFilter<"Player"> | number
    guildId?: IntWithAggregatesFilter<"Player"> | number
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    itemId?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    quality?: StringFilter<"Item"> | string
    itemString?: StringFilter<"Item"> | string
    iconUrl?: StringFilter<"Item"> | string
    drops?: ItemsOwnersListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    name?: SortOrder
    quality?: SortOrder
    itemString?: SortOrder
    iconUrl?: SortOrder
    drops?: ItemsOwnersOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    itemString?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    itemId?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    quality?: StringFilter<"Item"> | string
    iconUrl?: StringFilter<"Item"> | string
    drops?: ItemsOwnersListRelationFilter
  }, "id" | "itemString">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    name?: SortOrder
    quality?: SortOrder
    itemString?: SortOrder
    iconUrl?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    itemId?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    quality?: StringWithAggregatesFilter<"Item"> | string
    itemString?: StringWithAggregatesFilter<"Item"> | string
    iconUrl?: StringWithAggregatesFilter<"Item"> | string
  }

  export type ItemsOwnersWhereInput = {
    AND?: ItemsOwnersWhereInput | ItemsOwnersWhereInput[]
    OR?: ItemsOwnersWhereInput[]
    NOT?: ItemsOwnersWhereInput | ItemsOwnersWhereInput[]
    itemId?: IntFilter<"ItemsOwners"> | number
    playerId?: IntFilter<"ItemsOwners"> | number
    assignedAt?: DateTimeFilter<"ItemsOwners"> | Date | string
    gpCost?: IntFilter<"ItemsOwners"> | number
    item?: XOR<ItemRelationFilter, ItemWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }

  export type ItemsOwnersOrderByWithRelationInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    assignedAt?: SortOrder
    gpCost?: SortOrder
    item?: ItemOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type ItemsOwnersWhereUniqueInput = Prisma.AtLeast<{
    playerId_itemId_assignedAt?: ItemsOwnersPlayerIdItemIdAssignedAtCompoundUniqueInput
    AND?: ItemsOwnersWhereInput | ItemsOwnersWhereInput[]
    OR?: ItemsOwnersWhereInput[]
    NOT?: ItemsOwnersWhereInput | ItemsOwnersWhereInput[]
    itemId?: IntFilter<"ItemsOwners"> | number
    playerId?: IntFilter<"ItemsOwners"> | number
    assignedAt?: DateTimeFilter<"ItemsOwners"> | Date | string
    gpCost?: IntFilter<"ItemsOwners"> | number
    item?: XOR<ItemRelationFilter, ItemWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }, "playerId_itemId_assignedAt">

  export type ItemsOwnersOrderByWithAggregationInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    assignedAt?: SortOrder
    gpCost?: SortOrder
    _count?: ItemsOwnersCountOrderByAggregateInput
    _avg?: ItemsOwnersAvgOrderByAggregateInput
    _max?: ItemsOwnersMaxOrderByAggregateInput
    _min?: ItemsOwnersMinOrderByAggregateInput
    _sum?: ItemsOwnersSumOrderByAggregateInput
  }

  export type ItemsOwnersScalarWhereWithAggregatesInput = {
    AND?: ItemsOwnersScalarWhereWithAggregatesInput | ItemsOwnersScalarWhereWithAggregatesInput[]
    OR?: ItemsOwnersScalarWhereWithAggregatesInput[]
    NOT?: ItemsOwnersScalarWhereWithAggregatesInput | ItemsOwnersScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"ItemsOwners"> | number
    playerId?: IntWithAggregatesFilter<"ItemsOwners"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"ItemsOwners"> | Date | string
    gpCost?: IntWithAggregatesFilter<"ItemsOwners"> | number
  }

  export type EpgpWhereInput = {
    AND?: EpgpWhereInput | EpgpWhereInput[]
    OR?: EpgpWhereInput[]
    NOT?: EpgpWhereInput | EpgpWhereInput[]
    id?: IntFilter<"Epgp"> | number
    playerId?: IntFilter<"Epgp"> | number
    ep?: IntFilter<"Epgp"> | number
    gp?: IntFilter<"Epgp"> | number
    updatedAt?: DateTimeFilter<"Epgp"> | Date | string
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }

  export type EpgpOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type EpgpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerId?: number
    AND?: EpgpWhereInput | EpgpWhereInput[]
    OR?: EpgpWhereInput[]
    NOT?: EpgpWhereInput | EpgpWhereInput[]
    ep?: IntFilter<"Epgp"> | number
    gp?: IntFilter<"Epgp"> | number
    updatedAt?: DateTimeFilter<"Epgp"> | Date | string
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }, "id" | "playerId">

  export type EpgpOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
    updatedAt?: SortOrder
    _count?: EpgpCountOrderByAggregateInput
    _avg?: EpgpAvgOrderByAggregateInput
    _max?: EpgpMaxOrderByAggregateInput
    _min?: EpgpMinOrderByAggregateInput
    _sum?: EpgpSumOrderByAggregateInput
  }

  export type EpgpScalarWhereWithAggregatesInput = {
    AND?: EpgpScalarWhereWithAggregatesInput | EpgpScalarWhereWithAggregatesInput[]
    OR?: EpgpScalarWhereWithAggregatesInput[]
    NOT?: EpgpScalarWhereWithAggregatesInput | EpgpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Epgp"> | number
    playerId?: IntWithAggregatesFilter<"Epgp"> | number
    ep?: IntWithAggregatesFilter<"Epgp"> | number
    gp?: IntWithAggregatesFilter<"Epgp"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Epgp"> | Date | string
  }

  export type ServerCreateInput = {
    name: string
    region?: string | null
    players?: PlayerCreateNestedManyWithoutServerInput
    guilds?: GuildCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateInput = {
    id?: number
    name: string
    region?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutServerInput
    guilds?: GuildUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUpdateManyWithoutServerNestedInput
    guilds?: GuildUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutServerNestedInput
    guilds?: GuildUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerCreateManyInput = {
    id?: number
    name: string
    region?: string | null
  }

  export type ServerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildCreateInput = {
    name: string
    server: ServerCreateNestedOneWithoutGuildsInput
    players?: PlayerCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateInput = {
    id?: number
    name: string
    serverId: number
    players?: PlayerUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    server?: ServerUpdateOneRequiredWithoutGuildsNestedInput
    players?: PlayerUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
    players?: PlayerUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildCreateManyInput = {
    id?: number
    name: string
    serverId: number
  }

  export type GuildUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerCreateInput = {
    name: string
    server: ServerCreateNestedOneWithoutPlayersInput
    guild: GuildCreateNestedOneWithoutPlayersInput
    loots?: ItemsOwnersCreateNestedManyWithoutPlayerInput
    epgp?: EpgpCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    serverId: number
    guildId: number
    loots?: ItemsOwnersUncheckedCreateNestedManyWithoutPlayerInput
    epgp?: EpgpUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    server?: ServerUpdateOneRequiredWithoutPlayersNestedInput
    guild?: GuildUpdateOneRequiredWithoutPlayersNestedInput
    loots?: ItemsOwnersUpdateManyWithoutPlayerNestedInput
    epgp?: EpgpUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
    guildId?: IntFieldUpdateOperationsInput | number
    loots?: ItemsOwnersUncheckedUpdateManyWithoutPlayerNestedInput
    epgp?: EpgpUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    serverId: number
    guildId: number
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
    guildId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateInput = {
    itemId: number
    name: string
    quality: string
    itemString: string
    iconUrl: string
    drops?: ItemsOwnersCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    itemId: number
    name: string
    quality: string
    itemString: string
    iconUrl: string
    drops?: ItemsOwnersUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    itemString?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    drops?: ItemsOwnersUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    itemString?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
    drops?: ItemsOwnersUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    itemId: number
    name: string
    quality: string
    itemString: string
    iconUrl: string
  }

  export type ItemUpdateManyMutationInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    itemString?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    itemString?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsOwnersCreateInput = {
    assignedAt: Date | string
    gpCost: number
    item: ItemCreateNestedOneWithoutDropsInput
    player: PlayerCreateNestedOneWithoutLootsInput
  }

  export type ItemsOwnersUncheckedCreateInput = {
    itemId: number
    playerId: number
    assignedAt: Date | string
    gpCost: number
  }

  export type ItemsOwnersUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutDropsNestedInput
    player?: PlayerUpdateOneRequiredWithoutLootsNestedInput
  }

  export type ItemsOwnersUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersCreateManyInput = {
    itemId: number
    playerId: number
    assignedAt: Date | string
    gpCost: number
  }

  export type ItemsOwnersUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }

  export type EpgpCreateInput = {
    ep: number
    gp: number
    updatedAt: Date | string
    player: PlayerCreateNestedOneWithoutEpgpInput
  }

  export type EpgpUncheckedCreateInput = {
    id?: number
    playerId: number
    ep: number
    gp: number
    updatedAt: Date | string
  }

  export type EpgpUpdateInput = {
    ep?: IntFieldUpdateOperationsInput | number
    gp?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutEpgpNestedInput
  }

  export type EpgpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    ep?: IntFieldUpdateOperationsInput | number
    gp?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpgpCreateManyInput = {
    id?: number
    playerId: number
    ep: number
    gp: number
    updatedAt: Date | string
  }

  export type EpgpUpdateManyMutationInput = {
    ep?: IntFieldUpdateOperationsInput | number
    gp?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpgpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    ep?: IntFieldUpdateOperationsInput | number
    gp?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type GuildListRelationFilter = {
    every?: GuildWhereInput
    some?: GuildWhereInput
    none?: GuildWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
  }

  export type ServerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
  }

  export type ServerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ServerRelationFilter = {
    is?: ServerWhereInput
    isNot?: ServerWhereInput
  }

  export type GuildCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
  }

  export type GuildAvgOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
  }

  export type GuildMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
  }

  export type GuildMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
  }

  export type GuildSumOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
  }

  export type GuildRelationFilter = {
    is?: GuildWhereInput
    isNot?: GuildWhereInput
  }

  export type ItemsOwnersListRelationFilter = {
    every?: ItemsOwnersWhereInput
    some?: ItemsOwnersWhereInput
    none?: ItemsOwnersWhereInput
  }

  export type EpgpNullableRelationFilter = {
    is?: EpgpWhereInput | null
    isNot?: EpgpWhereInput | null
  }

  export type ItemsOwnersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerNameServerIdGuildIdCompoundUniqueInput = {
    name: string
    serverId: number
    guildId: number
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    guildId?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    name?: SortOrder
    quality?: SortOrder
    itemString?: SortOrder
    iconUrl?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    name?: SortOrder
    quality?: SortOrder
    itemString?: SortOrder
    iconUrl?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    name?: SortOrder
    quality?: SortOrder
    itemString?: SortOrder
    iconUrl?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type ItemsOwnersPlayerIdItemIdAssignedAtCompoundUniqueInput = {
    playerId: number
    itemId: number
    assignedAt: Date | string
  }

  export type ItemsOwnersCountOrderByAggregateInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    assignedAt?: SortOrder
    gpCost?: SortOrder
  }

  export type ItemsOwnersAvgOrderByAggregateInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    gpCost?: SortOrder
  }

  export type ItemsOwnersMaxOrderByAggregateInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    assignedAt?: SortOrder
    gpCost?: SortOrder
  }

  export type ItemsOwnersMinOrderByAggregateInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    assignedAt?: SortOrder
    gpCost?: SortOrder
  }

  export type ItemsOwnersSumOrderByAggregateInput = {
    itemId?: SortOrder
    playerId?: SortOrder
    gpCost?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EpgpCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpgpAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
  }

  export type EpgpMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpgpMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpgpSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    ep?: SortOrder
    gp?: SortOrder
  }

  export type PlayerCreateNestedManyWithoutServerInput = {
    create?: XOR<PlayerCreateWithoutServerInput, PlayerUncheckedCreateWithoutServerInput> | PlayerCreateWithoutServerInput[] | PlayerUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutServerInput | PlayerCreateOrConnectWithoutServerInput[]
    createMany?: PlayerCreateManyServerInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type GuildCreateNestedManyWithoutServerInput = {
    create?: XOR<GuildCreateWithoutServerInput, GuildUncheckedCreateWithoutServerInput> | GuildCreateWithoutServerInput[] | GuildUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GuildCreateOrConnectWithoutServerInput | GuildCreateOrConnectWithoutServerInput[]
    createMany?: GuildCreateManyServerInputEnvelope
    connect?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<PlayerCreateWithoutServerInput, PlayerUncheckedCreateWithoutServerInput> | PlayerCreateWithoutServerInput[] | PlayerUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutServerInput | PlayerCreateOrConnectWithoutServerInput[]
    createMany?: PlayerCreateManyServerInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type GuildUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<GuildCreateWithoutServerInput, GuildUncheckedCreateWithoutServerInput> | GuildCreateWithoutServerInput[] | GuildUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GuildCreateOrConnectWithoutServerInput | GuildCreateOrConnectWithoutServerInput[]
    createMany?: GuildCreateManyServerInputEnvelope
    connect?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlayerUpdateManyWithoutServerNestedInput = {
    create?: XOR<PlayerCreateWithoutServerInput, PlayerUncheckedCreateWithoutServerInput> | PlayerCreateWithoutServerInput[] | PlayerUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutServerInput | PlayerCreateOrConnectWithoutServerInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutServerInput | PlayerUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: PlayerCreateManyServerInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutServerInput | PlayerUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutServerInput | PlayerUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type GuildUpdateManyWithoutServerNestedInput = {
    create?: XOR<GuildCreateWithoutServerInput, GuildUncheckedCreateWithoutServerInput> | GuildCreateWithoutServerInput[] | GuildUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GuildCreateOrConnectWithoutServerInput | GuildCreateOrConnectWithoutServerInput[]
    upsert?: GuildUpsertWithWhereUniqueWithoutServerInput | GuildUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: GuildCreateManyServerInputEnvelope
    set?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    disconnect?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    delete?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    connect?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    update?: GuildUpdateWithWhereUniqueWithoutServerInput | GuildUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: GuildUpdateManyWithWhereWithoutServerInput | GuildUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: GuildScalarWhereInput | GuildScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<PlayerCreateWithoutServerInput, PlayerUncheckedCreateWithoutServerInput> | PlayerCreateWithoutServerInput[] | PlayerUncheckedCreateWithoutServerInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutServerInput | PlayerCreateOrConnectWithoutServerInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutServerInput | PlayerUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: PlayerCreateManyServerInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutServerInput | PlayerUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutServerInput | PlayerUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type GuildUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<GuildCreateWithoutServerInput, GuildUncheckedCreateWithoutServerInput> | GuildCreateWithoutServerInput[] | GuildUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GuildCreateOrConnectWithoutServerInput | GuildCreateOrConnectWithoutServerInput[]
    upsert?: GuildUpsertWithWhereUniqueWithoutServerInput | GuildUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: GuildCreateManyServerInputEnvelope
    set?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    disconnect?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    delete?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    connect?: GuildWhereUniqueInput | GuildWhereUniqueInput[]
    update?: GuildUpdateWithWhereUniqueWithoutServerInput | GuildUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: GuildUpdateManyWithWhereWithoutServerInput | GuildUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: GuildScalarWhereInput | GuildScalarWhereInput[]
  }

  export type ServerCreateNestedOneWithoutGuildsInput = {
    create?: XOR<ServerCreateWithoutGuildsInput, ServerUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutGuildsInput
    connect?: ServerWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutGuildInput = {
    create?: XOR<PlayerCreateWithoutGuildInput, PlayerUncheckedCreateWithoutGuildInput> | PlayerCreateWithoutGuildInput[] | PlayerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGuildInput | PlayerCreateOrConnectWithoutGuildInput[]
    createMany?: PlayerCreateManyGuildInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<PlayerCreateWithoutGuildInput, PlayerUncheckedCreateWithoutGuildInput> | PlayerCreateWithoutGuildInput[] | PlayerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGuildInput | PlayerCreateOrConnectWithoutGuildInput[]
    createMany?: PlayerCreateManyGuildInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type ServerUpdateOneRequiredWithoutGuildsNestedInput = {
    create?: XOR<ServerCreateWithoutGuildsInput, ServerUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutGuildsInput
    upsert?: ServerUpsertWithoutGuildsInput
    connect?: ServerWhereUniqueInput
    update?: XOR<XOR<ServerUpdateToOneWithWhereWithoutGuildsInput, ServerUpdateWithoutGuildsInput>, ServerUncheckedUpdateWithoutGuildsInput>
  }

  export type PlayerUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PlayerCreateWithoutGuildInput, PlayerUncheckedCreateWithoutGuildInput> | PlayerCreateWithoutGuildInput[] | PlayerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGuildInput | PlayerCreateOrConnectWithoutGuildInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutGuildInput | PlayerUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PlayerCreateManyGuildInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutGuildInput | PlayerUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutGuildInput | PlayerUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<PlayerCreateWithoutGuildInput, PlayerUncheckedCreateWithoutGuildInput> | PlayerCreateWithoutGuildInput[] | PlayerUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutGuildInput | PlayerCreateOrConnectWithoutGuildInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutGuildInput | PlayerUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: PlayerCreateManyGuildInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutGuildInput | PlayerUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutGuildInput | PlayerUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type ServerCreateNestedOneWithoutPlayersInput = {
    create?: XOR<ServerCreateWithoutPlayersInput, ServerUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: ServerCreateOrConnectWithoutPlayersInput
    connect?: ServerWhereUniqueInput
  }

  export type GuildCreateNestedOneWithoutPlayersInput = {
    create?: XOR<GuildCreateWithoutPlayersInput, GuildUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GuildCreateOrConnectWithoutPlayersInput
    connect?: GuildWhereUniqueInput
  }

  export type ItemsOwnersCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ItemsOwnersCreateWithoutPlayerInput, ItemsOwnersUncheckedCreateWithoutPlayerInput> | ItemsOwnersCreateWithoutPlayerInput[] | ItemsOwnersUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutPlayerInput | ItemsOwnersCreateOrConnectWithoutPlayerInput[]
    createMany?: ItemsOwnersCreateManyPlayerInputEnvelope
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
  }

  export type EpgpCreateNestedOneWithoutPlayerInput = {
    create?: XOR<EpgpCreateWithoutPlayerInput, EpgpUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: EpgpCreateOrConnectWithoutPlayerInput
    connect?: EpgpWhereUniqueInput
  }

  export type ItemsOwnersUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ItemsOwnersCreateWithoutPlayerInput, ItemsOwnersUncheckedCreateWithoutPlayerInput> | ItemsOwnersCreateWithoutPlayerInput[] | ItemsOwnersUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutPlayerInput | ItemsOwnersCreateOrConnectWithoutPlayerInput[]
    createMany?: ItemsOwnersCreateManyPlayerInputEnvelope
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
  }

  export type EpgpUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<EpgpCreateWithoutPlayerInput, EpgpUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: EpgpCreateOrConnectWithoutPlayerInput
    connect?: EpgpWhereUniqueInput
  }

  export type ServerUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<ServerCreateWithoutPlayersInput, ServerUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: ServerCreateOrConnectWithoutPlayersInput
    upsert?: ServerUpsertWithoutPlayersInput
    connect?: ServerWhereUniqueInput
    update?: XOR<XOR<ServerUpdateToOneWithWhereWithoutPlayersInput, ServerUpdateWithoutPlayersInput>, ServerUncheckedUpdateWithoutPlayersInput>
  }

  export type GuildUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<GuildCreateWithoutPlayersInput, GuildUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GuildCreateOrConnectWithoutPlayersInput
    upsert?: GuildUpsertWithoutPlayersInput
    connect?: GuildWhereUniqueInput
    update?: XOR<XOR<GuildUpdateToOneWithWhereWithoutPlayersInput, GuildUpdateWithoutPlayersInput>, GuildUncheckedUpdateWithoutPlayersInput>
  }

  export type ItemsOwnersUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ItemsOwnersCreateWithoutPlayerInput, ItemsOwnersUncheckedCreateWithoutPlayerInput> | ItemsOwnersCreateWithoutPlayerInput[] | ItemsOwnersUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutPlayerInput | ItemsOwnersCreateOrConnectWithoutPlayerInput[]
    upsert?: ItemsOwnersUpsertWithWhereUniqueWithoutPlayerInput | ItemsOwnersUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ItemsOwnersCreateManyPlayerInputEnvelope
    set?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    disconnect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    delete?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    update?: ItemsOwnersUpdateWithWhereUniqueWithoutPlayerInput | ItemsOwnersUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ItemsOwnersUpdateManyWithWhereWithoutPlayerInput | ItemsOwnersUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ItemsOwnersScalarWhereInput | ItemsOwnersScalarWhereInput[]
  }

  export type EpgpUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<EpgpCreateWithoutPlayerInput, EpgpUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: EpgpCreateOrConnectWithoutPlayerInput
    upsert?: EpgpUpsertWithoutPlayerInput
    disconnect?: EpgpWhereInput | boolean
    delete?: EpgpWhereInput | boolean
    connect?: EpgpWhereUniqueInput
    update?: XOR<XOR<EpgpUpdateToOneWithWhereWithoutPlayerInput, EpgpUpdateWithoutPlayerInput>, EpgpUncheckedUpdateWithoutPlayerInput>
  }

  export type ItemsOwnersUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ItemsOwnersCreateWithoutPlayerInput, ItemsOwnersUncheckedCreateWithoutPlayerInput> | ItemsOwnersCreateWithoutPlayerInput[] | ItemsOwnersUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutPlayerInput | ItemsOwnersCreateOrConnectWithoutPlayerInput[]
    upsert?: ItemsOwnersUpsertWithWhereUniqueWithoutPlayerInput | ItemsOwnersUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ItemsOwnersCreateManyPlayerInputEnvelope
    set?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    disconnect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    delete?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    update?: ItemsOwnersUpdateWithWhereUniqueWithoutPlayerInput | ItemsOwnersUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ItemsOwnersUpdateManyWithWhereWithoutPlayerInput | ItemsOwnersUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ItemsOwnersScalarWhereInput | ItemsOwnersScalarWhereInput[]
  }

  export type EpgpUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<EpgpCreateWithoutPlayerInput, EpgpUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: EpgpCreateOrConnectWithoutPlayerInput
    upsert?: EpgpUpsertWithoutPlayerInput
    disconnect?: EpgpWhereInput | boolean
    delete?: EpgpWhereInput | boolean
    connect?: EpgpWhereUniqueInput
    update?: XOR<XOR<EpgpUpdateToOneWithWhereWithoutPlayerInput, EpgpUpdateWithoutPlayerInput>, EpgpUncheckedUpdateWithoutPlayerInput>
  }

  export type ItemsOwnersCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemsOwnersCreateWithoutItemInput, ItemsOwnersUncheckedCreateWithoutItemInput> | ItemsOwnersCreateWithoutItemInput[] | ItemsOwnersUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutItemInput | ItemsOwnersCreateOrConnectWithoutItemInput[]
    createMany?: ItemsOwnersCreateManyItemInputEnvelope
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
  }

  export type ItemsOwnersUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemsOwnersCreateWithoutItemInput, ItemsOwnersUncheckedCreateWithoutItemInput> | ItemsOwnersCreateWithoutItemInput[] | ItemsOwnersUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutItemInput | ItemsOwnersCreateOrConnectWithoutItemInput[]
    createMany?: ItemsOwnersCreateManyItemInputEnvelope
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
  }

  export type ItemsOwnersUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemsOwnersCreateWithoutItemInput, ItemsOwnersUncheckedCreateWithoutItemInput> | ItemsOwnersCreateWithoutItemInput[] | ItemsOwnersUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutItemInput | ItemsOwnersCreateOrConnectWithoutItemInput[]
    upsert?: ItemsOwnersUpsertWithWhereUniqueWithoutItemInput | ItemsOwnersUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemsOwnersCreateManyItemInputEnvelope
    set?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    disconnect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    delete?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    update?: ItemsOwnersUpdateWithWhereUniqueWithoutItemInput | ItemsOwnersUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemsOwnersUpdateManyWithWhereWithoutItemInput | ItemsOwnersUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemsOwnersScalarWhereInput | ItemsOwnersScalarWhereInput[]
  }

  export type ItemsOwnersUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemsOwnersCreateWithoutItemInput, ItemsOwnersUncheckedCreateWithoutItemInput> | ItemsOwnersCreateWithoutItemInput[] | ItemsOwnersUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemsOwnersCreateOrConnectWithoutItemInput | ItemsOwnersCreateOrConnectWithoutItemInput[]
    upsert?: ItemsOwnersUpsertWithWhereUniqueWithoutItemInput | ItemsOwnersUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemsOwnersCreateManyItemInputEnvelope
    set?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    disconnect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    delete?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    connect?: ItemsOwnersWhereUniqueInput | ItemsOwnersWhereUniqueInput[]
    update?: ItemsOwnersUpdateWithWhereUniqueWithoutItemInput | ItemsOwnersUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemsOwnersUpdateManyWithWhereWithoutItemInput | ItemsOwnersUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemsOwnersScalarWhereInput | ItemsOwnersScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutDropsInput = {
    create?: XOR<ItemCreateWithoutDropsInput, ItemUncheckedCreateWithoutDropsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDropsInput
    connect?: ItemWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutLootsInput = {
    create?: XOR<PlayerCreateWithoutLootsInput, PlayerUncheckedCreateWithoutLootsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLootsInput
    connect?: PlayerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateOneRequiredWithoutDropsNestedInput = {
    create?: XOR<ItemCreateWithoutDropsInput, ItemUncheckedCreateWithoutDropsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDropsInput
    upsert?: ItemUpsertWithoutDropsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutDropsInput, ItemUpdateWithoutDropsInput>, ItemUncheckedUpdateWithoutDropsInput>
  }

  export type PlayerUpdateOneRequiredWithoutLootsNestedInput = {
    create?: XOR<PlayerCreateWithoutLootsInput, PlayerUncheckedCreateWithoutLootsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLootsInput
    upsert?: PlayerUpsertWithoutLootsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutLootsInput, PlayerUpdateWithoutLootsInput>, PlayerUncheckedUpdateWithoutLootsInput>
  }

  export type PlayerCreateNestedOneWithoutEpgpInput = {
    create?: XOR<PlayerCreateWithoutEpgpInput, PlayerUncheckedCreateWithoutEpgpInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutEpgpInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutEpgpNestedInput = {
    create?: XOR<PlayerCreateWithoutEpgpInput, PlayerUncheckedCreateWithoutEpgpInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutEpgpInput
    upsert?: PlayerUpsertWithoutEpgpInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutEpgpInput, PlayerUpdateWithoutEpgpInput>, PlayerUncheckedUpdateWithoutEpgpInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlayerCreateWithoutServerInput = {
    name: string
    guild: GuildCreateNestedOneWithoutPlayersInput
    loots?: ItemsOwnersCreateNestedManyWithoutPlayerInput
    epgp?: EpgpCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutServerInput = {
    id?: number
    name: string
    guildId: number
    loots?: ItemsOwnersUncheckedCreateNestedManyWithoutPlayerInput
    epgp?: EpgpUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutServerInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutServerInput, PlayerUncheckedCreateWithoutServerInput>
  }

  export type PlayerCreateManyServerInputEnvelope = {
    data: PlayerCreateManyServerInput | PlayerCreateManyServerInput[]
  }

  export type GuildCreateWithoutServerInput = {
    name: string
    players?: PlayerCreateNestedManyWithoutGuildInput
  }

  export type GuildUncheckedCreateWithoutServerInput = {
    id?: number
    name: string
    players?: PlayerUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildCreateOrConnectWithoutServerInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutServerInput, GuildUncheckedCreateWithoutServerInput>
  }

  export type GuildCreateManyServerInputEnvelope = {
    data: GuildCreateManyServerInput | GuildCreateManyServerInput[]
  }

  export type PlayerUpsertWithWhereUniqueWithoutServerInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutServerInput, PlayerUncheckedUpdateWithoutServerInput>
    create: XOR<PlayerCreateWithoutServerInput, PlayerUncheckedCreateWithoutServerInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutServerInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutServerInput, PlayerUncheckedUpdateWithoutServerInput>
  }

  export type PlayerUpdateManyWithWhereWithoutServerInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutServerInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    serverId?: IntFilter<"Player"> | number
    guildId?: IntFilter<"Player"> | number
  }

  export type GuildUpsertWithWhereUniqueWithoutServerInput = {
    where: GuildWhereUniqueInput
    update: XOR<GuildUpdateWithoutServerInput, GuildUncheckedUpdateWithoutServerInput>
    create: XOR<GuildCreateWithoutServerInput, GuildUncheckedCreateWithoutServerInput>
  }

  export type GuildUpdateWithWhereUniqueWithoutServerInput = {
    where: GuildWhereUniqueInput
    data: XOR<GuildUpdateWithoutServerInput, GuildUncheckedUpdateWithoutServerInput>
  }

  export type GuildUpdateManyWithWhereWithoutServerInput = {
    where: GuildScalarWhereInput
    data: XOR<GuildUpdateManyMutationInput, GuildUncheckedUpdateManyWithoutServerInput>
  }

  export type GuildScalarWhereInput = {
    AND?: GuildScalarWhereInput | GuildScalarWhereInput[]
    OR?: GuildScalarWhereInput[]
    NOT?: GuildScalarWhereInput | GuildScalarWhereInput[]
    id?: IntFilter<"Guild"> | number
    name?: StringFilter<"Guild"> | string
    serverId?: IntFilter<"Guild"> | number
  }

  export type ServerCreateWithoutGuildsInput = {
    name: string
    region?: string | null
    players?: PlayerCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutGuildsInput = {
    id?: number
    name: string
    region?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutGuildsInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutGuildsInput, ServerUncheckedCreateWithoutGuildsInput>
  }

  export type PlayerCreateWithoutGuildInput = {
    name: string
    server: ServerCreateNestedOneWithoutPlayersInput
    loots?: ItemsOwnersCreateNestedManyWithoutPlayerInput
    epgp?: EpgpCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGuildInput = {
    id?: number
    name: string
    serverId: number
    loots?: ItemsOwnersUncheckedCreateNestedManyWithoutPlayerInput
    epgp?: EpgpUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutGuildInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGuildInput, PlayerUncheckedCreateWithoutGuildInput>
  }

  export type PlayerCreateManyGuildInputEnvelope = {
    data: PlayerCreateManyGuildInput | PlayerCreateManyGuildInput[]
  }

  export type ServerUpsertWithoutGuildsInput = {
    update: XOR<ServerUpdateWithoutGuildsInput, ServerUncheckedUpdateWithoutGuildsInput>
    create: XOR<ServerCreateWithoutGuildsInput, ServerUncheckedCreateWithoutGuildsInput>
    where?: ServerWhereInput
  }

  export type ServerUpdateToOneWithWhereWithoutGuildsInput = {
    where?: ServerWhereInput
    data: XOR<ServerUpdateWithoutGuildsInput, ServerUncheckedUpdateWithoutGuildsInput>
  }

  export type ServerUpdateWithoutGuildsInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutGuildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutServerNestedInput
  }

  export type PlayerUpsertWithWhereUniqueWithoutGuildInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutGuildInput, PlayerUncheckedUpdateWithoutGuildInput>
    create: XOR<PlayerCreateWithoutGuildInput, PlayerUncheckedCreateWithoutGuildInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutGuildInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutGuildInput, PlayerUncheckedUpdateWithoutGuildInput>
  }

  export type PlayerUpdateManyWithWhereWithoutGuildInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutGuildInput>
  }

  export type ServerCreateWithoutPlayersInput = {
    name: string
    region?: string | null
    guilds?: GuildCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutPlayersInput = {
    id?: number
    name: string
    region?: string | null
    guilds?: GuildUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutPlayersInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutPlayersInput, ServerUncheckedCreateWithoutPlayersInput>
  }

  export type GuildCreateWithoutPlayersInput = {
    name: string
    server: ServerCreateNestedOneWithoutGuildsInput
  }

  export type GuildUncheckedCreateWithoutPlayersInput = {
    id?: number
    name: string
    serverId: number
  }

  export type GuildCreateOrConnectWithoutPlayersInput = {
    where: GuildWhereUniqueInput
    create: XOR<GuildCreateWithoutPlayersInput, GuildUncheckedCreateWithoutPlayersInput>
  }

  export type ItemsOwnersCreateWithoutPlayerInput = {
    assignedAt: Date | string
    gpCost: number
    item: ItemCreateNestedOneWithoutDropsInput
  }

  export type ItemsOwnersUncheckedCreateWithoutPlayerInput = {
    itemId: number
    assignedAt: Date | string
    gpCost: number
  }

  export type ItemsOwnersCreateOrConnectWithoutPlayerInput = {
    where: ItemsOwnersWhereUniqueInput
    create: XOR<ItemsOwnersCreateWithoutPlayerInput, ItemsOwnersUncheckedCreateWithoutPlayerInput>
  }

  export type ItemsOwnersCreateManyPlayerInputEnvelope = {
    data: ItemsOwnersCreateManyPlayerInput | ItemsOwnersCreateManyPlayerInput[]
  }

  export type EpgpCreateWithoutPlayerInput = {
    ep: number
    gp: number
    updatedAt: Date | string
  }

  export type EpgpUncheckedCreateWithoutPlayerInput = {
    id?: number
    ep: number
    gp: number
    updatedAt: Date | string
  }

  export type EpgpCreateOrConnectWithoutPlayerInput = {
    where: EpgpWhereUniqueInput
    create: XOR<EpgpCreateWithoutPlayerInput, EpgpUncheckedCreateWithoutPlayerInput>
  }

  export type ServerUpsertWithoutPlayersInput = {
    update: XOR<ServerUpdateWithoutPlayersInput, ServerUncheckedUpdateWithoutPlayersInput>
    create: XOR<ServerCreateWithoutPlayersInput, ServerUncheckedCreateWithoutPlayersInput>
    where?: ServerWhereInput
  }

  export type ServerUpdateToOneWithWhereWithoutPlayersInput = {
    where?: ServerWhereInput
    data: XOR<ServerUpdateWithoutPlayersInput, ServerUncheckedUpdateWithoutPlayersInput>
  }

  export type ServerUpdateWithoutPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    guilds?: GuildUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    guilds?: GuildUncheckedUpdateManyWithoutServerNestedInput
  }

  export type GuildUpsertWithoutPlayersInput = {
    update: XOR<GuildUpdateWithoutPlayersInput, GuildUncheckedUpdateWithoutPlayersInput>
    create: XOR<GuildCreateWithoutPlayersInput, GuildUncheckedCreateWithoutPlayersInput>
    where?: GuildWhereInput
  }

  export type GuildUpdateToOneWithWhereWithoutPlayersInput = {
    where?: GuildWhereInput
    data: XOR<GuildUpdateWithoutPlayersInput, GuildUncheckedUpdateWithoutPlayersInput>
  }

  export type GuildUpdateWithoutPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    server?: ServerUpdateOneRequiredWithoutGuildsNestedInput
  }

  export type GuildUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersUpsertWithWhereUniqueWithoutPlayerInput = {
    where: ItemsOwnersWhereUniqueInput
    update: XOR<ItemsOwnersUpdateWithoutPlayerInput, ItemsOwnersUncheckedUpdateWithoutPlayerInput>
    create: XOR<ItemsOwnersCreateWithoutPlayerInput, ItemsOwnersUncheckedCreateWithoutPlayerInput>
  }

  export type ItemsOwnersUpdateWithWhereUniqueWithoutPlayerInput = {
    where: ItemsOwnersWhereUniqueInput
    data: XOR<ItemsOwnersUpdateWithoutPlayerInput, ItemsOwnersUncheckedUpdateWithoutPlayerInput>
  }

  export type ItemsOwnersUpdateManyWithWhereWithoutPlayerInput = {
    where: ItemsOwnersScalarWhereInput
    data: XOR<ItemsOwnersUpdateManyMutationInput, ItemsOwnersUncheckedUpdateManyWithoutPlayerInput>
  }

  export type ItemsOwnersScalarWhereInput = {
    AND?: ItemsOwnersScalarWhereInput | ItemsOwnersScalarWhereInput[]
    OR?: ItemsOwnersScalarWhereInput[]
    NOT?: ItemsOwnersScalarWhereInput | ItemsOwnersScalarWhereInput[]
    itemId?: IntFilter<"ItemsOwners"> | number
    playerId?: IntFilter<"ItemsOwners"> | number
    assignedAt?: DateTimeFilter<"ItemsOwners"> | Date | string
    gpCost?: IntFilter<"ItemsOwners"> | number
  }

  export type EpgpUpsertWithoutPlayerInput = {
    update: XOR<EpgpUpdateWithoutPlayerInput, EpgpUncheckedUpdateWithoutPlayerInput>
    create: XOR<EpgpCreateWithoutPlayerInput, EpgpUncheckedCreateWithoutPlayerInput>
    where?: EpgpWhereInput
  }

  export type EpgpUpdateToOneWithWhereWithoutPlayerInput = {
    where?: EpgpWhereInput
    data: XOR<EpgpUpdateWithoutPlayerInput, EpgpUncheckedUpdateWithoutPlayerInput>
  }

  export type EpgpUpdateWithoutPlayerInput = {
    ep?: IntFieldUpdateOperationsInput | number
    gp?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpgpUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    ep?: IntFieldUpdateOperationsInput | number
    gp?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemsOwnersCreateWithoutItemInput = {
    assignedAt: Date | string
    gpCost: number
    player: PlayerCreateNestedOneWithoutLootsInput
  }

  export type ItemsOwnersUncheckedCreateWithoutItemInput = {
    playerId: number
    assignedAt: Date | string
    gpCost: number
  }

  export type ItemsOwnersCreateOrConnectWithoutItemInput = {
    where: ItemsOwnersWhereUniqueInput
    create: XOR<ItemsOwnersCreateWithoutItemInput, ItemsOwnersUncheckedCreateWithoutItemInput>
  }

  export type ItemsOwnersCreateManyItemInputEnvelope = {
    data: ItemsOwnersCreateManyItemInput | ItemsOwnersCreateManyItemInput[]
  }

  export type ItemsOwnersUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemsOwnersWhereUniqueInput
    update: XOR<ItemsOwnersUpdateWithoutItemInput, ItemsOwnersUncheckedUpdateWithoutItemInput>
    create: XOR<ItemsOwnersCreateWithoutItemInput, ItemsOwnersUncheckedCreateWithoutItemInput>
  }

  export type ItemsOwnersUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemsOwnersWhereUniqueInput
    data: XOR<ItemsOwnersUpdateWithoutItemInput, ItemsOwnersUncheckedUpdateWithoutItemInput>
  }

  export type ItemsOwnersUpdateManyWithWhereWithoutItemInput = {
    where: ItemsOwnersScalarWhereInput
    data: XOR<ItemsOwnersUpdateManyMutationInput, ItemsOwnersUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutDropsInput = {
    itemId: number
    name: string
    quality: string
    itemString: string
    iconUrl: string
  }

  export type ItemUncheckedCreateWithoutDropsInput = {
    id?: number
    itemId: number
    name: string
    quality: string
    itemString: string
    iconUrl: string
  }

  export type ItemCreateOrConnectWithoutDropsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutDropsInput, ItemUncheckedCreateWithoutDropsInput>
  }

  export type PlayerCreateWithoutLootsInput = {
    name: string
    server: ServerCreateNestedOneWithoutPlayersInput
    guild: GuildCreateNestedOneWithoutPlayersInput
    epgp?: EpgpCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutLootsInput = {
    id?: number
    name: string
    serverId: number
    guildId: number
    epgp?: EpgpUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutLootsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutLootsInput, PlayerUncheckedCreateWithoutLootsInput>
  }

  export type ItemUpsertWithoutDropsInput = {
    update: XOR<ItemUpdateWithoutDropsInput, ItemUncheckedUpdateWithoutDropsInput>
    create: XOR<ItemCreateWithoutDropsInput, ItemUncheckedCreateWithoutDropsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutDropsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutDropsInput, ItemUncheckedUpdateWithoutDropsInput>
  }

  export type ItemUpdateWithoutDropsInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    itemString?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateWithoutDropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    itemString?: StringFieldUpdateOperationsInput | string
    iconUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUpsertWithoutLootsInput = {
    update: XOR<PlayerUpdateWithoutLootsInput, PlayerUncheckedUpdateWithoutLootsInput>
    create: XOR<PlayerCreateWithoutLootsInput, PlayerUncheckedCreateWithoutLootsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutLootsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutLootsInput, PlayerUncheckedUpdateWithoutLootsInput>
  }

  export type PlayerUpdateWithoutLootsInput = {
    name?: StringFieldUpdateOperationsInput | string
    server?: ServerUpdateOneRequiredWithoutPlayersNestedInput
    guild?: GuildUpdateOneRequiredWithoutPlayersNestedInput
    epgp?: EpgpUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutLootsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
    guildId?: IntFieldUpdateOperationsInput | number
    epgp?: EpgpUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutEpgpInput = {
    name: string
    server: ServerCreateNestedOneWithoutPlayersInput
    guild: GuildCreateNestedOneWithoutPlayersInput
    loots?: ItemsOwnersCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutEpgpInput = {
    id?: number
    name: string
    serverId: number
    guildId: number
    loots?: ItemsOwnersUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutEpgpInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutEpgpInput, PlayerUncheckedCreateWithoutEpgpInput>
  }

  export type PlayerUpsertWithoutEpgpInput = {
    update: XOR<PlayerUpdateWithoutEpgpInput, PlayerUncheckedUpdateWithoutEpgpInput>
    create: XOR<PlayerCreateWithoutEpgpInput, PlayerUncheckedCreateWithoutEpgpInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutEpgpInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutEpgpInput, PlayerUncheckedUpdateWithoutEpgpInput>
  }

  export type PlayerUpdateWithoutEpgpInput = {
    name?: StringFieldUpdateOperationsInput | string
    server?: ServerUpdateOneRequiredWithoutPlayersNestedInput
    guild?: GuildUpdateOneRequiredWithoutPlayersNestedInput
    loots?: ItemsOwnersUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutEpgpInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
    guildId?: IntFieldUpdateOperationsInput | number
    loots?: ItemsOwnersUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyServerInput = {
    id?: number
    name: string
    guildId: number
  }

  export type GuildCreateManyServerInput = {
    id?: number
    name: string
  }

  export type PlayerUpdateWithoutServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    guild?: GuildUpdateOneRequiredWithoutPlayersNestedInput
    loots?: ItemsOwnersUpdateManyWithoutPlayerNestedInput
    epgp?: EpgpUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    guildId?: IntFieldUpdateOperationsInput | number
    loots?: ItemsOwnersUncheckedUpdateManyWithoutPlayerNestedInput
    epgp?: EpgpUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    guildId?: IntFieldUpdateOperationsInput | number
  }

  export type GuildUpdateWithoutServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildUncheckedUpdateManyWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCreateManyGuildInput = {
    id?: number
    name: string
    serverId: number
  }

  export type PlayerUpdateWithoutGuildInput = {
    name?: StringFieldUpdateOperationsInput | string
    server?: ServerUpdateOneRequiredWithoutPlayersNestedInput
    loots?: ItemsOwnersUpdateManyWithoutPlayerNestedInput
    epgp?: EpgpUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
    loots?: ItemsOwnersUncheckedUpdateManyWithoutPlayerNestedInput
    epgp?: EpgpUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutGuildInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serverId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersCreateManyPlayerInput = {
    itemId: number
    assignedAt: Date | string
    gpCost: number
  }

  export type ItemsOwnersUpdateWithoutPlayerInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutDropsNestedInput
  }

  export type ItemsOwnersUncheckedUpdateWithoutPlayerInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersUncheckedUpdateManyWithoutPlayerInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersCreateManyItemInput = {
    playerId: number
    assignedAt: Date | string
    gpCost: number
  }

  export type ItemsOwnersUpdateWithoutItemInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
    player?: PlayerUpdateOneRequiredWithoutLootsNestedInput
  }

  export type ItemsOwnersUncheckedUpdateWithoutItemInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsOwnersUncheckedUpdateManyWithoutItemInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gpCost?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ServerCountOutputTypeDefaultArgs instead
     */
    export type ServerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuildCountOutputTypeDefaultArgs instead
     */
    export type GuildCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerCountOutputTypeDefaultArgs instead
     */
    export type PlayerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServerDefaultArgs instead
     */
    export type ServerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GuildDefaultArgs instead
     */
    export type GuildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GuildDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerDefaultArgs instead
     */
    export type PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemsOwnersDefaultArgs instead
     */
    export type ItemsOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemsOwnersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpgpDefaultArgs instead
     */
    export type EpgpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpgpDefaultArgs<ExtArgs>

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