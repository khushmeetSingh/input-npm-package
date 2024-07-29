# react-input-formatter

[![npm version](https://badge.fury.io/js/react-input-formatter.svg)](https://badge.fury.io/js/react-input-formatter)
[![Build Status](https://travis-ci.com/yourusername/react-input-formatter.svg?branch=main)](https://travis-ci.com/yourusername/react-input-formatter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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