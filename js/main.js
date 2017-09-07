var run = 0;
var ID = 0;
function showValue(newValue) {
    document.getElementById("minheight").value = newValue;
}

function WaveId(newValue) {
    document.getElementById("ValueWave").value = newValue;
    ID = newValue;
    waveform();
}

function SquareValue(newValue) {
    document.getElementById("SquarifyText").value = newValue;
}

function waveform() {
    var x = canvas.width
    var value = [];
    
    for (i = 0; i < x; i++) {
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var pixel = ctx.getImageData(i, ID, 1, 1);
        var data = pixel.data;

        value[i] = data[0];
    }

    var c = document.getElementById('canvas2');
    var ctx = c.getContext('2d');

    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.fillStyle = 'rgb(255, 255, 255)';

    ctx.fillRect(0,0,510,255);
    ctx.beginPath();
    ctx.moveTo(0,255 - value[0]);

    var xas = 510 / x
    for (i = 0; i < x; i++) {
        ctx.lineTo(((i + 1)* xas) + xas, 255 - value[i + 1])
    }
    ctx.stroke();
}

