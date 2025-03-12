import React from 'react';

export default function Partners() {
    return (
        <div>
            {/*<div className="mx-auto max-w-2xl lg:max-w-4xl mt-10 mb-6" style={{padding:'2rem'}}>*/}
            {/*    <img className="mx-auto h-13" src={require('../../Images/RACRUH Logo Cranberry.png')} alt="" />*/}
            {/*</div>*/}
            <div className="bg-white py-4 sm:py-4" style={{marginBottom:'2rem'}}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
                        Our Trusted and Dedicated Partners
                    </h2>
                    <div
                        className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
                        style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                        <img
                            className="col-span-2 max-h-12 w-full object-contain justify-self-center sm:col-start-2 lg:col-span-1"
                            src={require("../../Images/mas.png")}
                            alt="MAS Logo"
                            width={158}
                            height={48}
                        />
                    </div>

                    {/*<img*/}
                    {/*    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                    {/*    src={require("../../Images/wso2.png")}*/}
                    {/*    alt="Transistor"*/}
                    {/*    width={158}*/}
                    {/*    height={48}*/}
                    {/*/>*/}
                    {/*<img*/}
                        {/*    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                        {/*    src={require("../../Images/99x.png")}*/}
                        {/*    alt="Reform"*/}
                        {/*    width={158}*/}
                        {/*    height={48}*/}
                        {/*/>*/}
                        {/*<img*/}
                        {/*    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                        {/*    src={require("../../Images/lseg.png")}*/}
                        {/*    alt="Tuple"*/}
                        {/*    width={158}*/}
                        {/*    height={48}*/}
                        {/*/>*/}
                        {/*<img*/}
                        {/*    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"*/}
                        {/*    src={require("../../Images/mas.png")}*/}
                        {/*    alt="SavvyCal"*/}
                        {/*    width={158}*/}
                        {/*    height={48}*/}
                        {/*/>*/}
                        {/*<img*/}
                        {/*    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"*/}
                        {/*    src={require("../../Images/sewana.png")}*/}
                        {/*    alt="Statamic"*/}
                        {/*    width={158}*/}
                        {/*    height={48}*/}
                        {/*/>*/}
                </div>
            </div>
        </div>
    );
}
