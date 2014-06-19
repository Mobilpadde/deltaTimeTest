var $canvas = document.getElementById("board"),
	ctx = $canvas.getContext("2d"),
	x = 0,
	y = 200,
	accX = 0,
	accY = 0,
	goingDown = false,
	keys = { left: false, right: false, space: false },
	tick, then, now, dt,

then = Date.now() / 1000,
tick = function(){
	now = Date.now() / 1000,
	dt = (now - then)
	then = now

	ctx.fillStyle = "#fff"
	ctx.fillRect(0, 0, 500, 250)

	if(keys.left){
		x -= 50 * dt - accX
		accX -= 0.1 * dt
		if(x < -50){
			x = 500
		}
	}else if(!keys.right){
		acc = 0
	}

	if(keys.right){
		x += 50 * dt + accX
		accX += 0.1 * dt
		if(x > 500){
			x = -50
		}
	}else if(!keys.left){
		acc = 0
	}

	if(keys.space && !goingDown){
		y -= 50 * dt
		accY = -2
	}
	if(y < 200 && y > 140 && !goingDown){
		y -= 100 * dt - accY
		accY += 10 * dt
	}else{
		goingDown = true
		y += 100 * dt + accY
		accY += 10 * dt

		if(y >= 200){
			y = 200
			accY = 0
			goingDown = false
		}
	}

	ctx.fillStyle = "#000"
	ctx.fillRect(x, y, 50, 50)
}

$canvas.width = 500
$canvas.height = 250

document.addEventListener("keydown", function(e){
	kc = e.keyCode
	if(kc == 65 || kc == 37){ keys.left 	= true }
	if(kc == 68 || kc == 39){ keys.right 	= true }
	if(kc == 32)			{ keys.space 	= true }
})
document.addEventListener("keyup", function(e){
	var kc = e.keyCode
	if(kc == 65 || kc == 37){ keys.left 	= false }
	if(kc == 68 || kc == 39){ keys.right 	= false }
	if(kc == 32)			{ keys.space 	= false }
})

setInterval(tick, 0)