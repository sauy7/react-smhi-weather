/**
 * Tests run in a node environment, not a browser, so we need to mock any
 * required browser API features
 *
 * @see https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment
 * @type {{getCurrentPosition: jest.Mock<{}> | jest.Mock<any> | any, watchPosition: jest.Mock<{}> | jest.Mock<any> | any}}
 */
const geolocationMock = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};
global.navigator.geolocation = geolocationMock;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
