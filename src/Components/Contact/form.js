import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Form(props) {
    const [agreed, setAgreed] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let [userInput, setUserInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    let getUserName = (event) => {
        setUserInput((prev) => ({
            ...prev,
            name: event.target.value,
        }));
    };

    let getUserEmail = (event) => {
        setUserInput((prev) => ({
            ...prev,
            email: event.target.value,
        }));
    };

    let getUserPhone = (event) => {
        setUserInput((prev) => ({
            ...prev,
            phone: event.target.value,
        }));
    };

    let getUserMessage = (event) => {
        setUserInput((prev) => ({
            ...prev,
            message: event.target.value,
        }));
    };

    let onSubmitHandler = (event) => {
        event.preventDefault();
        let { name, email, phone, message } = userInput;

        let user = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        props.user(user);
        setUserInput({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className={classNames(
                    'fixed inset-0 transition-opacity duration-700 ease-in-out',
                    scrollY > 700 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                )}
                aria-hidden="true"
            >
                <img
                    src={require('../../Images/Form.png')}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rotaract Admin</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Contact us via e-mail or phone for any inquiries
                </p>
            </div>
            <form className="relative mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={onSubmitHandler}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Name <strong> (required)</strong>
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={userInput.name}
                                onChange={getUserName}
                                type="text"
                                name="full-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email <strong> (required)</strong>
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={userInput.email}
                                onChange={getUserEmail}
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                value={userInput.phone}
                                onChange={getUserPhone}
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                value={userInput.message}
                                onChange={getUserMessage}
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-red-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <label className="text-sm leading-6 text-white-600">
                            <strong>By selecting this, you agree to our{' '}</strong>
                            <Link to="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </Link>
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm
                        font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    );
}
