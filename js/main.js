var run = 0;

function showValue(newValue) {
    document.getElementById("minheight").value = newValue;
}

function go() {
    if (run == 1) {
        location.reload();
    } else {
        var x = document.getElementById('row').value;
        var y = document.getElementById('col').value;
        var gheight = document.getElementById('minheight').value;

        var c = document.getElementById('canvas');
        var strt = c.getContext('2d');

        canvas.width  = x;
        canvas.height = y;

        strt.fillStyle = 'rgb(0,0,0)';
        strt.fillRect(0, 0, x, y);

        var higher = 127 + parseInt(gheight);
        var lower = 128 - parseInt(gheight);

        for (i = 0; i < y; i++){
            for(z = 0; z < x; z++){
                var hstop = 0;

                while (hstop == 0){
                    var color = Math.round(Math.random() * 255);

                    if (color > higher || color < lower){
                        hstop = 1;
                    }
                }
                var c = document.getElementById('canvas');
                var strt = c.getContext('2d');

                strt.fillStyle = 'rgb(' + color + ', ' + color + ', ' + color + ')';
                strt.fillRect(z, i, 1, 1);
            }
        }

        var kek = document.getElementsByTagName("canvas");
        var url = kek[0].toDataURL("image/png");

        document.getElementById('png').src = url;
        document.getElementById('download').href = url;
    }
    run++;
    waveform();
}

function waveform() {
    var x = document.getElementById('row').value
    var value = [];

    for (i = 0; i < x; i++) {
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        var pixel = ctx.getImageData(i, 0, 1, 1);
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