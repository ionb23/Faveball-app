//I used chatGPT to optimize my name finding
function getAllNames(obj) {
  const names = new Map();
  const stack = [obj];

  let i = 0;
  while (i < stack.length) {
    const currentObj = stack[i++];

    if (typeof currentObj !== 'object' || currentObj === null) {
      continue;
    }

    for (const [key, value] of Object.entries(currentObj)) {
      if (key === 'name' && typeof value === 'string') {
        names.set(value, true);
      } else {
        stack.push(value);
      }
    }
  }

  const result = new Array(names.size);
  let j = 0;
  for (const name of names.keys()) {
    result[j++] = name;
  }

  return result;
}

export default getAllNames
