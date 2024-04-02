import React, { useState } from 'react'


const data = [
    {
        action: "C",
    },
    {
        action: "/",
    },
    {
        action: "%",
    },
    {
        action: "div",
    },
    {
        action: "7",
    },
    {
        action: "8",
    },
    {
        action: "9",
    },
    {
        action: "into",
    },
    {
        action: "4",
    },
    {
        action: "5",
    },
    {
        action: "6",
    },
    {
        action: "-",
    },
    {
        action: "1",
    },
    {
        action: "2",
    },
    {
        action: "3",
    },
    {
        action: "+",
    },
    {
        action: "0",
    },
    {
        action: ".",
    },
]
const Calculator = () => {

    const [active, setAction] = useState();

    const [value, setValue] = useState('');


    const answer = () => {

        // alert(active)
        setValue(eval(value));
    }

    return (
        <div>
            <div className=' lg:h-screen h-screen w-screen m-auto lg:w-screen justify-center items-center bg-black flex'>
                {/* <div className=' bg-black  w-screen blur-sm '>
                </div> */}
                <div className=' gap-2  flex-col flex lg:h-[40rem] justify-between items-center h-screen w-screen  lg:w-auto bg-black border-2 border-green-800/55 shadow-xl rounded-lg'>
                    <div className=' h-screen w-[21rem] m-auto lg:h-[10rem] bg-black lg:bg-green-800/30 justify-end items-end flex rounded-t-lg lg:w-[21rem]'>
                        {/* <input type="number" name="" className=' h-20 justify-end items-end flex text-white text-xl outline-none w-full bg-white/20' id=""  onChange={()=>{ }} /> */}
                        <div className=' lg:pb-2 pb-10 pr-2 text-2xl h-[10rem] justify-end items-end flex text-white text-wrap outline-none w-full pl-2 overflow-hidden bg-black lg:bg-white/10' id="" >
                            {
                                value
                            }
                        </div>
                    </div>
                    <div className=' flex items-center justify-center h-[28rem] bg-black w-screen lg:w-auto rounded-b-2xl rounded-lg'>
                        <div className=' w-full h-full justify-center items-center flex'>
                            <div className=' bg-red-000 text-white bg-black h-auto w-auto grid grid-cols-4 grid-flow-row gap-3'>


                                <button className=' h-[4.4rem] text-2xl text-red-400 w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={() => { setValue('') }}>
                                    C
                                </button>

                                <button className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }} onClick={() => { setValue(value.slice(0, -1)) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><line x1="18" x2="12" y1="9" y2="15" /><line x1="12" x2="18" y1="9" y2="15" /></svg>
                                </button>

                                <button value={"%"} className=' text-2xl h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    %
                                </button>

                                <button value={"/"} className=' text-2xl h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    /
                                </button>

                                <button value={"7"} className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    7
                                </button>

                                <button value={"8"} className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    8
                                </button>

                                <button value={"9"} className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    9
                                </button>

                                <button value="*" className=' rotate-45 text-3xl h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    +
                                </button>

                                <button value="4" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    4
                                </button>


                                <button value="5" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    5
                                </button>

                                <button value="6" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    6
                                </button>

                                <button value={"-"} className=' text-5xl h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    -
                                </button>

                                <button value="1" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    1
                                </button>

                                <button value="2" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    2
                                </button>

                                <button value="3" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    3
                                </button>

                                <button value="+" className=' text-4xl h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    +
                                </button>

                                <button value="0" className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    0
                                </button>


                                <button value="." className=' h-[4.4rem] w-[4.4rem] bg-green-800/30 rounded-full justify-center items-center flex' onClick={(e) => { setValue(value + e.target.value) }}>
                                    .
                                </button>

                            </div>

                            <div className=' h-[4.2rem] text-white font-semibold absolute w-[9rem] rounded-full bg-green-400/30 justify-center items-center flex -mr-[10rem] mt-[20.8rem] text-xl' onClick={answer}>Ans</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
