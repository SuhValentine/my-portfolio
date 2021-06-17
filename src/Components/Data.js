// This contains data for the Home page's header and the About page

import HeaderBg from "../Assets/portfolio_bg.png";
import imageArt_1 from "../Assets/images/works/1.png";
import imageArt_2 from "../Assets/images/works/2.png";
import imageArt_3 from "../Assets/images/works/3.png";
import imageArt_4 from "../Assets/images/works/4.png";
// import imageArt_5 from "../Assets/images/works/5.png";

const data = {
    header: {
        img: HeaderBg,
        text: ['Hi !', 'It\'s me Suh Valentine,', 'I am a '],
        typical: [
            'Web Developer', 2000,
            'Mobile Developer', 2000,
            'UX/UI Designer', 2000
        ],
        btnText: 'Discover More'
    },

    stack: [
        {
            lang: 'HTML',
            level: '93',
            class: ''
        },
        {
            lang: 'CSS',
            level: '90',
            class: ''
        },
        {
            lang: 'JavaScript',
            level: '87',
            class: ''
        },
        {
            lang: 'ReactJs',
            level: '70',
            class: ''
        },
        {
            lang: 'Bootstrap',
            level: '89',
            class: ''
        },
        {
            lang: 'AngularJs',
            level: '80',
            class: ''
        },
        {
            lang: 'FirebaseJs',
            level: '76',
            class: ''
        },
        {
            lang: 'C/C++',
            level: '53',
            class: ''
        }
    ],
    bio: {
        fullname: 'Suh Valentine',
        email: 'suhvalentine@gmail.com',
        degree: 'Bachelor of Technology in Software Engineering',
        opening: 'Available',
        summary: `Growing up I have always been fascinated by cartoons and often loved
        drawing them. That love for drawing gradually morphed itself into
        making sure any application I create is visually appealing and easy
        to use towards my last years in the university. This mostly came as
        result of always using applications made by my friennds and older
        developers; they never really focused on the presentation of well
        made applications. So be sure that if I am working on some backend
        stuff, I will definitely do the front-end if no one's working or the
        boss isn't looking :D but I always make sure I submit my task on time. I have invested a little into learning different
        technologies be it front-end (mostly) and back-end to make sure I
        adapt easily in any given environment.`
    },
    artWorks: [
        {
            src: imageArt_1,
            thumbnail: imageArt_1,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
            caption: "Interior 3D Design"
        },
        {
            src: imageArt_2,
            thumbnail: imageArt_2,
            thumbnailWidth: 520,
            thumbnailHeight: 320,
            caption: "Modelling a cartoon character"
        },
        {
            src: imageArt_3,
            thumbnail: imageArt_3,
            thumbnailWidth: 260,
            thumbnailHeight: 320,
            caption: "Flyer for a restaurant"
        },
        {
            src: imageArt_4,
            thumbnail: imageArt_4,
            thumbnailWidth: 600,
            thumbnailHeight: 320,
            caption: "Menu for the same restarant"
        }
        // {
        //     src: imageArt_5,
        //     width: 3,
        //     height: 4
        // }
    ]
}

export default data;