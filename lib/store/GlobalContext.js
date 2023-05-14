import { createContext } from 'react';

const GlobalContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export default GlobalContext;
