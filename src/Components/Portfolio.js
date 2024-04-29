import React, { Component } from "react";
import Modal from "react-modal";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalImage: ""
    };
  }

  openModal = (imageSrc) => {
    this.setState({ modalIsOpen: true, modalImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { data } = this.props;

    if (!data || !data.projects) return null;

    const projects = data.projects.map((project, index) => {
      const projectImage = `images/portfolio/${project.image}`;

      return (
        <div key={index} className="columns portfolio-item">
          <div className="item-wrap" onClick={() => this.openModal(projectImage)}>
            <Zmage alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Aqui você pode ver alguns de meus Projetos.</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>

              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Imagem do Projeto"
              >
                <Zmage alt="Imagem do Projeto" src={this.state.modalImage} />
                <button onClick={this.closeModal}>Fechar</button>
              </Modal>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
