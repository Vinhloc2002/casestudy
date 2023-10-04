let audio = new Audio("999DoaHongRemix-LuongGiaHuy-3702454.mp3");

      const img = new Image();
      img.src = "https://cdn-i.vtcnews.vn/files/f1/2015/03/23/nightshots-2_1jpg.jpg";
      img.onload = function () {
        ctx.drawImage(img, x, y);
      };
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      // var x = Math.random() * canvas.width;
      // var y = Math.random() * canvas.height;
      // var dx = (Math.random() - 0, 5) * 0.5;
      // var dy = (Math.random() - 0, 5) * 0.5;
      var x = canvas.width / 2;
      var y = canvas.height - 60;
      var dx = 2;
      var dy = 2;
      var radius = 8;
      //defining paddle
      const paddleHeight = 10;
      const paddleWidth = 150;
      const paddleColor = "#0095DD";
      let paddleX = (canvas.width - paddleWidth) / 2;
      let rightPressed = false;
      let leftPressed = false;
      function createCircle() {
        audio.play();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fill();
        if (x + radius > canvas.width || x - radius < 0) {
          dx = -dx;
        }
        if (y - radius < 0) {
          dy = -dy;
        }
        if (y + 50 > canvas.height - radius) {
          if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
          }
        }
        if (y > canvas.height - radius) {
          document.write('https://anhdepfree.com/wp-content/uploads/2020/09/t');
        }
        if (y + dy > canvas.height - radius) {
          if (y + dy == radius + paddleHeight) {
            y = -dy;
          }
        }
        x += dx;
        y += dy;
      }
      function drawPaddle() {
        audio.play();
        ctx.beginPath();
        ctx.rect(
          paddleX,
          canvas.height - paddleHeight - 50,
          paddleWidth,
          paddleHeight
        );
        ctx.fill();
        ctx.closePath();
        if (rightPressed) {
          paddleX += 7;
          if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
          }
        } else if (leftPressed) {
          paddleX -= 7;
          if (paddleX < 0) {
            paddleX = 0;
          }
        }
        x += dx;
        y += dy;
      }
      function keyDownHandler(e) {
        audio.play();
        if (e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          leftPressed = true;
        }
      }
      function keyUpHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          leftPressed = false;
        }
      }
      function animate() {
        audio.play();
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        createCircle();
        drawPaddle();
      }
      drawPaddle();
      createCircle();
      audio.play();
      animate();
      document.addEventListener("keydown", keyDownHandler, false);
      document.addEventListener("keyup", keyUpHandler, false);