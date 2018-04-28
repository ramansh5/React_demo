import React from 'react';
import { connect } from 'react-redux';
import * as destinationActions from '../actions/destinationActions';

class Home extends React.Component{
constructor(props){
	super(props);
	this.state = {
		city:'',
		loader:'hide',
		notFound:'hide'
	};
	this.findDestinations = this.findDestinations.bind(this);
}

findDestinations(){
	if(this.refs.name.value){
		this.setState({ city: this.refs.name.value,loader:'show',notFound:'hide'});
		this.props.getDestinations(this.refs.name.value);
	}
}
componentWillReceiveProps(newProps) {    
	this.setState({loader:'hide'});
	console.log(newProps.destinations);
	if(newProps.destinations.length){
		this.setState({notFound:'hide'});
	}else{
		this.setState({notFound:'show'});
	}
}
	render(){
		return (
			<div>
				 <div className="section no-pad-bot" id="index-banner">
				    <div className="container">
				    	<h5>Welcome to the city view, to find top destinations for a city type the name of the city below and get all the top destinations for that city.</h5>
				      <br/><br/>
				      <h3 className="header center orange-text">Please enter place name</h3>
				      <div className="row center">
				        <div className="row">
						    <form className="col s12">
						      <div className="row">
						        <div className="input-field col s12">
						          <input ref="name" type="text" className="validate center-align" />
						        </div>
						      </div>
						    </form>
						  </div>
				      </div>
				      <div className="row center">
				        <button type="button" onClick={this.findDestinations} className="btn-large waves-effect waves-light orange">View</button>
				      </div>
				      <br/>
				      <br/>

				    </div>
				  </div>
					<div className={this.state.loader+" center-align"}>
						<div className="preloader-wrapper big active center-align">
							<div className="spinner-layer spinner-blue-only">
								<div className="circle-clipper left">
									<div className="circle"></div>
								</div><div className="gap-patch">
									<div className="circle"></div>
								</div><div className="circle-clipper right">
									<div className="circle"></div>
								</div>
							</div>
						</div>
					</div>
					<div className={this.state.notFound+' center-align'}>
						<h4 >No destinations found for this Entry</h4>
					</div>
					<div className="row">
						<div className="col s6 offset-s3">
							<ul className="collapsible" data-collapsible="accordion">
								<div className={this.props.destinations.length ? '':'hide' }>
								<h3 className="header center orange-text">Top destinations in {this.state.city}</h3>
								</div>
								{this.props.destinations.map((b, i) => 
									<li key={i}>
											<div className="collapsible-header">{b.name}</div>
											<div className="collapsible-body orange-text">
												<span>Name:<label className="blue-text">{b.name}</label></span><br/>
												<span>Address:<label className="blue-text">{b.formatted_address}</label></span><br/>
												<span>Place Rating:<label className="blue-text">{b.rating}</label></span><br/>
											</div>
										</li>
									)
								}
								</ul>
						</div>
					</div>
				  <footer className="page-footer orange">
				    <div className="container">
				      <div className="row">
				        <div className="col l6 s12">
				          <h5 className="white-text">Company Bio</h5>
				          <p className="grey-text text-lighten-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


				        </div>
				        <div className="col l3 s12">
				          <h5 className="white-text">Settings</h5>
				          <ul>
				            <li><a className="white-text" href="#!">Link 1</a></li>
				            <li><a className="white-text" href="#!">Link 2</a></li>
				            <li><a className="white-text" href="#!">Link 3</a></li>
				            <li><a className="white-text" href="#!">Link 4</a></li>
				          </ul>
				        </div>
				        <div className="col l3 s12">
				          <h5 className="white-text">Connect</h5>
				          <ul>
				            <li><a className="white-text" href="#!">Link 1</a></li>
				            <li><a className="white-text" href="#!">Link 2</a></li>
				            <li><a className="white-text" href="#!">Link 3</a></li>
				            <li><a className="white-text" href="#!">Link 4</a></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				    <div className="footer-copyright">
				      <div className="container">
				      Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
				      </div>
				    </div>
				  </footer>
			</div>
		);
	}
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    destinations: state.destinations
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    getDestinations: destinations => dispatch(destinationActions.getDestinations(destinations))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Home);