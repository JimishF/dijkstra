function showStatus (preC,weightA,selected) {
			stsDiv = document.getElementById("nodeStatus");
			stsDiv.innerHTML ="";
			str = "";

	
	function getPreC(indx,str){

			//push preCursor of current index into dest_path array
			dest_path.push(parseInt(preC[indx]));
			
			//check if current preCursor is equal to selected , than 
				//we reached our destination, so return from recursive function
			if(preC[indx] == selected)
			{
				return;
			}

			//otherwise continue for next precursor
			getPreC(preC[indx],str);
	}


			//loop through each node available in final Weight Array (pathCompleted)
			for(w in weightA)
			{
					//dest_path array will have all 
					dest_path = Array();

					// setup w as destination node index
					destinationNode = w;
					x = "";

						 /*
							call of a recursive function that pushes preCursors of preCursors (initially W)
						    into "dest_path" array untill we reach to selected node;
						 */

						getPreC(destinationNode,str);
					
						// reverse the destination path Array and join with "right arrow" 
						//	add selected node to first , and destination node to end

						x = "Node " + selected +" to " + destinationNode 
							+ " ( weight : " + weightA[w] + " )"+" : " 
							+ dest_path.reverse().join(" &#8594; ") 
							+ " &#8594; "+ destinationNode;
						

						newLi = document.createElement("div");
						newLi.className="list";
						newLi.innerHTML = x;
						stsDiv.appendChild(newLi);
						newLi = undefined;
				
			}

	
}