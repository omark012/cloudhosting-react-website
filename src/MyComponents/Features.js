import React from 'react'
import { FaDatabase, FaLaptop, FaPowerOff, FaServer, FaUnity, FaUpload } from 'react-icons/fa'
import server from '../images/server.png'
import server2 from '../images/server2.png'


export const Features = () => {
  return (
    <div>
      <section className="features-head bg-primary py-2">
        <div className="container grid">
          <div className="features-text">
            <h1 className="xl">Features</h1>
            <p className="lead">Check out the feature of Cloudways that seperates us from the competition</p>
          </div>
          <img src={server} alt="Server" />
        </div>
      </section>

      <section className="features-sub-head bg-light py-2">
        <div className="container grid">
          <div>
            <h2 className="md">The Cloudways Platform</h2>
            <p className="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos voluptas esse cupiditate nemo atque reprehenderit iste dolor rerum quas labore, pariatur doloremque iusto debitis consectetur dolores excepturi. Deserunt, sunt.</p>
          </div>
          <img src={server2} alt="" />
        </div>
      </section>

      <section className="features-main my-4">
        <div className="container grid grid-3">
          <div className="card flex">
            <i><FaServer size="2.4rem" /></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum quae accusantium, impedit voluptatem iusto animi id repellat optio deleniti ipsum, possimus enim est quaerat excepturi maxime! Libero, fugit assumenda! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat.</p>
          </div>
          <div className="card flex">
            <i><FaDatabase size="2.4rem" /></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum quae accusantium, impedit voluptatem iusto animi id repellat optio deleniti ipsum, </p>
          </div>
          <div className="card flex">
            <i><FaPowerOff size="2.4rem" /></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum quae harum </p>
          </div>
          <div className="card flex">
            <i><FaUpload size="2.4rem" /></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum quae accusantium </p>
          </div>
          <div className="card flex">
            <i><FaLaptop size="2.4rem" /></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum quae accusantium </p>
          </div>
          <div className="card flex">
            <i><FaUnity size="2.4rem" /></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor. Lorem, ipsum.  </p>
          </div>
        </div>
      </section>
    </div>
  )
}
