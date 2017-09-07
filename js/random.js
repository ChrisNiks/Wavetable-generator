function random() {
        var x = document.getElementById('row').value;
        var y = document.getElementById('col').value;
        var gheight = document.getElementById('minheight').value;
        var square = +document.getElementById('SquarifyText').value
        
        var c = document.getElementById('canvas');
        var strt = c.getContext('2d');
        strt.clearRect(0, 0,  canvas.width, canvas.height);
        canvas.width  = x  * (square + 1);
        canvas.height = y;
        strt.fillStyle = 'rgb(0,0,0)';
        strt.fillRect(0, 0, x, y);

        var higher = 127 + parseInt(gheight);
        var lower = 128 - parseInt(gheight);

        for (i = 0; i < y; i++){
            for(z = 0; z < canvas.width; z++){
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
                
                for(h = 0; h <= square; h++){
                        strt.fillRect(z + h, i, 1, 1);
                }
                z = z + square
            }
        }

        var kek = document.getElementsByTagName("canvas");
        var url = kek[0].toDataURL("image/png");

        document.getElementById('png').src = url;
        document.getElementById('download').href = url;
        document.getElementById("Waveform").max = y - 1;
    run++;
    waveform();
}
