import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import LandingPage from '../src/LandingPage';
import NotFoundPage from '../src/NotFoundPage';
import App from '../src/App';

// test('renders learn react link', () => {
//   const wrapper = mount(<App />);
//   expect(wrapper.exists('div')).toBe(true);
// });

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LandingPage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LandingPage)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});
