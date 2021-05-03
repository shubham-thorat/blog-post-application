import React from 'react'
import Footer from '../components/Footer';
import SubmitPost from '../components/Form/FetchData';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts/Posts';

function FrontPage() {
    return (
        <div>
            <Navbar />
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Album example</h1>
                            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Create New Post
                                </button>
                            </p>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                     <SubmitPost/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Posts />
            </main>
            <Footer />
        </div>
    )
}

export default FrontPage
