import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Example extends Component {
	render() {
		return (
			<div>
				Example
			</div>
		);
	}
}

Example.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
