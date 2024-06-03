import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="bg-white" style={{paddingTop: "0.5rem", marginTop: "0"}}>
            <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-24 lg:px-4">
                <div
                    className="relative isolate overflow-hidden bg-gray-900 px-6 pt-8 sm:pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Apply and Join
                            <br/>
                            Director Board 2024 - 25
                        </h2>
                        <p className="mt-4 sm:mt-6 text-lg leading-8 text-gray-300">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                            sagittis vel nulla.
                        </p>
                        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                to="/explore/director-board"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-12 sm:mt-16 h-64 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src={require('../../Images/wso2.png')}
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-24 lg:px-4">
                <div
                    className="relative isolate overflow-hidden bg-gray-900 px-6 pt-8 sm:pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Apply and Join
                            <br/>
                            Executive Board 2024 - 25
                        </h2>
                        <p className="mt-4 sm:mt-6 text-lg leading-8 text-gray-300">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                            sagittis vel nulla.
                        </p>
                        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                to="/explore/executive-board"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-12 sm:mt-16 h-64 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src={require('../../Images/wso2.png')}
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
