var $canvas = document.getElementById("board"),
	ctx = $canvas.getContext("2d"),
	x = 0,
	acc = 0,
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
		x -= 50 * dt - acc
		acc -= 0.1 * dt // Acceleration
		if(x < -50){
			x = 500
		}
	}else if(!keys.right){
		acc = 0
	}

	if(keys.right){
		x += 50 * dt + acc
		acc += 0.1 * dt // Acceleration
		if(x > 500){
			x = -50
		}
	}else if(!keys.left){
		acc = 0
	}

	ctx.fillStyle = "#000"
	ctx.fillRect(x, (250-50)/2 + Math.sin(now) * 100, 50, 50)
}

$canvas.width = 500
$canvas.height = 250

document.addEventListener("keydown", function(e){
	kc = e.keyCode
	if(kc == 65 || kc == 37){ keys.left 	= true }
	if(kc == 68 || kc == 39){ keys.right 	= true }
})
document.addEventListener("keyup", function(e){
	var kc = e.keyCode
	if(kc == 65 || kc == 37){ keys.left 	= false }
	if(kc == 68 || kc == 39){ keys.right 	= false }
})

setInterval(tick, 0)