// from https://stackoverflow.com/questions/39237620/using-javascript-to-animate-mathjax-equation

$(function() {
  // I have no idea why jQuery doesn't have a reduce function
  $.fn.reduce = Array.prototype.reduce;

  // Create a chain of promises
  function waterfall(arr, action) {
    arr.reduce(function(prev, next) {
      return prev.then(function() {
        return action(next);
      });
    }, Promise.resolve());
  }

  // Function to actual fade an element in/out and return a promise
  function fader(el) {
    return new Promise(function(resolve, reject) {
      $(el).fadeIn(2000).promise().done(function() {
        this.fadeOut(1000).promise().done(function() {
          resolve();
        });
      });
    });
  }

  // Bootstrap
  waterfall($(".slide"), fader);
});

updateMatrix = function(data) {
	var math = MathJax.Hub.getAllJax("mat1")[0];
	html_tmp = "\\begin{bmatrix}" + data[0] + "&" + data[1] + "& " + data[2] + " \\\\ " + data[3] + " & 1 & 2 \\\\ 2 & 3 & 1 \\end{bmatrix}"
    MathJax.Hub.Queue(["Text",math,html_tmp]);
}

updateMatrix([5,6,7,4,7,6,3,4,8]);

d3.selectAll("#test_matrix .mjx-mtable .mjx-char").transition().duration(500).attr("style", "font-size:5px")

elem = $("#test_matrix .mjx-mtable .mjx-char")

$(elem[1]).fadeOut(500)
setTimeout(function() {$(elem[1]).html("2")}, 500)
$(elem[1]).fadeIn(500)



