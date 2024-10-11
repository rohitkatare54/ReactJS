// Function to implement Bubble Sort with color changes for visualization
export const bubbleSort = async (array, setArray, cancelSorting) => {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (cancelSorting) return;
      
      // Highlight comparison
      arr[j].color = "red";
      arr[j + 1].color = "red";
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 100));

      if (arr[j].value > arr[j + 1].value) {
        // Swap if needed
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        arr[j].color = "purple";
        arr[j + 1].color = "purple";
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Reset colors
      arr[j].color = "blue";
      arr[j + 1].color = "blue";
      setArray([...arr]);
    }

    // Mark the sorted element
    arr[n - i - 1].color = "green";
    setArray([...arr]);
  }

  // Ensure all elements are green at the end
  arr.forEach(bar => (bar.color = "green"));
  setArray([...arr]);
};

// Function to implement Merge Sort with color changes
export const mergeSort = async (array, setArray, cancelSorting) => {
  if (cancelSorting) return;
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const left = await mergeSort(array.slice(0, mid), setArray, cancelSorting);
  const right = await mergeSort(array.slice(mid), setArray, cancelSorting);

  return await merge(left, right, setArray, cancelSorting);
};

const merge = async (left, right, setArray, cancelSorting) => {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (cancelSorting) return;

    // Highlight elements being compared
    left[i].color = "red";
    right[j].color = "red";
    setArray([...left, ...right]);
    await new Promise(resolve => setTimeout(resolve, 100));

    if (left[i].value < right[j].value) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }

    // Reset colors
    left[i] && (left[i].color = "blue");
    right[j] && (right[j].color = "blue");
  }

  result.push(...left.slice(i), ...right.slice(j));
  result.forEach(bar => (bar.color = "green"));
  setArray([...result]);

  return result;
};

// Function to implement Quick Sort with color changes
export const quickSort = async (array, setArray, cancelSorting) => {
  const arr = [...array];
  await quickSortHelper(arr, 0, arr.length - 1, setArray, cancelSorting);
  arr.forEach(bar => (bar.color = "green"));
  return arr;
};

const quickSortHelper = async (arr, low, high, setArray, cancelSorting) => {
  if (low < high && !cancelSorting) {
    const pi = await partition(arr, low, high, setArray, cancelSorting);
    arr[pi].color = "purple";
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 100));
    await quickSortHelper(arr, low, pi - 1, setArray, cancelSorting);
    await quickSortHelper(arr, pi + 1, high, setArray, cancelSorting);
  }
};

const partition = async (arr, low, high, setArray, cancelSorting) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (cancelSorting) return;

    if (arr[j].value < pivot.value) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      arr[i].color = "red";
      arr[j].color = "red";
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    arr[j].color = "blue";
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await new Promise(resolve => setTimeout(resolve, 100));
  return i + 1;
};

// Function to implement Selection Sort with color changes
export const selectionSort = async (array, setArray, cancelSorting) => {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    if (cancelSorting) return;
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      arr[j].color = "red";
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 100));

      if (arr[j].value < arr[minIndex].value) minIndex = j;
      arr[j].color = "blue";
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 100));

    arr[i].color = "green";
  }

  arr[n - 1].color = "green";
  setArray([...arr]);
};

// Function to implement Insertion Sort with color changes
export const insertionSort = async (array, setArray, cancelSorting) => {
  const arr = [...array];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    if (cancelSorting) return;
    const key = arr[i];
    let j = i - 1;

    key.color = "red";
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 100));

    while (j >= 0 && arr[j].value > key.value) {
      arr[j + 1] = arr[j];
      arr[j].color = "red";
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 100));
      j--;
    }

    arr[j + 1] = key;
    key.color = "blue";
    setArray([...arr]);
  }

  arr.forEach(bar => (bar.color = "green"));
  setArray([...arr]);
};
