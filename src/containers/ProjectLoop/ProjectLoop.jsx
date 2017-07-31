import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectLoop from 'components/ProjectLoop/ProjectLoop';
import { getSortedProjectsFromItems } from 'helpers/projectsFromItems';
import getProjects from 'actions/getProjects';

class ProjectLoopContainer extends Component {
  constructor(props) {
    super(props);

    const projects = getSortedProjectsFromItems(props.items);

    this.state = {
      title: props.title,
      projects,
    };

    this.getNextPosts = this.getNextPosts.bind(this);
  }

  componentDidMount() {
    if (
      this.state.projects.length < this.props.projectsPerLoad &&
      this.props.noMoreProjects === false &&
      this.props.loading === false
    ) {
      this.props.dispatch(getProjects(this.props.projectsPerLoad));
    }
  }

  componentWillReceiveProps({ items, title }) {
    const projects = getSortedProjectsFromItems(items);

    this.setState({
      title,
      projects,
    });
  }

  getNextPosts() {
    if (this.props.loading) {
      return;
    }

    if (this.props.noMoreProjects) {
      return;
    }

    this.props.dispatch(getProjects(
      this.props.projectsPerLoad,
      this.state.projects.length,
    ));
  }

  render() {
    return (
      <ProjectLoop
        title={this.state.title}
        projects={this.state.projects}
        getNextPosts={this.getNextPosts}
        noMoreProjects={this.props.noMoreProjects}
        loading={this.props.loading}
      />
    );
  }
}

ProjectLoopContainer.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  projectsPerLoad: PropTypes.number.isRequired,
  noMoreProjects: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps({ items, noMoreProjects, loading }) {
  return { items, noMoreProjects, loading };
}

export default connect(mapStateToProps)(ProjectLoopContainer);
