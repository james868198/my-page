export default {
    name: "James Huang",
    title: "Full-Stack Developer From Taiwan.",
    portrait: "static/images/me.jpg",
    email: "jameshuang198681@gmail.com ",
    description: "I'm a software engineer based in San Jose, CA specializing in web development, and interested in Machine Learning, cloud development, etc.",
    about: "Hi! I'm James, a software engineer from Taiwan. I graduated from Santa Clara University in June 2020 and obtained my Master's Degree in Computer Science & Engineering. I'm a self-starter who is hardworking and ambitious to face any challenges. My goal in my engineer journey is to build products that provide the best performance and user experience.",
    contact: "If you have any questions or suggestions for this website or me, please feel free to contact me. Every suggestion or new opportunity is very welcomed. I'll try my best to get back to you!",
    experiences: [
        {
            institution: "MedExpert International, Inc",
            where: {
                country: "United States",
                state: "CA",
                city: "Redwood City",                
            },
            title: "Software Engineer Intern",
            start: "2019-06",
            end: "2019-09",
            description: [
                "Maintained web applications and developed new features by Angular.js, Ruby on Rails, and MySQL.",
                "Collaborated with designers to implement messages receiving interface by Angular.js and Bootstrap.",
                "Refactored backend code to increase 70% of the client data searching speed.",
                "Introduced GitLab CI pipeline for unit test automation, and performed unit tests by Cucumber-Rails."
            ]
        },
        {
            institution: "Jibao System, Inc",
            where: {
                country: "Taiwan",
                state: null,
                city: "Taipei",                
            },
            title: "Full Stack Engineer",
            start: "2018-02",
            end: "2018-07",
            description: [
                "Worked alongside an agile(Scrum) team to rebuild online learning and teaching platform with thousands of students.",
                "Developed personal information management pages with Vue.js and built RESTful API with Node.js and MongoDB.",
                "Used Docker coupled with Nginx for the scalable environment.",
                "Performed BDD testing and unit testing using Mocha.",
            ]
        },
        {
            institution: "Mohist Web Technology, Inc",
            where: {
                country: "Taiwan",
                state: null,
                city: "Taipei",                
            },
            title: "Software Engineer",
            start: "2016-08",
            end: "2017-06",
            description: [
                "Developed features for a payment system by ASP.NET and SQL Server, which has millions of TWD transaction amount each month.",
                "Integrated the payment system with third-party online payment systems such as WeChat, Alipay, etc.",
                "Implemented secure authentication, authorization, cryptography backend codes for mobile devices",
            ]
        }
    ],
    educations: [
        {
            institution: "Santa Clara University",
            degree: "Master",
            department: "Computer Science",
            start: "2018-09",
            end: "2020-06",
            gpa: null,
            description: "Courses: Database Systems, Pattern Recog & Data Mining, Cloud Computing, Advanced Web Programming, Distributed Systems, Computer Vision"
        },
        {
            institution: "National Central University",
            degree: "Bachelor",
            department: "Electrical Engineering",
            start: "2011-09",
            end: "2015-06",
            gpa: null,
            description: ""
        }
    ],
    skills: [
        {
            name: "JavaScript",
            score: 5,
        },
        {
            name: "HTML & (S)CSS",
            score: 5,
        },
        {
            name: "React",
            score: 5,
        },
        {
            name: "Vue",
            score: 5,
        },
        {
            name: "Node.js",
            score: 5,
        },
        {
            name: "Python3",
            score: 5,
        }
    ],
    projects: [
        {
            name: "Weather 3D Application",
            description: "A web application demonstrating a city's real-time weather with 3D scenario by Three.js.",
            image: "static/images/weather3D.png",
            links: [
                { 
                    name: "github",
                    link: "https://github.com/james868198/Threejs-weatherApp",
                },
                { 
                    name: "demo",
                    link: "https://weather3dapp.herokuapp.com/",
                }
            ],
            tags: [
                "ThreeJS",
                "HTML",
                "WeatherAPI",
            ]
        },
        {
            name: "Multiplayer Browser Game",
            description: "A SPA multiplayer browser board game built by Socket.IO, Vue.js and Node.js",
            image: "",
            links: [
                { 
                    name: "github",
                    link: "https://github.com/james868198/Nuxt-BoardGame-Avalon"
                }
            ],
            tags: [
                "VueJS",
                "Node.js",
                "WebSocket",
            ]
        }
    ],
    media: [
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/yu-chan-huang/"
        },
        {
            name: "github",
            link: "https://github.com/james868198"
        }
    ]
};