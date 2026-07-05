import { createContext } from 'react';
import type {ITelegramUser, IWebApp} from 'shared/types/telegram.ts';

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});
