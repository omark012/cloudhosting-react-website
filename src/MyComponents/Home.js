import React from 'react'
import { FaServer, FaUpload, FaProjectDiagram } from 'react-icons/fa'
import cli from '../images/cli.png'
import cloud from '../images/cloud.png'
import { cardData } from '../Data/cardData'



export const Home = () => {
    return (
        <>
            <section className="showcase">
                <div className="container grid">
                    <div className="showcase-text">
                        <h1>Easier Deployment</h1>
                        <p>Cloud hosting makes applications and websites accessible using cloud resources. Unlike traditional hosting, solutions are not deployed on a single server.</p>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                    <div className="showcase-form card">
                        <h2>Request a Demo</h2>
                        <form>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="company" placeholder="Company Name" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            <section className="stats">
                <div className="container">
                    <h3 className="stats-heading text-center ">
                        welcome to the best platform for building applications of all types with modern architecture and scaling
                    </h3>
                    <div className="text-center grid grid-3 my-4">
                        <div>
                            <i><FaServer size="3rem" /></i>
                            <h3>1,13,45,678</h3>
                            <p className="text-secondary my-1">Deployments</p>
                        </div>
                        <div>
                            <i><FaUpload size="3rem" /></i>
                            <h3>987 TB</h3>
                            <p className="text-secondary my-1">Published</p>
                        </div>
                        <div>
                            <i><FaProjectDiagram size="3rem" /></i>
                            <h3>20,50,452</h3>
                            <p className="text-secondary my-1">Projects</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cli my-4">
                <div className="container grid ">
                    <img src={cli} alt="Command Line Interface" />
                    <h3 className="card">Easy to use,Cross platform cli</h3>
                    <h3 className="card">Deploys in seconds</h3>
                </div>
            </section>

            <section className="cloud my-1">
                <div className="container grid">
                    <div className="text-center p-5">
                        <h2 className="md">Extreme Cloud Hosting</h2>
                        <p className="lead my-1">Cloud hosting like you've never seen.Fast,efficient and scalable</p>
                        <button className="btn btn-dark ">Read More</button>
                    </div>
                    <div>
                        <img src={cloud} alt="Cloud Image" />
                    </div>
                </div>
            </section>

            <section className="languages my-4">
                <h2 className="text-center my-3">Supported Languages</h2>

                <div className="container flex p-3 text-center">
                    {cardData.map((card) =>
                    (
                        <div key={card.id} className="card">
                            <h4 className="lead my-1">{card.text}</h4>
                            <img src={card.img} alt="" />
                        </div>
                    )
                    )}
                </div>
            </section>


        </>
    )
}
