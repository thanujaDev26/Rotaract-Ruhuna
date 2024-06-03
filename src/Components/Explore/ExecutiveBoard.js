import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function ExecutiveBoard(props) {
    return (
        <div style={{border : '1px solid black', padding : '2rem', margin : '1rem', borderRadius : '1rem'}}>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Executive Board 2024 - 25
                            Application</h2>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            <strong>Calling all ambitious Rotaractors!</strong> This is your chance to take your
                            Rotaract experience
                            to the next level.We're thrilled to announce the launch of applications for the <strong>
                            Director Board of the Rotaract Club of University of Ruhuna for the RI year 2024 - 25
                        </strong>
                        </p>
                    </div>
                    <div className="sm:col-span-4 ">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="first-name"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="contact-number"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Contact Number ( <strong>Whats App preferred</strong> )
                        </label>
                        <div className="mt-2">
                            <input
                                type="tel"
                                name="contact-number"
                                id="contact-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="club-id"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Club ID
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="club-id"
                                id="club-id"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Faculty
                        </label>
                        <div className="mt-2">
                            <select
                                id="faculty"
                                name="faculty"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Faculty of Agriculture</option>
                                <option>Faculty of Engineering</option>
                                <option>Faculty of Medicine</option>
                                <option>Faculty of Management and Finance</option>
                                <option>Faculty of Humanities and Social Sciences</option>
                                <option>Faculty of Science</option>
                                <option>Faculty of Allied Health Science</option>
                                <option>Faculty of Technology</option>
                                <option>Faculty of Fisheries and Marine Science Technology</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="student-id"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Student ID
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="student-id"
                                id="student-id"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="join-date"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Club joined date
                        </label>
                        <div className="mt-2">
                            <input
                                type="date"
                                name="join-date"
                                id="join-date"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>

                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            <strong>Projects</strong> ( Please clearly mention the projects you have
                            participated and
                            the positions you held in the project OCs ) <strong>( Clear the example below )</strong>
                        </label>
                        <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={'Ps: if you\'re a member of Public Relations Team/ Editorial Team' +
                                            'please mention the projects you have given contribution as a graphic' +
                                            'designer/content writer/video editor in this section also.'}/>
                        </div>

                    </div>

                    <div className="col-span-full">
                        <label htmlFor="positions" className="block text-sm font-medium leading-6 text-gray-900">
                            <strong>Positions you held ( In the Executive Committee/ Director Board/
                                Leadership Body/ Back office functions)</strong>
                            <br/>
                            Ps. In this section clearly mention the positions you have held so far
                            in the club and the back office teams you have been in. <strong>( Clear the example below
                            )</strong>
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="positions"
                                name="positions"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={
                                    'Platform Coordinator (2021-22)\n' +
                                    'Community Service Director (2022-23)\n' +
                                    'Dynamic Blu/MD/ Finance/ Platform team member'
                                }
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="volunteer" className="block text-sm font-medium leading-6 text-gray-900">
                            <strong>Projects volunteered</strong> ( If any )
                        </label>
                        <div className="mt-2">
                                    <textarea
                                        id="volunteer"
                                        name="volunteer"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                        </div>
                    </div>
                </div>


                <div className="flex">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Avenue director position you
                            are
                            applying to,
                        </legend>
                        <div className="mt-6 overflow-x-auto">
                            <div className="grid grid-cols-7 gap-6">
                                <div></div>
                                <div className="text-sm font-medium leading-6 text-gray-900">President</div>
                                <div className="text-sm font-medium leading-6 text-gray-900">Secretary</div>
                                <div className="text-sm font-medium leading-6 text-gray-900">Vice President</div>
                                <div className="text-sm font-medium leading-6 text-gray-900">Sargent At Arms</div>
                                <div className="text-sm font-medium leading-6 text-gray-900">Editor</div>
                                <div className="text-sm font-medium leading-6 text-gray-900">Treasurer</div>
                            </div>
                            <div className="grid grid-cols-7 gap-6 mt-4">
                                <div className="text-sm font-medium leading-6 text-gray-900">1<sup>st</sup> Choice</div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="president-1st"
                                        name="first-choice"
                                        type="radio"
                                        value="club-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="secretary-1st"
                                        name="first-choice"
                                        type="radio"
                                        value="community-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="vpresident-1st"
                                        name="first-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="sargent-1st"
                                        name="first-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="editor-1st"
                                        name="first-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="treasurer-1st"
                                        name="first-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-6 mt-4">
                                <div className="text-sm font-medium leading-6 text-gray-900">2<sup>nd</sup> Choice</div>

                                <div className="flex items-center justify-center">
                                    <input
                                        id="president-2nd"
                                        name="second-choice"
                                        type="radio"
                                        value="club-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="secretary-2nd"
                                        name="second-choice"
                                        type="radio"
                                        value="community-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="vpresident-2nd"
                                        name="second-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="sargent-2nd"
                                        name="second-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="editor-2nd"
                                        name="second-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="treasurer-2nd"
                                        name="second-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-6 mt-4">
                                <div className="text-sm font-medium leading-6 text-gray-900">3<sup>rd</sup> Choice</div>

                                <div className="flex items-center justify-center">
                                    <input
                                        id="president-3rd"
                                        name="third-choice"
                                        type="radio"
                                        value="club-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="secretary-3rd"
                                        name="third-choice"
                                        type="radio"
                                        value="community-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="vpresident-3rd"
                                        name="third-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="sargent-3rd"
                                        name="third-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="editor-3rd"
                                        name="third-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        id="treasurer-3rd"
                                        name="third-choice"
                                        type="radio"
                                        value="international-services"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">Application Booklet</span>
                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                    </a>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    )
}
