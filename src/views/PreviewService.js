import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap'

export default class PreviewService extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ paddingTop: 150, paddingBottom: 100, backgroundImage: "url('../images/wd1.png')"  }}>
          <div className="container ">
            <h1 className="display-2 text-white">Nombre del servicio!</h1>
            <p className="text-white">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-outline-light btn-lg" href="/" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
        <div className="form-contact-service m-3">          
          <div className="col-md-5 m-4">
            <img src="../images/man.png" alt="..."/>
          </div>
          <div className="col-md-5 m-5" style={{ backgroundColor: "#F0F0F0", borderRadius: 50 }}>
            <div className="title-card-contact">
              <h2 className="display-5 text-center" >
                Contactanos
              </h2>
            </div>
            <form className="form-floating m-5 mt-3">
              
              <div className="form-floating mb-3">
                <input type="text" id="formName" className="form-control" placeholder="Name"/>
                <label for="formName">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" id="formEmail" className="form-control" placeholder="Email Address"/>
                <label for="formEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" id="formCell" className="form-control" placeholder="Cellphone Number"/>
                <label for="formCell">Cellphone Number</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" id="formJob" className="form-control" placeholder="Job Title"/>
                <label for="formJob">Job Title</label>
              </div>

              <div className="form-floating mb-3 ">
                <textarea className="form-control" id="formMessage" placeholder="Message" style={{ height: 150 }}></textarea>
                <label for="formMessage">Message</label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-info" style={{ borderRadius: 50, height: 50, fontSize: 20, backgroundColor: "#3BC2D2" }}>Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}
/* https://wallpapercave.com/w/wp3985137 */