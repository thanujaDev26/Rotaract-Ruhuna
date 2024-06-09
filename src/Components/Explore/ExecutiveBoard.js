import { PaperClipIcon } from '@heroicons/react/20/solid'
import {Link} from "react-router-dom";
import {useState} from "react";


export default function ExecutiveBoard(props) {

    const positions = [
        "President",
        "Secretary",
        "Vice President",
        "Sargent At Arms",
        "Editor",
        "Treasurer"
    ];

    const [selectedChoices, setSelectedChoices] = useState({
        first: '',
        second: '',
        third: ''
    });

    const handleChoiceChange = (choice, value) => {
        setSelectedChoices(prevState => ({
            ...prevState,
            [choice]: value
        }));
    };
    const isOptionLocked = (choice, position) => {
        return Object.values(selectedChoices).includes(position) && selectedChoices[choice] !== position;
    };


    const isOptionDisabled = (choice, position) => {
        return Object.values(selectedChoices).includes(position) && selectedChoices[choice] !== position;
    };

    return (
        <div style={{padding : '2rem', margin : '1rem', borderRadius : '1rem'}} className="shadow-lg">
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
                                Leadership Body/ Back office functions )</strong>
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

                <div className="mt-4 px-4">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                            Avenue director position you are applying to,
                        </legend>
                        <div className="mt-6">
                            {['first', 'second', 'third'].map((choice, idx) => (
                                <div key={choice} className="mb-6">
                                    <div className="text-sm font-medium leading-6 text-gray-900 mb-2">
                                        {idx + 1}<sup>{['st', 'nd', 'rd'][idx]}</sup> Choice
                                    </div>
                                    <div
                                        className="grid grid-cols-2 sm:grid-cols-3 lg:flex flex-wrap gap-4 justify-center lg:justify-between">
                                        {positions.map((position, index) => (
                                            <label key={position}
                                                   className="flex items-center justify-start lg:justify-center w-full sm:w-1/3 lg:w-auto">
                                                <input
                                                    type="radio"
                                                    name={`${choice}-choice`}
                                                    value={position.toLowerCase().replace(' ', '-')}
                                                    className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
                                                    checked={selectedChoices[choice] === position.toLowerCase().replace(' ', '-')}
                                                    onChange={() => handleChoiceChange(choice, position.toLowerCase().replace(' ', '-'))}
                                                    disabled={isOptionDisabled(choice, position.toLowerCase().replace(' ', '-'))}
                                                />
                                                <span
                                                    className={`ml-2 text-sm ${isOptionLocked(choice, position.toLowerCase().replace(' ', '-')) ? 'text-gray-400' : 'text-gray-900'}`}>
                  {position}
                </span>
                                            </label>
                                        ))}
                                        {positions.length === 6 && <div className="w-full sm:w-1/3 lg:w-auto"></div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>


                <div className="flex flex-col md:flex-row items-center">
                    <Link
                        to="#"
                        download="sample-image.jpg"
                        className="font-medium text-indigo-600 hover:text-indigo-500 text-sm md:text-base mb-2 md:mb-0 md:mr-4">
                        Download
                    </Link>
                    <PaperClipIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <div className="flex flex-col md:flex-row items-center flex-1 gap-2">
                        <span className="text-gray-800 text-sm md:text-base">
                          <strong>Application Booklet</strong> (4.5mb)
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                        hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-red-600"
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    )
}
