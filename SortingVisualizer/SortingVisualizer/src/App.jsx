import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'
import { useCallback, useEffect, useRef, useState } from 'react'
import './Style.css'
import './App.css'

function App() {
  const [length, setLength] = useState(5);
  const [sortType, setSortType] = useState(null); // State to keep track of sort type
  const [array, setArray] = useState([]);
  const [cancelSorting, setCancelSorting] = useState(false);
  const [sorting, setSorting] = useState(false);

  const handleSort = (type) => {
    setSortType(type);
    setCancelSorting(false);
  };
  const generateRandomArray = (size) => {
    const newArray = Array.from({ length: size }, () => ({
      value: Math.floor(Math.random() * 500) + 50, // Values between 50 and 500
      color: "blue" // Default color
    }));
    setArray(newArray);
  };

  // Function to reset the array
  const resetArray = () => {
  setCancelSorting(true); // Stop any ongoing sorting
  setTimeout(() => {
    generateRandomArray(length); // Generate the new array
    setSortType(null); // Reset sorting type
    setSorting(false); // Set sorting state to false
    setCancelSorting(false); // Reset the cancel flag after array is generated
  }, 100); // Delay to ensure sorting stops before regenerating array
};


  // Generate the initial array
  useEffect(() => {
    resetArray(); // You might want to call this here to generate the initial array
  }, [length]); // Generate a new array when length changes

  
  return (
    <>
      
      <div className="flex flex-col items-center">
      <Nav length={length} setLength={setLength} onSort={handleSort} resetArray={resetArray}/>
      <div className="dashboard-container">
        <Dashboard array={array} setArray={setArray} length={length} sortType={sortType} cancelSorting={cancelSorting} setSorting={setSorting}/>
      </div>
    </div>
  
      
    </>
  )
}

export default App
