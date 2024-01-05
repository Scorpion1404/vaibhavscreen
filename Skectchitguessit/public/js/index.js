const canvas = document.getElementById('drawingCanvas');
  const context = canvas.getContext('2d');

  let isDrawing = false;

  // Event listeners for mouse actions
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  function startDrawing(e) {
    isDrawing = true;
    draw(e); // To start drawing from the initial point
  }

  function draw(e) {
    if (!isDrawing) return;

    // Set drawing styles
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    // Draw line
    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  function stopDrawing() {
    isDrawing = false;
    context.beginPath(); // Reset the path when stopping drawing
  }

  drawingData.push({
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  });







// const canvas = document.getElementById('drawingCanvas');
// const context = canvas.getContext('2d');

// let isDrawing = false;
// let drawingData = []; // Array to store drawing data

// // Event listeners for mouse actions
// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', stopDrawing);
// canvas.addEventListener('mouseout', stopDrawing);

// function startDrawing(e) {
//   isDrawing = true;
//   draw(e); // To start drawing from the initial point
// }

// function draw(e) {
//   if (!isDrawing) return;

//   // Set drawing styles
//   context.lineWidth = 10; // You can adjust this value to control the line width
//   context.lineCap = 'round';
//   context.strokeStyle = '#000';

//   // Draw line
//   context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
//   context.stroke();
//   context.beginPath();
//   context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

//   // Save drawing data
//   drawingData.push({
//     x: e.clientX - canvas.offsetLeft,
//     y: e.clientY - canvas.offsetTop
//   });
// }

// function stopDrawing() {
//   isDrawing = false;
//   context.beginPath(); // Reset the path when stopping drawing
// }

// // Function to resize the canvas without clearing the drawing
// function resizeCanvas(newWidth, newHeight) {
//   // Save the current drawing data
//   const oldDrawingData = drawingData;

//   // Resize the canvas
//   canvas.width = newWidth;
//   canvas.height = newHeight;

//   // Restore the drawing data onto the resized canvas
//   drawingData = oldDrawingData;
//   redraw();
// }

// // Function to redraw the saved drawing data onto the canvas
// function redraw() {
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   // Set drawing styles
//   context.lineWidth = 5; // You can adjust this value to control the line width
//   context.lineCap = 'round';
//   context.strokeStyle = '#000';

//   // Redraw the saved drawing data
//   for (const point of drawingData) {
//     context.lineTo(point.x, point.y);
//     context.stroke();
//     context.beginPath();
//     context.moveTo(point.x, point.y);
//   }
// }
