import React  from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {

        return (
            <div>
							<nav className="navbar-fixed light-blue lighten-1" role="navigation">
								<div className="nav-wrapper container"><Link id="logo-container" to="/" className="brand-logo">City View</Link>
									<ul className="right hide-on-med-and-down">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about">About</Link></li>
									</ul>

									<ul id="nav-mobile" className="side-nav">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about">About</Link></li>
									</ul>
									<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
								</div>
							</nav>
                {this.props.children}
            </div>
        );
    }
};

export default App