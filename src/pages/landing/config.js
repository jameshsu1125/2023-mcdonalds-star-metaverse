import { createContext } from 'react';

export const LandingSteps = { unset: 0, fadeIn: 1, fadeIned: 2, buttonFadeIned: 3 };
export const LandingState = { steps: LandingSteps.unset };
export const LandingContext = createContext(LandingState);
