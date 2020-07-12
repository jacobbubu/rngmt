import { RNG } from '../src/'
import Random = require('rng')

describe('basic', () => {
  it('random', () => {
    for (let i = 0; i < 100; i++) {
      const seed = Math.floor(Math.random() * 100)
      const rng = new RNG(seed)
      const mt = new Random.MT(seed)
      for (let j = 0; j < 100; j++) {
        expect(rng.random()).toBe(mt.random())
      }
    }
  })

  it('range1', () => {
    for (let i = 0; i < 100; i++) {
      const seed = Math.floor(Math.random() * 100)
      const rng = new RNG(seed)
      const mt = new Random.MT(seed)
      for (let j = 0; j < 100; j++) {
        expect(rng.range(0, 100)).toBe(mt.range(0, 100))
      }
    }
  })

  it('range2', () => {
    for (let i = 0; i < 100; i++) {
      const seed = Math.floor(Math.random() * 100)
      const rng = new RNG(seed)
      const mt = new Random.MT(seed)
      for (let j = 0; j < 100; j++) {
        expect(rng.range(0)).toBe(mt.range(0))
      }
    }
  })

  it('range3', () => {
    for (let i = 0; i < 100; i++) {
      const seed = Math.floor(Math.random() * 100)
      const rng = new RNG(seed)
      const mt = new Random.MT(seed)
      for (let j = 0; j < 100; j++) {
        expect(rng.range(null, 100)).toBe(mt.range(null, 100))
      }
    }
  })
})
