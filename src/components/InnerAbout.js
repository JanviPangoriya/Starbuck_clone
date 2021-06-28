import React from 'react';

function InnerAbout(props)
{
return(
<div className="hidden lg:block lg:w-47.5 lg:ml-8 ">
                 
                 <h3  className="mb-10 lg:mb-6 text-xl font-semibold">{props.text1}</h3>
                 <ul className="hidden lg:block">
                    <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text2}</li></a>
                    <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text3}</li></a>
                    <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text4}</li></a>
                    <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text5}</li></a>
                    <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text6}</li></a>
                    <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text7}</li></a>
                 </ul>
                 </div>
);
}

export default InnerAbout;