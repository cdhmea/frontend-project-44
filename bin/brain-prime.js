#!/usr/bin/env node
import { isPrime, description } from '../src/games/prime.js'
import startGame from '../src/index.js'

startGame(isPrime, description)
