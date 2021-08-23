import { createContext } from 'react';

export const counterCtx = createContext({ count: 0, setCount: () => undefined });

