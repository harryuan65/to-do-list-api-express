# To-do List Server - Express

This is a simple to-do list api server using Express & Typescript.

[To do lists - Main Repo](https://github.com/harryuan65/To-do-Lists)

## Environment

| env        | version  |
| ---------- | -------- |
| node       | v16.15.1 |
| yarn       | 1.22.19  |
| express    | 4.18.2   |
| typescript | 4.9.4    |

## Development

```bash
yarn install
yarn dev
```

## Jest

Install with global type defs (without the need for bundlers).

```bash
yarn add --dev jest typescript ts-jest @types/jest supertest @types/supertest
yarn ts-jest config:init
yarn test
# ts-jest:
#   用於 Jest preprocessor 的 TypeScript preprocessor
#   支援 Jest 的 source map
#   可讓你使用 Jest 來測試用 TypeScript 寫的專案
#   支援 TS 的所有功能，包括型別檢查
```

[src](https://github.com/kulshekhar/ts-jest)

## Custom root path

[Ref](https://www.tpisoftware.com/tpu/articleDetails/2780)

## Setup

[Setup Express with Typescript](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
