import { expect, it } from 'vitest'
import { shuffleArray } from '../../helpers/shuffleArray'

it('shuffleArray sort random', () => {
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const shuffledArray = shuffleArray([...originalArray])

  expect(shuffledArray.length).toBe(originalArray.length)

  for (const element of originalArray) {
    expect(shuffledArray).toContain(element)
  }

  expect(shuffledArray).not.toEqual(originalArray)
})
