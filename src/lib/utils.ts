export function splitArray(arr: any[]): any[][] {
  const result: any[][] = []
  const pattern = [3, 4]
  let index = 0
  let patternIndex = 0

  while (index < arr.length) {
    const chunkSize = pattern[patternIndex % pattern.length]
    result.push(arr.slice(index, index + chunkSize))
    index += chunkSize
    patternIndex++
  }

  return result
}
