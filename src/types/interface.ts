import { Bars, Buttons, Limit, Index } from './shapes';

export interface Response {
  buttons: Buttons;
  bars: Bars;
  limit: Limit;
  currentIndex: Index;
}
