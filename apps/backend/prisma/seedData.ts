import { Employee, Role } from "@prisma/client";

export const EmployeeDirectory = {
    "Board of Directors": [
        { firstName: "Jo-Anne", lastName: "Sinclair" },
        { firstName: "Jackson", lastName: "Smith" },
        { firstName: "Susan", lastName: "Thomas" },
        { firstName: "Richa", lastName: "Kaur" },
        { firstName: "Josee", lastName: "Benjamin" }
    ],

    "VP Sales & Marketing": [
        { firstName: "Vincent", lastName: "Grey" }
    ],

    "Director": [
        { firstName: "Rupa", lastName: "Khark" },
        { firstName: "Xun", lastName: "Kuang" },
        { firstName: "Stien", lastName: "Pedersen" },
        { firstName: "Sandra", lastName: "Bear" },
        { firstName: "Gus", lastName: "Blue" },
        { firstName: "Sam", lastName: "Kong" },
        { firstName: "Valentine", lastName: "Smith" },
        { firstName: "Mariya", lastName: "Kaperski" }
    ],

    "Manager": [
        { firstName: "Abd al-Hamid", lastName: "Alami" },
        { firstName: "Victoria", lastName: "Gray" },
        { firstName: "Kris", lastName: "Gold" },
        { firstName: "Isaac", lastName: "Smith" },
        { firstName: "Samantha", lastName: "Nettle" },
        { firstName: "Yolanda", lastName: "Ferreira" },
        { firstName: "Samir", lastName: "Hassan" },
        { firstName: "Yuna", lastName: "Aikawa" },
        { firstName: "Jonathan", lastName: "Carberry" },
        { firstName: "Roland", lastName: "Wei" },
        { firstName: "Pran", lastName: "Singh" },
        { firstName: "Esra", lastName: "Sedge" },
        { firstName: "Pranee", lastName: "Tan" },
        { firstName: "Karmen", lastName: "Spruce" },
        { firstName: "Haydar", lastName: "Katirci" },
        { firstName: "Jill", lastName: "Harkness" },
        { firstName: "Tim", lastName: "Morrison" },
        { firstName: "Aleksandr", lastName: "Milosevic" },
        { firstName: "Jim", lastName: "Wingnut" }
    ],

    "Architecture": [
        { firstName: "Cheryl", lastName: "Guru" },
        { firstName: "Jean", lastName: "Ngoy" }
    ],

    "Software Development": [
        { firstName: "Payton", lastName: "Frost" }
    ],

    "Business Analyst": [
        { firstName: "Linda", lastName: "Analyst" }
    ],

    "Administration": [
        { firstName: "Zoë", lastName: "Robins" },
        { firstName: "Madeleine", lastName: "Madden" }
    ],

    "Audit": [
        { firstName: "Josha", lastName: "Sadowski" },
        { firstName: "Kate", lastName: "Fleetwood" }
    ],

    "Banking Operations": [
        { firstName: "Priyanka", lastName: "Bose" },
        { firstName: "Hammed", lastName: "Animashaun" },
        { firstName: "Álvaro", lastName: "Morte" },
        { firstName: "Taylor", lastName: "Napier" },
        { firstName: "Alan", lastName: "Simmonds" }
    ],

    "Communications": [
        { firstName: "Gil", lastName: "Cardinal" },
        { firstName: "Richard J.", lastName: "Lewis" }
    ],

    "Corporate Services": [
        { firstName: "Randy", lastName: "Bradshaw" },
        { firstName: "Tracey", lastName: "Cook" },
        { firstName: "Lubomir", lastName: "Mykytiuk" }
    ],

    "Facilities": [
        { firstName: "Dakota", lastName: "House" },
        { firstName: "Lori Lea", lastName: "Okemah" },
        { firstName: "Renae", lastName: "Morrisseau" },
        { firstName: "Rick", lastName: "Belcourt" }
    ],

    "Financial Services": [
        { firstName: "Selina", lastName: "Hanusa" },
        { firstName: "Buffy", lastName: "Gaudry" },
        { firstName: "Shaneen Ann", lastName: "Fox" },
        { firstName: "Allan", lastName: "Little" },
        { firstName: "Danny", lastName: "Rabbit" }
    ],

    "Human Resources": [
        { firstName: "Jesse Ed", lastName: "Azure" },
        { firstName: "Stacy", lastName: "Da Silva" },
        { firstName: "Vladimír", lastName: "Valenta" },
        { firstName: "Samone", lastName: "Sayeses-Whitney" },
        { firstName: "Paul", lastName: "Coeur" }
    ],

    "Information Technology": [
        { firstName: "Graham", lastName: "Greene" },
        { firstName: "Sandika", lastName: "Evergreen" },
        { firstName: "Jennifer", lastName: "Rodriguez" }
    ],

    "IT Technician": [
        { firstName: "Aiyana", lastName: "Littlebear" },
        { firstName: "Inara", lastName: "Thunderbird" },
        { firstName: "Kaya", lastName: "Runningbrook" },
        { firstName: "Elara", lastName: "Firehawk" },
        { firstName: "Siona", lastName: "Moonflower" },
        { firstName: "Kaiyu", lastName: "Greywolf" },
        { firstName: "Ayawamat", lastName: "Nightwind" },
        { firstName: "Tala", lastName: "Braveheart" },
        { firstName: "Iniko", lastName: "Stonebear" },
        { firstName: "Onatah", lastName: "Redhawk" }
    ]
};

export const EmployeeData: Omit<Employee, "id">[] =
    Object.entries(EmployeeDirectory).flatMap(
        ([department, employees]) =>
            employees.map(employee => ({
                ...employee,
                department
            })
        )
    );

export const LeaderData: Omit<Role, "id">[] = [
    {
        firstName: "Jo-Anne",
        lastName: "Sinclair",
        role: "CEO"
    },
    {
        firstName: "Jackson",
        lastName: "Smith",
        role: "COO"
    },
    {
        firstName: "Susan",
        lastName: "Thomas",
        role: "CFO"
    },
    {
        firstName: "Richa",
        lastName: "Laur",
        role: "VP Client Services"
    },
    {
        firstName: "Josee",
        lastName: "Benjamin",
        role: "CIO"
    },
    {
        firstName: "Vincent",
        lastName: "Grey",
        role: "VP Sales & Marketing"
    },
    {
        firstName: "Rupa",
        lastName: "Kharki",
        role: "Director Financial and Audit Svcs"
    },
    {
        firstName: "Xun",
        lastName: "Kuang",
        role: "Director Human Resources"
    },
    {
        firstName: "Stien",
        lastName: "Pedersen",
        role: "Director Legal Services/General Counsel"
    },
    {
        firstName: "Sandra",
        lastName: "Bear",
        role: "Direcftor Information Technology"
    },
    {
        firstName: "Gus",
        lastName: "Blue",
        role: "Director Information Security and CISSO"
    },
    {
        firstName: "Sam",
        lastName: "Kong",
        role: "Director Accounting"
    },
    {
        firstName: "Valentine",
        lastName: "Smith",
        role: "Director Physical Security"
    },
    {
        firstName: "Mariya",
        lastName: "Kaperski",
        role: "Director Facilities"
    },
    {
        firstName: "Abd al-Hamid",
        lastName: "Alami",
        role: "Manager, Business Continuity and Disaster Recovery"
    },
    {
        firstName: "Victoria",
        lastName: "Gray",
        role: "Manager, Internal Audit"
    },
    {
        firstName: "Cheryl",
        lastName: "Guru",
        role: "Chief Architect"
    },
    {
        firstName: "Jean",
        lastName: "Ngoy",
        role: "Manager, Security Architecture"
    },
    {
        firstName: "Kris",
        lastName: "Gold",
        role: "Solution Architect, Online Banking"
    },
    {
        firstName: "Isaac",
        lastName: "Smith",
        role: "Manager, Application Solutions"
    },
    {
        firstName: "Payton",
        lastName: "Frost",
        role: "Lead Developer, Online Banking"
    },
    {
        firstName: "Samantha",
        lastName: "Nettle",
        role: "Manager, Operational Risk"
    },
    {
        firstName: "Yolanda",
        lastName: "Ferreira",
        role: "Manager, Vendor Relations"
    },
    {
        firstName: "Samir",
        lastName: "Hassan",
        role: "Manager, Purchasing"
    },
    {
        firstName: "Yuna",
        lastName: "Aikawa",
        role: "Manager, Communications"
    },
    {
        firstName: "Jonathan",
        lastName: "Carberry",
        role: "Manager Customer Experience and Community Eng."
    },
    {
        firstName: "Roland",
        lastName: "Wei",
        role: "Manager of Sales"
    },
    {
        firstName: "Pran",
        lastName: "Singh",
        role: "Manager, Marketing"
    },
    {
        firstName: "Linda",
        lastName: "Analyst",
        role: "Business Analyst, Online Banking"
    },
    {
        firstName: "Esra",
        lastName: "Sedge",
        role: "Manager, Contract Management"
    },
    {
        firstName: "Pranee",
        lastName: "Tan",
        role: "Manager, Compliance Management"
    },
    {
        firstName: "Karmen",
        lastName: "Spruce",
        role: "Manager IT End User Service Desk"
    },
    {
        firstName: "Haydar",
        lastName: "Katirci",
        role: "Manager IT End User Computing"
    },
    {
        firstName: "Jill",
        lastName: "Harkness",
        role: "Manager IT Telecom and Infrastructure"
    },
    {
        firstName: "Tim",
        lastName: "Morrison",
        role: "Manager, Data Center and Hosting Services"
    },
    {
        firstName: "Aleksandr",
        lastName: "Milosevic",
        role: "Manager of IT Risk Management"
    },
    {
        firstName: "Jim",
        lastName: "Wingnut",
        role: "Manager IT, Project Management Office"
    }
]