import web from '../assets/images/website-v2.png'
import cnn from '../assets/images/cnn.png'
import maker from '../assets/images/maker.png'


export const featuredData = [
    {
    id: 1,
    title: "Portfolio Website",
    github: "https://github.com/edgarcgriffinjr/website-v2",
    url: 'https://edgargriffin.com',
    desc: "Website built with React that is styled with CSS using flexbox and other types of CSS principles. This website also utilized react-router to route through the components on the page using Hash Links," +
                "It is a single page responsive application that responds through media queries to hold responsivity",
    tech: ['CSS', 'HTML', 'React.js'], 
    image: web,
    },
    {
    id: 2,
    title: "Maker Pre-launch - Frontend Mentor",
    github: "https://github.com/edgarcgriffinjr/Maker-Pre-Launch-FEM",
    url: 'https://landing-fem-edgar.vercel.app/',
    desc: "This is project built using React that is styled through CSS using gridbox. It is a pre-launch site for a company that was made up throught Frontend Mentor." + 
                "This is a single page responsive application that adjusts CSS grid at various media queries to keep responsivity.",
    tech: ['React', 'CSS'], 
    image: maker,
    },
    {
    id: 3,
    title: "Capstone Senior Project using CNN",
    github: 'null',
    url: "https://ak04526.wixsite.com/fall2020",
    desc: "This is a project my team and I set out on to establish what Convolutional Neural Network (CNNs)" +
            " would be efficient in small scale automotive vehicles. The research conducted concluded what we" +
            " expected in the end and provided valuable insight.",
    tech: ['Python', 'PyTorch', 'Jupyter Notebook', 'Ubuntu'],
    image: cnn,
    },
    
]


