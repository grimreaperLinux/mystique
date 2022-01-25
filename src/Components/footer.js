import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return <>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">

                    <section class="mb-4">

                        <FontAwesomeIcon icon={['fab', 'apple']} />


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2022 Copyright: 
                    <a className="text-white" href="https://mdbootstrap.com/"> mystiquegallery.xyz</a>
                </div>

            </footer>

    </>
}