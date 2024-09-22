import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(()=> {
    let pass="";
    let str="ABCDEFGHIJKLabcdefghijkl";
    if(charAllowed){
      str+="!@#$%^&*(){}?><";
    }
    if(numberAllowed){
      str+="0987654321";
    }

    for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length +1);
        pass+=str.charAt(char);
    }

    setPassword(pass);

  },[length,charAllowed,numberAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef=useRef(null)
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-center my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={()=>{
            copyPassword()
          }}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'> 
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
            onChange={(e)=>{
              setLength(e.target.value)
            }}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'> 
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'> 
            <input type="checkbox" defaultChecked={charAllowed} id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}/>
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
