
//  Select a node to find distance;
	// var clicked = 1;

function Dijkstra(clicked)
{
	// Array index starts from zero so, get Node as clicked - 1
	// 1 will reffer to line A[0]; 10 will reffer to line A[9]
		var selected =  clicked;
		var selectedRow = A[selected]; 
		
	//G has objects that are used squentially for retiving minimal weight;
		var G ={};

	//exit variable for loop 
		var exit = 0;
	//preC object will have pre cusrsor point for each index
		var preC = {}; 

	//Path completed array has removed elements from G
		var pathCompleted = {};


/* 	* function get_direct_nodes will() findout directly connected nodes from matrix 
	* And will return a list of json object which have prototype as follows
		*	for example directly connected nodes of Node : 1 (A[0]) are.. 
			DirectNodes = 
				{	
					//NODE#2
					1 : {
						weight: 2
					},
					
					//NODE#8
					7 : {
						weight: 3
					}
				}
*/
	var get_direct_nodes = function(indexToReturn){

		var DirectNodes = {};

			//Loop through selected row as elementIndex
			for(elementIndex in A[ indexToReturn ] ){
				
					//check if element value is not Infinity and Zero  and is not a selected element,
					// than it is a distinct direct Node 

						 if( A[ indexToReturn ][ elementIndex ] != inf && A[ indexToReturn ][ elementIndex ] != 0 && elementIndex != selected){
						 	
							//Add it into DirectNodes json with elementIndex;
							 	DirectNodes[ elementIndex ] = {
							 		weight : A[ indexToReturn ][ elementIndex ]
							 	}
						 }
			};

		//return Direct connected Nodes
		return DirectNodes;
	}

	var get_minimum_weighted_node = function(gSubstitute){
		
		//first set min to undefined
		var min = undefined;
		
			for(elementIndex in gSubstitute)
			{
				//if min is undefined than this is first iteration
				//so add current element as min with index and weight
				if ( min == undefined)
				{
					min =
						{
							index  : elementIndex, 
							weight : gSubstitute[ elementIndex ].weight
						}
				}
				else
				{
					//otherwise check weight of current element with min 
					//if current element weight is smaller, than replace it as min

						if(min.weight > gSubstitute[ elementIndex ].weight)
						{
							min = {
								index  : elementIndex,
								weight : gSubstitute[ elementIndex ].weight
								}
						}
				}
			
			}
		 return min;
	}

	// create Initial G by passing direct nodes of selected element
		var G = get_direct_nodes(selected);
	
	//initial G
	console.log("Initial G")
		console.log(G);
			//add precursor as selected
				for(defaultGs in G){
					preC[defaultGs] = selected
				}


	//Loop start
	//loop through G untill it becomes empty

		for(totalIndex = 0 ; totalIndex < A[selected].length ; totalIndex++)					
		{
			//findout minimum in G as currentW for performing a loop operation
			var currentW = get_minimum_weighted_node(G);
				
				if(currentW == undefined){
					break;
				}

				//Get Direct nodes of currentW Index
				var D = get_direct_nodes(currentW.index);
				
					//loop throgh D for getting mininal diatance
					for(elementIndexD in D)
					{
						 
						// *get sum of Current element of G's weight (currenntW.weight) and ..
						//  ..weight with current element's direct connected node's weight (D[ elementIndexD ].weight)
						sum = parseInt(currentW.weight) + parseInt(D[ elementIndexD ].weight);
						
							//check if previously it is undefined than set to Max value
							if(G[elementIndexD] == undefined){
								prevDistance = inf;
							}
							//othervise get Weight as previous Distance
							else{
								prevDistance = G[elementIndexD].weight;
							}

							//Is this element is alreay in path ? than discard it
							//if it is 'undefined'  than... 
								//check if element of sum has lesser weight than G value?
								//if yes than replace it 

							if ( sum < prevDistance && pathCompleted[elementIndexD] == undefined && elementIndexD != selected)
							{
								//if elementIndexD is already avail than it will be overwritten
								//otherwise new index will be added
								
									G[elementIndexD] = {
										weight : sum
									} 
			
								
								//Set preCursor point for our new element in G (G[elementIndex])								
								preC[elementIndexD] = currentW.index; 

							}

					}

				//Add G into pathCompleted Array 
				pathCompleted[currentW.index] = currentW.weight;
			
				//remove current W from G object
				delete G[currentW.index];
			
	 }
	//Loop completed

	console.log("----------------------");
	console.log("final path with minimal weight:");
	console.log(pathCompleted);
	console.log("----------------------");
	console.log("preCursors :");
	console.log(preC);

	 showStatus (preC,pathCompleted,selected);
}



