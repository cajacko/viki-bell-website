import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import ProjectLoopItem from 'components/ProjectLoopItem/ProjectLoopItem';

class ProjectLoop extends Component {
  constructor(props) {
    super(props);
    this.getNextPostsIfShould = this.getNextPostsIfShould.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getNextPostsIfShould);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getNextPostsIfShould);
  }

  getNextPostsIfShould() {
    if (this.props.loading) {
      return;
    }

    const bottomPosition = window.pageYOffset + window.innerHeight;
    const bottomSpacing = document.body.offsetHeight - bottomPosition;

    if (bottomSpacing > 3000) {
      return;
    }

    this.props.getNextPosts();
  }

  render() {
    let content;

    if (this.props.projects.length === 0) {
      if (this.props.loading) {
        content = <p>Loading</p>;
      } else {
        return null;
      }
    } else {
      content = (
        <main id="Projects-loop" className="Projects-loop">
          {
            this.props.projects.map(id => (
              <Item key={id} itemId={id} element={ProjectLoopItem} />
            ))
          }
        </main>
      );
    }

    return (
      <div className="Projects">
        <h2 className="Projects-title">{this.props.title}</h2>
        {content}
      </div>
    );
  }
}

ProjectLoop.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  getNextPosts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProjectLoop;
