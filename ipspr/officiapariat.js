function isRepeatRef(field, array) {
  const seenValues = new Set();

  for (const item of array) {
    if (item.hasOwnProperty(field)) {
      const value = item[field];
      if (seenValues.has(value)) {
        return true; // Found a repeated reference
      }
      seenValues.add(value);
    }
  }

  return false; // No repeated references found
}

// Example usage:
const data = [
  { id: 1, ref: 'A' },
  { id: 2, ref: 'B' },
  { id: 3, ref: 'A' }, // 'A' is repeated
  { id: 4, ref: 'C' }
];

console.log(isRepeatRef('ref', data)); // Output: true
