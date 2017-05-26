import React, { PureComponent } from 'react'
import BioToolsFetch from './BioToolsData'
import { PageHeader } from 'react-bootstrap'
import * as R from 'ramda'

function getStateObject (id) {
  switch (id) {
    case '1d-dna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="dna-sequence"',
        header: '1D DNA Services',
        message: 'DNA sequences',
      }
    case '2d-dna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="dna-secondary-structure"',
        header: '2D DNA Services',
        message: 'secondary DNA structures',
      }
    case '3d-dna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="dna-structure"',
        header: '3D DNA Services',
        message: 'DNA structures',
      }
    case 'xd-dna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="genomics"',
        header: 'xD DNA Services',
        message: 'DNA-omics',
      }
    case '1d-rna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="rna-sequence"',
        header: '1D RNA Services',
        message: 'RNA sequences',
      }
    case '2d-rna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="rna-secondary-structure"',
        header: '2D RNA Services',
        message: 'secondary RNA structures',
      }
    case '3d-rna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="rna-structure"',
        header: '3D RNA Services',
        message: 'RNA structures',
      }
    case 'xd-rna-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="rna-omics"',
        header: 'xD RNA Services',
        message: 'RNA-omics',
      }
    case '1d-protein-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="protein-sequence"',
        header: '1D Protein Services',
        message: 'protein sequences',
      }
    case '2d-protein-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="protein-secondary-structure"',
        header: '2D Protein Services',
        message: 'secondary protein structures',
      }
    case '3d-protein-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="protein-structure"',
        header: '3D Protein Services',
        message: 'protein structures',
      }
    case 'xd-protein-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="protein-omics"',
        header: 'xD Protein Services',
        message: 'proteomics',
      }
    case '1d-drug-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="small-molecule-primary-sequence"',
        header: '1D Drug Services',
        message: 'primary structures for small molecules',
      }
    case '2d-drug-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="small-molecule-secondary-structure"',
        header: '2D Drug Services',
        message: 'secondary structures for small molecules',
      }
    case '3d-drug-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="small-molecule-structure"',
        header: '3D Drug Services',
        message: 'structures for small molecules',
      }
    case 'xd-drug-services':
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&q="small-molecule-omics"',
        header: 'xD Drug Services',
        message: 'small "moleculeomics"',
      }
    default:
      return {
        query: 'https://bio.tools/api/tool/?collectionID=elixir-cz&sort=lastUpdate&ord=asc&',
        header: 'ELIXIR CZ',
        message: 'DNA, RNA, protein and drugs',
      }
  }
}

class Services extends PureComponent {
  constructor (props) {
    super(props)
    const newState = getStateObject(props.match.params.id)
    this.state = { ...newState }
  }

  componentWillReceiveProps (newProps) {
    if (!R.equals(newProps, this.props)) {
      const newState = getStateObject(newProps.match.params.id)

      this.setState({ ...newState })
    }
  }

  render () {
    return (
      <div>
        <PageHeader>{this.state.header} <small>All ELIXIR CZ services for studies on {this.state.message}</small></PageHeader>
        <h4>Query string used: {this.state.query}</h4>
        <BioToolsFetch url={this.state.query} />
      </div>
    )
  }
}

export default Services
