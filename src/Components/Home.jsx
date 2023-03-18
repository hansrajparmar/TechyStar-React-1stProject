import React from 'react'
import vg from "../Assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return(
    <>
         <div className='home' id="home">
            <main>
                <h1>TechyStar</h1>
                <p>Solutions to all your Problems </p>
            </main>

          </div>

          <div className="home2">
            <img src={vg} alt="Graphics" />

            <div>
                <p>
                    We are your one and only Solution to the tech Problems
                    you face every day. We are leading tech company whose aim
                    is to increase the problem solving ability in children.
                </p>
            </div>
          </div>

          <div className="home3" id="about">
            <div>
                <h1>Who we are ?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Sunt tempore tenetur magnam voluptas tempora, ducimus quae cupiditate aut neque numquam!
                    Quis enim eligendi quia vero quae doloremque possimus. At iusto fugit harum inventore atque dolorum aliquam quaerat
                    labore, praesentium, cum, qui minima quidem? Atque quas aliquam reiciendis libero labore laborum dolore 
                    molestias saepe error veniam aspernatur, deserunt ratione accusamus veritatis quia distinctio sequi quasi 
                    obcaecati fugit enim unde non dolor! Laboriosam consequatur libero nemo tempore qui officiis perferendis saepe. Laboriosam cupiditate atque, cum quis autem voluptate ducimus dignissimos. Nam molestias atque tempore optio voluptatibus quibusdam modi error reiciendis! Eos, dolorem?</p>

            </div>
          </div>

          <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s"
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>


                    <div style={{
                        animationDelay:"0.5s"
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>


                    <div style={{
                        animationDelay:"0.7s"
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>


                    <div style={{
                        animationDelay:"1s"
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>


                </article>
            </div>
          </div>
    </>
  )
}

export default Home