function nextColor(){
	//this function will return a randome color to raw a line
		colors = ['#f44336','#c62828','#ff1744','#e91e63','#ad1457','#f50057','#9c27b0','#6a1b9a','#d500f9','#673ab7','#4527a0','#651fff','#3f51b5','#283593','#3d5afe','#2196f3','#1565c0','#2979ff','#03a9f4','#0277bd','#00b0ff','#00bcd4','#00838f','#00e5ff','#009688','#00695c','#1de9b6','#4caf50','#2e7d32','#00e676','#8bc34a','#558b2f','#76ff03','#cddc39','#9e9d24','#c6ff00','#ffeb3b','#f9a825','#ffea00','#ffc107','#ff8f00','#ffc400','#ff9800','#ef6c00','#ff9100','#ff5722','#d84315','#ff3d00','#795548','#4e342e'];
		pick  = Math.floor((Math.random() *  49));
	return colors[pick];
}

// The circke oject is a prototpe for each node position
var Circle = function(x, y, radius) {
	this.x=x;
	this.y=y;
    this.left = x - radius;
    this.top = y - radius;
    this.right = x + radius;
    this.bottom = y + radius;
};

//all nodes will be stored in this circle array
var circles = Array();
var ctx;
window.onload = function(){
	//getting canvas dom
	var c = document.getElementById("canv");
	
	//adding parent Event Listener to canvas
	c.addEventListener("click",getClickedNode);
		c.style.border = "1px solid #cccccc";
			
			//MyX and myY are defined to position each node line by line 
			var myX = 0,myY = 20;
			
			//getting copy of "A" for safty
			var ar = A;

			//getting length of nodes in A
			var len = ar[0].length;

			//empty nodes on graph
			nodes = {};

			//getting 2d context of canvas to draw
			 ctx = c.getContext("2d");
			
				ctx.textBaseline = "top";

				for(i=0;i<len;i++){

					//Setup Each node X with 80 px distance
					nodes[i] =  { 
						startX	: myX += 80,
				 		startY	: myY + 40,
				 		endX 	: myX ,
				 		endY 	: myY + 430				 	
				 	};
				 		ctx.font = "18px Arial";
						ctx.beginPath();

							//Move to current node position for dawing a arc
							ctx.moveTo(nodes[i].startX , nodes[i].startY+20);

							//Drawn an circle of current Node
				 			ctx.arc(nodes[i].startX, nodes[i].startY-20, 20, 0, 2 * Math.PI, false);

				 			//Created an circle object for event Listner purpose
				 			var circle = new Circle(nodes[i].startX, nodes[i].startY-20, 20);

				 			//pushed new circle into our circle array
    							circles.push(circle);  

    							//set fill style black
							      ctx.fillStyle = 'black';
      							  ctx.fill();

      					//stroked our data to canvas
						ctx.stroke();

						//setup fillstyle wiite for node number
							ctx.fillStyle = "white";
						//Added text in between of the node circle
							ctx.fillText(i,nodes[i].startX-5, nodes[i].startY-30);

				 		
				 		//begain a new path for new stroke
						ctx.beginPath();

							ctx.moveTo(nodes[i].startX , nodes[i].startY+20);
							
							//Drawn a line for current node with its position data we gethered eirlier
							ctx.lineTo(nodes[i].endX, nodes[i].endY);
						ctx.stroke();
						
				}
				
				ctx.fillStyle = "black";
				ctx.font = "10px Arial";

				drawStartY = 130;

				//looping through 2d matrix in triangular shape for removing duplicate distance
				for(j = 0 ; j<len ; j++){

					//setup a random color for each node connections
					ctx.strokeStyle = nextColor();		
					
					for(k = j ; k<len ; k++)
					{

						//check if it is a dirct connected node ?
						if(ar[j][k] !=0  && ar[j][k] != inf ){
								
							ctx.beginPath();

								//setup x as current Node X
								drawStartX = nodes[j].startX;

								//set y += 20 (each direct connection will seprated with 20px Y axes )
								drawStartY += 20;
								
								//set end x as  next node's X(gethered from Nodes prototype defined earlier)
								drawEndX = nodes[k].startX;

								//leave end y as start Y for streight connection line 
								drawEndY = drawStartY;

							ctx.moveTo(drawStartX , drawStartY);
							//draw that connection line
							ctx.lineTo(drawEndX, drawEndY);
							
							//get weight(distance) between two nodes from A matrix
							weightToDraw = A[j][k];

							//draw weight on center of the line
							ctx.fillText( weightToDraw, Math.floor((drawStartX + drawEndX)/2)-20, drawStartY-11); 

								ctx.stroke();
						}
					}
				}
				
}
var getClickedNode = function(e){

	//get absolute x,y from page offset
	var clickedX = e.pageX - this.offsetLeft;
    var clickedY = e.pageY - this.offsetTop;

    //loop through each circles(node) we have
    for (var i = 0; i < circles.length; i++) {

    	//check if clicked X,Y is in to this current circle ?
        if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
            
            // if yes than call the algorithm for the clicked node
            setColorDefault();
            initUniqColor(i);
            console.clear();
            // Dijkstra(i + 1);
            Dijkstra(i);
        }
    }
}

var setColorDefault = function(){
		ctx.strokeStyle = "black";
		ctx.font = "18px Arial";

		 for (var i = 0; i < circles.length; i++) {		

				ctx.fillStyle = 'black';
					ctx.beginPath();
					ctx.moveTo(nodes[i].startX , nodes[i].startY+20);
					ctx.arc(nodes[i].startX, nodes[i].startY-20, 20, 0, 2 * Math.PI, false);
							  ctx.fill();
				ctx.stroke();
					ctx.fillStyle = "white";
					ctx.fillText(i,nodes[i].startX-5, nodes[i].startY-30);
			}
}
var initUniqColor = function(i){

		ctx.beginPath();
			ctx.moveTo(nodes[i].startX , nodes[i].startY+20);
			ctx.arc(nodes[i].startX, nodes[i].startY-20, 20, 0, 2 * Math.PI, false);
			      ctx.fillStyle = '#CCCCCC';
					  ctx.fill();
		ctx.stroke();
			ctx.fillStyle = "black";
			ctx.fillText(i,nodes[i].startX-5, nodes[i].startY-30);
}