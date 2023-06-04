import { createContext } from 'react';

export const LandingPage = { home: 0, question: 1 };
export const LandingSteps = { unset: 0, fadeIn: 1 };
export const LandingState = { steps: LandingSteps.unset, page: LandingPage.home };
export const LandingContext = createContext(LandingState);
