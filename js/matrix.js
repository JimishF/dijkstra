//define maximum value given by a computer
var inf = 65535;

//Define a distance matrix for each Node
/*var A = Array(
				[0,   2,   inf, inf, inf, inf, inf, 3, 	 inf],
				[2,   0,   4,   inf, inf, inf, inf, 3, 	 2],
				[inf, 4,   0,   3,   inf, inf, inf, inf, inf],
				[inf, inf, 3,	0,	 5,	  2,   inf, inf, 3	],
				[inf, inf, inf, 5,	 0,	  4,   inf, inf, inf],
				[inf, inf, inf, 2,	 4,	  0,   3,   inf, inf],
				[inf, inf, inf, inf, inf, 3,   0,   4,   inf],
				[3,	  3,   inf, inf, inf, inf, 4,   0,   inf],
				[inf, 2,   inf, 3,   inf, inf, inf, inf, 0 ]
	);*/
// A holds a Matrix,

var A = Array(
				[0,   2,   inf, inf, inf, inf, inf, 3, 	 inf, inf],
				[2,   0,   4,   inf, inf, inf, inf, 3, 	 2,   inf],
				[inf, 4,   0,   3,   inf, inf, inf, inf, inf, inf],
				[inf, inf, 3,	0,	 5,	  2,   inf, inf, 3,	  inf],
				[inf, inf, inf, 5,	 0,	  4,   inf, inf, inf, inf],
				[inf, inf, inf, 2,	 4,	  0,   3,   inf, inf, inf],
				[inf, inf, inf, inf, inf, 3,   0,   4,   inf, 1  ],
				[3,	  3,   inf, inf, inf, inf, 4,   0,   inf, inf],
				[inf, 2,   inf, 3,   inf, inf, inf, inf, 0,   5	 ],
				[inf, inf, inf, inf, inf, inf, 1,	inf, 5,	  0  ]
	);



