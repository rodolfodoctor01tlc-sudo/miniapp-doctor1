// STEP 4: the things your app shows. Change these to YOUR theme.
// No database: the list is written here in the code.
export type Item = {
	id: string;
	name: string;
	tag: string; // a short label: a price, a date, or a category
	emoji: string;
	description: string;
};
export const ITEMS: Item[] = [
	{ id: '1', name: 'Iced Coffee', tag: '₱90', emoji: '🧋', description: 'Cold brew with milk and brown sugar.' },
	{ id: '2', name: 'Hot Chocolate', tag: '₱85', emoji: '☕', description: 'Thick tablea chocolate, served hot.' },
	{ id: '3', name: 'Ube Cheese Pandesal', tag: '₱25', emoji: '🍞', description: 'Soft bread with ube and cheese filling.' },
	{ id: '4', name: 'Ham and Egg Sandwich', tag: '₱75', emoji: '🥪', description: 'Toasted bread, ham, egg and lettuce.' },
	{ id: '5', name: 'Banana Cake', tag: '₱60', emoji: '🍰', description: 'Moist banana cake, one slice.' },
	{ id: '6', name: 'Calamansi Juice', tag: '₱50', emoji: '🍹', description: 'Fresh calamansi with honey, served cold.' },
];
export const APP_NAME = 'Kapehan';