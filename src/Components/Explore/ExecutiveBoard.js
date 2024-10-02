import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChoiceChange = (choice, value) => {
        setSelectedChoices((prevChoices) => ({
            ...prevChoices,
            [choice]: value
        }));

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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const { first, second, third } = selectedChoices;

        const NewUser = {
            ...user,
            choiceOne: first,
            choiceTwo: second,
            choiceThree: third
        };


        console.log(NewUser);


        setUser({
            email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
            joined_date: '', projects: '', positions: '', volunteered_projects: '',
            choiceOne: '', choiceTwo: '', choiceThree: ''
        });

        setSelectedChoices({
            first: '',
            second: '',
            third: ''
        });
    };

    const onClearHandler = (event) => {
        event.preventDefault();

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
    }

    let downloadURL = 'http://www.gbv.de/dms/zbw/865712123.pdf'

    const navigate = useNavigate();
    const onBackHandler = () => {
        navigate(-1)
    };
    return (
        <div style={{padding: '2rem', margin: '1rem', borderRadius: '1rem'}} className="shadow-lg">
            <button
                onClick={onBackHandler}
                className="mb-4 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
                Back
            </button>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Executive Board 2024 - 25
                            Application</h2>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            <strong>Calling all ambitious Rotaractors!</strong> This is your chance to take your
                            Rotaract experience
                            to the next level. We're thrilled to announce the launch of applications for the <strong>Director
                            Board of the Rotaract Club of University of Ruhuna for the RI year 2024 - 25</strong>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-6">
                            <div className="lg:max-w-xl">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                                    address</label>
                                <input
                                    value={user.email}
                                    onChange={handleInputChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="full_name"
                                       className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                                <input
                                    value={user.full_name}
                                    onChange={handleInputChange}
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact
                                    Number (WhatsApp preferred)</label>
                                <input
                                    value={user.contact}
                                    onChange={handleInputChange}
                                    id="contact"
                                    name="contact"
                                    type="tel"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="club_ID" className="block text-sm font-medium leading-6 text-gray-900">Club
                                    ID</label>
                                <input
                                    value={user.club_ID}
                                    onChange={handleInputChange}
                                    id="club_ID"
                                    name="club_ID"
                                    type="text"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="faculty"
                                       className="block text-sm font-medium leading-6 text-gray-900">Faculty</label>
                                <select
                                    value={user.faculty}
                                    onChange={handleInputChange}
                                    id="faculty"
                                    name="faculty"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                >
                                    <option value="">Select Faculty</option>
                                    <option value="Faculty of Agriculture">Faculty of Agriculture</option>
                                    <option value="Faculty of Engineering">Faculty of Engineering</option>
                                    <option value="Faculty of Medicine">Faculty of Medicine</option>
                                    <option value="Faculty of Management and Finance">Faculty of Management and
                                        Finance
                                    </option>
                                    <option value="Faculty of Humanities and Social Sciences">Faculty of Humanities and
                                        Social Sciences
                                    </option>
                                    <option value="Faculty of Science">Faculty of Science</option>
                                    <option value="Faculty of Allied Health Science">Faculty of Allied Health Science
                                    </option>
                                    <option value="Faculty of Technology">Faculty of Technology</option>
                                    <option value="Faculty of Fisheries and Marine Science Technology">Faculty of
                                        Fisheries and Marine Science Technology
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="lg:max-w-xl">
                                <label htmlFor="joined_date"
                                       className="block text-sm font-medium leading-6 text-gray-900">Club joined
                                    date</label>
                                <input
                                    value={user.joined_date}
                                    onChange={handleInputChange}
                                    id="joined_date"
                                    name="joined_date"
                                    type="date"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="projects" className="block text-sm font-medium leading-6 text-gray-900">
                                    <strong>Projects</strong> (Please clearly mention the projects you have participated
                                    in and
                                    the positions you held in the project OCs)
                                </label>
                                <textarea
                                    value={user.projects}
                                    onChange={handleInputChange}
                                    id="projects"
                                    name="projects"
                                    rows={3}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="positions"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    <strong>Positions you held</strong> (In the Executive Committee/Director
                                    Board/Leadership Body/Back office functions)
                                </label>
                                <textarea
                                    value={user.positions}
                                    onChange={handleInputChange}
                                    id="positions"
                                    name="positions"
                                    rows={3}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>

                            <div className="lg:max-w-xl">
                                <label htmlFor="volunteered_projects"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    <strong>Volunteered Projects</strong> (If any)
                                </label>
                                <textarea
                                    value={user.volunteered_projects}
                                    onChange={handleInputChange}
                                    id="volunteered_projects"
                                    name="volunteered_projects"
                                    rows={3}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-900/10 pt-12">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900">Board Position Choices</h3>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    First Choice
                                </label>
                                <select
                                    value={selectedChoices.first}
                                    onChange={(e) => handleChoiceChange("first", e.target.value)}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                >
                                    <option value="">Select First Choice</option>
                                    {positions.map((position) => (
                                        <option
                                            key={position}
                                            value={position}
                                            disabled={isOptionDisabled("first", position)}
                                        >
                                            {position}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Second Choice
                                </label>
                                <select
                                    value={selectedChoices.second}
                                    onChange={(e) => handleChoiceChange("second", e.target.value)}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                >
                                    <option value="">Select Second Choice</option>
                                    {positions.map((position) => (
                                        <option
                                            key={position}
                                            value={position}
                                            disabled={isOptionDisabled("second", position)}
                                        >
                                            {position}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Third Choice
                                </label>
                                <select
                                    value={selectedChoices.third}
                                    onChange={(e) => handleChoiceChange("third", e.target.value)}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
                                >
                                    <option value="">Select Third Choice</option>
                                    {positions.map((position) => (
                                        <option
                                            key={position}
                                            value={position}
                                            disabled={isOptionDisabled("third", position)}
                                        >
                                            {position}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <button
                            onClick={onClearHandler}
                            className="text-sm font-semibold leading-6 text-gray-900"
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

                    <div className="mt-8 border-t border-gray-900/10 pt-12">
                        <a href={downloadURL} target="_blank" rel="noopener noreferrer"
                           className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
                           style={{cursor: 'pointer'}}>
                            <span>Download the Role Guide</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="w-5 h-5 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M7 10l5 5m0 0l5-5m-5 5V3"/>
                            </svg>
                        </a>
                    </div>

                </div>
            </form>
        </div>
    );
}
