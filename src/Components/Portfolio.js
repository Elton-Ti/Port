import React, { Component } from "react";
import Modal from "react-modal";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { FaTimes } from "react-icons/fa";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalImage: "",
      modalUrl: ""
    };
  }

  openModal = (imageSrc, projectUrl) => {
    this.setState({ modalIsOpen: true, modalImage: imageSrc, modalUrl: projectUrl });
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
          <div className="item-wrap" onClick={() => this.openModal(projectImage, project.url)}>
            <Zmage alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center", }}>
              {project.title}
            </div>
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
                className="custom-modal"
                overlayClassName="custom-overlay"
              >
                <div className="modal-close" onClick={this.closeModal}><FaTimes /></div>
                <div className="modal-content">
                  <Zmage alt="Imagem do Projeto" src={this.state.modalImage} />
                </div>
                <a href={this.state.modalUrl} target="_blank" rel="noopener noreferrer">Saiba mais ...</a>
              </Modal>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
