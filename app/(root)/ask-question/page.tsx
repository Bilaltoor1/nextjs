import React from "react";
import  Glow from '@/components/css/glow'
const page = () => {

    return <div className='relative w-full h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 flex justify-center items-center text-white mt-28'>
            <Glow  classes=' blur-[90px] opacity-[50%] w-[200px] h-[200px] bg-gradient-to-r from-fuchsia-600 to-pink-600 left-[25%] bottom-[40%]'/>
            <Glow  classes=' blur-[90px] opacity-[50%] w-[200px] h-[200px] bg-green-400 bottom-[20%]'/>
            <Glow  classes=' blur-[90px] opacity-[50%] w-[200px] h-[200px] bg-yellow-500 left-[20%] bottom-[20%]'/>
            <Glow  classes=' blur-[90px] opacity-[50%] w-[200px] h-[200px] bg-gradient-to-r from-fuchsia-600 to-pink-600 left-[25%] bottom-[30%]'/>

        <Glow classes=' blur-[80px] w-[100px] h-[100px] bg-gradient-to-t from-purple-200 via-purple-400 to-purple-800 right-[20%] top-[20%]'/>
    </div>;
};

export default page;
