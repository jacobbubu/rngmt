/**
 */
function exists(x: any) {
  return x !== null && x !== undefined
}

export class RNG {
  private _index = 0
  private _state: number[] = new Array(624)

  constructor(private readonly _seed = (Math.random() * 0xffffffff) | 0) {
    this._state[0] = _seed

    const MT = this._state
    for (let i = 1; i < 624; i++) {
      MT[i] = MT[i - 1] ^ (MT[i - 1] >>> 30)
      MT[i] = 0x6c078965 * MT[i] + i // 1812433253
      MT[i] = MT[i] & ((MT[i] << 32) - 1)
    }
  }

  /**
   * Generate an array of 624 untempered numbers
   * @returns: void
   */
  private generateNumbers() {
    let y
    const MT = this._state
    for (let i = 0; i < 624; i++) {
      // Bit 31 (32nd bit) of MT[i]
      y = MT[i] & 0x80000000
      // Bits 0-30 (first 31 bits) of MT[...]
      y = y + (MT[(i + 1) % 624] & 0x7fffffff)
      // The new randomness
      MT[i] = MT[(i + 397) % 624] ^ (y >>> 1)
      // In case y is odd
      if (y % 2 !== 0) {
        MT[i] = MT[i] ^ 0x9908b0df // 2567483615
      }
    }
  }

  /**
   * Returns a tempered pseudorandom number [0,1]
   *
   * @remarks
   * Based on the index-th value, calling {@link #generateNumbers()} every 624 numbers
   *
   * @returns The pseudorandom integer between 0 and 1
   */
  uniform() {
    if (this._index === 0) this.generateNumbers()

    let y = this._state[this._index]

    y = y ^ (y >>> 11)
    y = y ^ ((y << 7) & 0x9d2c5680) // 2636928640
    y = y ^ ((y << 15) & 0xefc60000) // 4022730752
    y = y ^ (y >>> 18)

    this._index = (this._index + 1) % 624

    return (y >>> 0) * (1.0 / 4294967296.0)
  }

  /**
   * Returns a tempered pseudorandom number [0,1]
   *
   * @remarks
   * Same as {@link #uniform()}, just to be
   * compatible with the Math.random() style API
   *
   * @returns The pseudorandom integer between 0 and 1
   */
  random() {
    return this.uniform()
  }

  /**
   * Returns a random integer in range [min,max]
   * @param: min
   * @param: max
   * @returns The random integer between `min` and `max`
   */
  range(min: number | null, max?: number) {
    if (!exists(min)) {
      return this.uniform()
    } else if (!exists(max)) {
      max = min!
      min = 0
    }

    return min! + Math.floor(this.uniform() * (max! - min!))
  }
}
