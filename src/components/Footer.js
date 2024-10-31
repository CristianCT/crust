export default function Footer () {
    return (
        
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "black", marginTop: 100 }}>
            <div className="container p-4 pb-0">
                <section className="">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <img src="../images/CT-CRUST.png" width="100%" style={{ margin: 20 }} alt="Wait CRUST img" />
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">ABOUT US</h6>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">SERVICES</h6>
                            <ul>
                                <li><a className="text-white text-link" href="/">Your Account</a></li>
                                <li><a className="text-white text-link" href="/">Become an Affiliate</a></li>
                                <li><a className="text-white text-link" href="/">Shipping Rates</a></li>
                                <li><a className="text-white text-link" href="/">Help</a></li>
                            </ul>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </section>

                <hr className="my-3" />

                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">
                                © 2021 Copyright: 
                                <a className="text-white text-link" href="https://mdbootstrap.com/" target="_blank" rel="noreferrer"> CRUST.com</a>
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a className="btn btn-outline-light btn-circle m-1 text-white text-link" href="/" role="button"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-circle m-1 text-white text-link" href="/" role="button"><i className="fab fa-whatsapp"></i></a>
                            <a className="btn btn-outline-light btn-circle m-1 text-white text-link" href="/" role="button"><i className="fab fa-google"></i></a>
                            <a className="btn btn-outline-light btn-circle m-1 text-white text-link" href="/" role="button"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}