import { createContext } from 'react';

export const QuestionSteps = { unset: 0, fadeIn: 1 };
export const ResultState = { steps: QuestionSteps.unset };
export const ResultContext = createContext(ResultState);
