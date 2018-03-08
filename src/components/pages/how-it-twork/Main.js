import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        <section className="section" id="intro">
          <div className="container">
            <div className="row">
              <div id="img-box" className="col col-desktop-4 col-6">
                <img src="images/quem-somos/quem-somos_01.jpg" alt="" />
              </div>
              <div className="col col-desktop-8">
                <h2>Quem somos</h2>
                <p>Aenean sollicitudin, lorem quis bibendum. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. Aenean sollicitudin, lorem quis bibendum. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. Aenean sollicitudin, lorem quis bibendum. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-center" id="valores">
          <div className="container">
            <div className="row">
              <div className="col col-desktop-4">
                <img src="images/quem-somos/quem-somos_02.jpg" alt="" />
                <h2>Missão</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Ut enim ad minim, nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.</p>
              </div>
              <div className="col col-desktop-4">
                <img src="images/quem-somos/quem-somos_03.jpg" alt="" />
                <h2>Visão</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Ut enim ad minim, nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.</p>
              </div>
              <div className="col col-desktop-4">
                <img src="images/quem-somos/quem-somos_04.jpg" alt="" />
                <h2>Valores</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Ut enim ad minim, nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Main