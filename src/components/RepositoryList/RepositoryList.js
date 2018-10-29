import React, { PropTypes } from 'react';

/**
 * Componentes
 *
 */
import RepositoryRow from '../RepositoryRow';
import HintMessage from '../HintMessage';



/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
  }
  renderMessage(){
    let text = "";
    let l = this.props.repositories.length;

    if (this.props.loading) {
      text = <span>Buscando resultados para <b>{this.props.search}</b></span>;
    } else if (l > 0) {
      text = <span>Hemos encontrado <b>{l}</b> resultados para : <b>{this.props.search}</b></span>
    } else if (l === 0 && this.props.queried) {
      text = <span>
        No hemos podidos encotrar resultados para <b>{this.props.search}</b>
      </span>
    } else {
      text = "Escriba el nombre del repositorio y pulse en Buscar.";
    };
    return (
    <HintMessage>{text}</HintMessage>
    );
  }
  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
      {this.renderMessage}
    </section>;
  }
}

// Export the class
export default RepositoryList;
