import web from '../assets/images/Website-v2.jpeg'
import cnn from '../assets/images/cnn.png'


export const featuredData = [
    {
    id: 1,
    title: "Portfolio Website",
    github: "https://github.com/edgarcgriffinjr/website-v2",
    url: 'null',
    desc: "This is my first attempt at a portfoilio website to break into the Software Engineering world."+
            "This website was created with Gatsby which is mostly based on React.js.",
    tech: ['Javascript', 'CSS', 'SCSS', 'HTML', 'React.js', 'GatsbyJS'], 
    image: web,
    },
    {
    id: 2,
    title: "Capstone Senior Project using CNN",
    github: 'null',
    url: "https://ak04526.wixsite.com/fall2020",
    desc: "This is a project my team and I set out on to establish what Convolutional Neural Network (CNNs)" +
            " would be efficient in small scale automotive vehicles. The research conducted concluded what we" +
            " expected in the end and provided valuable insight.",
    tech: ['Python', 'PyTorch', 'Jupyter Notebook', 'Ubuntu'],
    image: cnn,
    },
    {
    id: 3,
    title: "College Database for the Computer Science Department",
    github: "https://github.com/edgarcgriffinjr/CSDatabase",
    url: 'null',
    desc: "This is a project that was created by my team and I to ease the use of the class search tool provided by" +
            " Georgia Southern. It was created to be specified to the Computer Science Department so it could be less" +
            " confusing for students to find classes, teachers, and to add them.",
    tech: ['Python', 'MySQL'], 
    },
]


