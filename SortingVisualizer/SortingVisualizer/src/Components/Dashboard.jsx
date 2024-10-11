import React, { useEffect, useState } from "react";
import { bubbleSort, mergeSort ,quickSort , insertionSort , selectionSort } from "./SortingAlgorithms";



const Dashboard = ({ array , setArray , length , sortType , cancelSorting , setSorting}) => {

    const maxBarHeight = 400; // in percentage of container height
  //const [array, setArray] = useState([]);

  // Function to generate a random array of numbers
  const generateRandomArray = (size) => {
    const newArray = Array.from({ length: size }, () => ({
      value: Math.floor(Math.random() * 500) + 50, // Values between 50 and 500
      color: "blue" // Default color
    }));
    setArray(newArray);
  };
  

  const sortArray = async (type) => {
    setSorting(true);
    if (type === "bubble") {
      await bubbleSort([...array], setArray,cancelSorting); // Pass setArray to update state
    } else if (type === "merge") {
      await mergeSort([...array], setArray,cancelSorting); // Pass setArray to update state
    } else if (type === "quick") {
        await quickSort([...array], setArray,cancelSorting); // Pass setArray to update state
    } else if (type === "insertion") {
        await insertionSort([...array], setArray,cancelSorting); // Pass setArray to update state
    } else if (type === "selection") {
        await selectionSort([...array], setArray,cancelSorting); // Pass setArray to update state
    }
    setSorting(false);
  };


  // Run once on component mount, generate initial array
  useEffect(() => {
    generateRandomArray(length);
  }, [length]); // Re-generate array when length changes

  useEffect(() => {
    if (sortType && array.length >0) {
      sortArray(sortType);
    }
  }, [sortType]);

  return (
    <div className="dashboard-container flex items-end justify-center space-x-1 bg-black">
      {array.map((value, idx) => (
        <div
          key={idx}
          className="bar"
          style={{
            height: `${(value.value / Math.max(...array.map(v => v.value))) * maxBarHeight}px`, // Bar height
            width: `${100 / length}%`, // Dynamic width based on the number of bars
            backgroundColor: value.color,
            transition: "height 0.5s ease", // Smooth transition for height changes
          }}
        >
          <span className="text-white text-xs justify-center">{value.value}</span> {/* Display the bar value */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
