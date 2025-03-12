import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DirectorBoard(props) {
    const positions = [
        'Club Services',
        'International',
        'Environmental',
        'Sports',
        'Membership',
        'Public Relations',
        'Professional'
    ];

    const [user, setUser] = useState({
        email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
        projects: '', positions: '', skills: '',
        choiceOne: '', choiceTwo: '', choiceThree: ''
    });
    const [selectedChoices, setSelectedChoices] = useState({
        first: '',
        second: '',
        third: ''
    });
    const [lockedOptions, setLockedOptions] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChoiceChange = (choice, avenue) => {
        const newChoices = {
            first: choice === "first" ? avenue : selectedChoices.first,
            second: choice === "second" ? avenue : selectedChoices.second,
            third: choice === "third" ? avenue : selectedChoices.third
        };

        setSelectedChoices(newChoices);
        setLockedOptions(Object.values(newChoices)); // Lock all selected options
    };

    const isOptionDisabled = (choice, avenue) => {
        return lockedOptions.includes(avenue);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const NewUser = {
            ...user,
            choiceOne: selectedChoices.first,
            choiceTwo: selectedChoices.second,
            choiceThree: selectedChoices.third
        };

        console.log(NewUser);

        setUser({
            email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
            projects: '', positions: '', skills: '', choiceOne: '',
            choiceTwo: '', choiceThree: ''
        });

        setSelectedChoices({
            first: '',
            second: '',
            third: ''
        });
        setLockedOptions([]);
    };

    const onClearHandler = (event) => {
        event.preventDefault();

        setUser({
            email: '', full_name: '', contact: '', club_ID: '', faculty: '', student_id: '',
            projects: '', positions: '', skills: '', choiceOne: '',
            choiceTwo: '', choiceThree: ''
        });

        setSelectedChoices({
            first: '',
            second: '',
            third: ''
        });

        setLockedOptions([]);
    };

    const navigate = useNavigate();

    const onBackHandler = () => {
        navigate(-1)
    };
    return (
        <div style={{padding: '2rem', margin: '1rem', borderRadius: '1rem'}}>
            <button
                onClick={onBackHandler}
                className="mb-4 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
                Back
            </button>
            <form onSubmit={onSubmitHandler}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Director Board 2024 - 25
                            Application</h2>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            <strong>Calling all ambitious Rotaractors!</strong> This is your chance to take your
                            Rotaract experience to the next level. We're thrilled to announce the launch of applications
                            for the <strong>Director
                            Board of the Rotaract Club of University of Ruhuna for the RI year 2024 - 25</strong>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* First Column Inputs */}
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="full_name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="full_name"
                                        value={user.full_name}
                                        onChange={handleInputChange}
                                        id="full_name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contact Number ( <strong>WhatsApp preferred</strong> )
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="tel"
                                        name="contact"
                                        value={user.contact}
                                        onChange={handleInputChange}
                                        id="contact"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="club_ID" className="block text-sm font-medium leading-6 text-gray-900">
                                    Club ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="club_ID"
                                        value={user.club_ID}
                                        onChange={handleInputChange}
                                        id="club_ID"
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
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

                            <div>
                                <label htmlFor="student_id"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Student ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="student_id"
                                        value={user.student_id}
                                        onChange={handleInputChange}
                                        id="student_id"
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="projects" className="block text-sm font-medium leading-6 text-gray-900">
                                    <strong>Projects</strong> ( Please clearly mention the projects you have
                                    participated and the positions you held in the project OCs )
                                </label>
                                <div className="mt-2 lg:mt-6">
                                    <textarea
                                        id="projects"
                                        name="projects"
                                        value={user.projects}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        defaultValue={
                                            'Ps: if you\'re a member of Public Relations Team/ Editorial Team' +
                                            'please mention the tasks you have carried out to date'
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="positions"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    <strong>Positions</strong> ( Please clearly mention the positions you held in club )
                                </label>
                                <div className="mt-2 lg:mt-6">
                                    <textarea
                                        id="positions"
                                        name="positions"
                                        value={user.positions}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
                                    Skills
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="skills"
                                        name="skills"
                                        value={user.skills}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
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
                                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
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
                                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
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
                                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
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
            </form>
        </div>
    );
}
