export type SelectElement = {
	id: number;
	title: string;
};

export type Link = {
	title: string;
	path: string;
};

//constant arrays

export const links: Link[] = [
	{ path: '/saeson', title: 'Sæsonplan' },
	{ path: '/ratingliste', title: 'Ratingliste' },
	{ path: '/holdturnering', title: 'Holdturnering' },
	{ path: '/stævne', title: 'Stævne' },
	{ path: '/spillere', title: 'Spillere' },
	{ path: '/klubber', title: 'Klubber' },
	{ path: '/create_account', title: 'Create account' },
];

export const ageGroups: SelectElement[] = [
	{
		id: 0,
		title: '',
	},
	{
		id: 1,
		title: 'Puslinge',
	},
	{
		id: 2,
		title: 'Ydr/Ypg',
	},
	{
		id: 3,
		title: 'Dr/Pg',
	},
	{
		id: 4,
		title: 'Junior',
	},
	{
		id: 5,
		title: 'U 21',
	},
	{
		id: 6,
		title: 'Senior',
	},
	{
		id: 7,
		title: 'Old Girls',
	},
	{
		id: 8,
		title: 'Veteran 40',
	},
	{
		id: 9,
		title: 'Veteran 50',
	},
	{
		id: 10,
		title: 'Veteran 60',
	},
	{
		id: 11,
		title: 'Veteran 65',
	},
	{
		id: 12,
		title: 'Veteran 70',
	},
	{
		id: 13,
		title: 'Veteran 75',
	},
	{
		id: 14,
		title: 'Veteran 80',
	},
	{
		id: 15,
		title: 'Veteran 85',
	},
	{
		id: 16,
		title: 'Ungdom',
	},
	{
		id: 17,
		title: 'Minipuslinge',
	},
	{
		id: 18,
		title: 'Oldies',
	},
	{
		id: 19,
		title: 'Veteran',
	},
];

export const regi: SelectElement[] = [
	{
		id: 0,
		title: '',
	},
	{
		id: 1,
		title: 'Bordtennis Danmar/DT',
	},
	{
		id: 2,
		title: 'DGI Bornholm',
	},
	{
		id: 3,
		title: 'DGI Jylland Nord',
	},
	{
		id: 4,
		title: 'DGI Jylland Syd',
	},
	{
		id: 5,
		title: 'DGI Sjælland',
	},
	{
		id: 6,
		title: 'MIDT (Fyn)',
	},
	{
		id: 7,
		title: 'VEST (Jylland)',
	},
	{
		id: 8,
		title: 'ØST (Sjælland, Lolland F.)',
	},
];

export const classes: SelectElement[] = [
	{
		id: 0,
		title: '',
	},
	{
		id: 1,
		title: 'Elite',
	},
	{
		id: 2,
		title: '1',
	},
	{
		id: 3,
		title: '2',
	},
	{
		id: 4,
		title: '3',
	},
	{
		id: 5,
		title: '4',
	},
	{
		id: 6,
		title: '5',
	},
	{
		id: 7,
		title: '6',
	},
	{
		id: 8,
		title: '7',
	},
	{
		id: 9,
		title: 'A',
	},
	{
		id: 10,
		title: 'B',
	},
	{
		id: 11,
		title: 'C',
	},
	{
		id: 12,
		title: 'D',
	},
	{
		id: 13,
		title: 'E',
	},
	{
		id: 14,
		title: 'F',
	},
	{
		id: 15,
		title: 'G',
	},
	{
		id: 16,
		title: 'Alle',
	},
];

export const seasons: SelectElement[] = [
	{
		id: 0,
		title: '',
	},
	{
		id: 1,
		title: '2023/2024',
	},
];
