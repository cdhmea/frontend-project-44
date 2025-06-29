#!/usr/bin/env node

import provideName from '../src/cli.js'
import checkEven from '../src/even.js'

const name = provideName()
checkEven(name)
