import React from 'react';
import * as IonIcons from 'react-icons/io';

export const NavigationData = [
    {
        title: 'Home',
        path: '/',
        icon: <IonIcons.IoMdHome className="flex-none h-full w-5 ml-6 mr-4" />,
        className: 'w-fill flex py-2.5 md:px-1 px-4 rounded md:rounded-none transition duration-200 md:hover:bg-transparent hover:bg-gray-600 custom-menu-item'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IonIcons.IoMdPerson className="flex-none h-full w-5 ml-6 mr-4" />,
        className: 'w-fill flex py-2.5 md:px-1 px-4 rounded md:rounded-none transition duration-200 md:hover:bg-transparent hover:bg-gray-600 custom-menu-item'
    },
    // {
    //     title: 'Resume',
    //     path: '/resume',
    //     icon: <IonIcons.IoMdPaper className="flex-none h-full w-5 ml-6 mr-4" />,
    //     className: 'w-fill flex py-2.5 md:px-1 px-4 rounded md:rounded-none transition duration-200 md:hover:bg-transparent hover:bg-gray-600 custom-menu-item'
    // },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <IonIcons.IoMdBriefcase className="flex-none h-full w-5 ml-6 mr-4" />,
        className: 'w-fill flex py-2.5 md:px-1 px-4 rounded md:rounded-none transition duration-200 md:hover:bg-transparent hover:bg-gray-600 custom-menu-item'
    },
    // {
    //     title: 'Stack',
    //     path: '/stack',
    //     icon: <IonIcons.IoMdFiling className="flex-none h-full w-5 ml-6 mr-4" />,
    //     className: 'w-fill flex py-2.5 md:px-1 px-4 rounded md:rounded-none transition duration-200 md:hover:bg-transparent hover:bg-gray-600 custom-menu-item'
    // },
    // {
    //     title: 'Contact',
    //     path: '/contact',
    //     icon: <IonIcons.IoMdMail className="flex-none h-full w-5 ml-6 mr-4" />,
    //     className: 'w-fill flex py-2.5 md:px-1 px-4 rounded md:rounded-none transition duration-200 md:hover:bg-transparent hover:bg-gray-600 custom-menu-item'
    // }
]