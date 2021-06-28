import React from 'react';

function StarCodes()
{
return (
    <section className="px-6 my-8 md:w-5/12 md:ml-48 md:max-w-2xl">
    <h1 className="text-2xl font-semibold my-4 md:text-3xl">
        Star Codes
    </h1>
    <p className="text-sm  my-5 md:text-base">
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.
    </p>
    <input type="text" className="border-solid border w-full my-4 border-gray-600 p-3 rounded-xl font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder=" Enter Your Star Code"/>
<div className="flex flex-row-reverse">
    <button className="mb-10 border-2 border-gray-600 px-4 h-9 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
        Submit
    </button>
    </div>
    <p className="text-sm my-4">
        Have a receipt but don't have a code? <br/> 
        </p>
        <p className="text-sm -my-0.5">
        Go to
        <a href="#" className="text-green-400 underline">  
            starbucks-stars.com</a> to upload your receipt and collect your Stars
    </p>
    <h1 className="text-2xl font-semibold mt-24 md:text-3xl">
        Questions?
    </h1>
    <p className="text-sm md:max-w-3xl mt-4 mb-20 md:text-base">
        We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a href="#" className="text-green-400 underline">  
            right over here.</a>

    </p>
    </section>
);
}
export default StarCodes;