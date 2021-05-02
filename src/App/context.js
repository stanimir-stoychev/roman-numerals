import { createContext } from 'react';

const context = createContext({ history: [[], () => {}] });
context.displayName = 'Roman Numerals converter context';
export default context;
