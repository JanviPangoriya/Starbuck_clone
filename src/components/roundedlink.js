import React from 'react';

function Roundedlink(props)
{
    return(     
    <a href="#" className="flex-shrink-0 md:hidden min-w-max m-2 py-1 px-4 border rounded-3xl bg-transparent text-white hover:bg-gray-700">{props.linktext}
    </a>
    );
}
export default Roundedlink;