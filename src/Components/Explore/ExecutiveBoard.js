import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

export default function ExecutiveBoard() {
    const positions = [
        "President",
        "Secretary",
        "Vice President",
        "Sargent At Arms",
        "Editor",
        "Treasurer"
    ];

    const [user, setUser] = useState({
        email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
        joined_date: '', projects: '', positions: '', volunteered_projects: '',
        choiceOne: '', choiceTwo: '', choiceThree: ''
    });

    const [selectedChoices, setSelectedChoices] = useState({
        first: '',
        second: '',
        third: ''
    });

    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser((prev) => {
            return{
                ...prev,
                [name]: value
            }
        });
    };

    const handleChoiceChange = (choice, value) => {
        setSelectedChoices((prevChoices) => {
           return {
               ...prevChoices,
               [choice]: value
           }
        });

        setUser((prev) => {
            const newUser = { ...prev };

            Object.keys(newUser).forEach((key) => {
                if (newUser[key] === value && key !== choice) {
                    newUser[key] = '';
                    alert(`Cannot select ${value} for multiple choices`);
                }
            });

            newUser[choice] = value;
            return newUser;
        });
    };

    const isOptionDisabled = (choice, value) => {
        return Object.values(selectedChoices).includes(value) && selectedChoices[choice] !== value;
    };

    const isOptionLocked = (choice, value) => {
        return selectedChoices[choice] === value;
    }
    //
    // useEffect(()=>{
    //     console.log(user)
    // },[user])


    let onSubmitHandler = (event) => {
        event.preventDefault();

        let { email,full_name,contact,club_ID,faculty,student_id,
        joined_date,projects,positions,volunteered_projects,choiceOne,
        choiceTwo, choiceThree} = user

        let contact_user = {
            email: email, full_name: full_name, contact: contact, club_ID: club_ID,
            faculty: faculty,student_id: student_id, joined_date: joined_date,
            projects: projects,position:positions,volunteered_projects: volunteered_projects,
            choiceOne: choiceOne,choiceTwo: choiceTwo,choiceThree: choiceThree,
        }

        console.log(contact_user)

        setUser({
            email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
            joined_date: '', projects: '', positions: '', volunteered_projects: '', choiceOne: '',
            choiceTwo: '', choiceThree: '',
        });


        setSelectedChoices({
            first: '',
            second: '',
            third: ''
        });
    }

    let downloadURL = 'http://www.gbv.de/dms/zbw/865712123.pdf'

    return (
        <div style={{ padding: '2rem', margin: '1rem', borderRadius: '1rem' }} className="shadow-lg">
            <form onSubmit={onSubmitHandler}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Executive Board 2024 - 25 Application</h2>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            <strong>Calling all ambitious Rotaractors!</strong> This is your chance to take your Rotaract experience
                            to the next level. We're thrilled to announce the launch of applications for the <strong>
                            Director Board of the Rotaract Club of University of Ruhuna for the RI year 2024 - 25
                        </strong>
                        </p>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={user.email}
                                onChange={handleInputChange}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                value={user.full_name}
                                onChange={handleInputChange}
                                type="text"
                                name="full_name"
                                id="full_name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                            Contact Number (<strong>WhatsApp preferred</strong>)
                        </label>
                        <div className="mt-2">
                            <input
                                value={user.contact}
                                onChange={handleInputChange}
                                type="tel"
                                name="contact"
                                id="contact"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="club_ID" className="block text-sm font-medium leading-6 text-gray-900">
                            Club ID
                        </label>
                        <div className="mt-2">
                            <input
                                value={user.club_ID}
                                onChange={handleInputChange}
                                type="text"
                                name="club_ID"
                                id="club_ID"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="faculty" className="block text-sm font-medium leading-6 text-gray-900">
                            Faculty
                        </label>
                        <div className="mt-2">
                            <select
                                value={user.faculty}
                                onChange={handleInputChange}
                                id="faculty"
                                name="faculty"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="">Select Faculty</option>
                                <option value="Faculty of Agriculture">Faculty of Agriculture</option>
                                <option value="Faculty of Engineering">Faculty of Engineering</option>
                                <option value="Faculty of Medicine">Faculty of Medicine</option>
                                <option value="Faculty of Management and Finance">Faculty of Management and Finance</option>
                                <option value="Faculty of Humanities and Social Sciences">Faculty of Humanities and Social Sciences</option>
                                <option value="Faculty of Science">Faculty of Science</option>
                                <option value="Faculty of Allied Health Science">Faculty of Allied Health Science</option>
                                <option value="Faculty of Technology">Faculty of Technology</option>
                                <option value="Faculty of Fisheries and Marine Science Technology">Faculty of Fisheries and Marine Science Technology</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="student_id" className="block text-sm font-medium leading-6 text-gray-900">
                            Student ID
                        </label>
                        <div className="mt-2">
                            <input
                                value={user.student_id}
                                onChange={handleInputChange}
                                type="text"
                                name="student_id"
                                id="student_id"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="joined_date" className="block text-sm font-medium leading-6 text-gray-900">
                            Club joined date
                        </label>
                        <div className="mt-2">
                            <input
                                value={user.joined_date}
                                onChange={handleInputChange}
                                type="date"
                                name="joined_date"
                                id="joined_date"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="projects" className="block text-sm font-medium leading-6 text-gray-900">
                            <strong>Projects</strong> (Please clearly mention the projects you have participated in and the positions you held in the project OCs)
                        </label>
                        <div className="mt-2">
                            <textarea
                                value={user.projects}
                                onChange={handleInputChange}
                                id="projects"
                                name="projects"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="positions" className="block text-sm font-medium leading-6 text-gray-900">
                            <strong>Positions you held</strong> (In the Executive Committee/Director Board/Leadership Body/Back office functions)
                        </label>
                        <div className="mt-2">
                            <textarea
                                value={user.positions}
                                onChange={handleInputChange}
                                id="positions"
                                name="positions"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="volunteered_projects" className="block text-sm font-medium leading-6 text-gray-900">
                            <strong>Projects volunteered</strong> (If any)
                        </label>
                        <div className="mt-2">
                            <textarea
                                value={user.volunteered_projects}
                                onChange={handleInputChange}
                                id="volunteered_projects"
                                name="volunteered_projects"
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
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex flex-wrap gap-4 justify-center lg:justify-between">
                                        {positions.map((position) => (
                                            <label key={position} className="flex items-center justify-start lg:justify-center w-full sm:w-1/3 lg:w-auto">
                                                <input
                                                    type="radio"
                                                    name={`${choice}-choice`}
                                                    value={position}
                                                    className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
                                                    checked={selectedChoices[choice] === position}
                                                    onChange={() => handleChoiceChange(choice, position)}
                                                    disabled={isOptionDisabled(choice, position)}
                                                />
                                                <span className={`ml-2 text-sm ${isOptionLocked(choice, position) ? 'text-gray-400' : 'text-gray-900'}`}>
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
                        to={downloadURL}
                        download="sample-pdf.pdf"
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
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => {
                            setUser({
                                email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
                                joined_date: '', projects: '', positions: '', volunteered_projects: '', choiceOne: '',
                                choiceTwo: '', choiceThree: ''
                            });
                            setSelectedChoices({
                                first: '',
                                second: '',
                                third: ''
                            });
                        }}
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    )
}
