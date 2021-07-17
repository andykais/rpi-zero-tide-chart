import * as spi from 'spi-device'
import * as fs from 'fs'

async function exists(filepath: string) {
  try {
    await fs.promises.stat(filepath, fs.constants.F_OK)
  } catch (e) {
    if (e.code !== 'ENOENT') throw e
  }
}

class EPDConfig {
  // Pin definition
  RST_PIN = 17
  DC_PIN = 25
  CS_PIN = 8
  BUSY_PIN = 24
}

class EPD {
  constructor() {}
}

console.log('hello')

;(async () => {
  
})()
