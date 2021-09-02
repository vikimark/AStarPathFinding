// edited : solved bug on graph.js line :195 duplicate splice
// bug on A*path algorithm 
// doing spiral maze will cause an error

/*
thing that can improve :
	1. make property of cell to be a wall or not (boolean) instead of having an array of obstacle
	2. 
*/


let graph;
let start;
let goal;
let setStart = true;
let run = false;

function setup() {
	createCanvas(500, 500);
	graph = new Graph(10);
	start = graph.cells[0][0];
	goal = graph.cells[graph.rows/2][graph.cols/2];
	graph.initAPath(start, goal);
	// put setup code here
}

function draw() {
	// put drawing code here
	graph.show();

	

	if(run){
	graph.aPath(start, goal);
	//console.log(graph.cells);
	}

	start.show(122, 122, 122);
	goal.show(0, 0, 0);

	graph.obShow();

	if(keyIsPressed){
		if(key == 'z'){
		graph.addOb(mouseX, mouseY);
	}
	}
	

}

function keyPressed(){
	if(key == 's' && setStart){
		start = graph.setCell(mouseX, mouseY);
	}else if(key == 'g'){
		goal = graph.setCell(mouseX, mouseY);
	}else if(key == 'r'){
		run = true;
		graph.initAPath(start, goal);
	}else if(key == 'x'){
		graph.reset();
		graph.resetOb();
	}else if(key == 'q'){
		graph.randOb(start, goal);
	}
	//else if(key == 'z'){
	// 	graph.addOb(mouseX, mouseY);
	// }
}
