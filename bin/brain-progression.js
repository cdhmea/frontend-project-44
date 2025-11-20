#!/usr/bin/env node
import { generateProgression, description } from '../src/games/prog.js'
import startGame from '../src/index.js'

startGame(generateProgression, description)
// test