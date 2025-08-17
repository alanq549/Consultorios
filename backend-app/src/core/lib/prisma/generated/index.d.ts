
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationAttempt
 * 
 */
export type VerificationAttempt = $Result.DefaultSelection<Prisma.$VerificationAttemptPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ProfessionalProfile
 * 
 */
export type ProfessionalProfile = $Result.DefaultSelection<Prisma.$ProfessionalProfilePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Specialty
 * 
 */
export type Specialty = $Result.DefaultSelection<Prisma.$SpecialtyPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model GuestClient
 * 
 */
export type GuestClient = $Result.DefaultSelection<Prisma.$GuestClientPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model CustomConfig
 * 
 */
export type CustomConfig = $Result.DefaultSelection<Prisma.$CustomConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PROFESSIONAL: 'PROFESSIONAL',
  CLIENT: 'CLIENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const LayoutType: {
  SIDEBAR: 'SIDEBAR',
  TOPBAR: 'TOPBAR'
};

export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type LayoutType = $Enums.LayoutType

export const LayoutType: typeof $Enums.LayoutType

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationAttempt`: Exposes CRUD operations for the **VerificationAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationAttempts
    * const verificationAttempts = await prisma.verificationAttempt.findMany()
    * ```
    */
  get verificationAttempt(): Prisma.VerificationAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionalProfile`: Exposes CRUD operations for the **ProfessionalProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionalProfiles
    * const professionalProfiles = await prisma.professionalProfile.findMany()
    * ```
    */
  get professionalProfile(): Prisma.ProfessionalProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialty`: Exposes CRUD operations for the **Specialty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialty.findMany()
    * ```
    */
  get specialty(): Prisma.SpecialtyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestClient`: Exposes CRUD operations for the **GuestClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestClients
    * const guestClients = await prisma.guestClient.findMany()
    * ```
    */
  get guestClient(): Prisma.GuestClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customConfig`: Exposes CRUD operations for the **CustomConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomConfigs
    * const customConfigs = await prisma.customConfig.findMany()
    * ```
    */
  get customConfig(): Prisma.CustomConfigDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    VerificationAttempt: 'VerificationAttempt',
    PasswordReset: 'PasswordReset',
    Notification: 'Notification',
    ProfessionalProfile: 'ProfessionalProfile',
    Review: 'Review',
    Specialty: 'Specialty',
    Service: 'Service',
    Schedule: 'Schedule',
    GuestClient: 'GuestClient',
    Appointment: 'Appointment',
    CustomConfig: 'CustomConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verificationAttempt" | "passwordReset" | "notification" | "professionalProfile" | "review" | "specialty" | "service" | "schedule" | "guestClient" | "appointment" | "customConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationAttempt: {
        payload: Prisma.$VerificationAttemptPayload<ExtArgs>
        fields: Prisma.VerificationAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>
          }
          findFirst: {
            args: Prisma.VerificationAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>
          }
          findMany: {
            args: Prisma.VerificationAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>[]
          }
          create: {
            args: Prisma.VerificationAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>
          }
          createMany: {
            args: Prisma.VerificationAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>[]
          }
          delete: {
            args: Prisma.VerificationAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>
          }
          update: {
            args: Prisma.VerificationAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>
          }
          deleteMany: {
            args: Prisma.VerificationAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>[]
          }
          upsert: {
            args: Prisma.VerificationAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationAttemptPayload>
          }
          aggregate: {
            args: Prisma.VerificationAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationAttempt>
          }
          groupBy: {
            args: Prisma.VerificationAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationAttemptCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ProfessionalProfile: {
        payload: Prisma.$ProfessionalProfilePayload<ExtArgs>
        fields: Prisma.ProfessionalProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfessionalProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>
          }
          findMany: {
            args: Prisma.ProfessionalProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>[]
          }
          create: {
            args: Prisma.ProfessionalProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>
          }
          createMany: {
            args: Prisma.ProfessionalProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfessionalProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>
          }
          update: {
            args: Prisma.ProfessionalProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfessionalProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionalProfile>
          }
          groupBy: {
            args: Prisma.ProfessionalProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalProfileCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Specialty: {
        payload: Prisma.$SpecialtyPayload<ExtArgs>
        fields: Prisma.SpecialtyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findFirst: {
            args: Prisma.SpecialtyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findMany: {
            args: Prisma.SpecialtyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          create: {
            args: Prisma.SpecialtyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          createMany: {
            args: Prisma.SpecialtyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialtyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          delete: {
            args: Prisma.SpecialtyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          update: {
            args: Prisma.SpecialtyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialtyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          upsert: {
            args: Prisma.SpecialtyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          aggregate: {
            args: Prisma.SpecialtyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialty>
          }
          groupBy: {
            args: Prisma.SpecialtyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtyCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      GuestClient: {
        payload: Prisma.$GuestClientPayload<ExtArgs>
        fields: Prisma.GuestClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>
          }
          findFirst: {
            args: Prisma.GuestClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>
          }
          findMany: {
            args: Prisma.GuestClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>[]
          }
          create: {
            args: Prisma.GuestClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>
          }
          createMany: {
            args: Prisma.GuestClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>[]
          }
          delete: {
            args: Prisma.GuestClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>
          }
          update: {
            args: Prisma.GuestClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>
          }
          deleteMany: {
            args: Prisma.GuestClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>[]
          }
          upsert: {
            args: Prisma.GuestClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestClientPayload>
          }
          aggregate: {
            args: Prisma.GuestClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestClient>
          }
          groupBy: {
            args: Prisma.GuestClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestClientCountArgs<ExtArgs>
            result: $Utils.Optional<GuestClientCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      CustomConfig: {
        payload: Prisma.$CustomConfigPayload<ExtArgs>
        fields: Prisma.CustomConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>
          }
          findFirst: {
            args: Prisma.CustomConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>
          }
          findMany: {
            args: Prisma.CustomConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>[]
          }
          create: {
            args: Prisma.CustomConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>
          }
          createMany: {
            args: Prisma.CustomConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>[]
          }
          delete: {
            args: Prisma.CustomConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>
          }
          update: {
            args: Prisma.CustomConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>
          }
          deleteMany: {
            args: Prisma.CustomConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>[]
          }
          upsert: {
            args: Prisma.CustomConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomConfigPayload>
          }
          aggregate: {
            args: Prisma.CustomConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomConfig>
          }
          groupBy: {
            args: Prisma.CustomConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomConfigCountArgs<ExtArgs>
            result: $Utils.Optional<CustomConfigCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationAttempt?: VerificationAttemptOmit
    passwordReset?: PasswordResetOmit
    notification?: NotificationOmit
    professionalProfile?: ProfessionalProfileOmit
    review?: ReviewOmit
    specialty?: SpecialtyOmit
    service?: ServiceOmit
    schedule?: ScheduleOmit
    guestClient?: GuestClientOmit
    appointment?: AppointmentOmit
    customConfig?: CustomConfigOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointmentsAsClient: number
    appointmentsAsProfessional: number
    reviewsGiven: number
    reviewsReceived: number
    verificationAttempts: number
    passwordResets: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentsAsClient?: boolean | UserCountOutputTypeCountAppointmentsAsClientArgs
    appointmentsAsProfessional?: boolean | UserCountOutputTypeCountAppointmentsAsProfessionalArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
    verificationAttempts?: boolean | UserCountOutputTypeCountVerificationAttemptsArgs
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsProfessionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ProfessionalProfileCountOutputType
   */

  export type ProfessionalProfileCountOutputType = {
    services: number
    schedules: number
  }

  export type ProfessionalProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ProfessionalProfileCountOutputTypeCountServicesArgs
    schedules?: boolean | ProfessionalProfileCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ProfessionalProfileCountOutputType without action
   */
  export type ProfessionalProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfileCountOutputType
     */
    select?: ProfessionalProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionalProfileCountOutputType without action
   */
  export type ProfessionalProfileCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ProfessionalProfileCountOutputType without action
   */
  export type ProfessionalProfileCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type SpecialtyCountOutputType
   */

  export type SpecialtyCountOutputType = {
    professionals: number
  }

  export type SpecialtyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | SpecialtyCountOutputTypeCountProfessionalsArgs
  }

  // Custom InputTypes
  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtyCountOutputType
     */
    select?: SpecialtyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalProfileWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    appointments: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type GuestClientCountOutputType
   */

  export type GuestClientCountOutputType = {
    appointments: number
  }

  export type GuestClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | GuestClientCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * GuestClientCountOutputType without action
   */
  export type GuestClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClientCountOutputType
     */
    select?: GuestClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestClientCountOutputType without action
   */
  export type GuestClientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    notifications: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | AppointmentCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    verificationCode: string | null
    isVerified: boolean | null
    role: $Enums.Role | null
    phone: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    verificationCode: string | null
    isVerified: boolean | null
    role: $Enums.Role | null
    phone: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    password: number
    verificationCode: number
    isVerified: number
    role: number
    phone: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    verificationCode?: true
    isVerified?: true
    role?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    verificationCode?: true
    isVerified?: true
    role?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    verificationCode?: true
    isVerified?: true
    role?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    lastName: string | null
    email: string
    password: string
    verificationCode: string | null
    isVerified: boolean
    role: $Enums.Role
    phone: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionalProfile?: boolean | User$professionalProfileArgs<ExtArgs>
    appointmentsAsClient?: boolean | User$appointmentsAsClientArgs<ExtArgs>
    appointmentsAsProfessional?: boolean | User$appointmentsAsProfessionalArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    verificationAttempts?: boolean | User$verificationAttemptsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    customConfig?: boolean | User$customConfigArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "password" | "verificationCode" | "isVerified" | "role" | "phone" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalProfile?: boolean | User$professionalProfileArgs<ExtArgs>
    appointmentsAsClient?: boolean | User$appointmentsAsClientArgs<ExtArgs>
    appointmentsAsProfessional?: boolean | User$appointmentsAsProfessionalArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    verificationAttempts?: boolean | User$verificationAttemptsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    customConfig?: boolean | User$customConfigArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      professionalProfile: Prisma.$ProfessionalProfilePayload<ExtArgs> | null
      appointmentsAsClient: Prisma.$AppointmentPayload<ExtArgs>[]
      appointmentsAsProfessional: Prisma.$AppointmentPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      verificationAttempts: Prisma.$VerificationAttemptPayload<ExtArgs>[]
      passwordResets: Prisma.$PasswordResetPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      customConfig: Prisma.$CustomConfigPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string | null
      email: string
      password: string
      verificationCode: string | null
      isVerified: boolean
      role: $Enums.Role
      phone: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionalProfile<T extends User$professionalProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$professionalProfileArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointmentsAsClient<T extends User$appointmentsAsClientArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsClientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsProfessional<T extends User$appointmentsAsProfessionalArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsProfessionalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationAttempts<T extends User$verificationAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends User$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customConfig<T extends User$customConfigArgs<ExtArgs> = {}>(args?: Subset<T, User$customConfigArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly verificationCode: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.professionalProfile
   */
  export type User$professionalProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    where?: ProfessionalProfileWhereInput
  }

  /**
   * User.appointmentsAsClient
   */
  export type User$appointmentsAsClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.appointmentsAsProfessional
   */
  export type User$appointmentsAsProfessionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.verificationAttempts
   */
  export type User$verificationAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    where?: VerificationAttemptWhereInput
    orderBy?: VerificationAttemptOrderByWithRelationInput | VerificationAttemptOrderByWithRelationInput[]
    cursor?: VerificationAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationAttemptScalarFieldEnum | VerificationAttemptScalarFieldEnum[]
  }

  /**
   * User.passwordResets
   */
  export type User$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    cursor?: PasswordResetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.customConfig
   */
  export type User$customConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    where?: CustomConfigWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationAttempt
   */

  export type AggregateVerificationAttempt = {
    _count: VerificationAttemptCountAggregateOutputType | null
    _avg: VerificationAttemptAvgAggregateOutputType | null
    _sum: VerificationAttemptSumAggregateOutputType | null
    _min: VerificationAttemptMinAggregateOutputType | null
    _max: VerificationAttemptMaxAggregateOutputType | null
  }

  export type VerificationAttemptAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerificationAttemptSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VerificationAttemptMinAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isUsed: boolean | null
  }

  export type VerificationAttemptMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isUsed: boolean | null
  }

  export type VerificationAttemptCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    createdAt: number
    expiresAt: number
    isUsed: number
    _all: number
  }


  export type VerificationAttemptAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerificationAttemptSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VerificationAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
  }

  export type VerificationAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
  }

  export type VerificationAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
    _all?: true
  }

  export type VerificationAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationAttempt to aggregate.
     */
    where?: VerificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationAttempts to fetch.
     */
    orderBy?: VerificationAttemptOrderByWithRelationInput | VerificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationAttempts
    **/
    _count?: true | VerificationAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationAttemptMaxAggregateInputType
  }

  export type GetVerificationAttemptAggregateType<T extends VerificationAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationAttempt[P]>
      : GetScalarType<T[P], AggregateVerificationAttempt[P]>
  }




  export type VerificationAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationAttemptWhereInput
    orderBy?: VerificationAttemptOrderByWithAggregationInput | VerificationAttemptOrderByWithAggregationInput[]
    by: VerificationAttemptScalarFieldEnum[] | VerificationAttemptScalarFieldEnum
    having?: VerificationAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationAttemptCountAggregateInputType | true
    _avg?: VerificationAttemptAvgAggregateInputType
    _sum?: VerificationAttemptSumAggregateInputType
    _min?: VerificationAttemptMinAggregateInputType
    _max?: VerificationAttemptMaxAggregateInputType
  }

  export type VerificationAttemptGroupByOutputType = {
    id: number
    userId: number
    code: string
    createdAt: Date
    expiresAt: Date
    isUsed: boolean
    _count: VerificationAttemptCountAggregateOutputType | null
    _avg: VerificationAttemptAvgAggregateOutputType | null
    _sum: VerificationAttemptSumAggregateOutputType | null
    _min: VerificationAttemptMinAggregateOutputType | null
    _max: VerificationAttemptMaxAggregateOutputType | null
  }

  type GetVerificationAttemptGroupByPayload<T extends VerificationAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationAttemptGroupByOutputType[P]>
        }
      >
    >


  export type VerificationAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationAttempt"]>

  export type VerificationAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationAttempt"]>

  export type VerificationAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationAttempt"]>

  export type VerificationAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
  }

  export type VerificationAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "createdAt" | "expiresAt" | "isUsed", ExtArgs["result"]["verificationAttempt"]>
  export type VerificationAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      code: string
      createdAt: Date
      expiresAt: Date
      isUsed: boolean
    }, ExtArgs["result"]["verificationAttempt"]>
    composites: {}
  }

  type VerificationAttemptGetPayload<S extends boolean | null | undefined | VerificationAttemptDefaultArgs> = $Result.GetResult<Prisma.$VerificationAttemptPayload, S>

  type VerificationAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationAttemptCountAggregateInputType | true
    }

  export interface VerificationAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationAttempt'], meta: { name: 'VerificationAttempt' } }
    /**
     * Find zero or one VerificationAttempt that matches the filter.
     * @param {VerificationAttemptFindUniqueArgs} args - Arguments to find a VerificationAttempt
     * @example
     * // Get one VerificationAttempt
     * const verificationAttempt = await prisma.verificationAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationAttemptFindUniqueArgs>(args: SelectSubset<T, VerificationAttemptFindUniqueArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationAttemptFindUniqueOrThrowArgs} args - Arguments to find a VerificationAttempt
     * @example
     * // Get one VerificationAttempt
     * const verificationAttempt = await prisma.verificationAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptFindFirstArgs} args - Arguments to find a VerificationAttempt
     * @example
     * // Get one VerificationAttempt
     * const verificationAttempt = await prisma.verificationAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationAttemptFindFirstArgs>(args?: SelectSubset<T, VerificationAttemptFindFirstArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptFindFirstOrThrowArgs} args - Arguments to find a VerificationAttempt
     * @example
     * // Get one VerificationAttempt
     * const verificationAttempt = await prisma.verificationAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationAttempts
     * const verificationAttempts = await prisma.verificationAttempt.findMany()
     * 
     * // Get first 10 VerificationAttempts
     * const verificationAttempts = await prisma.verificationAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationAttemptWithIdOnly = await prisma.verificationAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationAttemptFindManyArgs>(args?: SelectSubset<T, VerificationAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationAttempt.
     * @param {VerificationAttemptCreateArgs} args - Arguments to create a VerificationAttempt.
     * @example
     * // Create one VerificationAttempt
     * const VerificationAttempt = await prisma.verificationAttempt.create({
     *   data: {
     *     // ... data to create a VerificationAttempt
     *   }
     * })
     * 
     */
    create<T extends VerificationAttemptCreateArgs>(args: SelectSubset<T, VerificationAttemptCreateArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationAttempts.
     * @param {VerificationAttemptCreateManyArgs} args - Arguments to create many VerificationAttempts.
     * @example
     * // Create many VerificationAttempts
     * const verificationAttempt = await prisma.verificationAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationAttemptCreateManyArgs>(args?: SelectSubset<T, VerificationAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationAttempts and returns the data saved in the database.
     * @param {VerificationAttemptCreateManyAndReturnArgs} args - Arguments to create many VerificationAttempts.
     * @example
     * // Create many VerificationAttempts
     * const verificationAttempt = await prisma.verificationAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationAttempts and only return the `id`
     * const verificationAttemptWithIdOnly = await prisma.verificationAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationAttempt.
     * @param {VerificationAttemptDeleteArgs} args - Arguments to delete one VerificationAttempt.
     * @example
     * // Delete one VerificationAttempt
     * const VerificationAttempt = await prisma.verificationAttempt.delete({
     *   where: {
     *     // ... filter to delete one VerificationAttempt
     *   }
     * })
     * 
     */
    delete<T extends VerificationAttemptDeleteArgs>(args: SelectSubset<T, VerificationAttemptDeleteArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationAttempt.
     * @param {VerificationAttemptUpdateArgs} args - Arguments to update one VerificationAttempt.
     * @example
     * // Update one VerificationAttempt
     * const verificationAttempt = await prisma.verificationAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationAttemptUpdateArgs>(args: SelectSubset<T, VerificationAttemptUpdateArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationAttempts.
     * @param {VerificationAttemptDeleteManyArgs} args - Arguments to filter VerificationAttempts to delete.
     * @example
     * // Delete a few VerificationAttempts
     * const { count } = await prisma.verificationAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationAttemptDeleteManyArgs>(args?: SelectSubset<T, VerificationAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationAttempts
     * const verificationAttempt = await prisma.verificationAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationAttemptUpdateManyArgs>(args: SelectSubset<T, VerificationAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationAttempts and returns the data updated in the database.
     * @param {VerificationAttemptUpdateManyAndReturnArgs} args - Arguments to update many VerificationAttempts.
     * @example
     * // Update many VerificationAttempts
     * const verificationAttempt = await prisma.verificationAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationAttempts and only return the `id`
     * const verificationAttemptWithIdOnly = await prisma.verificationAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationAttempt.
     * @param {VerificationAttemptUpsertArgs} args - Arguments to update or create a VerificationAttempt.
     * @example
     * // Update or create a VerificationAttempt
     * const verificationAttempt = await prisma.verificationAttempt.upsert({
     *   create: {
     *     // ... data to create a VerificationAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationAttempt we want to update
     *   }
     * })
     */
    upsert<T extends VerificationAttemptUpsertArgs>(args: SelectSubset<T, VerificationAttemptUpsertArgs<ExtArgs>>): Prisma__VerificationAttemptClient<$Result.GetResult<Prisma.$VerificationAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptCountArgs} args - Arguments to filter VerificationAttempts to count.
     * @example
     * // Count the number of VerificationAttempts
     * const count = await prisma.verificationAttempt.count({
     *   where: {
     *     // ... the filter for the VerificationAttempts we want to count
     *   }
     * })
    **/
    count<T extends VerificationAttemptCountArgs>(
      args?: Subset<T, VerificationAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAttemptAggregateArgs>(args: Subset<T, VerificationAttemptAggregateArgs>): Prisma.PrismaPromise<GetVerificationAttemptAggregateType<T>>

    /**
     * Group by VerificationAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAttemptGroupByArgs} args - Group by arguments.
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
      T extends VerificationAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationAttemptGroupByArgs['orderBy'] }
        : { orderBy?: VerificationAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationAttempt model
   */
  readonly fields: VerificationAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VerificationAttempt model
   */
  interface VerificationAttemptFieldRefs {
    readonly id: FieldRef<"VerificationAttempt", 'Int'>
    readonly userId: FieldRef<"VerificationAttempt", 'Int'>
    readonly code: FieldRef<"VerificationAttempt", 'String'>
    readonly createdAt: FieldRef<"VerificationAttempt", 'DateTime'>
    readonly expiresAt: FieldRef<"VerificationAttempt", 'DateTime'>
    readonly isUsed: FieldRef<"VerificationAttempt", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VerificationAttempt findUnique
   */
  export type VerificationAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * Filter, which VerificationAttempt to fetch.
     */
    where: VerificationAttemptWhereUniqueInput
  }

  /**
   * VerificationAttempt findUniqueOrThrow
   */
  export type VerificationAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * Filter, which VerificationAttempt to fetch.
     */
    where: VerificationAttemptWhereUniqueInput
  }

  /**
   * VerificationAttempt findFirst
   */
  export type VerificationAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * Filter, which VerificationAttempt to fetch.
     */
    where?: VerificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationAttempts to fetch.
     */
    orderBy?: VerificationAttemptOrderByWithRelationInput | VerificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationAttempts.
     */
    cursor?: VerificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationAttempts.
     */
    distinct?: VerificationAttemptScalarFieldEnum | VerificationAttemptScalarFieldEnum[]
  }

  /**
   * VerificationAttempt findFirstOrThrow
   */
  export type VerificationAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * Filter, which VerificationAttempt to fetch.
     */
    where?: VerificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationAttempts to fetch.
     */
    orderBy?: VerificationAttemptOrderByWithRelationInput | VerificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationAttempts.
     */
    cursor?: VerificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationAttempts.
     */
    distinct?: VerificationAttemptScalarFieldEnum | VerificationAttemptScalarFieldEnum[]
  }

  /**
   * VerificationAttempt findMany
   */
  export type VerificationAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * Filter, which VerificationAttempts to fetch.
     */
    where?: VerificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationAttempts to fetch.
     */
    orderBy?: VerificationAttemptOrderByWithRelationInput | VerificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationAttempts.
     */
    cursor?: VerificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationAttempts.
     */
    skip?: number
    distinct?: VerificationAttemptScalarFieldEnum | VerificationAttemptScalarFieldEnum[]
  }

  /**
   * VerificationAttempt create
   */
  export type VerificationAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationAttempt.
     */
    data: XOR<VerificationAttemptCreateInput, VerificationAttemptUncheckedCreateInput>
  }

  /**
   * VerificationAttempt createMany
   */
  export type VerificationAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationAttempts.
     */
    data: VerificationAttemptCreateManyInput | VerificationAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationAttempt createManyAndReturn
   */
  export type VerificationAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationAttempts.
     */
    data: VerificationAttemptCreateManyInput | VerificationAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationAttempt update
   */
  export type VerificationAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationAttempt.
     */
    data: XOR<VerificationAttemptUpdateInput, VerificationAttemptUncheckedUpdateInput>
    /**
     * Choose, which VerificationAttempt to update.
     */
    where: VerificationAttemptWhereUniqueInput
  }

  /**
   * VerificationAttempt updateMany
   */
  export type VerificationAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationAttempts.
     */
    data: XOR<VerificationAttemptUpdateManyMutationInput, VerificationAttemptUncheckedUpdateManyInput>
    /**
     * Filter which VerificationAttempts to update
     */
    where?: VerificationAttemptWhereInput
    /**
     * Limit how many VerificationAttempts to update.
     */
    limit?: number
  }

  /**
   * VerificationAttempt updateManyAndReturn
   */
  export type VerificationAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * The data used to update VerificationAttempts.
     */
    data: XOR<VerificationAttemptUpdateManyMutationInput, VerificationAttemptUncheckedUpdateManyInput>
    /**
     * Filter which VerificationAttempts to update
     */
    where?: VerificationAttemptWhereInput
    /**
     * Limit how many VerificationAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationAttempt upsert
   */
  export type VerificationAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationAttempt to update in case it exists.
     */
    where: VerificationAttemptWhereUniqueInput
    /**
     * In case the VerificationAttempt found by the `where` argument doesn't exist, create a new VerificationAttempt with this data.
     */
    create: XOR<VerificationAttemptCreateInput, VerificationAttemptUncheckedCreateInput>
    /**
     * In case the VerificationAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationAttemptUpdateInput, VerificationAttemptUncheckedUpdateInput>
  }

  /**
   * VerificationAttempt delete
   */
  export type VerificationAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
    /**
     * Filter which VerificationAttempt to delete.
     */
    where: VerificationAttemptWhereUniqueInput
  }

  /**
   * VerificationAttempt deleteMany
   */
  export type VerificationAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationAttempts to delete
     */
    where?: VerificationAttemptWhereInput
    /**
     * Limit how many VerificationAttempts to delete.
     */
    limit?: number
  }

  /**
   * VerificationAttempt without action
   */
  export type VerificationAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationAttempt
     */
    select?: VerificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationAttempt
     */
    omit?: VerificationAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationAttemptInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isUsed: boolean | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isUsed: boolean | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    expiresAt: number
    isUsed: number
    _all: number
  }


  export type PasswordResetAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    isUsed?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _avg?: PasswordResetAvgAggregateInputType
    _sum?: PasswordResetSumAggregateInputType
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: number
    userId: number
    token: string
    createdAt: Date
    expiresAt: Date
    isUsed: boolean
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isUsed?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "createdAt" | "expiresAt" | "isUsed", ExtArgs["result"]["passwordReset"]>
  export type PasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      createdAt: Date
      expiresAt: Date
      isUsed: boolean
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'Int'>
    readonly userId: FieldRef<"PasswordReset", 'Int'>
    readonly token: FieldRef<"PasswordReset", 'String'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly expiresAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly isUsed: FieldRef<"PasswordReset", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    appointmentId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    appointmentId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    appointmentId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    appointmentId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    isRead: number
    createdAt: number
    appointmentId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    appointmentId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    appointmentId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    appointmentId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    appointmentId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    appointmentId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    appointmentId: number | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    appointmentId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "isRead" | "createdAt" | "appointmentId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      isRead: boolean
      createdAt: Date
      appointmentId: number | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends Notification$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly appointmentId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.appointment
   */
  export type Notification$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ProfessionalProfile
   */

  export type AggregateProfessionalProfile = {
    _count: ProfessionalProfileCountAggregateOutputType | null
    _avg: ProfessionalProfileAvgAggregateOutputType | null
    _sum: ProfessionalProfileSumAggregateOutputType | null
    _min: ProfessionalProfileMinAggregateOutputType | null
    _max: ProfessionalProfileMaxAggregateOutputType | null
  }

  export type ProfessionalProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    specialtyId: number | null
  }

  export type ProfessionalProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    specialtyId: number | null
  }

  export type ProfessionalProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    specialtyId: number | null
    description: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    specialtyId: number | null
    description: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalProfileCountAggregateOutputType = {
    id: number
    userId: number
    specialtyId: number
    description: number
    certificates: number
    socialLinks: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessionalProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    specialtyId?: true
  }

  export type ProfessionalProfileSumAggregateInputType = {
    id?: true
    userId?: true
    specialtyId?: true
  }

  export type ProfessionalProfileMinAggregateInputType = {
    id?: true
    userId?: true
    specialtyId?: true
    description?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    specialtyId?: true
    description?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specialtyId?: true
    description?: true
    certificates?: true
    socialLinks?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessionalProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalProfile to aggregate.
     */
    where?: ProfessionalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalProfiles to fetch.
     */
    orderBy?: ProfessionalProfileOrderByWithRelationInput | ProfessionalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessionalProfiles
    **/
    _count?: true | ProfessionalProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalProfileMaxAggregateInputType
  }

  export type GetProfessionalProfileAggregateType<T extends ProfessionalProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionalProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionalProfile[P]>
      : GetScalarType<T[P], AggregateProfessionalProfile[P]>
  }




  export type ProfessionalProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalProfileWhereInput
    orderBy?: ProfessionalProfileOrderByWithAggregationInput | ProfessionalProfileOrderByWithAggregationInput[]
    by: ProfessionalProfileScalarFieldEnum[] | ProfessionalProfileScalarFieldEnum
    having?: ProfessionalProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalProfileCountAggregateInputType | true
    _avg?: ProfessionalProfileAvgAggregateInputType
    _sum?: ProfessionalProfileSumAggregateInputType
    _min?: ProfessionalProfileMinAggregateInputType
    _max?: ProfessionalProfileMaxAggregateInputType
  }

  export type ProfessionalProfileGroupByOutputType = {
    id: number
    userId: number
    specialtyId: number
    description: string
    certificates: JsonValue
    socialLinks: JsonValue | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfessionalProfileCountAggregateOutputType | null
    _avg: ProfessionalProfileAvgAggregateOutputType | null
    _sum: ProfessionalProfileSumAggregateOutputType | null
    _min: ProfessionalProfileMinAggregateOutputType | null
    _max: ProfessionalProfileMaxAggregateOutputType | null
  }

  type GetProfessionalProfileGroupByPayload<T extends ProfessionalProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialtyId?: boolean
    description?: boolean
    certificates?: boolean
    socialLinks?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
    services?: boolean | ProfessionalProfile$servicesArgs<ExtArgs>
    schedules?: boolean | ProfessionalProfile$schedulesArgs<ExtArgs>
    _count?: boolean | ProfessionalProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalProfile"]>

  export type ProfessionalProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialtyId?: boolean
    description?: boolean
    certificates?: boolean
    socialLinks?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalProfile"]>

  export type ProfessionalProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialtyId?: boolean
    description?: boolean
    certificates?: boolean
    socialLinks?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalProfile"]>

  export type ProfessionalProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specialtyId?: boolean
    description?: boolean
    certificates?: boolean
    socialLinks?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessionalProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialtyId" | "description" | "certificates" | "socialLinks" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["professionalProfile"]>
  export type ProfessionalProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
    services?: boolean | ProfessionalProfile$servicesArgs<ExtArgs>
    schedules?: boolean | ProfessionalProfile$schedulesArgs<ExtArgs>
    _count?: boolean | ProfessionalProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionalProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }
  export type ProfessionalProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }

  export type $ProfessionalProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessionalProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      specialty: Prisma.$SpecialtyPayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      specialtyId: number
      description: string
      certificates: Prisma.JsonValue
      socialLinks: Prisma.JsonValue | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professionalProfile"]>
    composites: {}
  }

  type ProfessionalProfileGetPayload<S extends boolean | null | undefined | ProfessionalProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalProfilePayload, S>

  type ProfessionalProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalProfileCountAggregateInputType | true
    }

  export interface ProfessionalProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessionalProfile'], meta: { name: 'ProfessionalProfile' } }
    /**
     * Find zero or one ProfessionalProfile that matches the filter.
     * @param {ProfessionalProfileFindUniqueArgs} args - Arguments to find a ProfessionalProfile
     * @example
     * // Get one ProfessionalProfile
     * const professionalProfile = await prisma.professionalProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalProfileFindUniqueArgs>(args: SelectSubset<T, ProfessionalProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionalProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalProfileFindUniqueOrThrowArgs} args - Arguments to find a ProfessionalProfile
     * @example
     * // Get one ProfessionalProfile
     * const professionalProfile = await prisma.professionalProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileFindFirstArgs} args - Arguments to find a ProfessionalProfile
     * @example
     * // Get one ProfessionalProfile
     * const professionalProfile = await prisma.professionalProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalProfileFindFirstArgs>(args?: SelectSubset<T, ProfessionalProfileFindFirstArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileFindFirstOrThrowArgs} args - Arguments to find a ProfessionalProfile
     * @example
     * // Get one ProfessionalProfile
     * const professionalProfile = await prisma.professionalProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionalProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionalProfiles
     * const professionalProfiles = await prisma.professionalProfile.findMany()
     * 
     * // Get first 10 ProfessionalProfiles
     * const professionalProfiles = await prisma.professionalProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalProfileWithIdOnly = await prisma.professionalProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalProfileFindManyArgs>(args?: SelectSubset<T, ProfessionalProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionalProfile.
     * @param {ProfessionalProfileCreateArgs} args - Arguments to create a ProfessionalProfile.
     * @example
     * // Create one ProfessionalProfile
     * const ProfessionalProfile = await prisma.professionalProfile.create({
     *   data: {
     *     // ... data to create a ProfessionalProfile
     *   }
     * })
     * 
     */
    create<T extends ProfessionalProfileCreateArgs>(args: SelectSubset<T, ProfessionalProfileCreateArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionalProfiles.
     * @param {ProfessionalProfileCreateManyArgs} args - Arguments to create many ProfessionalProfiles.
     * @example
     * // Create many ProfessionalProfiles
     * const professionalProfile = await prisma.professionalProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalProfileCreateManyArgs>(args?: SelectSubset<T, ProfessionalProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionalProfiles and returns the data saved in the database.
     * @param {ProfessionalProfileCreateManyAndReturnArgs} args - Arguments to create many ProfessionalProfiles.
     * @example
     * // Create many ProfessionalProfiles
     * const professionalProfile = await prisma.professionalProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionalProfiles and only return the `id`
     * const professionalProfileWithIdOnly = await prisma.professionalProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionalProfile.
     * @param {ProfessionalProfileDeleteArgs} args - Arguments to delete one ProfessionalProfile.
     * @example
     * // Delete one ProfessionalProfile
     * const ProfessionalProfile = await prisma.professionalProfile.delete({
     *   where: {
     *     // ... filter to delete one ProfessionalProfile
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalProfileDeleteArgs>(args: SelectSubset<T, ProfessionalProfileDeleteArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionalProfile.
     * @param {ProfessionalProfileUpdateArgs} args - Arguments to update one ProfessionalProfile.
     * @example
     * // Update one ProfessionalProfile
     * const professionalProfile = await prisma.professionalProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalProfileUpdateArgs>(args: SelectSubset<T, ProfessionalProfileUpdateArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionalProfiles.
     * @param {ProfessionalProfileDeleteManyArgs} args - Arguments to filter ProfessionalProfiles to delete.
     * @example
     * // Delete a few ProfessionalProfiles
     * const { count } = await prisma.professionalProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalProfileDeleteManyArgs>(args?: SelectSubset<T, ProfessionalProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionalProfiles
     * const professionalProfile = await prisma.professionalProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalProfileUpdateManyArgs>(args: SelectSubset<T, ProfessionalProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalProfiles and returns the data updated in the database.
     * @param {ProfessionalProfileUpdateManyAndReturnArgs} args - Arguments to update many ProfessionalProfiles.
     * @example
     * // Update many ProfessionalProfiles
     * const professionalProfile = await prisma.professionalProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionalProfiles and only return the `id`
     * const professionalProfileWithIdOnly = await prisma.professionalProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessionalProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionalProfile.
     * @param {ProfessionalProfileUpsertArgs} args - Arguments to update or create a ProfessionalProfile.
     * @example
     * // Update or create a ProfessionalProfile
     * const professionalProfile = await prisma.professionalProfile.upsert({
     *   create: {
     *     // ... data to create a ProfessionalProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionalProfile we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalProfileUpsertArgs>(args: SelectSubset<T, ProfessionalProfileUpsertArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileCountArgs} args - Arguments to filter ProfessionalProfiles to count.
     * @example
     * // Count the number of ProfessionalProfiles
     * const count = await prisma.professionalProfile.count({
     *   where: {
     *     // ... the filter for the ProfessionalProfiles we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalProfileCountArgs>(
      args?: Subset<T, ProfessionalProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalProfileAggregateArgs>(args: Subset<T, ProfessionalProfileAggregateArgs>): Prisma.PrismaPromise<GetProfessionalProfileAggregateType<T>>

    /**
     * Group by ProfessionalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessionalProfile model
   */
  readonly fields: ProfessionalProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessionalProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialty<T extends SpecialtyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialtyDefaultArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends ProfessionalProfile$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalProfile$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends ProfessionalProfile$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalProfile$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProfessionalProfile model
   */
  interface ProfessionalProfileFieldRefs {
    readonly id: FieldRef<"ProfessionalProfile", 'Int'>
    readonly userId: FieldRef<"ProfessionalProfile", 'Int'>
    readonly specialtyId: FieldRef<"ProfessionalProfile", 'Int'>
    readonly description: FieldRef<"ProfessionalProfile", 'String'>
    readonly certificates: FieldRef<"ProfessionalProfile", 'Json'>
    readonly socialLinks: FieldRef<"ProfessionalProfile", 'Json'>
    readonly isVerified: FieldRef<"ProfessionalProfile", 'Boolean'>
    readonly createdAt: FieldRef<"ProfessionalProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfessionalProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfessionalProfile findUnique
   */
  export type ProfessionalProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalProfile to fetch.
     */
    where: ProfessionalProfileWhereUniqueInput
  }

  /**
   * ProfessionalProfile findUniqueOrThrow
   */
  export type ProfessionalProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalProfile to fetch.
     */
    where: ProfessionalProfileWhereUniqueInput
  }

  /**
   * ProfessionalProfile findFirst
   */
  export type ProfessionalProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalProfile to fetch.
     */
    where?: ProfessionalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalProfiles to fetch.
     */
    orderBy?: ProfessionalProfileOrderByWithRelationInput | ProfessionalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalProfiles.
     */
    cursor?: ProfessionalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalProfiles.
     */
    distinct?: ProfessionalProfileScalarFieldEnum | ProfessionalProfileScalarFieldEnum[]
  }

  /**
   * ProfessionalProfile findFirstOrThrow
   */
  export type ProfessionalProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalProfile to fetch.
     */
    where?: ProfessionalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalProfiles to fetch.
     */
    orderBy?: ProfessionalProfileOrderByWithRelationInput | ProfessionalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalProfiles.
     */
    cursor?: ProfessionalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalProfiles.
     */
    distinct?: ProfessionalProfileScalarFieldEnum | ProfessionalProfileScalarFieldEnum[]
  }

  /**
   * ProfessionalProfile findMany
   */
  export type ProfessionalProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalProfiles to fetch.
     */
    where?: ProfessionalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalProfiles to fetch.
     */
    orderBy?: ProfessionalProfileOrderByWithRelationInput | ProfessionalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessionalProfiles.
     */
    cursor?: ProfessionalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalProfiles.
     */
    skip?: number
    distinct?: ProfessionalProfileScalarFieldEnum | ProfessionalProfileScalarFieldEnum[]
  }

  /**
   * ProfessionalProfile create
   */
  export type ProfessionalProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessionalProfile.
     */
    data: XOR<ProfessionalProfileCreateInput, ProfessionalProfileUncheckedCreateInput>
  }

  /**
   * ProfessionalProfile createMany
   */
  export type ProfessionalProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessionalProfiles.
     */
    data: ProfessionalProfileCreateManyInput | ProfessionalProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessionalProfile createManyAndReturn
   */
  export type ProfessionalProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessionalProfiles.
     */
    data: ProfessionalProfileCreateManyInput | ProfessionalProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalProfile update
   */
  export type ProfessionalProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessionalProfile.
     */
    data: XOR<ProfessionalProfileUpdateInput, ProfessionalProfileUncheckedUpdateInput>
    /**
     * Choose, which ProfessionalProfile to update.
     */
    where: ProfessionalProfileWhereUniqueInput
  }

  /**
   * ProfessionalProfile updateMany
   */
  export type ProfessionalProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessionalProfiles.
     */
    data: XOR<ProfessionalProfileUpdateManyMutationInput, ProfessionalProfileUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalProfiles to update
     */
    where?: ProfessionalProfileWhereInput
    /**
     * Limit how many ProfessionalProfiles to update.
     */
    limit?: number
  }

  /**
   * ProfessionalProfile updateManyAndReturn
   */
  export type ProfessionalProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * The data used to update ProfessionalProfiles.
     */
    data: XOR<ProfessionalProfileUpdateManyMutationInput, ProfessionalProfileUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalProfiles to update
     */
    where?: ProfessionalProfileWhereInput
    /**
     * Limit how many ProfessionalProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalProfile upsert
   */
  export type ProfessionalProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessionalProfile to update in case it exists.
     */
    where: ProfessionalProfileWhereUniqueInput
    /**
     * In case the ProfessionalProfile found by the `where` argument doesn't exist, create a new ProfessionalProfile with this data.
     */
    create: XOR<ProfessionalProfileCreateInput, ProfessionalProfileUncheckedCreateInput>
    /**
     * In case the ProfessionalProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalProfileUpdateInput, ProfessionalProfileUncheckedUpdateInput>
  }

  /**
   * ProfessionalProfile delete
   */
  export type ProfessionalProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    /**
     * Filter which ProfessionalProfile to delete.
     */
    where: ProfessionalProfileWhereUniqueInput
  }

  /**
   * ProfessionalProfile deleteMany
   */
  export type ProfessionalProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalProfiles to delete
     */
    where?: ProfessionalProfileWhereInput
    /**
     * Limit how many ProfessionalProfiles to delete.
     */
    limit?: number
  }

  /**
   * ProfessionalProfile.services
   */
  export type ProfessionalProfile$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ProfessionalProfile.schedules
   */
  export type ProfessionalProfile$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * ProfessionalProfile without action
   */
  export type ProfessionalProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    clientId: number | null
    professionalId: number | null
    appointmentId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    clientId: number | null
    professionalId: number | null
    appointmentId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    clientId: number | null
    professionalId: number | null
    appointmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    clientId: number | null
    professionalId: number | null
    appointmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    clientId: number
    professionalId: number
    appointmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    clientId?: true
    professionalId?: true
    appointmentId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    clientId?: true
    professionalId?: true
    appointmentId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    clientId?: true
    professionalId?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    clientId?: true
    professionalId?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    clientId?: true
    professionalId?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string | null
    clientId: number
    professionalId: number
    appointmentId: number
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "clientId" | "professionalId" | "appointmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      professional: Prisma.$UserPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string | null
      clientId: number
      professionalId: number
      appointmentId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professional<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly clientId: FieldRef<"Review", 'Int'>
    readonly professionalId: FieldRef<"Review", 'Int'>
    readonly appointmentId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Specialty
   */

  export type AggregateSpecialty = {
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  export type SpecialtyAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialtySumAggregateOutputType = {
    id: number | null
  }

  export type SpecialtyMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialtyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialtyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialtyAvgAggregateInputType = {
    id?: true
  }

  export type SpecialtySumAggregateInputType = {
    id?: true
  }

  export type SpecialtyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialtyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialtyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialtyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialty to aggregate.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialtyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialtySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtyMaxAggregateInputType
  }

  export type GetSpecialtyAggregateType<T extends SpecialtyAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialty[P]>
      : GetScalarType<T[P], AggregateSpecialty[P]>
  }




  export type SpecialtyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtyWhereInput
    orderBy?: SpecialtyOrderByWithAggregationInput | SpecialtyOrderByWithAggregationInput[]
    by: SpecialtyScalarFieldEnum[] | SpecialtyScalarFieldEnum
    having?: SpecialtyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialtyCountAggregateInputType | true
    _avg?: SpecialtyAvgAggregateInputType
    _sum?: SpecialtySumAggregateInputType
    _min?: SpecialtyMinAggregateInputType
    _max?: SpecialtyMaxAggregateInputType
  }

  export type SpecialtyGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  type GetSpecialtyGroupByPayload<T extends SpecialtyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionals?: boolean | Specialty$professionalsArgs<ExtArgs>
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecialtyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["specialty"]>
  export type SpecialtyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | Specialty$professionalsArgs<ExtArgs>
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialtyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialtyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialtyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialty"
    objects: {
      professionals: Prisma.$ProfessionalProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialty"]>
    composites: {}
  }

  type SpecialtyGetPayload<S extends boolean | null | undefined | SpecialtyDefaultArgs> = $Result.GetResult<Prisma.$SpecialtyPayload, S>

  type SpecialtyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialtyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialtyCountAggregateInputType | true
    }

  export interface SpecialtyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialty'], meta: { name: 'Specialty' } }
    /**
     * Find zero or one Specialty that matches the filter.
     * @param {SpecialtyFindUniqueArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialtyFindUniqueArgs>(args: SelectSubset<T, SpecialtyFindUniqueArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialtyFindUniqueOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialtyFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialtyFindFirstArgs>(args?: SelectSubset<T, SpecialtyFindFirstArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialtyFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialtyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialty.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtyWithIdOnly = await prisma.specialty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialtyFindManyArgs>(args?: SelectSubset<T, SpecialtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialty.
     * @param {SpecialtyCreateArgs} args - Arguments to create a Specialty.
     * @example
     * // Create one Specialty
     * const Specialty = await prisma.specialty.create({
     *   data: {
     *     // ... data to create a Specialty
     *   }
     * })
     * 
     */
    create<T extends SpecialtyCreateArgs>(args: SelectSubset<T, SpecialtyCreateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialties.
     * @param {SpecialtyCreateManyArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialtyCreateManyArgs>(args?: SelectSubset<T, SpecialtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialties and returns the data saved in the database.
     * @param {SpecialtyCreateManyAndReturnArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialtyCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialty.
     * @param {SpecialtyDeleteArgs} args - Arguments to delete one Specialty.
     * @example
     * // Delete one Specialty
     * const Specialty = await prisma.specialty.delete({
     *   where: {
     *     // ... filter to delete one Specialty
     *   }
     * })
     * 
     */
    delete<T extends SpecialtyDeleteArgs>(args: SelectSubset<T, SpecialtyDeleteArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialty.
     * @param {SpecialtyUpdateArgs} args - Arguments to update one Specialty.
     * @example
     * // Update one Specialty
     * const specialty = await prisma.specialty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialtyUpdateArgs>(args: SelectSubset<T, SpecialtyUpdateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtyDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialtyDeleteManyArgs>(args?: SelectSubset<T, SpecialtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialtyUpdateManyArgs>(args: SelectSubset<T, SpecialtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties and returns the data updated in the database.
     * @param {SpecialtyUpdateManyAndReturnArgs} args - Arguments to update many Specialties.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialtyUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialtyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialty.
     * @param {SpecialtyUpsertArgs} args - Arguments to update or create a Specialty.
     * @example
     * // Update or create a Specialty
     * const specialty = await prisma.specialty.upsert({
     *   create: {
     *     // ... data to create a Specialty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialty we want to update
     *   }
     * })
     */
    upsert<T extends SpecialtyUpsertArgs>(args: SelectSubset<T, SpecialtyUpsertArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialty.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtyCountArgs>(
      args?: Subset<T, SpecialtyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialtyAggregateArgs>(args: Subset<T, SpecialtyAggregateArgs>): Prisma.PrismaPromise<GetSpecialtyAggregateType<T>>

    /**
     * Group by Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyGroupByArgs} args - Group by arguments.
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
      T extends SpecialtyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtyGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialty model
   */
  readonly fields: SpecialtyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionals<T extends Specialty$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, Specialty$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Specialty model
   */
  interface SpecialtyFieldRefs {
    readonly id: FieldRef<"Specialty", 'Int'>
    readonly name: FieldRef<"Specialty", 'String'>
    readonly description: FieldRef<"Specialty", 'String'>
    readonly isActive: FieldRef<"Specialty", 'Boolean'>
    readonly createdAt: FieldRef<"Specialty", 'DateTime'>
    readonly updatedAt: FieldRef<"Specialty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specialty findUnique
   */
  export type SpecialtyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findUniqueOrThrow
   */
  export type SpecialtyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findFirst
   */
  export type SpecialtyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty findFirstOrThrow
   */
  export type SpecialtyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty findMany
   */
  export type SpecialtyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty create
   */
  export type SpecialtyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialty.
     */
    data: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
  }

  /**
   * Specialty createMany
   */
  export type SpecialtyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialty createManyAndReturn
   */
  export type SpecialtyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialty update
   */
  export type SpecialtyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialty.
     */
    data: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
    /**
     * Choose, which Specialty to update.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty updateMany
   */
  export type SpecialtyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialty updateManyAndReturn
   */
  export type SpecialtyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialty upsert
   */
  export type SpecialtyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialty to update in case it exists.
     */
    where: SpecialtyWhereUniqueInput
    /**
     * In case the Specialty found by the `where` argument doesn't exist, create a new Specialty with this data.
     */
    create: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
    /**
     * In case the Specialty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
  }

  /**
   * Specialty delete
   */
  export type SpecialtyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter which Specialty to delete.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty deleteMany
   */
  export type SpecialtyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to delete.
     */
    limit?: number
  }

  /**
   * Specialty.professionals
   */
  export type Specialty$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalProfile
     */
    select?: ProfessionalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalProfile
     */
    omit?: ProfessionalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalProfileInclude<ExtArgs> | null
    where?: ProfessionalProfileWhereInput
    orderBy?: ProfessionalProfileOrderByWithRelationInput | ProfessionalProfileOrderByWithRelationInput[]
    cursor?: ProfessionalProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalProfileScalarFieldEnum | ProfessionalProfileScalarFieldEnum[]
  }

  /**
   * Specialty without action
   */
  export type SpecialtyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
    price: number | null
    professionalId: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    durationMinutes: number | null
    price: number | null
    professionalId: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    durationMinutes: number | null
    price: number | null
    professionalId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    durationMinutes: number | null
    price: number | null
    professionalId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    durationMinutes: number
    price: number
    professionalId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    durationMinutes?: true
    price?: true
    professionalId?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    durationMinutes?: true
    price?: true
    professionalId?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durationMinutes?: true
    price?: true
    professionalId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durationMinutes?: true
    price?: true
    professionalId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durationMinutes?: true
    price?: true
    professionalId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    description: string
    durationMinutes: number
    price: number
    professionalId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durationMinutes?: boolean
    price?: boolean
    professionalId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durationMinutes?: boolean
    price?: boolean
    professionalId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durationMinutes?: boolean
    price?: boolean
    professionalId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    durationMinutes?: boolean
    price?: boolean
    professionalId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "durationMinutes" | "price" | "professionalId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      professional: Prisma.$ProfessionalProfilePayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      durationMinutes: number
      price: number
      professionalId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalProfileDefaultArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Service$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly durationMinutes: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly professionalId: FieldRef<"Service", 'Int'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.appointments
   */
  export type Service$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    professionalId: number | null
    dayOfWeek: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    professionalId: number | null
    dayOfWeek: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    professionalId: number | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    professionalId: number | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    professionalId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    professionalId: number
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalId" | "dayOfWeek" | "startTime" | "endTime" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalProfileDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      professional: Prisma.$ProfessionalProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalId: number
      dayOfWeek: number
      startTime: string
      endTime: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalProfileDefaultArgs<ExtArgs>>): Prisma__ProfessionalProfileClient<$Result.GetResult<Prisma.$ProfessionalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly professionalId: FieldRef<"Schedule", 'Int'>
    readonly dayOfWeek: FieldRef<"Schedule", 'Int'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
    readonly isAvailable: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model GuestClient
   */

  export type AggregateGuestClient = {
    _count: GuestClientCountAggregateOutputType | null
    _avg: GuestClientAvgAggregateOutputType | null
    _sum: GuestClientSumAggregateOutputType | null
    _min: GuestClientMinAggregateOutputType | null
    _max: GuestClientMaxAggregateOutputType | null
  }

  export type GuestClientAvgAggregateOutputType = {
    id: number | null
  }

  export type GuestClientSumAggregateOutputType = {
    id: number | null
  }

  export type GuestClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestClientAvgAggregateInputType = {
    id?: true
  }

  export type GuestClientSumAggregateInputType = {
    id?: true
  }

  export type GuestClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestClient to aggregate.
     */
    where?: GuestClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestClients to fetch.
     */
    orderBy?: GuestClientOrderByWithRelationInput | GuestClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestClients
    **/
    _count?: true | GuestClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestClientMaxAggregateInputType
  }

  export type GetGuestClientAggregateType<T extends GuestClientAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestClient[P]>
      : GetScalarType<T[P], AggregateGuestClient[P]>
  }




  export type GuestClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestClientWhereInput
    orderBy?: GuestClientOrderByWithAggregationInput | GuestClientOrderByWithAggregationInput[]
    by: GuestClientScalarFieldEnum[] | GuestClientScalarFieldEnum
    having?: GuestClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestClientCountAggregateInputType | true
    _avg?: GuestClientAvgAggregateInputType
    _sum?: GuestClientSumAggregateInputType
    _min?: GuestClientMinAggregateInputType
    _max?: GuestClientMaxAggregateInputType
  }

  export type GuestClientGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuestClientCountAggregateOutputType | null
    _avg: GuestClientAvgAggregateOutputType | null
    _sum: GuestClientSumAggregateOutputType | null
    _min: GuestClientMinAggregateOutputType | null
    _max: GuestClientMaxAggregateOutputType | null
  }

  type GetGuestClientGroupByPayload<T extends GuestClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestClientGroupByOutputType[P]>
            : GetScalarType<T[P], GuestClientGroupByOutputType[P]>
        }
      >
    >


  export type GuestClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | GuestClient$appointmentsArgs<ExtArgs>
    _count?: boolean | GuestClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestClient"]>

  export type GuestClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guestClient"]>

  export type GuestClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guestClient"]>

  export type GuestClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["guestClient"]>
  export type GuestClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | GuestClient$appointmentsArgs<ExtArgs>
    _count?: boolean | GuestClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuestClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestClient"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guestClient"]>
    composites: {}
  }

  type GuestClientGetPayload<S extends boolean | null | undefined | GuestClientDefaultArgs> = $Result.GetResult<Prisma.$GuestClientPayload, S>

  type GuestClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestClientCountAggregateInputType | true
    }

  export interface GuestClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestClient'], meta: { name: 'GuestClient' } }
    /**
     * Find zero or one GuestClient that matches the filter.
     * @param {GuestClientFindUniqueArgs} args - Arguments to find a GuestClient
     * @example
     * // Get one GuestClient
     * const guestClient = await prisma.guestClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestClientFindUniqueArgs>(args: SelectSubset<T, GuestClientFindUniqueArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestClientFindUniqueOrThrowArgs} args - Arguments to find a GuestClient
     * @example
     * // Get one GuestClient
     * const guestClient = await prisma.guestClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestClientFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientFindFirstArgs} args - Arguments to find a GuestClient
     * @example
     * // Get one GuestClient
     * const guestClient = await prisma.guestClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestClientFindFirstArgs>(args?: SelectSubset<T, GuestClientFindFirstArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientFindFirstOrThrowArgs} args - Arguments to find a GuestClient
     * @example
     * // Get one GuestClient
     * const guestClient = await prisma.guestClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestClientFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestClients
     * const guestClients = await prisma.guestClient.findMany()
     * 
     * // Get first 10 GuestClients
     * const guestClients = await prisma.guestClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestClientWithIdOnly = await prisma.guestClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestClientFindManyArgs>(args?: SelectSubset<T, GuestClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestClient.
     * @param {GuestClientCreateArgs} args - Arguments to create a GuestClient.
     * @example
     * // Create one GuestClient
     * const GuestClient = await prisma.guestClient.create({
     *   data: {
     *     // ... data to create a GuestClient
     *   }
     * })
     * 
     */
    create<T extends GuestClientCreateArgs>(args: SelectSubset<T, GuestClientCreateArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestClients.
     * @param {GuestClientCreateManyArgs} args - Arguments to create many GuestClients.
     * @example
     * // Create many GuestClients
     * const guestClient = await prisma.guestClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestClientCreateManyArgs>(args?: SelectSubset<T, GuestClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestClients and returns the data saved in the database.
     * @param {GuestClientCreateManyAndReturnArgs} args - Arguments to create many GuestClients.
     * @example
     * // Create many GuestClients
     * const guestClient = await prisma.guestClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestClients and only return the `id`
     * const guestClientWithIdOnly = await prisma.guestClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestClientCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuestClient.
     * @param {GuestClientDeleteArgs} args - Arguments to delete one GuestClient.
     * @example
     * // Delete one GuestClient
     * const GuestClient = await prisma.guestClient.delete({
     *   where: {
     *     // ... filter to delete one GuestClient
     *   }
     * })
     * 
     */
    delete<T extends GuestClientDeleteArgs>(args: SelectSubset<T, GuestClientDeleteArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestClient.
     * @param {GuestClientUpdateArgs} args - Arguments to update one GuestClient.
     * @example
     * // Update one GuestClient
     * const guestClient = await prisma.guestClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestClientUpdateArgs>(args: SelectSubset<T, GuestClientUpdateArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestClients.
     * @param {GuestClientDeleteManyArgs} args - Arguments to filter GuestClients to delete.
     * @example
     * // Delete a few GuestClients
     * const { count } = await prisma.guestClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestClientDeleteManyArgs>(args?: SelectSubset<T, GuestClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestClients
     * const guestClient = await prisma.guestClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestClientUpdateManyArgs>(args: SelectSubset<T, GuestClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestClients and returns the data updated in the database.
     * @param {GuestClientUpdateManyAndReturnArgs} args - Arguments to update many GuestClients.
     * @example
     * // Update many GuestClients
     * const guestClient = await prisma.guestClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestClients and only return the `id`
     * const guestClientWithIdOnly = await prisma.guestClient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestClientUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuestClient.
     * @param {GuestClientUpsertArgs} args - Arguments to update or create a GuestClient.
     * @example
     * // Update or create a GuestClient
     * const guestClient = await prisma.guestClient.upsert({
     *   create: {
     *     // ... data to create a GuestClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestClient we want to update
     *   }
     * })
     */
    upsert<T extends GuestClientUpsertArgs>(args: SelectSubset<T, GuestClientUpsertArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientCountArgs} args - Arguments to filter GuestClients to count.
     * @example
     * // Count the number of GuestClients
     * const count = await prisma.guestClient.count({
     *   where: {
     *     // ... the filter for the GuestClients we want to count
     *   }
     * })
    **/
    count<T extends GuestClientCountArgs>(
      args?: Subset<T, GuestClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestClientAggregateArgs>(args: Subset<T, GuestClientAggregateArgs>): Prisma.PrismaPromise<GetGuestClientAggregateType<T>>

    /**
     * Group by GuestClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestClientGroupByArgs} args - Group by arguments.
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
      T extends GuestClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestClientGroupByArgs['orderBy'] }
        : { orderBy?: GuestClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestClient model
   */
  readonly fields: GuestClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends GuestClient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, GuestClient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GuestClient model
   */
  interface GuestClientFieldRefs {
    readonly id: FieldRef<"GuestClient", 'Int'>
    readonly name: FieldRef<"GuestClient", 'String'>
    readonly email: FieldRef<"GuestClient", 'String'>
    readonly phone: FieldRef<"GuestClient", 'String'>
    readonly createdAt: FieldRef<"GuestClient", 'DateTime'>
    readonly updatedAt: FieldRef<"GuestClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuestClient findUnique
   */
  export type GuestClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * Filter, which GuestClient to fetch.
     */
    where: GuestClientWhereUniqueInput
  }

  /**
   * GuestClient findUniqueOrThrow
   */
  export type GuestClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * Filter, which GuestClient to fetch.
     */
    where: GuestClientWhereUniqueInput
  }

  /**
   * GuestClient findFirst
   */
  export type GuestClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * Filter, which GuestClient to fetch.
     */
    where?: GuestClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestClients to fetch.
     */
    orderBy?: GuestClientOrderByWithRelationInput | GuestClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestClients.
     */
    cursor?: GuestClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestClients.
     */
    distinct?: GuestClientScalarFieldEnum | GuestClientScalarFieldEnum[]
  }

  /**
   * GuestClient findFirstOrThrow
   */
  export type GuestClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * Filter, which GuestClient to fetch.
     */
    where?: GuestClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestClients to fetch.
     */
    orderBy?: GuestClientOrderByWithRelationInput | GuestClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestClients.
     */
    cursor?: GuestClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestClients.
     */
    distinct?: GuestClientScalarFieldEnum | GuestClientScalarFieldEnum[]
  }

  /**
   * GuestClient findMany
   */
  export type GuestClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * Filter, which GuestClients to fetch.
     */
    where?: GuestClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestClients to fetch.
     */
    orderBy?: GuestClientOrderByWithRelationInput | GuestClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestClients.
     */
    cursor?: GuestClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestClients.
     */
    skip?: number
    distinct?: GuestClientScalarFieldEnum | GuestClientScalarFieldEnum[]
  }

  /**
   * GuestClient create
   */
  export type GuestClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestClient.
     */
    data: XOR<GuestClientCreateInput, GuestClientUncheckedCreateInput>
  }

  /**
   * GuestClient createMany
   */
  export type GuestClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestClients.
     */
    data: GuestClientCreateManyInput | GuestClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestClient createManyAndReturn
   */
  export type GuestClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * The data used to create many GuestClients.
     */
    data: GuestClientCreateManyInput | GuestClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestClient update
   */
  export type GuestClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestClient.
     */
    data: XOR<GuestClientUpdateInput, GuestClientUncheckedUpdateInput>
    /**
     * Choose, which GuestClient to update.
     */
    where: GuestClientWhereUniqueInput
  }

  /**
   * GuestClient updateMany
   */
  export type GuestClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestClients.
     */
    data: XOR<GuestClientUpdateManyMutationInput, GuestClientUncheckedUpdateManyInput>
    /**
     * Filter which GuestClients to update
     */
    where?: GuestClientWhereInput
    /**
     * Limit how many GuestClients to update.
     */
    limit?: number
  }

  /**
   * GuestClient updateManyAndReturn
   */
  export type GuestClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * The data used to update GuestClients.
     */
    data: XOR<GuestClientUpdateManyMutationInput, GuestClientUncheckedUpdateManyInput>
    /**
     * Filter which GuestClients to update
     */
    where?: GuestClientWhereInput
    /**
     * Limit how many GuestClients to update.
     */
    limit?: number
  }

  /**
   * GuestClient upsert
   */
  export type GuestClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestClient to update in case it exists.
     */
    where: GuestClientWhereUniqueInput
    /**
     * In case the GuestClient found by the `where` argument doesn't exist, create a new GuestClient with this data.
     */
    create: XOR<GuestClientCreateInput, GuestClientUncheckedCreateInput>
    /**
     * In case the GuestClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestClientUpdateInput, GuestClientUncheckedUpdateInput>
  }

  /**
   * GuestClient delete
   */
  export type GuestClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    /**
     * Filter which GuestClient to delete.
     */
    where: GuestClientWhereUniqueInput
  }

  /**
   * GuestClient deleteMany
   */
  export type GuestClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestClients to delete
     */
    where?: GuestClientWhereInput
    /**
     * Limit how many GuestClients to delete.
     */
    limit?: number
  }

  /**
   * GuestClient.appointments
   */
  export type GuestClient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * GuestClient without action
   */
  export type GuestClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    guestClientId: number | null
    serviceId: number | null
    professionalId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    guestClientId: number | null
    serviceId: number | null
    professionalId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    guestClientId: number | null
    serviceId: number | null
    professionalId: number | null
    date: Date | null
    startTime: string | null
    status: $Enums.AppointmentStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    guestClientId: number | null
    serviceId: number | null
    professionalId: number | null
    date: Date | null
    startTime: string | null
    status: $Enums.AppointmentStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    clientId: number
    guestClientId: number
    serviceId: number
    professionalId: number
    date: number
    startTime: number
    status: number
    paymentStatus: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    clientId?: true
    guestClientId?: true
    serviceId?: true
    professionalId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    clientId?: true
    guestClientId?: true
    serviceId?: true
    professionalId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    clientId?: true
    guestClientId?: true
    serviceId?: true
    professionalId?: true
    date?: true
    startTime?: true
    status?: true
    paymentStatus?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    clientId?: true
    guestClientId?: true
    serviceId?: true
    professionalId?: true
    date?: true
    startTime?: true
    status?: true
    paymentStatus?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    clientId?: true
    guestClientId?: true
    serviceId?: true
    professionalId?: true
    date?: true
    startTime?: true
    status?: true
    paymentStatus?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    clientId: number | null
    guestClientId: number | null
    serviceId: number
    professionalId: number
    date: Date
    startTime: string
    status: $Enums.AppointmentStatus
    paymentStatus: $Enums.PaymentStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    guestClientId?: boolean
    serviceId?: boolean
    professionalId?: boolean
    date?: boolean
    startTime?: boolean
    status?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Appointment$clientArgs<ExtArgs>
    guestClient?: boolean | Appointment$guestClientArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | Appointment$reviewArgs<ExtArgs>
    notifications?: boolean | Appointment$notificationsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    guestClientId?: boolean
    serviceId?: boolean
    professionalId?: boolean
    date?: boolean
    startTime?: boolean
    status?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Appointment$clientArgs<ExtArgs>
    guestClient?: boolean | Appointment$guestClientArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    guestClientId?: boolean
    serviceId?: boolean
    professionalId?: boolean
    date?: boolean
    startTime?: boolean
    status?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Appointment$clientArgs<ExtArgs>
    guestClient?: boolean | Appointment$guestClientArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    clientId?: boolean
    guestClientId?: boolean
    serviceId?: boolean
    professionalId?: boolean
    date?: boolean
    startTime?: boolean
    status?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "guestClientId" | "serviceId" | "professionalId" | "date" | "startTime" | "status" | "paymentStatus" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Appointment$clientArgs<ExtArgs>
    guestClient?: boolean | Appointment$guestClientArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | Appointment$reviewArgs<ExtArgs>
    notifications?: boolean | Appointment$notificationsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Appointment$clientArgs<ExtArgs>
    guestClient?: boolean | Appointment$guestClientArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Appointment$clientArgs<ExtArgs>
    guestClient?: boolean | Appointment$guestClientArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      client: Prisma.$UserPayload<ExtArgs> | null
      guestClient: Prisma.$GuestClientPayload<ExtArgs> | null
      service: Prisma.$ServicePayload<ExtArgs>
      professional: Prisma.$UserPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number | null
      guestClientId: number | null
      serviceId: number
      professionalId: number
      date: Date
      startTime: string
      status: $Enums.AppointmentStatus
      paymentStatus: $Enums.PaymentStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Appointment$clientArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$clientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    guestClient<T extends Appointment$guestClientArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$guestClientArgs<ExtArgs>>): Prisma__GuestClientClient<$Result.GetResult<Prisma.$GuestClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professional<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends Appointment$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Appointment$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly clientId: FieldRef<"Appointment", 'Int'>
    readonly guestClientId: FieldRef<"Appointment", 'Int'>
    readonly serviceId: FieldRef<"Appointment", 'Int'>
    readonly professionalId: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly paymentStatus: FieldRef<"Appointment", 'PaymentStatus'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.client
   */
  export type Appointment$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Appointment.guestClient
   */
  export type Appointment$guestClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestClient
     */
    select?: GuestClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestClient
     */
    omit?: GuestClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestClientInclude<ExtArgs> | null
    where?: GuestClientWhereInput
  }

  /**
   * Appointment.review
   */
  export type Appointment$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Appointment.notifications
   */
  export type Appointment$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model CustomConfig
   */

  export type AggregateCustomConfig = {
    _count: CustomConfigCountAggregateOutputType | null
    _avg: CustomConfigAvgAggregateOutputType | null
    _sum: CustomConfigSumAggregateOutputType | null
    _min: CustomConfigMinAggregateOutputType | null
    _max: CustomConfigMaxAggregateOutputType | null
  }

  export type CustomConfigAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CustomConfigSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CustomConfigMinAggregateOutputType = {
    id: number | null
    userId: number | null
    language: string | null
    theme: string | null
    notificationsEnabled: boolean | null
    layout: $Enums.LayoutType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomConfigMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    language: string | null
    theme: string | null
    notificationsEnabled: boolean | null
    layout: $Enums.LayoutType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomConfigCountAggregateOutputType = {
    id: number
    userId: number
    language: number
    theme: number
    preferences: number
    notificationsEnabled: number
    layout: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomConfigAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CustomConfigSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CustomConfigMinAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    theme?: true
    notificationsEnabled?: true
    layout?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    theme?: true
    notificationsEnabled?: true
    layout?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomConfigCountAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    theme?: true
    preferences?: true
    notificationsEnabled?: true
    layout?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomConfig to aggregate.
     */
    where?: CustomConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomConfigs to fetch.
     */
    orderBy?: CustomConfigOrderByWithRelationInput | CustomConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomConfigs
    **/
    _count?: true | CustomConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomConfigMaxAggregateInputType
  }

  export type GetCustomConfigAggregateType<T extends CustomConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomConfig[P]>
      : GetScalarType<T[P], AggregateCustomConfig[P]>
  }




  export type CustomConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomConfigWhereInput
    orderBy?: CustomConfigOrderByWithAggregationInput | CustomConfigOrderByWithAggregationInput[]
    by: CustomConfigScalarFieldEnum[] | CustomConfigScalarFieldEnum
    having?: CustomConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomConfigCountAggregateInputType | true
    _avg?: CustomConfigAvgAggregateInputType
    _sum?: CustomConfigSumAggregateInputType
    _min?: CustomConfigMinAggregateInputType
    _max?: CustomConfigMaxAggregateInputType
  }

  export type CustomConfigGroupByOutputType = {
    id: number
    userId: number
    language: string | null
    theme: string | null
    preferences: JsonValue | null
    notificationsEnabled: boolean
    layout: $Enums.LayoutType | null
    createdAt: Date
    updatedAt: Date
    _count: CustomConfigCountAggregateOutputType | null
    _avg: CustomConfigAvgAggregateOutputType | null
    _sum: CustomConfigSumAggregateOutputType | null
    _min: CustomConfigMinAggregateOutputType | null
    _max: CustomConfigMaxAggregateOutputType | null
  }

  type GetCustomConfigGroupByPayload<T extends CustomConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomConfigGroupByOutputType[P]>
            : GetScalarType<T[P], CustomConfigGroupByOutputType[P]>
        }
      >
    >


  export type CustomConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    theme?: boolean
    preferences?: boolean
    notificationsEnabled?: boolean
    layout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customConfig"]>

  export type CustomConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    theme?: boolean
    preferences?: boolean
    notificationsEnabled?: boolean
    layout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customConfig"]>

  export type CustomConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    theme?: boolean
    preferences?: boolean
    notificationsEnabled?: boolean
    layout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customConfig"]>

  export type CustomConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    language?: boolean
    theme?: boolean
    preferences?: boolean
    notificationsEnabled?: boolean
    layout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "language" | "theme" | "preferences" | "notificationsEnabled" | "layout" | "createdAt" | "updatedAt", ExtArgs["result"]["customConfig"]>
  export type CustomConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      language: string | null
      theme: string | null
      preferences: Prisma.JsonValue | null
      notificationsEnabled: boolean
      layout: $Enums.LayoutType | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customConfig"]>
    composites: {}
  }

  type CustomConfigGetPayload<S extends boolean | null | undefined | CustomConfigDefaultArgs> = $Result.GetResult<Prisma.$CustomConfigPayload, S>

  type CustomConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomConfigCountAggregateInputType | true
    }

  export interface CustomConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomConfig'], meta: { name: 'CustomConfig' } }
    /**
     * Find zero or one CustomConfig that matches the filter.
     * @param {CustomConfigFindUniqueArgs} args - Arguments to find a CustomConfig
     * @example
     * // Get one CustomConfig
     * const customConfig = await prisma.customConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomConfigFindUniqueArgs>(args: SelectSubset<T, CustomConfigFindUniqueArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomConfigFindUniqueOrThrowArgs} args - Arguments to find a CustomConfig
     * @example
     * // Get one CustomConfig
     * const customConfig = await prisma.customConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigFindFirstArgs} args - Arguments to find a CustomConfig
     * @example
     * // Get one CustomConfig
     * const customConfig = await prisma.customConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomConfigFindFirstArgs>(args?: SelectSubset<T, CustomConfigFindFirstArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigFindFirstOrThrowArgs} args - Arguments to find a CustomConfig
     * @example
     * // Get one CustomConfig
     * const customConfig = await prisma.customConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomConfigs
     * const customConfigs = await prisma.customConfig.findMany()
     * 
     * // Get first 10 CustomConfigs
     * const customConfigs = await prisma.customConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customConfigWithIdOnly = await prisma.customConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomConfigFindManyArgs>(args?: SelectSubset<T, CustomConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomConfig.
     * @param {CustomConfigCreateArgs} args - Arguments to create a CustomConfig.
     * @example
     * // Create one CustomConfig
     * const CustomConfig = await prisma.customConfig.create({
     *   data: {
     *     // ... data to create a CustomConfig
     *   }
     * })
     * 
     */
    create<T extends CustomConfigCreateArgs>(args: SelectSubset<T, CustomConfigCreateArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomConfigs.
     * @param {CustomConfigCreateManyArgs} args - Arguments to create many CustomConfigs.
     * @example
     * // Create many CustomConfigs
     * const customConfig = await prisma.customConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomConfigCreateManyArgs>(args?: SelectSubset<T, CustomConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomConfigs and returns the data saved in the database.
     * @param {CustomConfigCreateManyAndReturnArgs} args - Arguments to create many CustomConfigs.
     * @example
     * // Create many CustomConfigs
     * const customConfig = await prisma.customConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomConfigs and only return the `id`
     * const customConfigWithIdOnly = await prisma.customConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomConfig.
     * @param {CustomConfigDeleteArgs} args - Arguments to delete one CustomConfig.
     * @example
     * // Delete one CustomConfig
     * const CustomConfig = await prisma.customConfig.delete({
     *   where: {
     *     // ... filter to delete one CustomConfig
     *   }
     * })
     * 
     */
    delete<T extends CustomConfigDeleteArgs>(args: SelectSubset<T, CustomConfigDeleteArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomConfig.
     * @param {CustomConfigUpdateArgs} args - Arguments to update one CustomConfig.
     * @example
     * // Update one CustomConfig
     * const customConfig = await prisma.customConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomConfigUpdateArgs>(args: SelectSubset<T, CustomConfigUpdateArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomConfigs.
     * @param {CustomConfigDeleteManyArgs} args - Arguments to filter CustomConfigs to delete.
     * @example
     * // Delete a few CustomConfigs
     * const { count } = await prisma.customConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomConfigDeleteManyArgs>(args?: SelectSubset<T, CustomConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomConfigs
     * const customConfig = await prisma.customConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomConfigUpdateManyArgs>(args: SelectSubset<T, CustomConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomConfigs and returns the data updated in the database.
     * @param {CustomConfigUpdateManyAndReturnArgs} args - Arguments to update many CustomConfigs.
     * @example
     * // Update many CustomConfigs
     * const customConfig = await prisma.customConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomConfigs and only return the `id`
     * const customConfigWithIdOnly = await prisma.customConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomConfig.
     * @param {CustomConfigUpsertArgs} args - Arguments to update or create a CustomConfig.
     * @example
     * // Update or create a CustomConfig
     * const customConfig = await prisma.customConfig.upsert({
     *   create: {
     *     // ... data to create a CustomConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomConfig we want to update
     *   }
     * })
     */
    upsert<T extends CustomConfigUpsertArgs>(args: SelectSubset<T, CustomConfigUpsertArgs<ExtArgs>>): Prisma__CustomConfigClient<$Result.GetResult<Prisma.$CustomConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigCountArgs} args - Arguments to filter CustomConfigs to count.
     * @example
     * // Count the number of CustomConfigs
     * const count = await prisma.customConfig.count({
     *   where: {
     *     // ... the filter for the CustomConfigs we want to count
     *   }
     * })
    **/
    count<T extends CustomConfigCountArgs>(
      args?: Subset<T, CustomConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomConfigAggregateArgs>(args: Subset<T, CustomConfigAggregateArgs>): Prisma.PrismaPromise<GetCustomConfigAggregateType<T>>

    /**
     * Group by CustomConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomConfigGroupByArgs} args - Group by arguments.
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
      T extends CustomConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomConfigGroupByArgs['orderBy'] }
        : { orderBy?: CustomConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomConfig model
   */
  readonly fields: CustomConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomConfig model
   */
  interface CustomConfigFieldRefs {
    readonly id: FieldRef<"CustomConfig", 'Int'>
    readonly userId: FieldRef<"CustomConfig", 'Int'>
    readonly language: FieldRef<"CustomConfig", 'String'>
    readonly theme: FieldRef<"CustomConfig", 'String'>
    readonly preferences: FieldRef<"CustomConfig", 'Json'>
    readonly notificationsEnabled: FieldRef<"CustomConfig", 'Boolean'>
    readonly layout: FieldRef<"CustomConfig", 'LayoutType'>
    readonly createdAt: FieldRef<"CustomConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomConfig findUnique
   */
  export type CustomConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * Filter, which CustomConfig to fetch.
     */
    where: CustomConfigWhereUniqueInput
  }

  /**
   * CustomConfig findUniqueOrThrow
   */
  export type CustomConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * Filter, which CustomConfig to fetch.
     */
    where: CustomConfigWhereUniqueInput
  }

  /**
   * CustomConfig findFirst
   */
  export type CustomConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * Filter, which CustomConfig to fetch.
     */
    where?: CustomConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomConfigs to fetch.
     */
    orderBy?: CustomConfigOrderByWithRelationInput | CustomConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomConfigs.
     */
    cursor?: CustomConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomConfigs.
     */
    distinct?: CustomConfigScalarFieldEnum | CustomConfigScalarFieldEnum[]
  }

  /**
   * CustomConfig findFirstOrThrow
   */
  export type CustomConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * Filter, which CustomConfig to fetch.
     */
    where?: CustomConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomConfigs to fetch.
     */
    orderBy?: CustomConfigOrderByWithRelationInput | CustomConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomConfigs.
     */
    cursor?: CustomConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomConfigs.
     */
    distinct?: CustomConfigScalarFieldEnum | CustomConfigScalarFieldEnum[]
  }

  /**
   * CustomConfig findMany
   */
  export type CustomConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * Filter, which CustomConfigs to fetch.
     */
    where?: CustomConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomConfigs to fetch.
     */
    orderBy?: CustomConfigOrderByWithRelationInput | CustomConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomConfigs.
     */
    cursor?: CustomConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomConfigs.
     */
    skip?: number
    distinct?: CustomConfigScalarFieldEnum | CustomConfigScalarFieldEnum[]
  }

  /**
   * CustomConfig create
   */
  export type CustomConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomConfig.
     */
    data: XOR<CustomConfigCreateInput, CustomConfigUncheckedCreateInput>
  }

  /**
   * CustomConfig createMany
   */
  export type CustomConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomConfigs.
     */
    data: CustomConfigCreateManyInput | CustomConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomConfig createManyAndReturn
   */
  export type CustomConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * The data used to create many CustomConfigs.
     */
    data: CustomConfigCreateManyInput | CustomConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomConfig update
   */
  export type CustomConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomConfig.
     */
    data: XOR<CustomConfigUpdateInput, CustomConfigUncheckedUpdateInput>
    /**
     * Choose, which CustomConfig to update.
     */
    where: CustomConfigWhereUniqueInput
  }

  /**
   * CustomConfig updateMany
   */
  export type CustomConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomConfigs.
     */
    data: XOR<CustomConfigUpdateManyMutationInput, CustomConfigUncheckedUpdateManyInput>
    /**
     * Filter which CustomConfigs to update
     */
    where?: CustomConfigWhereInput
    /**
     * Limit how many CustomConfigs to update.
     */
    limit?: number
  }

  /**
   * CustomConfig updateManyAndReturn
   */
  export type CustomConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * The data used to update CustomConfigs.
     */
    data: XOR<CustomConfigUpdateManyMutationInput, CustomConfigUncheckedUpdateManyInput>
    /**
     * Filter which CustomConfigs to update
     */
    where?: CustomConfigWhereInput
    /**
     * Limit how many CustomConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomConfig upsert
   */
  export type CustomConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomConfig to update in case it exists.
     */
    where: CustomConfigWhereUniqueInput
    /**
     * In case the CustomConfig found by the `where` argument doesn't exist, create a new CustomConfig with this data.
     */
    create: XOR<CustomConfigCreateInput, CustomConfigUncheckedCreateInput>
    /**
     * In case the CustomConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomConfigUpdateInput, CustomConfigUncheckedUpdateInput>
  }

  /**
   * CustomConfig delete
   */
  export type CustomConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
    /**
     * Filter which CustomConfig to delete.
     */
    where: CustomConfigWhereUniqueInput
  }

  /**
   * CustomConfig deleteMany
   */
  export type CustomConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomConfigs to delete
     */
    where?: CustomConfigWhereInput
    /**
     * Limit how many CustomConfigs to delete.
     */
    limit?: number
  }

  /**
   * CustomConfig without action
   */
  export type CustomConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomConfig
     */
    select?: CustomConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomConfig
     */
    omit?: CustomConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomConfigInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    verificationCode: 'verificationCode',
    isVerified: 'isVerified',
    role: 'role',
    phone: 'phone',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isUsed: 'isUsed'
  };

  export type VerificationAttemptScalarFieldEnum = (typeof VerificationAttemptScalarFieldEnum)[keyof typeof VerificationAttemptScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isUsed: 'isUsed'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    appointmentId: 'appointmentId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ProfessionalProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialtyId: 'specialtyId',
    description: 'description',
    certificates: 'certificates',
    socialLinks: 'socialLinks',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessionalProfileScalarFieldEnum = (typeof ProfessionalProfileScalarFieldEnum)[keyof typeof ProfessionalProfileScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    clientId: 'clientId',
    professionalId: 'professionalId',
    appointmentId: 'appointmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SpecialtyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialtyScalarFieldEnum = (typeof SpecialtyScalarFieldEnum)[keyof typeof SpecialtyScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    durationMinutes: 'durationMinutes',
    price: 'price',
    professionalId: 'professionalId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    professionalId: 'professionalId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const GuestClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestClientScalarFieldEnum = (typeof GuestClientScalarFieldEnum)[keyof typeof GuestClientScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    guestClientId: 'guestClientId',
    serviceId: 'serviceId',
    professionalId: 'professionalId',
    date: 'date',
    startTime: 'startTime',
    status: 'status',
    paymentStatus: 'paymentStatus',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const CustomConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    language: 'language',
    theme: 'theme',
    preferences: 'preferences',
    notificationsEnabled: 'notificationsEnabled',
    layout: 'layout',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomConfigScalarFieldEnum = (typeof CustomConfigScalarFieldEnum)[keyof typeof CustomConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'LayoutType'
   */
  export type EnumLayoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LayoutType'>
    


  /**
   * Reference to a field of type 'LayoutType[]'
   */
  export type ListEnumLayoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LayoutType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verificationCode?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    professionalProfile?: XOR<ProfessionalProfileNullableScalarRelationFilter, ProfessionalProfileWhereInput> | null
    appointmentsAsClient?: AppointmentListRelationFilter
    appointmentsAsProfessional?: AppointmentListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    verificationAttempts?: VerificationAttemptListRelationFilter
    passwordResets?: PasswordResetListRelationFilter
    notifications?: NotificationListRelationFilter
    customConfig?: XOR<CustomConfigNullableScalarRelationFilter, CustomConfigWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionalProfile?: ProfessionalProfileOrderByWithRelationInput
    appointmentsAsClient?: AppointmentOrderByRelationAggregateInput
    appointmentsAsProfessional?: AppointmentOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    verificationAttempts?: VerificationAttemptOrderByRelationAggregateInput
    passwordResets?: PasswordResetOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    customConfig?: CustomConfigOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    verificationCode?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    professionalProfile?: XOR<ProfessionalProfileNullableScalarRelationFilter, ProfessionalProfileWhereInput> | null
    appointmentsAsClient?: AppointmentListRelationFilter
    appointmentsAsProfessional?: AppointmentListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    verificationAttempts?: VerificationAttemptListRelationFilter
    passwordResets?: PasswordResetListRelationFilter
    notifications?: NotificationListRelationFilter
    customConfig?: XOR<CustomConfigNullableScalarRelationFilter, CustomConfigWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    verificationCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationAttemptWhereInput = {
    AND?: VerificationAttemptWhereInput | VerificationAttemptWhereInput[]
    OR?: VerificationAttemptWhereInput[]
    NOT?: VerificationAttemptWhereInput | VerificationAttemptWhereInput[]
    id?: IntFilter<"VerificationAttempt"> | number
    userId?: IntFilter<"VerificationAttempt"> | number
    code?: StringFilter<"VerificationAttempt"> | string
    createdAt?: DateTimeFilter<"VerificationAttempt"> | Date | string
    expiresAt?: DateTimeFilter<"VerificationAttempt"> | Date | string
    isUsed?: BoolFilter<"VerificationAttempt"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: VerificationAttemptWhereInput | VerificationAttemptWhereInput[]
    OR?: VerificationAttemptWhereInput[]
    NOT?: VerificationAttemptWhereInput | VerificationAttemptWhereInput[]
    userId?: IntFilter<"VerificationAttempt"> | number
    createdAt?: DateTimeFilter<"VerificationAttempt"> | Date | string
    expiresAt?: DateTimeFilter<"VerificationAttempt"> | Date | string
    isUsed?: BoolFilter<"VerificationAttempt"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type VerificationAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    _count?: VerificationAttemptCountOrderByAggregateInput
    _avg?: VerificationAttemptAvgOrderByAggregateInput
    _max?: VerificationAttemptMaxOrderByAggregateInput
    _min?: VerificationAttemptMinOrderByAggregateInput
    _sum?: VerificationAttemptSumOrderByAggregateInput
  }

  export type VerificationAttemptScalarWhereWithAggregatesInput = {
    AND?: VerificationAttemptScalarWhereWithAggregatesInput | VerificationAttemptScalarWhereWithAggregatesInput[]
    OR?: VerificationAttemptScalarWhereWithAggregatesInput[]
    NOT?: VerificationAttemptScalarWhereWithAggregatesInput | VerificationAttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationAttempt"> | number
    userId?: IntWithAggregatesFilter<"VerificationAttempt"> | number
    code?: StringWithAggregatesFilter<"VerificationAttempt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationAttempt"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationAttempt"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"VerificationAttempt"> | boolean
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: IntFilter<"PasswordReset"> | number
    userId?: IntFilter<"PasswordReset"> | number
    token?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    isUsed?: BoolFilter<"PasswordReset"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    userId?: IntFilter<"PasswordReset"> | number
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    isUsed?: BoolFilter<"PasswordReset"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _avg?: PasswordResetAvgOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
    _sum?: PasswordResetSumOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordReset"> | number
    userId?: IntWithAggregatesFilter<"PasswordReset"> | number
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"PasswordReset"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointmentId?: IntNullableFilter<"Notification"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointmentId?: IntNullableFilter<"Notification"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    appointmentId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
  }

  export type ProfessionalProfileWhereInput = {
    AND?: ProfessionalProfileWhereInput | ProfessionalProfileWhereInput[]
    OR?: ProfessionalProfileWhereInput[]
    NOT?: ProfessionalProfileWhereInput | ProfessionalProfileWhereInput[]
    id?: IntFilter<"ProfessionalProfile"> | number
    userId?: IntFilter<"ProfessionalProfile"> | number
    specialtyId?: IntFilter<"ProfessionalProfile"> | number
    description?: StringFilter<"ProfessionalProfile"> | string
    certificates?: JsonFilter<"ProfessionalProfile">
    socialLinks?: JsonNullableFilter<"ProfessionalProfile">
    isVerified?: BoolFilter<"ProfessionalProfile"> | boolean
    createdAt?: DateTimeFilter<"ProfessionalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    specialty?: XOR<SpecialtyScalarRelationFilter, SpecialtyWhereInput>
    services?: ServiceListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type ProfessionalProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
    description?: SortOrder
    certificates?: SortOrder
    socialLinks?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    specialty?: SpecialtyOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type ProfessionalProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfessionalProfileWhereInput | ProfessionalProfileWhereInput[]
    OR?: ProfessionalProfileWhereInput[]
    NOT?: ProfessionalProfileWhereInput | ProfessionalProfileWhereInput[]
    specialtyId?: IntFilter<"ProfessionalProfile"> | number
    description?: StringFilter<"ProfessionalProfile"> | string
    certificates?: JsonFilter<"ProfessionalProfile">
    socialLinks?: JsonNullableFilter<"ProfessionalProfile">
    isVerified?: BoolFilter<"ProfessionalProfile"> | boolean
    createdAt?: DateTimeFilter<"ProfessionalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    specialty?: XOR<SpecialtyScalarRelationFilter, SpecialtyWhereInput>
    services?: ServiceListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "userId">

  export type ProfessionalProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
    description?: SortOrder
    certificates?: SortOrder
    socialLinks?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessionalProfileCountOrderByAggregateInput
    _avg?: ProfessionalProfileAvgOrderByAggregateInput
    _max?: ProfessionalProfileMaxOrderByAggregateInput
    _min?: ProfessionalProfileMinOrderByAggregateInput
    _sum?: ProfessionalProfileSumOrderByAggregateInput
  }

  export type ProfessionalProfileScalarWhereWithAggregatesInput = {
    AND?: ProfessionalProfileScalarWhereWithAggregatesInput | ProfessionalProfileScalarWhereWithAggregatesInput[]
    OR?: ProfessionalProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalProfileScalarWhereWithAggregatesInput | ProfessionalProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfessionalProfile"> | number
    userId?: IntWithAggregatesFilter<"ProfessionalProfile"> | number
    specialtyId?: IntWithAggregatesFilter<"ProfessionalProfile"> | number
    description?: StringWithAggregatesFilter<"ProfessionalProfile"> | string
    certificates?: JsonWithAggregatesFilter<"ProfessionalProfile">
    socialLinks?: JsonNullableWithAggregatesFilter<"ProfessionalProfile">
    isVerified?: BoolWithAggregatesFilter<"ProfessionalProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProfessionalProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfessionalProfile"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    clientId?: IntFilter<"Review"> | number
    professionalId?: IntFilter<"Review"> | number
    appointmentId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: UserOrderByWithRelationInput
    professional?: UserOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    appointmentId?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    clientId?: IntFilter<"Review"> | number
    professionalId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id" | "appointmentId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    clientId?: IntWithAggregatesFilter<"Review"> | number
    professionalId?: IntWithAggregatesFilter<"Review"> | number
    appointmentId?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type SpecialtyWhereInput = {
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[]
    OR?: SpecialtyWhereInput[]
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[]
    id?: IntFilter<"Specialty"> | number
    name?: StringFilter<"Specialty"> | string
    description?: StringNullableFilter<"Specialty"> | string | null
    isActive?: BoolFilter<"Specialty"> | boolean
    createdAt?: DateTimeFilter<"Specialty"> | Date | string
    updatedAt?: DateTimeFilter<"Specialty"> | Date | string
    professionals?: ProfessionalProfileListRelationFilter
  }

  export type SpecialtyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionals?: ProfessionalProfileOrderByRelationAggregateInput
  }

  export type SpecialtyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[]
    OR?: SpecialtyWhereInput[]
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[]
    description?: StringNullableFilter<"Specialty"> | string | null
    isActive?: BoolFilter<"Specialty"> | boolean
    createdAt?: DateTimeFilter<"Specialty"> | Date | string
    updatedAt?: DateTimeFilter<"Specialty"> | Date | string
    professionals?: ProfessionalProfileListRelationFilter
  }, "id" | "name">

  export type SpecialtyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecialtyCountOrderByAggregateInput
    _avg?: SpecialtyAvgOrderByAggregateInput
    _max?: SpecialtyMaxOrderByAggregateInput
    _min?: SpecialtyMinOrderByAggregateInput
    _sum?: SpecialtySumOrderByAggregateInput
  }

  export type SpecialtyScalarWhereWithAggregatesInput = {
    AND?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[]
    OR?: SpecialtyScalarWhereWithAggregatesInput[]
    NOT?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Specialty"> | number
    name?: StringWithAggregatesFilter<"Specialty"> | string
    description?: StringNullableWithAggregatesFilter<"Specialty"> | string | null
    isActive?: BoolWithAggregatesFilter<"Specialty"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Specialty"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Specialty"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    durationMinutes?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    professionalId?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    professional?: XOR<ProfessionalProfileScalarRelationFilter, ProfessionalProfileWhereInput>
    appointments?: AppointmentListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professional?: ProfessionalProfileOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    durationMinutes?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    professionalId?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    professional?: XOR<ProfessionalProfileScalarRelationFilter, ProfessionalProfileWhereInput>
    appointments?: AppointmentListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    durationMinutes?: IntWithAggregatesFilter<"Service"> | number
    price?: FloatWithAggregatesFilter<"Service"> | number
    professionalId?: IntWithAggregatesFilter<"Service"> | number
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    professionalId?: IntFilter<"Schedule"> | number
    dayOfWeek?: IntFilter<"Schedule"> | number
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    isAvailable?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    professional?: XOR<ProfessionalProfileScalarRelationFilter, ProfessionalProfileWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professional?: ProfessionalProfileOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    professionalId_dayOfWeek_startTime?: ScheduleProfessionalIdDayOfWeekStartTimeCompoundUniqueInput
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    professionalId?: IntFilter<"Schedule"> | number
    dayOfWeek?: IntFilter<"Schedule"> | number
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    isAvailable?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    professional?: XOR<ProfessionalProfileScalarRelationFilter, ProfessionalProfileWhereInput>
  }, "id" | "professionalId_dayOfWeek_startTime">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    professionalId?: IntWithAggregatesFilter<"Schedule"> | number
    dayOfWeek?: IntWithAggregatesFilter<"Schedule"> | number
    startTime?: StringWithAggregatesFilter<"Schedule"> | string
    endTime?: StringWithAggregatesFilter<"Schedule"> | string
    isAvailable?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type GuestClientWhereInput = {
    AND?: GuestClientWhereInput | GuestClientWhereInput[]
    OR?: GuestClientWhereInput[]
    NOT?: GuestClientWhereInput | GuestClientWhereInput[]
    id?: IntFilter<"GuestClient"> | number
    name?: StringFilter<"GuestClient"> | string
    email?: StringNullableFilter<"GuestClient"> | string | null
    phone?: StringNullableFilter<"GuestClient"> | string | null
    createdAt?: DateTimeFilter<"GuestClient"> | Date | string
    updatedAt?: DateTimeFilter<"GuestClient"> | Date | string
    appointments?: AppointmentListRelationFilter
  }

  export type GuestClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type GuestClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: GuestClientWhereInput | GuestClientWhereInput[]
    OR?: GuestClientWhereInput[]
    NOT?: GuestClientWhereInput | GuestClientWhereInput[]
    name?: StringFilter<"GuestClient"> | string
    phone?: StringNullableFilter<"GuestClient"> | string | null
    createdAt?: DateTimeFilter<"GuestClient"> | Date | string
    updatedAt?: DateTimeFilter<"GuestClient"> | Date | string
    appointments?: AppointmentListRelationFilter
  }, "id" | "email">

  export type GuestClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestClientCountOrderByAggregateInput
    _avg?: GuestClientAvgOrderByAggregateInput
    _max?: GuestClientMaxOrderByAggregateInput
    _min?: GuestClientMinOrderByAggregateInput
    _sum?: GuestClientSumOrderByAggregateInput
  }

  export type GuestClientScalarWhereWithAggregatesInput = {
    AND?: GuestClientScalarWhereWithAggregatesInput | GuestClientScalarWhereWithAggregatesInput[]
    OR?: GuestClientScalarWhereWithAggregatesInput[]
    NOT?: GuestClientScalarWhereWithAggregatesInput | GuestClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuestClient"> | number
    name?: StringWithAggregatesFilter<"GuestClient"> | string
    email?: StringNullableWithAggregatesFilter<"GuestClient"> | string | null
    phone?: StringNullableWithAggregatesFilter<"GuestClient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuestClient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuestClient"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    clientId?: IntNullableFilter<"Appointment"> | number | null
    guestClientId?: IntNullableFilter<"Appointment"> | number | null
    serviceId?: IntFilter<"Appointment"> | number
    professionalId?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    guestClient?: XOR<GuestClientNullableScalarRelationFilter, GuestClientWhereInput> | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    guestClientId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: UserOrderByWithRelationInput
    guestClient?: GuestClientOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    professional?: UserOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    professionalId_date_startTime?: AppointmentProfessionalIdDateStartTimeCompoundUniqueInput
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    clientId?: IntNullableFilter<"Appointment"> | number | null
    guestClientId?: IntNullableFilter<"Appointment"> | number | null
    serviceId?: IntFilter<"Appointment"> | number
    professionalId?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    guestClient?: XOR<GuestClientNullableScalarRelationFilter, GuestClientWhereInput> | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "professionalId_date_startTime">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    guestClientId?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    clientId?: IntNullableWithAggregatesFilter<"Appointment"> | number | null
    guestClientId?: IntNullableWithAggregatesFilter<"Appointment"> | number | null
    serviceId?: IntWithAggregatesFilter<"Appointment"> | number
    professionalId?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Appointment"> | $Enums.PaymentStatus
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type CustomConfigWhereInput = {
    AND?: CustomConfigWhereInput | CustomConfigWhereInput[]
    OR?: CustomConfigWhereInput[]
    NOT?: CustomConfigWhereInput | CustomConfigWhereInput[]
    id?: IntFilter<"CustomConfig"> | number
    userId?: IntFilter<"CustomConfig"> | number
    language?: StringNullableFilter<"CustomConfig"> | string | null
    theme?: StringNullableFilter<"CustomConfig"> | string | null
    preferences?: JsonNullableFilter<"CustomConfig">
    notificationsEnabled?: BoolFilter<"CustomConfig"> | boolean
    layout?: EnumLayoutTypeNullableFilter<"CustomConfig"> | $Enums.LayoutType | null
    createdAt?: DateTimeFilter<"CustomConfig"> | Date | string
    updatedAt?: DateTimeFilter<"CustomConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CustomConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    notificationsEnabled?: SortOrder
    layout?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CustomConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CustomConfigWhereInput | CustomConfigWhereInput[]
    OR?: CustomConfigWhereInput[]
    NOT?: CustomConfigWhereInput | CustomConfigWhereInput[]
    language?: StringNullableFilter<"CustomConfig"> | string | null
    theme?: StringNullableFilter<"CustomConfig"> | string | null
    preferences?: JsonNullableFilter<"CustomConfig">
    notificationsEnabled?: BoolFilter<"CustomConfig"> | boolean
    layout?: EnumLayoutTypeNullableFilter<"CustomConfig"> | $Enums.LayoutType | null
    createdAt?: DateTimeFilter<"CustomConfig"> | Date | string
    updatedAt?: DateTimeFilter<"CustomConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CustomConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    notificationsEnabled?: SortOrder
    layout?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomConfigCountOrderByAggregateInput
    _avg?: CustomConfigAvgOrderByAggregateInput
    _max?: CustomConfigMaxOrderByAggregateInput
    _min?: CustomConfigMinOrderByAggregateInput
    _sum?: CustomConfigSumOrderByAggregateInput
  }

  export type CustomConfigScalarWhereWithAggregatesInput = {
    AND?: CustomConfigScalarWhereWithAggregatesInput | CustomConfigScalarWhereWithAggregatesInput[]
    OR?: CustomConfigScalarWhereWithAggregatesInput[]
    NOT?: CustomConfigScalarWhereWithAggregatesInput | CustomConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomConfig"> | number
    userId?: IntWithAggregatesFilter<"CustomConfig"> | number
    language?: StringNullableWithAggregatesFilter<"CustomConfig"> | string | null
    theme?: StringNullableWithAggregatesFilter<"CustomConfig"> | string | null
    preferences?: JsonNullableWithAggregatesFilter<"CustomConfig">
    notificationsEnabled?: BoolWithAggregatesFilter<"CustomConfig"> | boolean
    layout?: EnumLayoutTypeNullableWithAggregatesFilter<"CustomConfig"> | $Enums.LayoutType | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomConfig"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationAttemptCreateInput = {
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
    user: UserCreateNestedOneWithoutVerificationAttemptsInput
  }

  export type VerificationAttemptUncheckedCreateInput = {
    id?: number
    userId: number
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationAttemptUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVerificationAttemptsNestedInput
  }

  export type VerificationAttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationAttemptCreateManyInput = {
    id?: number
    userId: number
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationAttemptUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationAttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
    user: UserCreateNestedOneWithoutPasswordResetsInput
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetCreateManyInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: number | null
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: number | null
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfessionalProfileCreateInput = {
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfessionalProfileInput
    specialty: SpecialtyCreateNestedOneWithoutProfessionalsInput
    services?: ServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileUncheckedCreateInput = {
    id?: number
    userId: number
    specialtyId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfessionalProfileNestedInput
    specialty?: SpecialtyUpdateOneRequiredWithoutProfessionalsNestedInput
    services?: ServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileCreateManyInput = {
    id?: number
    userId: number
    specialtyId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalProfileUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutReviewsGivenInput
    professional: UserCreateNestedOneWithoutReviewsReceivedInput
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment?: string | null
    clientId: number
    professionalId: number
    appointmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    professional?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    comment?: string | null
    clientId: number
    professionalId: number
    appointmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtyCreateInput = {
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professionals?: ProfessionalProfileCreateNestedManyWithoutSpecialtyInput
  }

  export type SpecialtyUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professionals?: ProfessionalProfileUncheckedCreateNestedManyWithoutSpecialtyInput
  }

  export type SpecialtyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalProfileUpdateManyWithoutSpecialtyNestedInput
  }

  export type SpecialtyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalProfileUncheckedUpdateManyWithoutSpecialtyNestedInput
  }

  export type SpecialtyCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialtyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    description: string
    durationMinutes: number
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalProfileCreateNestedOneWithoutServicesInput
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    durationMinutes: number
    price: number
    professionalId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalProfileUpdateOneRequiredWithoutServicesNestedInput
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    description: string
    durationMinutes: number
    price: number
    professionalId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalProfileCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    professionalId: number
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalProfileUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: number
    professionalId: number
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestClientCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutGuestClientInput
  }

  export type GuestClientUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGuestClientInput
  }

  export type GuestClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutGuestClientNestedInput
  }

  export type GuestClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutGuestClientNestedInput
  }

  export type GuestClientCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutAppointmentsAsClientInput
    guestClient?: GuestClientCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: UserCreateNestedOneWithoutAppointmentsAsProfessionalInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutAppointmentsAsClientNestedInput
    guestClient?: GuestClientUpdateOneWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomConfigCreateInput = {
    language?: string | null
    theme?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: boolean
    layout?: $Enums.LayoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomConfigInput
  }

  export type CustomConfigUncheckedCreateInput = {
    id?: number
    userId: number
    language?: string | null
    theme?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: boolean
    layout?: $Enums.LayoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomConfigUpdateInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    layout?: NullableEnumLayoutTypeFieldUpdateOperationsInput | $Enums.LayoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomConfigNestedInput
  }

  export type CustomConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    layout?: NullableEnumLayoutTypeFieldUpdateOperationsInput | $Enums.LayoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomConfigCreateManyInput = {
    id?: number
    userId: number
    language?: string | null
    theme?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: boolean
    layout?: $Enums.LayoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomConfigUpdateManyMutationInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    layout?: NullableEnumLayoutTypeFieldUpdateOperationsInput | $Enums.LayoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    layout?: NullableEnumLayoutTypeFieldUpdateOperationsInput | $Enums.LayoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfessionalProfileNullableScalarRelationFilter = {
    is?: ProfessionalProfileWhereInput | null
    isNot?: ProfessionalProfileWhereInput | null
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type VerificationAttemptListRelationFilter = {
    every?: VerificationAttemptWhereInput
    some?: VerificationAttemptWhereInput
    none?: VerificationAttemptWhereInput
  }

  export type PasswordResetListRelationFilter = {
    every?: PasswordResetWhereInput
    some?: PasswordResetWhereInput
    none?: PasswordResetWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type CustomConfigNullableScalarRelationFilter = {
    is?: CustomConfigWhereInput | null
    isNot?: CustomConfigWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type VerificationAttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VerificationAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type VerificationAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type VerificationAttemptSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type PasswordResetAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
  }

  export type PasswordResetSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    appointmentId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SpecialtyScalarRelationFilter = {
    is?: SpecialtyWhereInput
    isNot?: SpecialtyWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
    description?: SortOrder
    certificates?: SortOrder
    socialLinks?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
  }

  export type ProfessionalProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
    description?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
    description?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialtyId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    clientId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
  }

  export type ProfessionalProfileListRelationFilter = {
    every?: ProfessionalProfileWhereInput
    some?: ProfessionalProfileWhereInput
    none?: ProfessionalProfileWhereInput
  }

  export type ProfessionalProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialtyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialtyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfessionalProfileScalarRelationFilter = {
    is?: ProfessionalProfileWhereInput
    isNot?: ProfessionalProfileWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    durationMinutes?: SortOrder
    price?: SortOrder
    professionalId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ScheduleProfessionalIdDayOfWeekStartTimeCompoundUniqueInput = {
    professionalId: number
    dayOfWeek: number
    startTime: string
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type GuestClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuestClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GuestClientNullableScalarRelationFilter = {
    is?: GuestClientWhereInput | null
    isNot?: GuestClientWhereInput | null
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type AppointmentProfessionalIdDateStartTimeCompoundUniqueInput = {
    professionalId: number
    date: Date | string
    startTime: string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    guestClientId?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    guestClientId?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    guestClientId?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    guestClientId?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    guestClientId?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumLayoutTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutType | EnumLayoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLayoutTypeNullableFilter<$PrismaModel> | $Enums.LayoutType | null
  }

  export type CustomConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    theme?: SortOrder
    preferences?: SortOrder
    notificationsEnabled?: SortOrder
    layout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CustomConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    theme?: SortOrder
    notificationsEnabled?: SortOrder
    layout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    theme?: SortOrder
    notificationsEnabled?: SortOrder
    layout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomConfigSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumLayoutTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutType | EnumLayoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLayoutTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LayoutType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLayoutTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLayoutTypeNullableFilter<$PrismaModel>
  }

  export type ProfessionalProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionalProfileCreateWithoutUserInput, ProfessionalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutUserInput
    connect?: ProfessionalProfileWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ReviewCreateWithoutProfessionalInput, ReviewUncheckedCreateWithoutProfessionalInput> | ReviewCreateWithoutProfessionalInput[] | ReviewUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProfessionalInput | ReviewCreateOrConnectWithoutProfessionalInput[]
    createMany?: ReviewCreateManyProfessionalInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VerificationAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationAttemptCreateWithoutUserInput, VerificationAttemptUncheckedCreateWithoutUserInput> | VerificationAttemptCreateWithoutUserInput[] | VerificationAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationAttemptCreateOrConnectWithoutUserInput | VerificationAttemptCreateOrConnectWithoutUserInput[]
    createMany?: VerificationAttemptCreateManyUserInputEnvelope
    connect?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
  }

  export type PasswordResetCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CustomConfigCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomConfigCreateWithoutUserInput, CustomConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomConfigCreateOrConnectWithoutUserInput
    connect?: CustomConfigWhereUniqueInput
  }

  export type ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionalProfileCreateWithoutUserInput, ProfessionalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutUserInput
    connect?: ProfessionalProfileWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ReviewCreateWithoutProfessionalInput, ReviewUncheckedCreateWithoutProfessionalInput> | ReviewCreateWithoutProfessionalInput[] | ReviewUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProfessionalInput | ReviewCreateOrConnectWithoutProfessionalInput[]
    createMany?: ReviewCreateManyProfessionalInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VerificationAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationAttemptCreateWithoutUserInput, VerificationAttemptUncheckedCreateWithoutUserInput> | VerificationAttemptCreateWithoutUserInput[] | VerificationAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationAttemptCreateOrConnectWithoutUserInput | VerificationAttemptCreateOrConnectWithoutUserInput[]
    createMany?: VerificationAttemptCreateManyUserInputEnvelope
    connect?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
  }

  export type PasswordResetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CustomConfigUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomConfigCreateWithoutUserInput, CustomConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomConfigCreateOrConnectWithoutUserInput
    connect?: CustomConfigWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfessionalProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessionalProfileCreateWithoutUserInput, ProfessionalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutUserInput
    upsert?: ProfessionalProfileUpsertWithoutUserInput
    disconnect?: ProfessionalProfileWhereInput | boolean
    delete?: ProfessionalProfileWhereInput | boolean
    connect?: ProfessionalProfileWhereUniqueInput
    update?: XOR<XOR<ProfessionalProfileUpdateToOneWithWhereWithoutUserInput, ProfessionalProfileUpdateWithoutUserInput>, ProfessionalProfileUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProfessionalInput | AppointmentUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProfessionalInput | AppointmentUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProfessionalInput | AppointmentUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ReviewCreateWithoutProfessionalInput, ReviewUncheckedCreateWithoutProfessionalInput> | ReviewCreateWithoutProfessionalInput[] | ReviewUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProfessionalInput | ReviewCreateOrConnectWithoutProfessionalInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProfessionalInput | ReviewUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ReviewCreateManyProfessionalInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProfessionalInput | ReviewUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProfessionalInput | ReviewUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VerificationAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationAttemptCreateWithoutUserInput, VerificationAttemptUncheckedCreateWithoutUserInput> | VerificationAttemptCreateWithoutUserInput[] | VerificationAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationAttemptCreateOrConnectWithoutUserInput | VerificationAttemptCreateOrConnectWithoutUserInput[]
    upsert?: VerificationAttemptUpsertWithWhereUniqueWithoutUserInput | VerificationAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationAttemptCreateManyUserInputEnvelope
    set?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    disconnect?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    delete?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    connect?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    update?: VerificationAttemptUpdateWithWhereUniqueWithoutUserInput | VerificationAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationAttemptUpdateManyWithWhereWithoutUserInput | VerificationAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationAttemptScalarWhereInput | VerificationAttemptScalarWhereInput[]
  }

  export type PasswordResetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUserInput | PasswordResetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUserInput | PasswordResetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUserInput | PasswordResetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CustomConfigUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomConfigCreateWithoutUserInput, CustomConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomConfigCreateOrConnectWithoutUserInput
    upsert?: CustomConfigUpsertWithoutUserInput
    disconnect?: CustomConfigWhereInput | boolean
    delete?: CustomConfigWhereInput | boolean
    connect?: CustomConfigWhereUniqueInput
    update?: XOR<XOR<CustomConfigUpdateToOneWithWhereWithoutUserInput, CustomConfigUpdateWithoutUserInput>, CustomConfigUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessionalProfileCreateWithoutUserInput, ProfessionalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutUserInput
    upsert?: ProfessionalProfileUpsertWithoutUserInput
    disconnect?: ProfessionalProfileWhereInput | boolean
    delete?: ProfessionalProfileWhereInput | boolean
    connect?: ProfessionalProfileWhereUniqueInput
    update?: XOR<XOR<ProfessionalProfileUpdateToOneWithWhereWithoutUserInput, ProfessionalProfileUpdateWithoutUserInput>, ProfessionalProfileUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput> | AppointmentCreateWithoutProfessionalInput[] | AppointmentUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProfessionalInput | AppointmentCreateOrConnectWithoutProfessionalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProfessionalInput | AppointmentUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: AppointmentCreateManyProfessionalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProfessionalInput | AppointmentUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProfessionalInput | AppointmentUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ReviewCreateWithoutProfessionalInput, ReviewUncheckedCreateWithoutProfessionalInput> | ReviewCreateWithoutProfessionalInput[] | ReviewUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProfessionalInput | ReviewCreateOrConnectWithoutProfessionalInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProfessionalInput | ReviewUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ReviewCreateManyProfessionalInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProfessionalInput | ReviewUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProfessionalInput | ReviewUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationAttemptCreateWithoutUserInput, VerificationAttemptUncheckedCreateWithoutUserInput> | VerificationAttemptCreateWithoutUserInput[] | VerificationAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationAttemptCreateOrConnectWithoutUserInput | VerificationAttemptCreateOrConnectWithoutUserInput[]
    upsert?: VerificationAttemptUpsertWithWhereUniqueWithoutUserInput | VerificationAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationAttemptCreateManyUserInputEnvelope
    set?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    disconnect?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    delete?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    connect?: VerificationAttemptWhereUniqueInput | VerificationAttemptWhereUniqueInput[]
    update?: VerificationAttemptUpdateWithWhereUniqueWithoutUserInput | VerificationAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationAttemptUpdateManyWithWhereWithoutUserInput | VerificationAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationAttemptScalarWhereInput | VerificationAttemptScalarWhereInput[]
  }

  export type PasswordResetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUserInput | PasswordResetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUserInput | PasswordResetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUserInput | PasswordResetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CustomConfigUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomConfigCreateWithoutUserInput, CustomConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomConfigCreateOrConnectWithoutUserInput
    upsert?: CustomConfigUpsertWithoutUserInput
    disconnect?: CustomConfigWhereInput | boolean
    delete?: CustomConfigWhereInput | boolean
    connect?: CustomConfigWhereUniqueInput
    update?: XOR<XOR<CustomConfigUpdateToOneWithWhereWithoutUserInput, CustomConfigUpdateWithoutUserInput>, CustomConfigUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutVerificationAttemptsInput = {
    create?: XOR<UserCreateWithoutVerificationAttemptsInput, UserUncheckedCreateWithoutVerificationAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVerificationAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationAttemptsInput, UserUncheckedCreateWithoutVerificationAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationAttemptsInput
    upsert?: UserUpsertWithoutVerificationAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationAttemptsInput, UserUpdateWithoutVerificationAttemptsInput>, UserUncheckedUpdateWithoutVerificationAttemptsInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    upsert?: UserUpsertWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetsInput, UserUpdateWithoutPasswordResetsInput>, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutNotificationsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutNotificationsInput
    upsert?: AppointmentUpsertWithoutNotificationsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutNotificationsInput, AppointmentUpdateWithoutNotificationsInput>, AppointmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutProfessionalProfileInput = {
    create?: XOR<UserCreateWithoutProfessionalProfileInput, UserUncheckedCreateWithoutProfessionalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalProfileInput
    connect?: UserWhereUniqueInput
  }

  export type SpecialtyCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: SpecialtyCreateOrConnectWithoutProfessionalsInput
    connect?: SpecialtyWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ServiceCreateWithoutProfessionalInput, ServiceUncheckedCreateWithoutProfessionalInput> | ServiceCreateWithoutProfessionalInput[] | ServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProfessionalInput | ServiceCreateOrConnectWithoutProfessionalInput[]
    createMany?: ServiceCreateManyProfessionalInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ServiceCreateWithoutProfessionalInput, ServiceUncheckedCreateWithoutProfessionalInput> | ServiceCreateWithoutProfessionalInput[] | ServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProfessionalInput | ServiceCreateOrConnectWithoutProfessionalInput[]
    createMany?: ServiceCreateManyProfessionalInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProfessionalProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfessionalProfileInput, UserUncheckedCreateWithoutProfessionalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalProfileInput
    upsert?: UserUpsertWithoutProfessionalProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessionalProfileInput, UserUpdateWithoutProfessionalProfileInput>, UserUncheckedUpdateWithoutProfessionalProfileInput>
  }

  export type SpecialtyUpdateOneRequiredWithoutProfessionalsNestedInput = {
    create?: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: SpecialtyCreateOrConnectWithoutProfessionalsInput
    upsert?: SpecialtyUpsertWithoutProfessionalsInput
    connect?: SpecialtyWhereUniqueInput
    update?: XOR<XOR<SpecialtyUpdateToOneWithWhereWithoutProfessionalsInput, SpecialtyUpdateWithoutProfessionalsInput>, SpecialtyUncheckedUpdateWithoutProfessionalsInput>
  }

  export type ServiceUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ServiceCreateWithoutProfessionalInput, ServiceUncheckedCreateWithoutProfessionalInput> | ServiceCreateWithoutProfessionalInput[] | ServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProfessionalInput | ServiceCreateOrConnectWithoutProfessionalInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProfessionalInput | ServiceUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ServiceCreateManyProfessionalInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProfessionalInput | ServiceUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProfessionalInput | ServiceUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutProfessionalInput | ScheduleUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutProfessionalInput | ScheduleUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutProfessionalInput | ScheduleUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ServiceCreateWithoutProfessionalInput, ServiceUncheckedCreateWithoutProfessionalInput> | ServiceCreateWithoutProfessionalInput[] | ServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProfessionalInput | ServiceCreateOrConnectWithoutProfessionalInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProfessionalInput | ServiceUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ServiceCreateManyProfessionalInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProfessionalInput | ServiceUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProfessionalInput | ServiceUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutProfessionalInput | ScheduleUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutProfessionalInput | ScheduleUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutProfessionalInput | ScheduleUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutReviewInput = {
    create?: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type AppointmentUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewInput
    upsert?: AppointmentUpsertWithoutReviewInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutReviewInput, AppointmentUpdateWithoutReviewInput>, AppointmentUncheckedUpdateWithoutReviewInput>
  }

  export type ProfessionalProfileCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<ProfessionalProfileCreateWithoutSpecialtyInput, ProfessionalProfileUncheckedCreateWithoutSpecialtyInput> | ProfessionalProfileCreateWithoutSpecialtyInput[] | ProfessionalProfileUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutSpecialtyInput | ProfessionalProfileCreateOrConnectWithoutSpecialtyInput[]
    createMany?: ProfessionalProfileCreateManySpecialtyInputEnvelope
    connect?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
  }

  export type ProfessionalProfileUncheckedCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<ProfessionalProfileCreateWithoutSpecialtyInput, ProfessionalProfileUncheckedCreateWithoutSpecialtyInput> | ProfessionalProfileCreateWithoutSpecialtyInput[] | ProfessionalProfileUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutSpecialtyInput | ProfessionalProfileCreateOrConnectWithoutSpecialtyInput[]
    createMany?: ProfessionalProfileCreateManySpecialtyInputEnvelope
    connect?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
  }

  export type ProfessionalProfileUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<ProfessionalProfileCreateWithoutSpecialtyInput, ProfessionalProfileUncheckedCreateWithoutSpecialtyInput> | ProfessionalProfileCreateWithoutSpecialtyInput[] | ProfessionalProfileUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutSpecialtyInput | ProfessionalProfileCreateOrConnectWithoutSpecialtyInput[]
    upsert?: ProfessionalProfileUpsertWithWhereUniqueWithoutSpecialtyInput | ProfessionalProfileUpsertWithWhereUniqueWithoutSpecialtyInput[]
    createMany?: ProfessionalProfileCreateManySpecialtyInputEnvelope
    set?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    disconnect?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    delete?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    connect?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    update?: ProfessionalProfileUpdateWithWhereUniqueWithoutSpecialtyInput | ProfessionalProfileUpdateWithWhereUniqueWithoutSpecialtyInput[]
    updateMany?: ProfessionalProfileUpdateManyWithWhereWithoutSpecialtyInput | ProfessionalProfileUpdateManyWithWhereWithoutSpecialtyInput[]
    deleteMany?: ProfessionalProfileScalarWhereInput | ProfessionalProfileScalarWhereInput[]
  }

  export type ProfessionalProfileUncheckedUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<ProfessionalProfileCreateWithoutSpecialtyInput, ProfessionalProfileUncheckedCreateWithoutSpecialtyInput> | ProfessionalProfileCreateWithoutSpecialtyInput[] | ProfessionalProfileUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutSpecialtyInput | ProfessionalProfileCreateOrConnectWithoutSpecialtyInput[]
    upsert?: ProfessionalProfileUpsertWithWhereUniqueWithoutSpecialtyInput | ProfessionalProfileUpsertWithWhereUniqueWithoutSpecialtyInput[]
    createMany?: ProfessionalProfileCreateManySpecialtyInputEnvelope
    set?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    disconnect?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    delete?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    connect?: ProfessionalProfileWhereUniqueInput | ProfessionalProfileWhereUniqueInput[]
    update?: ProfessionalProfileUpdateWithWhereUniqueWithoutSpecialtyInput | ProfessionalProfileUpdateWithWhereUniqueWithoutSpecialtyInput[]
    updateMany?: ProfessionalProfileUpdateManyWithWhereWithoutSpecialtyInput | ProfessionalProfileUpdateManyWithWhereWithoutSpecialtyInput[]
    deleteMany?: ProfessionalProfileScalarWhereInput | ProfessionalProfileScalarWhereInput[]
  }

  export type ProfessionalProfileCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProfessionalProfileCreateWithoutServicesInput, ProfessionalProfileUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutServicesInput
    connect?: ProfessionalProfileWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessionalProfileUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProfessionalProfileCreateWithoutServicesInput, ProfessionalProfileUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutServicesInput
    upsert?: ProfessionalProfileUpsertWithoutServicesInput
    connect?: ProfessionalProfileWhereUniqueInput
    update?: XOR<XOR<ProfessionalProfileUpdateToOneWithWhereWithoutServicesInput, ProfessionalProfileUpdateWithoutServicesInput>, ProfessionalProfileUncheckedUpdateWithoutServicesInput>
  }

  export type AppointmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ProfessionalProfileCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ProfessionalProfileCreateWithoutSchedulesInput, ProfessionalProfileUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutSchedulesInput
    connect?: ProfessionalProfileWhereUniqueInput
  }

  export type ProfessionalProfileUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ProfessionalProfileCreateWithoutSchedulesInput, ProfessionalProfileUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProfessionalProfileCreateOrConnectWithoutSchedulesInput
    upsert?: ProfessionalProfileUpsertWithoutSchedulesInput
    connect?: ProfessionalProfileWhereUniqueInput
    update?: XOR<XOR<ProfessionalProfileUpdateToOneWithWhereWithoutSchedulesInput, ProfessionalProfileUpdateWithoutSchedulesInput>, ProfessionalProfileUncheckedUpdateWithoutSchedulesInput>
  }

  export type AppointmentCreateNestedManyWithoutGuestClientInput = {
    create?: XOR<AppointmentCreateWithoutGuestClientInput, AppointmentUncheckedCreateWithoutGuestClientInput> | AppointmentCreateWithoutGuestClientInput[] | AppointmentUncheckedCreateWithoutGuestClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestClientInput | AppointmentCreateOrConnectWithoutGuestClientInput[]
    createMany?: AppointmentCreateManyGuestClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutGuestClientInput = {
    create?: XOR<AppointmentCreateWithoutGuestClientInput, AppointmentUncheckedCreateWithoutGuestClientInput> | AppointmentCreateWithoutGuestClientInput[] | AppointmentUncheckedCreateWithoutGuestClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestClientInput | AppointmentCreateOrConnectWithoutGuestClientInput[]
    createMany?: AppointmentCreateManyGuestClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutGuestClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutGuestClientInput, AppointmentUncheckedCreateWithoutGuestClientInput> | AppointmentCreateWithoutGuestClientInput[] | AppointmentUncheckedCreateWithoutGuestClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestClientInput | AppointmentCreateOrConnectWithoutGuestClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutGuestClientInput | AppointmentUpsertWithWhereUniqueWithoutGuestClientInput[]
    createMany?: AppointmentCreateManyGuestClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutGuestClientInput | AppointmentUpdateWithWhereUniqueWithoutGuestClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutGuestClientInput | AppointmentUpdateManyWithWhereWithoutGuestClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutGuestClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutGuestClientInput, AppointmentUncheckedCreateWithoutGuestClientInput> | AppointmentCreateWithoutGuestClientInput[] | AppointmentUncheckedCreateWithoutGuestClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestClientInput | AppointmentCreateOrConnectWithoutGuestClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutGuestClientInput | AppointmentUpsertWithWhereUniqueWithoutGuestClientInput[]
    createMany?: AppointmentCreateManyGuestClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutGuestClientInput | AppointmentUpdateWithWhereUniqueWithoutGuestClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutGuestClientInput | AppointmentUpdateManyWithWhereWithoutGuestClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsAsClientInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsClientInput, UserUncheckedCreateWithoutAppointmentsAsClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsClientInput
    connect?: UserWhereUniqueInput
  }

  export type GuestClientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<GuestClientCreateWithoutAppointmentsInput, GuestClientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: GuestClientCreateOrConnectWithoutAppointmentsInput
    connect?: GuestClientWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsAsProfessionalInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsProfessionalInput, UserUncheckedCreateWithoutAppointmentsAsProfessionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsProfessionalInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    connect?: ReviewWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    connect?: ReviewWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneWithoutAppointmentsAsClientNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsClientInput, UserUncheckedCreateWithoutAppointmentsAsClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsClientInput
    upsert?: UserUpsertWithoutAppointmentsAsClientInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsClientInput, UserUpdateWithoutAppointmentsAsClientInput>, UserUncheckedUpdateWithoutAppointmentsAsClientInput>
  }

  export type GuestClientUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<GuestClientCreateWithoutAppointmentsInput, GuestClientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: GuestClientCreateOrConnectWithoutAppointmentsInput
    upsert?: GuestClientUpsertWithoutAppointmentsInput
    disconnect?: GuestClientWhereInput | boolean
    delete?: GuestClientWhereInput | boolean
    connect?: GuestClientWhereUniqueInput
    update?: XOR<XOR<GuestClientUpdateToOneWithWhereWithoutAppointmentsInput, GuestClientUpdateWithoutAppointmentsInput>, GuestClientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    upsert?: ServiceUpsertWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentsInput, ServiceUpdateWithoutAppointmentsInput>, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsProfessionalInput, UserUncheckedCreateWithoutAppointmentsAsProfessionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsProfessionalInput
    upsert?: UserUpsertWithoutAppointmentsAsProfessionalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsProfessionalInput, UserUpdateWithoutAppointmentsAsProfessionalInput>, UserUncheckedUpdateWithoutAppointmentsAsProfessionalInput>
  }

  export type ReviewUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    upsert?: ReviewUpsertWithoutAppointmentInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutAppointmentInput, ReviewUpdateWithoutAppointmentInput>, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type NotificationUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    upsert?: ReviewUpsertWithoutAppointmentInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutAppointmentInput, ReviewUpdateWithoutAppointmentInput>, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomConfigInput = {
    create?: XOR<UserCreateWithoutCustomConfigInput, UserUncheckedCreateWithoutCustomConfigInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomConfigInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumLayoutTypeFieldUpdateOperationsInput = {
    set?: $Enums.LayoutType | null
  }

  export type UserUpdateOneRequiredWithoutCustomConfigNestedInput = {
    create?: XOR<UserCreateWithoutCustomConfigInput, UserUncheckedCreateWithoutCustomConfigInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomConfigInput
    upsert?: UserUpsertWithoutCustomConfigInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomConfigInput, UserUpdateWithoutCustomConfigInput>, UserUncheckedUpdateWithoutCustomConfigInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumLayoutTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutType | EnumLayoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLayoutTypeNullableFilter<$PrismaModel> | $Enums.LayoutType | null
  }

  export type NestedEnumLayoutTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LayoutType | EnumLayoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LayoutType[] | ListEnumLayoutTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLayoutTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LayoutType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLayoutTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLayoutTypeNullableFilter<$PrismaModel>
  }

  export type ProfessionalProfileCreateWithoutUserInput = {
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    specialty: SpecialtyCreateNestedOneWithoutProfessionalsInput
    services?: ServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileUncheckedCreateWithoutUserInput = {
    id?: number
    specialtyId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileCreateOrConnectWithoutUserInput = {
    where: ProfessionalProfileWhereUniqueInput
    create: XOR<ProfessionalProfileCreateWithoutUserInput, ProfessionalProfileUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateWithoutClientInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guestClient?: GuestClientCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: UserCreateNestedOneWithoutAppointmentsAsProfessionalInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: number
    guestClientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentCreateManyClientInputEnvelope = {
    data: AppointmentCreateManyClientInput | AppointmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutProfessionalInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutAppointmentsAsClientInput
    guestClient?: GuestClientCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutProfessionalInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    serviceId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutProfessionalInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput>
  }

  export type AppointmentCreateManyProfessionalInputEnvelope = {
    data: AppointmentCreateManyProfessionalInput | AppointmentCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutClientInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: UserCreateNestedOneWithoutReviewsReceivedInput
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutClientInput = {
    id?: number
    rating: number
    comment?: string | null
    professionalId: number
    appointmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutClientInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewCreateManyClientInputEnvelope = {
    data: ReviewCreateManyClientInput | ReviewCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProfessionalInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutReviewsGivenInput
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutProfessionalInput = {
    id?: number
    rating: number
    comment?: string | null
    clientId: number
    appointmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProfessionalInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProfessionalInput, ReviewUncheckedCreateWithoutProfessionalInput>
  }

  export type ReviewCreateManyProfessionalInputEnvelope = {
    data: ReviewCreateManyProfessionalInput | ReviewCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type VerificationAttemptCreateWithoutUserInput = {
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationAttemptUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type VerificationAttemptCreateOrConnectWithoutUserInput = {
    where: VerificationAttemptWhereUniqueInput
    create: XOR<VerificationAttemptCreateWithoutUserInput, VerificationAttemptUncheckedCreateWithoutUserInput>
  }

  export type VerificationAttemptCreateManyUserInputEnvelope = {
    data: VerificationAttemptCreateManyUserInput | VerificationAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetCreateOrConnectWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetCreateManyUserInputEnvelope = {
    data: PasswordResetCreateManyUserInput | PasswordResetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: number | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomConfigCreateWithoutUserInput = {
    language?: string | null
    theme?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: boolean
    layout?: $Enums.LayoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomConfigUncheckedCreateWithoutUserInput = {
    id?: number
    language?: string | null
    theme?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: boolean
    layout?: $Enums.LayoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomConfigCreateOrConnectWithoutUserInput = {
    where: CustomConfigWhereUniqueInput
    create: XOR<CustomConfigCreateWithoutUserInput, CustomConfigUncheckedCreateWithoutUserInput>
  }

  export type ProfessionalProfileUpsertWithoutUserInput = {
    update: XOR<ProfessionalProfileUpdateWithoutUserInput, ProfessionalProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessionalProfileCreateWithoutUserInput, ProfessionalProfileUncheckedCreateWithoutUserInput>
    where?: ProfessionalProfileWhereInput
  }

  export type ProfessionalProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfessionalProfileWhereInput
    data: XOR<ProfessionalProfileUpdateWithoutUserInput, ProfessionalProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalProfileUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialty?: SpecialtyUpdateOneRequiredWithoutProfessionalsNestedInput
    services?: ServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutClientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    clientId?: IntNullableFilter<"Appointment"> | number | null
    guestClientId?: IntNullableFilter<"Appointment"> | number | null
    serviceId?: IntFilter<"Appointment"> | number
    professionalId?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutProfessionalInput, AppointmentUncheckedUpdateWithoutProfessionalInput>
    create: XOR<AppointmentCreateWithoutProfessionalInput, AppointmentUncheckedCreateWithoutProfessionalInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutProfessionalInput, AppointmentUncheckedUpdateWithoutProfessionalInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutProfessionalInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
  }

  export type ReviewUpdateManyWithWhereWithoutClientInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutClientInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    clientId?: IntFilter<"Review"> | number
    professionalId?: IntFilter<"Review"> | number
    appointmentId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProfessionalInput, ReviewUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ReviewCreateWithoutProfessionalInput, ReviewUncheckedCreateWithoutProfessionalInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProfessionalInput, ReviewUncheckedUpdateWithoutProfessionalInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProfessionalInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type VerificationAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationAttemptWhereUniqueInput
    update: XOR<VerificationAttemptUpdateWithoutUserInput, VerificationAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationAttemptCreateWithoutUserInput, VerificationAttemptUncheckedCreateWithoutUserInput>
  }

  export type VerificationAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationAttemptWhereUniqueInput
    data: XOR<VerificationAttemptUpdateWithoutUserInput, VerificationAttemptUncheckedUpdateWithoutUserInput>
  }

  export type VerificationAttemptUpdateManyWithWhereWithoutUserInput = {
    where: VerificationAttemptScalarWhereInput
    data: XOR<VerificationAttemptUpdateManyMutationInput, VerificationAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationAttemptScalarWhereInput = {
    AND?: VerificationAttemptScalarWhereInput | VerificationAttemptScalarWhereInput[]
    OR?: VerificationAttemptScalarWhereInput[]
    NOT?: VerificationAttemptScalarWhereInput | VerificationAttemptScalarWhereInput[]
    id?: IntFilter<"VerificationAttempt"> | number
    userId?: IntFilter<"VerificationAttempt"> | number
    code?: StringFilter<"VerificationAttempt"> | string
    createdAt?: DateTimeFilter<"VerificationAttempt"> | Date | string
    expiresAt?: DateTimeFilter<"VerificationAttempt"> | Date | string
    isUsed?: BoolFilter<"VerificationAttempt"> | boolean
  }

  export type PasswordResetUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    update: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    data: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetScalarWhereInput
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetScalarWhereInput = {
    AND?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    OR?: PasswordResetScalarWhereInput[]
    NOT?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    id?: IntFilter<"PasswordReset"> | number
    userId?: IntFilter<"PasswordReset"> | number
    token?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    isUsed?: BoolFilter<"PasswordReset"> | boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    appointmentId?: IntNullableFilter<"Notification"> | number | null
  }

  export type CustomConfigUpsertWithoutUserInput = {
    update: XOR<CustomConfigUpdateWithoutUserInput, CustomConfigUncheckedUpdateWithoutUserInput>
    create: XOR<CustomConfigCreateWithoutUserInput, CustomConfigUncheckedCreateWithoutUserInput>
    where?: CustomConfigWhereInput
  }

  export type CustomConfigUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomConfigWhereInput
    data: XOR<CustomConfigUpdateWithoutUserInput, CustomConfigUncheckedUpdateWithoutUserInput>
  }

  export type CustomConfigUpdateWithoutUserInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    layout?: NullableEnumLayoutTypeFieldUpdateOperationsInput | $Enums.LayoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomConfigUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    layout?: NullableEnumLayoutTypeFieldUpdateOperationsInput | $Enums.LayoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutVerificationAttemptsInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationAttemptsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationAttemptsInput, UserUncheckedCreateWithoutVerificationAttemptsInput>
  }

  export type UserUpsertWithoutVerificationAttemptsInput = {
    update: XOR<UserUpdateWithoutVerificationAttemptsInput, UserUncheckedUpdateWithoutVerificationAttemptsInput>
    create: XOR<UserCreateWithoutVerificationAttemptsInput, UserUncheckedCreateWithoutVerificationAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationAttemptsInput, UserUncheckedUpdateWithoutVerificationAttemptsInput>
  }

  export type UserUpdateWithoutVerificationAttemptsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetsInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UserUpsertWithoutPasswordResetsInput = {
    update: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserUpdateWithoutPasswordResetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type AppointmentCreateWithoutNotificationsInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutAppointmentsAsClientInput
    guestClient?: GuestClientCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: UserCreateNestedOneWithoutAppointmentsAsProfessionalInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutNotificationsInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutNotificationsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithoutNotificationsInput = {
    update: XOR<AppointmentUpdateWithoutNotificationsInput, AppointmentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutNotificationsInput, AppointmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentUpdateWithoutNotificationsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutAppointmentsAsClientNestedInput
    guestClient?: GuestClientUpdateOneWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type UserCreateWithoutProfessionalProfileInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessionalProfileInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessionalProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionalProfileInput, UserUncheckedCreateWithoutProfessionalProfileInput>
  }

  export type SpecialtyCreateWithoutProfessionalsInput = {
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialtyUncheckedCreateWithoutProfessionalsInput = {
    id?: number
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialtyCreateOrConnectWithoutProfessionalsInput = {
    where: SpecialtyWhereUniqueInput
    create: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput>
  }

  export type ServiceCreateWithoutProfessionalInput = {
    name: string
    description: string
    durationMinutes: number
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProfessionalInput = {
    id?: number
    name: string
    description: string
    durationMinutes: number
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProfessionalInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProfessionalInput, ServiceUncheckedCreateWithoutProfessionalInput>
  }

  export type ServiceCreateManyProfessionalInputEnvelope = {
    data: ServiceCreateManyProfessionalInput | ServiceCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutProfessionalInput = {
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUncheckedCreateWithoutProfessionalInput = {
    id?: number
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutProfessionalInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduleCreateManyProfessionalInputEnvelope = {
    data: ScheduleCreateManyProfessionalInput | ScheduleCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfessionalProfileInput = {
    update: XOR<UserUpdateWithoutProfessionalProfileInput, UserUncheckedUpdateWithoutProfessionalProfileInput>
    create: XOR<UserCreateWithoutProfessionalProfileInput, UserUncheckedCreateWithoutProfessionalProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessionalProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessionalProfileInput, UserUncheckedUpdateWithoutProfessionalProfileInput>
  }

  export type UserUpdateWithoutProfessionalProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionalProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SpecialtyUpsertWithoutProfessionalsInput = {
    update: XOR<SpecialtyUpdateWithoutProfessionalsInput, SpecialtyUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput>
    where?: SpecialtyWhereInput
  }

  export type SpecialtyUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: SpecialtyWhereInput
    data: XOR<SpecialtyUpdateWithoutProfessionalsInput, SpecialtyUncheckedUpdateWithoutProfessionalsInput>
  }

  export type SpecialtyUpdateWithoutProfessionalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtyUncheckedUpdateWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutProfessionalInput, ServiceUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ServiceCreateWithoutProfessionalInput, ServiceUncheckedCreateWithoutProfessionalInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutProfessionalInput, ServiceUncheckedUpdateWithoutProfessionalInput>
  }

  export type ServiceUpdateManyWithWhereWithoutProfessionalInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    durationMinutes?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    professionalId?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutProfessionalInput, ScheduleUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutProfessionalInput, ScheduleUncheckedUpdateWithoutProfessionalInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutProfessionalInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    professionalId?: IntFilter<"Schedule"> | number
    dayOfWeek?: IntFilter<"Schedule"> | number
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    isAvailable?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type UserCreateWithoutReviewsGivenInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type AppointmentCreateWithoutReviewInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutAppointmentsAsClientInput
    guestClient?: GuestClientCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: UserCreateNestedOneWithoutAppointmentsAsProfessionalInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutReviewInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutReviewInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithoutReviewInput = {
    update: XOR<AppointmentUpdateWithoutReviewInput, AppointmentUncheckedUpdateWithoutReviewInput>
    create: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutReviewInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutReviewInput, AppointmentUncheckedUpdateWithoutReviewInput>
  }

  export type AppointmentUpdateWithoutReviewInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutAppointmentsAsClientNestedInput
    guestClient?: GuestClientUpdateOneWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type ProfessionalProfileCreateWithoutSpecialtyInput = {
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfessionalProfileInput
    services?: ServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileUncheckedCreateWithoutSpecialtyInput = {
    id?: number
    userId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileCreateOrConnectWithoutSpecialtyInput = {
    where: ProfessionalProfileWhereUniqueInput
    create: XOR<ProfessionalProfileCreateWithoutSpecialtyInput, ProfessionalProfileUncheckedCreateWithoutSpecialtyInput>
  }

  export type ProfessionalProfileCreateManySpecialtyInputEnvelope = {
    data: ProfessionalProfileCreateManySpecialtyInput | ProfessionalProfileCreateManySpecialtyInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalProfileUpsertWithWhereUniqueWithoutSpecialtyInput = {
    where: ProfessionalProfileWhereUniqueInput
    update: XOR<ProfessionalProfileUpdateWithoutSpecialtyInput, ProfessionalProfileUncheckedUpdateWithoutSpecialtyInput>
    create: XOR<ProfessionalProfileCreateWithoutSpecialtyInput, ProfessionalProfileUncheckedCreateWithoutSpecialtyInput>
  }

  export type ProfessionalProfileUpdateWithWhereUniqueWithoutSpecialtyInput = {
    where: ProfessionalProfileWhereUniqueInput
    data: XOR<ProfessionalProfileUpdateWithoutSpecialtyInput, ProfessionalProfileUncheckedUpdateWithoutSpecialtyInput>
  }

  export type ProfessionalProfileUpdateManyWithWhereWithoutSpecialtyInput = {
    where: ProfessionalProfileScalarWhereInput
    data: XOR<ProfessionalProfileUpdateManyMutationInput, ProfessionalProfileUncheckedUpdateManyWithoutSpecialtyInput>
  }

  export type ProfessionalProfileScalarWhereInput = {
    AND?: ProfessionalProfileScalarWhereInput | ProfessionalProfileScalarWhereInput[]
    OR?: ProfessionalProfileScalarWhereInput[]
    NOT?: ProfessionalProfileScalarWhereInput | ProfessionalProfileScalarWhereInput[]
    id?: IntFilter<"ProfessionalProfile"> | number
    userId?: IntFilter<"ProfessionalProfile"> | number
    specialtyId?: IntFilter<"ProfessionalProfile"> | number
    description?: StringFilter<"ProfessionalProfile"> | string
    certificates?: JsonFilter<"ProfessionalProfile">
    socialLinks?: JsonNullableFilter<"ProfessionalProfile">
    isVerified?: BoolFilter<"ProfessionalProfile"> | boolean
    createdAt?: DateTimeFilter<"ProfessionalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalProfile"> | Date | string
  }

  export type ProfessionalProfileCreateWithoutServicesInput = {
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfessionalProfileInput
    specialty: SpecialtyCreateNestedOneWithoutProfessionalsInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileUncheckedCreateWithoutServicesInput = {
    id?: number
    userId: number
    specialtyId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileCreateOrConnectWithoutServicesInput = {
    where: ProfessionalProfileWhereUniqueInput
    create: XOR<ProfessionalProfileCreateWithoutServicesInput, ProfessionalProfileUncheckedCreateWithoutServicesInput>
  }

  export type AppointmentCreateWithoutServiceInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutAppointmentsAsClientInput
    guestClient?: GuestClientCreateNestedOneWithoutAppointmentsInput
    professional: UserCreateNestedOneWithoutAppointmentsAsProfessionalInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServiceInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentCreateManyServiceInputEnvelope = {
    data: AppointmentCreateManyServiceInput | AppointmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalProfileUpsertWithoutServicesInput = {
    update: XOR<ProfessionalProfileUpdateWithoutServicesInput, ProfessionalProfileUncheckedUpdateWithoutServicesInput>
    create: XOR<ProfessionalProfileCreateWithoutServicesInput, ProfessionalProfileUncheckedCreateWithoutServicesInput>
    where?: ProfessionalProfileWhereInput
  }

  export type ProfessionalProfileUpdateToOneWithWhereWithoutServicesInput = {
    where?: ProfessionalProfileWhereInput
    data: XOR<ProfessionalProfileUpdateWithoutServicesInput, ProfessionalProfileUncheckedUpdateWithoutServicesInput>
  }

  export type ProfessionalProfileUpdateWithoutServicesInput = {
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfessionalProfileNestedInput
    specialty?: SpecialtyUpdateOneRequiredWithoutProfessionalsNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProfessionalProfileCreateWithoutSchedulesInput = {
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfessionalProfileInput
    specialty: SpecialtyCreateNestedOneWithoutProfessionalsInput
    services?: ServiceCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileUncheckedCreateWithoutSchedulesInput = {
    id?: number
    userId: number
    specialtyId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalProfileCreateOrConnectWithoutSchedulesInput = {
    where: ProfessionalProfileWhereUniqueInput
    create: XOR<ProfessionalProfileCreateWithoutSchedulesInput, ProfessionalProfileUncheckedCreateWithoutSchedulesInput>
  }

  export type ProfessionalProfileUpsertWithoutSchedulesInput = {
    update: XOR<ProfessionalProfileUpdateWithoutSchedulesInput, ProfessionalProfileUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ProfessionalProfileCreateWithoutSchedulesInput, ProfessionalProfileUncheckedCreateWithoutSchedulesInput>
    where?: ProfessionalProfileWhereInput
  }

  export type ProfessionalProfileUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ProfessionalProfileWhereInput
    data: XOR<ProfessionalProfileUpdateWithoutSchedulesInput, ProfessionalProfileUncheckedUpdateWithoutSchedulesInput>
  }

  export type ProfessionalProfileUpdateWithoutSchedulesInput = {
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfessionalProfileNestedInput
    specialty?: SpecialtyUpdateOneRequiredWithoutProfessionalsNestedInput
    services?: ServiceUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type AppointmentCreateWithoutGuestClientInput = {
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: UserCreateNestedOneWithoutAppointmentsAsClientInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: UserCreateNestedOneWithoutAppointmentsAsProfessionalInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutGuestClientInput = {
    id?: number
    clientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutGuestClientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutGuestClientInput, AppointmentUncheckedCreateWithoutGuestClientInput>
  }

  export type AppointmentCreateManyGuestClientInputEnvelope = {
    data: AppointmentCreateManyGuestClientInput | AppointmentCreateManyGuestClientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutGuestClientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutGuestClientInput, AppointmentUncheckedUpdateWithoutGuestClientInput>
    create: XOR<AppointmentCreateWithoutGuestClientInput, AppointmentUncheckedCreateWithoutGuestClientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutGuestClientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutGuestClientInput, AppointmentUncheckedUpdateWithoutGuestClientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutGuestClientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutGuestClientInput>
  }

  export type UserCreateWithoutAppointmentsAsClientInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsClientInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsClientInput, UserUncheckedCreateWithoutAppointmentsAsClientInput>
  }

  export type GuestClientCreateWithoutAppointmentsInput = {
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestClientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestClientCreateOrConnectWithoutAppointmentsInput = {
    where: GuestClientWhereUniqueInput
    create: XOR<GuestClientCreateWithoutAppointmentsInput, GuestClientUncheckedCreateWithoutAppointmentsInput>
  }

  export type ServiceCreateWithoutAppointmentsInput = {
    name: string
    description: string
    durationMinutes: number
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalProfileCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    description: string
    durationMinutes: number
    price: number
    professionalId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutAppointmentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserCreateWithoutAppointmentsAsProfessionalInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsProfessionalInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    customConfig?: CustomConfigUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsProfessionalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsProfessionalInput, UserUncheckedCreateWithoutAppointmentsAsProfessionalInput>
  }

  export type ReviewCreateWithoutAppointmentInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutReviewsGivenInput
    professional: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutAppointmentInput = {
    id?: number
    rating: number
    comment?: string | null
    clientId: number
    professionalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAppointmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationCreateWithoutAppointmentInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutAppointmentInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationCreateManyAppointmentInputEnvelope = {
    data: NotificationCreateManyAppointmentInput | NotificationCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAppointmentsAsClientInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsClientInput, UserUncheckedUpdateWithoutAppointmentsAsClientInput>
    create: XOR<UserCreateWithoutAppointmentsAsClientInput, UserUncheckedCreateWithoutAppointmentsAsClientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsClientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsClientInput, UserUncheckedUpdateWithoutAppointmentsAsClientInput>
  }

  export type UserUpdateWithoutAppointmentsAsClientInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GuestClientUpsertWithoutAppointmentsInput = {
    update: XOR<GuestClientUpdateWithoutAppointmentsInput, GuestClientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<GuestClientCreateWithoutAppointmentsInput, GuestClientUncheckedCreateWithoutAppointmentsInput>
    where?: GuestClientWhereInput
  }

  export type GuestClientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: GuestClientWhereInput
    data: XOR<GuestClientUpdateWithoutAppointmentsInput, GuestClientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type GuestClientUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestClientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutAppointmentsInput = {
    update: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalProfileUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAppointmentsAsProfessionalInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsProfessionalInput, UserUncheckedUpdateWithoutAppointmentsAsProfessionalInput>
    create: XOR<UserCreateWithoutAppointmentsAsProfessionalInput, UserUncheckedCreateWithoutAppointmentsAsProfessionalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsProfessionalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsProfessionalInput, UserUncheckedUpdateWithoutAppointmentsAsProfessionalInput>
  }

  export type UserUpdateWithoutAppointmentsAsProfessionalInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    customConfig?: CustomConfigUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ReviewUpsertWithoutAppointmentInput = {
    update: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUpdateWithoutAppointmentInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    professional?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAppointmentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type UserCreateWithoutCustomConfigInput = {
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomConfigInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    password: string
    verificationCode?: string | null
    isVerified?: boolean
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalProfile?: ProfessionalProfileUncheckedCreateNestedOneWithoutUserInput
    appointmentsAsClient?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    appointmentsAsProfessional?: AppointmentUncheckedCreateNestedManyWithoutProfessionalInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutClientInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutProfessionalInput
    verificationAttempts?: VerificationAttemptUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomConfigInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomConfigInput, UserUncheckedCreateWithoutCustomConfigInput>
  }

  export type UserUpsertWithoutCustomConfigInput = {
    update: XOR<UserUpdateWithoutCustomConfigInput, UserUncheckedUpdateWithoutCustomConfigInput>
    create: XOR<UserCreateWithoutCustomConfigInput, UserUncheckedCreateWithoutCustomConfigInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomConfigInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomConfigInput, UserUncheckedUpdateWithoutCustomConfigInput>
  }

  export type UserUpdateWithoutCustomConfigInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalProfile?: ProfessionalProfileUncheckedUpdateOneWithoutUserNestedInput
    appointmentsAsClient?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    appointmentsAsProfessional?: AppointmentUncheckedUpdateManyWithoutProfessionalNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutProfessionalNestedInput
    verificationAttempts?: VerificationAttemptUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentCreateManyClientInput = {
    id?: number
    guestClientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyProfessionalInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    serviceId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyClientInput = {
    id?: number
    rating: number
    comment?: string | null
    professionalId: number
    appointmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyProfessionalInput = {
    id?: number
    rating: number
    comment?: string | null
    clientId: number
    appointmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationAttemptCreateManyUserInput = {
    id?: number
    code: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetCreateManyUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    isUsed?: boolean
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    appointmentId?: number | null
  }

  export type AppointmentUpdateWithoutClientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestClient?: GuestClientUpdateOneWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutProfessionalInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutAppointmentsAsClientNestedInput
    guestClient?: GuestClientUpdateOneWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutClientInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    professionalId?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    professionalId?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutProfessionalInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    appointmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationAttemptUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationAttemptUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateManyProfessionalInput = {
    id?: number
    name: string
    description: string
    durationMinutes: number
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyProfessionalInput = {
    id?: number
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutProfessionalInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutProfessionalInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalProfileCreateManySpecialtyInput = {
    id?: number
    userId: number
    description: string
    certificates: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalProfileUpdateWithoutSpecialtyInput = {
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfessionalProfileNestedInput
    services?: ServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileUncheckedUpdateWithoutSpecialtyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalProfileUncheckedUpdateManyWithoutSpecialtyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    certificates?: JsonNullValueInput | InputJsonValue
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyServiceInput = {
    id?: number
    clientId?: number | null
    guestClientId?: number | null
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutServiceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutAppointmentsAsClientNestedInput
    guestClient?: GuestClientUpdateOneWithoutAppointmentsNestedInput
    professional?: UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    guestClientId?: NullableIntFieldUpdateOperationsInput | number | null
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyGuestClientInput = {
    id?: number
    clientId?: number | null
    serviceId: number
    professionalId: number
    date: Date | string
    startTime: string
    status?: $Enums.AppointmentStatus
    paymentStatus?: $Enums.PaymentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutGuestClientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneWithoutAppointmentsAsClientNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: UserUpdateOneRequiredWithoutAppointmentsAsProfessionalNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutGuestClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutGuestClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyAppointmentInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutAppointmentInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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