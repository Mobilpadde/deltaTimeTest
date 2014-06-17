var $canvas = document.getElementById("board"),
	ctx = $canvas.getContext("2d"),
	x = -50,
	tick, then, now, dt

then = Date.now() / 1000,
tick = function(){
	now = Date.now() / 1000,
	dt = (now - then)
	then = now

	ctx.fillStyle = "#fff"
	ctx.fillRect(0, 0, 500, 250)

	x += 50 * dt
	if(x > 500){
		x = -50
	}

	ctx.fillStyle = "#000"
	ctx.fillRect(x, (250 - 50) / 2 + Math.sin(now) * 100, 50, 50)
}

$canvas.width = 500
$canvas.height = 250

setInterval(tick, 0)