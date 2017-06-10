import React from 'react';
import ImageLink from 'components/ImageLink/ImageLink';
import Button from 'components/Button/Button';
import Section from 'components/Section/Section';
import style from 'components/Instagram/Instagram.style';

const images = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const Instagram = () => {
  const header = (
    <div style={style.header}>
      <ImageLink
        src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png"
      />
    </div>
  );

  const button = <Button>Go to Instagram</Button>;

  return (
    <Section
      header={header}
      button={button}
      inverse
    >
      <ul style={style.container}>
        {
          images.map(({ id }) => (
            <li
              style={style.image}
              key={id}
            >
              <div style={style.imageWrapper}>
                <ImageLink />
              </div>

              <div style={style.aspectRatio} />
            </li>
          ))
        }
      </ul>
    </Section>
  );
};

export default Instagram;
