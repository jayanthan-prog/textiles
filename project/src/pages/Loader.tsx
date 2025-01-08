import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <img
                src="https://ashoktextilemills.com/file/wp-content/uploads/2022/11/logo.png"
                alt="Ashok Textile Mills"
                className="h-24 w-24 animate-spin-slow"
            />
        </div>
    );
};

export default Loader;
