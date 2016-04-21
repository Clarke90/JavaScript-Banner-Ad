
  function initCanvas(canvas) {
          if (window.G_vmlCanvasManager && window.attachEvent && !window.opera) {
            canvas = window.G_vmlCanvasManager.initElement(canvas);
          }
          return canvas;
        }

  			window.onload = function(){
  		  	var canvas = initCanvas(document.getElementById("test-canvas")),
  				    ctx = canvas.getContext('2d');

  		  	ctx.font = "2em Optimer";
          ctx.textAlign = 'center';

  		  	var i, n = 0,
              components = [0, 0, 0],
              operations = [1, 2, 3];

  		  	function draw(){
            ctx.clearRect(0, 0, 500, 300);
            ctx.fillStyle = "rgb("+components.join(',')+")";
            ctx.textBaseline = 'top';

            // Jumping text
            ctx.save();
              ctx.translate(250, 0);
    		  		ctx.fillText('View My Portfolio!', 0, components[1]);
            ctx.restore();

            for(i = 0; i < 3; i++) {
              components[i] += operations[i];
              if ((components[i] >= 30) || (components[i] <= 0)) operations[i] *= -1;
            }

  					/*if (n < 1000)*/ setTimeout(draw, 100);
  		  	}
  		    draw();
  			}
