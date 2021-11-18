export const about = {
    paragraphs: [
        `I am a young, curious individual who is seeking challenges to learn and grow in the Software Development industry.`,
        `Beside, I'm also a Hufflepuff 🧙 who love coffee ☕, and quite often, I draw ugly pixel-arts just for fun.`
    ]
}

export const projects = [
    {
        name:"Tutoro",
        img: "tutoro.png",
        demo_url: "https://tutoro.vn",
        stacks: ["Python", "Django", "Flutter"],
        description: "Platform helps Teky teachers to managing their classes and information",
        role: "Lead backend developer",
        contributions: [
            "Design and intergrate Tutoro service into Teky Education system",
            "Provide over 100+ API endpoints",
            "Intergrate 3rd party Sendbird Chat Service",
            "Implement Token base authentication",
            "Accomplish 4 Social Authentication (Apple, Facebook, Microsoft, Google)",
            "Apply OTP features for authentication and verification"
        ]
    },
    {
        name:"CSEE Exchange",
        img: "csee.png",
        demo_url: "https://www.csee.org.au/",
        stacks: ["Wordpress", "PHP", "HTML", "CSS"],
        description: "CSEE Exchange website",
        role: "Developer",
        contributions: [
            "Design the site appearance",
            "Intergrate Theme to the site",
            "Customize Wordpress themes to accommodate the design"
        ]
    },
    {
        name:"GTI Connect",
        img: "gticonnect.png",
        demo_url: "https://gticonnect.neksus.com.au/",
        stacks: ["Python", "Django", "Vue", "HTML", "SCSS", "Javascript"],
        description: "Platform helps Global Talents to connect with Australian Experts for visa nomination",
        role: "Lead backend developer",
        contributions: [
            "Design and intergrate the whole site features",
            "Provid over 50+ endpoints",
            "Implement Chat with WebSocket",
            "Intergrate Marketpalce payments system with Stripe",
            "Implement JWT Authentication flow"
        ]
    },
    {
        name:"CSEE Community",
        img: "csee-landing.png",
        demo_url: "https://csee.study/",
        stacks: ["Wordpress", "PHP", "HTML", "CSS", "Javascript", "JQuery"],
        description: "Social media platform for students who are planning or going to study abroad. Built with Wordpress and Buddyboss, Learndash LMS plugins as the base",
        role: "Lead Developer",
        contributions: [
            "Communicate with the client to understand their needs and transform it to matching requirements.",
            "Research, plan across all dimensions of project from technologies used to hiring team members",
            "Keep track of team progress to accomplished the project out come",
            "Customize and intergrate multiple Wordpress plugin on to site to meet the designed application",
            "Implement social media features, like newfeed, chat, blog, friendlists with BuddyBoss plugin",
            "Support online study features using LearnDash LMS",
        ]
    },
    {
        name:"Experts Crawler",
        stacks: ["Python", "Scrapy", "MySQL"],
        description: "Crawler designed to scrape over University Backend APIs to collects Universities Experts Information",
        role: "Developer",
        contributions: [
            "Implement a scrapper auto script to scrape university sites for university experts information",
            "Support over 30+ university websites"
        ]
    },
    // {
    //     name:"Hypeciety",
    //     img: "hypeciety-landing.png",
    //     demo_url: "http://titan.csit.rmit.edu.au/~s3608452/Commercial-Clothing-Website-PHP/home.php",
    //     stacks: ["PHP", "Javascript", "HTML", "CSS"],
    //     description: "Simple e-commerce clothing website for Hypebeast collector",
    //     role: "Lead backend developer",
    //     contributions: [
    //         "Design and intergrate Tutoro service into Teky Education System",
    //         "Over 100+ API endpoints",
    //         "Intergrate 3rd party Sendbird Chat Service",
    //         "Implement token base authentication",
    //         "Support 4 Social Authentication (Apple, Facebook, Microsoft, Google)",
    //         "Implement OTP features for authentication and verification"
    //     ]
    // },
    {
        name:"Body language-telepresence Robot",
        img: "baxter.jpg",
        demo_url: "https://youtu.be/2_N49f9U_EE",
        stacks: ["Python", "Gazebo Sim", "ROS"],
        description: "An implementation of skeleton tracking on Baxter robot for VXLAB, to allow Baxter robot to mimics human action.",
        role: "Algorithm developer",
        contributions: [
            "Research apply GRPC protocol to create communication channel between the Robot and Kinect cammera",
            "Design and implement the Algorithm for the robot to mimic the human motions base on skeleton points",
            "Create and structuralize documents"
        ]
    },
]

export const educations = [
    { 
        school: "ROYAL MELBOURNE INSTITUITION OF TECHNOLOGY", 
        qualification: "Bachelor of Information Technology",
        period: "2017-2019",
        location: "Melbourne",
        descriptions: [
            "GPA: 3.3",
            "Graduate with High Distinction"
        ]
    },
    { 
        school: "HIGHSCHOOL FOR GIFTED STUDENT - HNUE", 
        qualification: "Graduated in Major of Computer Science", 
        period: "2015-1017",
        location: "Hanoi",
        descriptions: [
            "Member of school Competitive Programming Olympiad team",
        ] 
    }
]

export const experiences = [
    { 
        role:"Freelance Developer",         
        company: "my desk",  
        location:"Hanoi",       
        period:"2020-Present" , 
        descriptions:[
            "Build web application and data scraping tools for startups in Australian and Vietnamese market.",
            "Research and develop across all aspects of a web application to select technologies.",
            "Manage, recruit and coordinate team members from over the globe.",
            "Control, plan and manage the team process.",
            "Communiucate with clients to understand their needs and transform them into matching requirements.",
        ],
        stacks: ["Python", "Django", "Javascript", "Wordpress", "Vue", "HTML", "CSS"]
    },
    { 
        role:"Project Coordinator",         
        company: "Septeni Technology (Flinters)",  
        location:"Hanoi",       
        period:"2021 - Present" , 
        descriptions:[
            "In charge of the KFDD team which specified in platforms, services development for Dentsu Digital Inc.",
            "Helpe company sign the largest outsources contract in the company history.",
            "Keep projects on track by planning, observing and allocating resources, meanwhile stay close to the project development process.",
            "Review code, designs, processes along with developing new features.",
            "Consult team members about creating objectives and how to achieve them. Help member to resolve technical & work problems, and personal issues.",
        ],
        stacks: ["MySQL", "Python", "Django", "Javascript", "Vue", "React", "Apache Airflow", "Google Big Query", "Treasure Data", "AWS Batch", "AWS Serverless", "AWS Lambda"]
    },
    { 
        role:"Developer",         
        company: "Septeni Technology (Flinters)",  
        location:"Hanoi",       
        period:"2019 - 2020" , 
        descriptions:[
            "Develop web applications and worked with ETL data pipeline for media and digital marketing companies.",
            "Develop new features, platforms, monitored and maintained old systems.",
            "Create and structuralized project documents."
        ],
        stacks: ["MySQL", "Python", "Django", "Javascript", "Scala", "Vue", "React"]
    },
    { 
        role:"IT Support",            
        company: "Emma & Tom",          
        location:"Melbourne",   
        period:"2019" , 
        descriptions:[
            "Maintain and monitored the eCommerce website and fleet management system.",
            "Develop private Shopify application to help create ads on Google.",
            "Being expose to a multicultural working environment which involves communicating across multiple department."
        ],
        stacks: ["Shopify", "Google Ad API", "Flask", "Python", "Javascript", "HTML", "CSS"]
    },
    { 
        role:"Teaching Assistant",    
        company: "Code Camp",           
        location:"Melbourne",   
        period:"2018" , 
        descriptions:[
            "Help deliver interactive lessons, activities that expose primary students to programming and problem-solving.",
            "Train the ability to explain, deliver difficult concepts to people who have no prior knowledge in programming."
        ],
        stacks: ["Scratch"]
    },
    { 
        role:"Intern Web Developer",  
        company: "FPT Software",        
        location:"Hanoi",       
        period:"2017-2018" , 
        descriptions:[
            "Build an internal tax Management System for KPMG.",
            "Communicat and participated within an agile software development team.",
            "Hands on experience in developing features in web application.",
            "Work on technologies of which personally had no prior knowledge.",
        ],
        stacks: [".NET","C#","JQuery", "HTML", "CSS"]
    },
]