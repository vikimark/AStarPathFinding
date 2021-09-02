class Cell{
	constructor(i, j, scl){
		this.i = i;
		this.j = j;
		this.scl = scl
		this.f = 0;
		this.g = 0;
		this.h = 0;
		this.parent = undefined;
	}

	show(r=255, g=255, b=255){
		stroke(0);
		strokeWeight(1);
		fill(r, g, b);
		rect(this.i * this.scl, this.j * this.scl, this.scl, this.scl);
	}

	
}