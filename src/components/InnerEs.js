import React from 'react';

function InnerEs(props)
{
    return(
        <div className="md:flex-1  space-y-4 text-sm mr-4">
            <h1 className="text-gray-800 tracking-wide font-bold">
             {props.heading}
            </h1>
            <p className="text-justify">
             {props.text1}
            </p>
            <p className="text-justify">
            {props.text2}
             </p>
             <p className="text-justify">
             {props.text3}
            </p>
            <p className="text-justify">
             {props.text4}
            </p>
         </div>
    );

}

export default InnerEs;