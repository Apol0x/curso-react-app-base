import React, { PropTypes } from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }
  }

  onChange = () => {
    
  }

  onSubmit = () => {
    
  }
  render() {
    return <div>
        <label>Busca un repositorio</label>
        <input type='text' className="u-full-width" placeholder="react webpack ...etc"
        onChange={this.onChange()} defaultValue={this.state.search}/>
        <p className="align-left">
          <input type="submit" className="button-primary" value="Buscar"/> 
        </p>
      </div>
    
  }
}

// Export the class
export default SearchForm;
