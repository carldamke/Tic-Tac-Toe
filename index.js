function startGame() {
	myGameArea.start();
}
//field
var myGameArea = {
	canvas: document.createElement("canvas"),
	circle: document.createElement("img"),
	cross: document.createElement("img"),
	start: function() {
		this.circle.src = "kreis.png";
		this.cross.src = "cross.png";
		this.canvas.width = 300;
		this.canvas.height = 300;
		this.context = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);
		this.context.moveTo(100, 0);
		this.context.lineTo(100, 300);
		this.context.moveTo(200, 0);
		this.context.lineTo(200, 300);
		this.context.moveTo(0, 100);
		this.context.lineTo(300, 100);
		this.context.moveTo(0, 200);
		this.context.lineTo(300, 200);
		this.context.stroke();
		var counter = 0;
		this.canvas.addEventListener("click", (event) => {
			var x = Math.min(Math.floor(event.offsetX / 100), 2);
			var y = Math.min(Math.floor(event.offsetY / 100), 2);
			counter = counter + 1;
			if (counter % 2 === 0) {
				this.context.drawImage(this.circle, x * 100, y * 100);
			} else {
				this.context.drawImage(this.cross, x * 100, y * 100);
			}

		});
	}
};
