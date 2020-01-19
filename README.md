# earnings

> Project description

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

npm run start
npm run build

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## API

|        GET        |        POST        |           PUT            |       DELETE      |
| ------------------|:------------------:|:------------------------:| -----------------:|
| READ              | CREATE             | UPDATE                   | DELETE            |
| /earnings/:ticker | /earnings/add      | /earnings/update/:ticker | /earnings/:ticker |
| List earning      | Create new earning | Update earning           | Remove earning    |
