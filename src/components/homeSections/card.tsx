import React from 'react'
import Image from 'next/image'
import img from "../../components/homeSections/images/images_card.webp"


function Card() {
    return (
        <div className='mt-[30px] mb-[60px]'>
            <div className='container'>
                <div className='flex m-auto w-[100%]'>
                    <div className='images_card w-[50%]'>
                        <Image src={img} width={500} height={400} className="me-3" alt="Calendar Logo" />
                    </div>
                    <div className='contentss w-[50%]'>
                        <h1 className='text-[2.125rem] leading-[1.2] font-bold  text-[rgb(11,53,88)] mb-10'>The security and oversight your IT team needs</h1>
                        <p className='text-[grey]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi maiores
                            quod nobis nesciunt voluptatum corporis rerum consequatur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sequi, ea? Ipsam aliquam tenetur aperiam quos cumque quis adipisci
                            at quas distinctio accusamus voluptas, dolorem alias. Laboriosam
                            reprehenderit debitis minima sapiente ad
                            harum quidem est excepturi, ipsa adipisci exercitationem voluptatibus,
                            suscipit quos quam debitis non similique aperiam illum! Fugiat rem
                            voluptatibus ad excepturi omnis amet impedit quo neque natus, cum
                            enim maiores deleniti dignissimos consequuntur. Doloremque?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;