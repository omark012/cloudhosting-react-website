import React from 'react'
import { FaInfo } from 'react-icons/fa'
import docs from '../images/docs.png'

export const Docs = () => {
    return (
        <div>
            <section className="docs-head bg-primary py-2">
                <div className="container grid">
                    <div className="docs-text my-3">
                        <h1 className="lg">Docs</h1>
                        <p className="lead">Learn how to setup and install Cloudways platform </p>
                    </div>
                    <img src={docs} alt="" />
                </div>
            </section>

            <section className="docs-main my-5">
                <div className="container grid">
                    <div className="card bg-light p-3">
                        <h3>Essentials</h3>
                        <nav className="my-2">
                            <ul>
                                <li ><a className="text-primary" href="">Introduction</a></li>
                                <li><a href="">About Cloud</a></li>
                                <li><a href="">Installation</a></li>
                            </ul>
                        </nav>

                        <h3>Deployment</h3>
                        <nav className="my-2">
                            <ul>
                                <li><a href="">Setting up a container</a></li>
                                <li><a href="">Using the cli</a></li>
                                <li><a href="">Managing resources</a></li>
                                <li><a href="">Upgrade & downgrade</a></li>

                            </ul>
                        </nav>

                    </div>

                    <div className="card p-1">
                        <h3>Introduction</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate architecto, dolorem omnis, obcaecati quod ipsa a sed odio nobis animi quaerat. Temporibus aliquid explicabo reiciendis at assumenda itaque quas eius?</p>

                        <div className="alert alert-success flex">
                            <i><FaInfo /></i>
                            <p>Lorem, ipsum dolor sit amet adipisicing elit. Labore, veniam?</p>
                        </div>

                        <h3>Lorem</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam tempora id qui esse dolor libero?</p>
                        <button className="btn btn-primary my-1">Install CLI</button>

                        <h3>Requirements</h3>
                        <ul>
                            <li>Windows 10,Mac OSX,Linux</li>
                            <li>Node.js v12 or higher</li>
                        </ul>

                        <h3>Install</h3>
                        <p>Mac (Homebrew)</p>
                        <pre><code>$ brew install loruki-cli</code></pre>
                        <p>NPM</p>
                        <pre><code>$ npm install loruki-cli</code></pre>
                        <p>Yarn</p>
                        <pre><code>$ yarn install loruki-cli</code></pre>


                    </div>
                </div>
            </section>

        </div>
    )
}
