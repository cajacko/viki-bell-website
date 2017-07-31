import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import FourOhFourDefault from 'components/FourOhFourDefault/FourOhFourDefault';
import removeLoading from 'helpers/removeLoading';

let mounted = false;

const Template = ({
  noItem,
  components,
  loading,
  templateDataItem,
  noTemplateData,
}) => {
  if (noTemplateData && loading) {
    return null;
  } else if (noItem) {
    if (loading) {
      return null;
    }

    if (mounted === false) {
      mounted = true;
      removeLoading();
    }

    return <FourOhFourDefault />;
  }

  if (mounted === false) {
    mounted = true;
    removeLoading();
  }

  if (!components) {
    return null;
  }

  let i = 0;

  return (
    <div>
      {
        components.map((id) => {
          i += 0;

          const key = `${i}-${id}`;

          return (
            <Item
              key={key}
              itemId={id}
              templateDataItem={templateDataItem}
            />
          );
        })
      }
    </div>
  );
};

Template.propTypes = {
  noItem: PropTypes.bool,
  loading: PropTypes.bool,
  templateDataItem: PropTypes.string,
  components: PropTypes.arrayOf(PropTypes.string),
  noTemplateData: PropTypes.bool.isRequired,
};

Template.defaultProps = {
  noItem: false,
  fields: null,
  loading: false,
  templateDataItem: null,
  components: null,
};


export default Template;
