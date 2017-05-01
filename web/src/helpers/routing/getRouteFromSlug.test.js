import getRouteFromSlug from 'helpers/routing/getRouteFromSlug';

it('returns prop', () => {
  expect(getRouteFromSlug('hello')).toEqual('hello');
});
