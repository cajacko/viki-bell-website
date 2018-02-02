import React, { Component } from 'react';
import Single from 'components/Single/Single.render';
import Item from 'components/Item/Item';
import Loading from 'components/Loading/Loading';
import ContentError from 'components/ContentError/ContentError';
import FourOhFour from 'components/FourOhFour/FourOhFour';

class SingleComponent extends Component {
  componentDidMount() {
    if (this.props.init) {
      this.props.getContent();
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    if (this.props.fourOhFour) {
      return <FourOhFour />;
    }

    if (this.props.error) {
      return <ContentError error={this.props.error} />;
    }

    return (
      <Item
        element={Single}
        itemId={this.props.id}
        slug={this.props.slug}
        type={this.props.type}
      />
    );
  }
}

export default SingleComponent;
