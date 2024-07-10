import React from 'react';
const Tenor = ({ imgUrl, title }) => {
    return (
        <div className="bg-custom-bg p-2 rounded m-2 w-48 h-48">
            <img src={imgUrl} alt={title} className="w-full h-36 object-cover" />
            <p className="text-center mt-2 ">{title}</p>
        </div>
    );
};

export default Tenor;




