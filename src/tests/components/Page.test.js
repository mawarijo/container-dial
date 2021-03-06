import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '../../components/Page';

describe('Page component', () => {
  const props = {
    container: {
      name: 'Default',
      color: 'black'
    },
    theme: {
      primary: '#333',
      dark: '#000',
      light: '#fff'
    },
    background: {
      container: 'Default',
      image: {
        urls: {
          full: 'image.jpg'
        }
      }
    }
  };
  const wrapper = shallow(<Page {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sets background to image if supplied in prop', () => {
    const bg = wrapper.find('Styled(div)').at(1);
    expect(bg.prop('background')).toBe(props.background);
  });

  it('sets title text to container name', () => {
    const title = wrapper.find('Styled(h1)').dive();
    expect(title.text()).toBe(props.container.name);
  });
});
