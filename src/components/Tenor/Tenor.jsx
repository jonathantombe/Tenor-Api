import React from 'react';
const Tenor = ({ imgUrl, title }) => {
    return (
        <div className="bg-custom-bg w-46 h-40  border-2 border-slate-700  rounded-lg">
            <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
        </div>
    );
};

export default Tenor;




