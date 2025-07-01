#!/usr/bin/env node
import { checkEven, description } from '../src/games/even.js'
import startGame from '../src/index.js'

startGame(checkEven, description)
