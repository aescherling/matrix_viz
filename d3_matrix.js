// goal: define a matrix function for visualizing matrices

svg = d3.select('#vis').append('svg')
        .attr('width', 500)
        .attr('height', 500);

svg.append('circle')
  .attr('cx', 10)
  .attr('cy', 10)
  .attr('r', 5)
  .attr('fill', 'black');

makeMatrix = function(x, dim, canvas, loc, size) {
	// x = array of data
	// dim = array of matrix dimensions
	// loc = array of matrix location
	// size = line height

	var height = (2 * size) + ((dim[0] - 1) * 1.5 * size);
	var width = (2 * size) + ((dim[1] - 1) * 1.5 * size);

	matrix = function() {
		mGroup = canvas.append('g');

		// make the brackets
		mGroup.append('rect')
			.attr('id', 'myRect')
			.attr('x', loc[0])
			.attr('y', loc[1])
			.attr('width', width)
			.attr('height', height)
			.attr('fill', 'red');

	}

	// define attributes and functions on matrix
	matrix.height = height;
	matrix.width = width;
	matrix.sayHi = function() {alert("yo")};
	matrix.changeFill = function(col) {mGroup.select('#myRect').attr('fill', col)};

	matrix();

	return matrix;

}

myMat = makeMatrix(1,[3,3],svg,[100,40],10);
myMat.changeFill('purple');


