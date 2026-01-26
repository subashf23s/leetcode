export const twoSum = (nums: number[], target: number): [number, number] => {
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    const diff = target - (nums[firstIndex] as number);
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < nums.length;
      secondIndex++
    ) {
      if (nums[secondIndex] === diff) return [firstIndex, secondIndex];
    }
  }
  return [0, 1];
};
