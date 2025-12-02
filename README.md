# react-input-formatter

[![npm version](https://badge.fury.io/js/react-input-formatter.svg)](https://badge.fury.io/js/react-input-formatter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⚠️ Important: Client Component Requirement

`react-input-formatter` uses browser-only DOM APIs such as `selectionStart` and
`setSelectionRange` to apply live formatting and caret positioning. These APIs
do **not** exist during server-side rendering.

If you are using **Next.js (App Router)**, you **must** use this component inside
a **Client Component**.

Add `"use client"` at the top of the file where you use the component:

```tsx
"use client";

import FormattedInput from "react-input-formatter";

export default function MyForm() {
  return <FormattedInput {...props} />;
}
```

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Contributing](#contributing)
- [License](#license)

## About

`react-input-formatter` is a lightweight and flexible React component that formats the output of input fields according to a provided format template. It ensures consistent and user-friendly input formatting for various types of data such as phone numbers, credit card numbers, dates, and more.

## Installation

To install the package, use the following command:

```bash
npm install react-input-formatter
```
> ### OR

```bash
yarn add react-input-formatter
```

## Usage

```
import {FormattedInput} from "react-formatted-input";

const ComponentName = ()=>{
  return <>
  <FormattedInput name="postalCode" id="postalCode-id" placeholderText="" formatTemplate="###-###" defaultValue=""/>
  </>
}

export default ComponentName;
```

This code will allow the inputs of the following format: A1B2C3 and will make it A1B-2C3.

## Props

- `formatTemplate`: This is the masked version of the input that we want the user to input.
    - `#` can be used to mask a character input. This includes all the alphanumeric characters.
    - `9` can be used to mask a character input containing a number.
    - `@` can be used to mask a character input of special character.
    #### Examples:
    `###-####` will allow an input of A1B-2C3D
    
    `(999)999-999` will allow an input of (123)456-7890

## Contributing
Contributions are welcome! Please read the contributing guidelines first.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/khushmeetSingh/input-npm-package/blob/master/LICENCE) file for details.

