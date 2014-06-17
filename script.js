var $canvas = document.getElementById("board"),
	ctx = $canvas.getContext("2d"),
	x = -50,
	tick, then, now, dt

$canvas.width = 500
$canvas.height = 250

then = Date.now(),
tick = function(){
	now = Date.now(),
	dt = (now - then) / 1000
	then = now

	ctx.fillStyle = "#fff"
	ctx.fillRect(0, 0, 500, 250)

	x += 50 * dt
	if(x  > 500){
		x = -50
	}

	ctx.fillStyle = "#000"
	ctx.fillRect(x, (250-50)/2 + Math.sin(now / 1000) * 100, 50, 50)
}

setInterval(tick, 0)