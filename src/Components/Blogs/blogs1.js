import Data from "./data.json";

export default function BlogsOne() {

    return (<div className="mt-2 grid grid-cols-1 gap-2 blog1-outer">
        {Data.map((data, index) => (<div key={index} className=" h-auto rounded-md bg-white">
            <div className="w-full h-40 md:h-52 xl:h-64 2xl:h-[400px] bg-no-repeat bg-cover rounded-t-md"
                 style={{backgroundImage: `url(${data.img})`}}>
            </div>
            <div className="w-full h-auto text-center p-2">
                <h1 className="text-xl font-bold my-2">{data.name}</h1>
                <p className="text-base leading-4 my-2 text-text-b">{data.description}</p>
                <button className="bg-pink px-5 py-1 rounded-xl text-white my-2">See more...</button>
            </div>
        </div>))}
    </div>)
}
