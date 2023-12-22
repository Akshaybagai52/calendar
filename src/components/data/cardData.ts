import { StaticImageData } from "next/image";
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"

import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp"
import card3 from "../../assets/card3.webp"
import card4 from "../../assets/card4.webp"



interface Point {
    head: string,
    para: string,
    btn: string,
    numb: string,
    secPara: string,
    img: string | StaticImageData,
}
interface Point1 {
    imge: string | StaticImageData,
    head2: string,
    thirdPara: string,
}

export const data1: Point1[] = [
    {
        imge: card1,
        head2: 'Complete legal and security reviews',
        thirdPara: 'Our team ensures that your organizations requirements are met.',
    },
    {
        imge: card2,
        head2: 'Set up your account for scale',
        thirdPara: 'Implementation experts customize onboarding and guide setup.',
    },
    {
        imge: card3,
        head2: 'Establish and hit your goals',
        thirdPara: 'Success partners help you get the most out of your subscription.',
    },
    {
        imge: card4,
        head2: 'Skip the line if anything comes up',
        thirdPara: 'Product specialists are available 24/7 to support your team.',
    }
]

export const data: Point[] = [
    {
        head: "Create more efficient and productive teams",
        para: "Speed up scheduling without disrupting your flow. Calendly connects to the tools, apps, and browsers where your team does their best work.",
        btn: "View 100+ integrations ",
        numb: '160%',
        secPara: 'more customers reached',
        img: img1,
    },
    {
        head: "Improve company performance and customer experience",
        para: "Make it easy for qualified leads to reach you. Time-saving automations empower client and candidate-facing teams to convert leads, faster.",
        btn: "Discover calendly Routing",
        numb: '22x',
        secPara: 'interviews scheduled',
        img: img2,
    },
    {
        head: "Reduce the total cost of ownership",
        para: "Consolidate your software investments with a single platform that meets the needs of recruiting, sales, and other meeting-heavy teams.",
        btn: "Learn about team scheduling",
        numb: '323%',
        secPara: 'return on investment',
        img: img3,
    },
]


