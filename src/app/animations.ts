import { animation, animate, style } from '@angular/animations';

export const transAnimation = animation([
  style({
    width: '{{ width }}%',
  }),
  animate('{{ time }}'),
]);
