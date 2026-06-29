import { drinks }    from '../data/drinks.js';
import { DrinkList } from './DrinkList.js';

// Browse page — only runs when #drink-grid exists
const grid = document.getElementById('drink-grid');
if (grid) {
  new DrinkList(grid, drinks).init();
}
