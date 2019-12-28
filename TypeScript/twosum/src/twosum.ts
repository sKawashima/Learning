const twosum = (numbers:number[], target:number) => {
  const numbersObject:{[key:string]: boolean} = {}

  for (let i = 0;i < numbers.length;i++) {
    if (numbersObject[`${target - numbers[i]}`]) {
      return `${numbers[i]}, ${target - numbers[i]}`
    } else {
      numbersObject[`${numbers[i]}`] = true
    }
  }

  return 'not found'
}

export default twosum
