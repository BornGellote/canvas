//            myCanvas_one[line]
            var c_one = document.getElementById("myCanvas_one");
            var ctx_one = c_one.getContext("2d");
            ctx_one.beginPath();
            ctx_one.moveTo(0,0);
            ctx_one.lineTo(20,80);
            ctx_one.lineTo(70,100);
            ctx_one.strokeStyle = "red";
            ctx_one.stroke();

            ctx_one.beginPath();
            ctx_one.moveTo(40,20);
            ctx_one.lineTo(40,60);
            ctx_one.strokeStyle = "red";
            ctx_one.lineWidth = "10";
            ctx_one.lineCap = "round";
            ctx_one.stroke();

            ctx_one.beginPath();
            ctx_one.moveTo(60, 20);
            ctx_one.lineTo(60,60);
            ctx_one.strokeStyle = "blue";
            ctx_one.lineWidth = "7";
            ctx_one.lineCap = "square";
            ctx_one.lineCap = "butt";
            ctx_one.stroke();

            ctx_one.beginPath();
            ctx_one.moveTo(80,20);
            ctx_one.lineTo(80,60);
            ctx_one.strokeStyle = "green";
            ctx_one.lineWidth = "5";
            ctx_one.lineCap = "butt";
            ctx_one.stroke();

            ctx_one.beginPath();
            ctx_one.moveTo(100,75);
            ctx_one.lineTo(140,10);
            ctx_one.lineTo(180,75);
            ctx_one.strokeStyle = "green";
            ctx_one.lineWidth = "5";
            ctx_one.lineCap = "butt";
            ctx_one.fillStyle = "yellow";
            ctx_one.closePath();
            ctx_one.stroke();
            ctx_one.fill();

//            myCanvas_one[myCanvas_one_line]
            var c_one_line = document.getElementById("myCanvas_one_line");
            var ctx_one_line = c_one_line.getContext("2d");
            ctx_one_line.beginPath();
            ctx_one_line.moveTo(0,50);
            ctx_one_line.lineTo(200,50);
            ctx_one_line.strokeStyle = "red";
            ctx_one_line.lineWidth = "25";
            ctx_one_line.stroke();

            ctx_one_line.beginPath();
            ctx_one_line.moveTo(100,0);
            ctx_one_line.lineTo(100,100);
            ctx_one_line.strokeStyle = "red";
            ctx_one_line.lineWidth = "20";
            ctx_one_line.lineCap = "round";
            ctx_one_line.stroke();

//            myCanvas_one[myCanvas_one_line]
            var c_one_anim = document.getElementById("myCanvas_one_anim");
            var ctx_one_anim = c_one_anim.getContext("2d");
            var myColor = 'red';

            document.getElementById('color').oninput = function (){
                myColor = this.value;
            };

            c_one_anim.onmousedown = function (event){
                c_one_anim.onmousemove = function (event){
                    var x = event.offsetX;
                    var y = event.offsetY;
                    ctx_one_anim.fillRect(x-5,y-5, 10,10);
                    ctx_one_anim.fillStyle = myColor;
                    ctx_one_anim.fill();
                };
                c_one_anim.onmouseup = function (){
                    c_one_anim.onmousemove = null;
                };
            };

//            myCanvas_two[text]
                var c_two = document.getElementById("myCanvas_two");
                var ctx_two = c_two.getContext("2d");
                ctx_two.font = "24px Arial";
                ctx_two.fillText("Hello Canvas!", 30,60);

//            myCanvas_three[gradient]
                var c_three = document.getElementById("myCanvas_three");
                var ctx_three = c_three.getContext("2d");
                var grd_three = ctx_three.createLinearGradient(0,0,200,100);
                grd_three.addColorStop(0,"blue");
                grd_three.addColorStop(1,"red");
                ctx_three.fillStyle = grd_three;
                ctx_three.fillRect(10,10,180,80);

//            myCanvas_four[]
                var c_four = document.getElementById("myCanvas_four");
                var ctx_four = c_four.getContext("2d");
                ctx_four.fillStyle = 'red';
                ctx_four.fillRect(10,10,150,75);
                ctx_four.fillStyle = 'blue';
                ctx_four.fillRect(50,50,100,50);
                ctx_four.clearRect(100,50,200,100); // clear canvas

//            myCanvas_five[]
                var c_five = document.getElementById("myCanvas_five");
                var ctx_five = c_five.getContext("2d");
                ctx_five.rect(20, 20, 150, 80);
                ctx_five.strokeStyle = 'green';
                ctx_five.lineWidth = '3';
                ctx_five.stroke();
                ctx_five.fillStyle = 'orange';
                ctx_five.fill();

//            myCanvas_circle[]
                var c_circle = document.getElementById("myCanvas_circle");
                var ctx_circle = c_circle.getContext("2d");
                var pi = Math.PI;
                ctx_circle.beginPath();
                ctx_circle.lineWidth = 5;
                ctx_circle.strokeStyle = "red";
                ctx_circle.fillStyle = "yellow";
                ctx_circle.arc(75,50,30, 0, 2*pi, false);
                ctx_circle.stroke();
                ctx_circle.fill();

                ctx_circle.beginPath();
                ctx_circle.lineWidth = 5;
                ctx_circle.strokeStyle = "green";
                ctx_circle.fillStyle = "red";
                ctx_circle.arc(130,50,40, 0, 2*pi, false);
                ctx_circle.stroke();
                ctx_circle.fill();

                var c_circle_two = document.getElementById("myCanvas_circle_two");
                var ctx_circle_two = c_circle_two.getContext("2d");
                c_circle_two.onmousemove = function (event) {
                    var x = event.offsetX;
                    var y = event.offsetY;
                    var radius = Math.pow(Math.pow(x-100, 2)+Math.pow(y-50, 2), 0.5);
                    ctx_circle_two.clearRect(0,0,200,100);
                    ctx_circle_two.beginPath();
                    ctx_circle_two.lineWidth = 5;
                    ctx_circle_two.strokeStyle = "green";
                    ctx_circle_two.fillStyle = "red";
                    ctx_circle_two.arc(100,50,radius, 0, 2*pi, false);
                    ctx_circle_two.stroke();
                    ctx_circle_two.fill();
                }

//            myCanvas anim_bg[]
                var c_anim_bg = document.getElementById("myCanvas_anim_bg");
                var ctx_anim_bg = c_anim_bg.getContext("2d");
                var x_anim = 100;
                var y_anim = 50;
                var myX;
                var myY;
                var stepCount_anim = 0;
                var direction;
                var timer;
                function drawDot() {
                    ctx_anim_bg.clearRect(0,0,200,100);
                    if( stepCount_anim == 0 ){
                        stepCount_anim = Math.floor(15 * Math.random());
                        direction = Math.floor(8 * Math.random());
                    } else{
                        stepCount_anim--;
                    }
                    switch  (direction){
                        case 0:
                            y_anim = y_anim - 1;
                            break;
                        case 1:
                            x_anim = x_anim + 1;
                            break;
                        case 2:
                            y_anim = y_anim + 1;
                            break;
                        case 3:
                            x_anim = x_anim - 1;
                            break;
                        case 4:
                            x_anim = x_anim + 1;
                            y_anim = y_anim - 1;
                            break;
                        case 5:
                            x_anim = x_anim + 1;
                            y_anim = y_anim + 1;
                            break;
                        case 6:
                            x_anim = x_anim - 1;
                            y_anim = y_anim + 1;
                            break;
                        case 7:
                            x_anim = x_anim - 1;
                            y_anim = y_anim - 1;
                            break;
                        default:
                            break;
                    }
                    if ( x_anim < 0 || x_anim > 200 || y_anim < 0 || y_anim > 100) stepCount_anim = 0;
                    ctx_anim_bg.fillRect(x_anim-3,y_anim-3,6,6);
                    ctx_anim_bg.beginPath();
                    ctx_anim_bg.moveTo( x_anim, y_anim );
                    ctx_anim_bg.lineTo(myX, myY);
                    ctx_anim_bg.stroke();
                    timer =setTimeout(drawDot, 100);
                }
                drawDot();
                c_anim_bg.onmousemove = function (event) {
                    myX = event.offsetX;
                    myY = event.offsetY;

                }

//            myCanvas sin/cos[]
                var c_sin = document.getElementById("myCanvas_sin");
                var ctx_sin = c_sin.getContext("2d");
                var x_sin = 0;
                var timer_sin;
                var count = 0;
                function drawSin() {
                    y_sin = Math.sin(x_sin);
                    if (x_sin >= 200) {
                        x_sin = 0;
                        count++;
                    } else {
                        x_sin =  x_sin + 0.1;
                    }
                    switch  (count){
                        case 0:
                            ctx_sin.beginPath();
                            ctx_sin.lineWidth = 1;
                            ctx_sin.fillStyle = "black";
                            ctx_sin.fillRect(2*x_sin, 50 + 10 * y_sin, 2, 2);
                            break;
                        case 1:
                            ctx_sin.beginPath();
                            ctx_sin.lineWidth = 2;
                            ctx_sin.fillStyle = "green";
                            ctx_sin.fillRect(3*x_sin, 50 + 15 * y_sin, 2, 2);
                            break;
                        case 2:
                            ctx_sin.beginPath();
                            ctx_sin.lineWidth = 1;
                            ctx_sin.fillStyle = "red";
                            ctx_sin.fillRect(4*x_sin, 50 + 20 * y_sin, 2, 2);
                            break;
                        case 3:
                            ctx_sin.beginPath();
                            ctx_sin.lineWidth = 2;
                            ctx_sin.fillStyle = "blue";
                            ctx_sin.fillRect(5*x_sin, 50 + 25 * y_sin, 2, 2);
                            break;
                        case 4:
                            ctx_sin.beginPath();
                            ctx_sin.lineWidth = 1;
                            ctx_sin.fillStyle = "orange";
                            ctx_sin.fillRect(6*x_sin, 50 + 30 * y_sin, 2, 2);
                            break;
                        default:
                            break;
                    }
                    //ctx_sin.fillRect(5*x_sin, y_sin, 2, 2);
                    timer_sin = setTimeout(drawSin, 10);
                }
                drawSin();

//            myCanvas Bezie[https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%B2%D0%B0%D1%8F_%D0%91%D0%B5%D0%B7%D1%8C%D0%B5]
                var c_bez = document.getElementById("myCanvas_bezie");
                var ctx_bez = c_bez.getContext('2d');
                ctx_bez.beginPath();
                ctx_bez.lineWidth = 3;
                ctx_bez.strokeStyle = "red";
                ctx_bez.fillStyle = "red";
                ctx_bez.moveTo(100, 25);
                ctx_bez.quadraticCurveTo(75, 0, 50, 50);
                ctx_bez.quadraticCurveTo(50, 75, 100, 100);
                ctx_bez.quadraticCurveTo(150, 75, 150, 50);
                ctx_bez.quadraticCurveTo(125, 0, 100, 25);
                ctx_bez.stroke();
                ctx_bez.fill();

                c_bez.onmousemove = function (event) {
                    var x =event.offsetX;
                    var y =event.offsetY;
                    ctx_bez.clearRect(0,0,200,100);
                    ctx_bez.beginPath();
                    ctx_bez.moveTo(100, 5);
                    ctx_bez.quadraticCurveTo(x, y, 100, 95);
                    ctx_bez.closePath();
                    ctx_bez.stroke();
                }

//            myCanvas spirograf
                var c_spirograf = document.getElementById("myCanvas_spirograf");
                var ctx_spirograf= c_spirograf.getContext("2d");

                var teta = 0;
                var timer_spim;
                function spiro() {
                    var R = document.getElementById("big_r").value;
                    var r = document.getElementById("small_r").value;
                    var d = document.getElementById("flying_d").value;
                    var x = (R - r) * Math.cos(teta) + d*Math.cos((R-r) * teta/r );
                    var y =(R - r) * Math.sin(teta) + d*Math.sin((R-r) * teta/r );
                    teta = teta +0.1;
                    ctx_spirograf.fillRect(300+x,300+y,4,4);
                    timer_spim = setTimeout(spiro,50);
                }
                function clear() {
                    ctx_spirograf.clearRect(0,0,600,600);
                }

                document.getElementById('start_spin').onclick = spiro;
                document.getElementById('clear_spin').onclick = clear;


//             initial color rain
                function rain() {
                    var c = document.getElementById("rain");
                    var w = c.width = window.innerWidth,
                        h = c.height = window.innerHeight,
                        ctx = c.getContext('2d'),

                        //parameters
                        total = w,
                        accelleration = .05,

                        //afterinitial calculations
                        size = w/total,
                        occupation = w/total,
                        repaintColor = 'rgba(0, 0, 0, .04)',
                        colors = [],
                        dots = [],
                        dotsVel = [];

                    //setting the colors' hue
                    //and y level for all dots
                    var portion = 360/total;
                    for(var i = 0; i < total; ++i){
                        colors[i] = portion * i;

                        dots[i] = h;
                        dotsVel[i] = 10;
                    }

                    function anim(){
                        window.requestAnimationFrame(anim);

                        ctx.fillStyle = repaintColor;
                        ctx.fillRect(0, 0, w, h);

                        for(var i = 0; i < total; ++i){
                            var currentY = dots[i] - 1;
                            dots[i] += dotsVel[i] += accelleration;

                            ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
                            ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

                            if(dots[i] > h && Math.random() < .01){
                                dots[i] = dotsVel[i] = 0;
                            }
                        }
                    }

                    anim();
                }
                rain();

//             Beatiful Moise
                var Obj = {
                    circle: new Array(40),
                    radius: 250,
                    noise: 20,
                    speed: 0.3,
                    size: 400,

                    //color a = background color; color b = object color
                    color: {
                        a: 'hsla(280, 95%, 5%, 1)',
                        b: 'hsla(255, 255%, 255%, .8)'
                    },
                    //X & Y positions
                    X: function(x) {
                        return Obj.c.width / 2 + x;
                    },

                    Y: function(y) {
                        return Obj.c.height / 2 - y;
                    },
                    //behavior
                    Circle: function(i) {
                        this.r = Obj.radius - i * Obj.radius / Obj.circle.length;
                        this.e = i % 2 ? true : false;
                        this.max = Math.random() * Obj.noise;
                        this.min = -Math.random() * Obj.noise;
                        this.val = Math.random() * (this.max - this.min) + this.min;
                    },
                    //clearing
                    Clear: function() {
                        Obj.$.fillStyle = Obj.color.a;
                        Obj.$.fillRect(0, 0, Obj.c.width, Obj.c.height);
                    },
                    //shape changing
                    Change: function(C) {
                        for (var i = 0; i < Obj.size; i++) {
                            var a = i * Math.PI * 2 / Obj.size;
                            var x = Math.cos(a) * (C.r - C.val * Math.cos(i / 4));
                            var y = Math.sin(a) * (C.r - C.val * Math.cos(i / 4));
                            Obj.$.fillStyle = Obj.color.b;
                            Obj.$.fillRect(Obj.X(x), Obj.Y(y), 1, 1);
                        }
                        Obj.Check(C);
                    },
                    //noise level checks
                    Check: function(C) {
                        C.val = C.e ? C.val + Obj.speed : C.val - Obj.speed;
                        if (C.val < C.min) {
                            C.e = true;
                            C.max = Math.random() * Obj.noise;
                        }
                        if (C.val > C.max) {
                            C.e = false;
                            C.min = -Math.random() * Obj.noise;
                        }
                    },
                    //update object
                    Update: function() {
                        Obj.Clear();
                        for (var i = 0; i < Obj.circle.length; i++) {
                            Obj.Change(Obj.circle[i]);
                        }
                    },
                    //draw object
                    Draw: function() {
                        Obj.Update();
                        window.requestAnimationFrame(Obj.Draw, Obj.c);
                    },
                    //set circles
                    Set: function() {
                        for (var i = 0; i < Obj.circle.length; i++) {
                            Obj.circle[i] = new Obj.Circle(i);
                        }
                    },

                    //size control
                    Size: function() {
                        Obj.c.width = window.innerWidth;
                        Obj.c.height = window.innerHeight;
                    },
                    //get canvas
                    Run: function() {
                        Obj.c = document.getElementById("beatf_noise");
                        Obj.$ = Obj.c.getContext('2d');
                        window.addEventListener('resize', Obj.size, false);
                    },
                    //start
                    Init: function() {
                        Obj.Run();
                        Obj.Size();
                        Obj.Set();
                        Obj.Draw();
                    }

                };
                Obj.Init();

//            myCanvas Chess
                var c_chess = document.getElementById("myCanvas_chess");
                var ctx_chess = c_chess.getContext('2d');
                c_chess.height = 480;
                c_chess.width  = 640;
                ctx_chess.strokeStyle = '#B70A02'; // меняем цвет рамки
                ctx_chess.strokeRect(15, 15, 266, 266);
                ctx_chess.strokeRect(18, 18, 260, 260);
                ctx_chess.fillStyle = '#AF5200'; // меняем цвет клеток
                ctx_chess.fillRect(20, 20, 256, 256);
                for (i = 0; i < 8; i += 2) {
                    for (j = 0; j < 8; j += 2) {
                        ctx_chess.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
                        ctx_chess.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
                    }
                }

                // Tank's level
                var example = document.getElementById("myCanvas_tanks"),
                    ctx_tanks = example.getContext('2d'),
                    // Размер одной ячейки на карте
                    cellSize = 32,
                    // Массив карты поля боя
                    map = [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
                        [2, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ];
                example.width = 16 * cellSize;
                example.height = 15 * cellSize;
                ctx_tanks.fillStyle = '#ccc';
                ctx_tanks.fillRect(0, 0, example.width, example.height);
                ctx_tanks.fillStyle = '#000';
                ctx_tanks.fillRect(cellSize, cellSize, 13 * cellSize, 13 * cellSize);
                // Цикл обрабатывающий массив в котором содержатся значения элементов карты
                // если попадается 1 то рисуется кирпичный блок
                // если 2, то бетонная стена
                for (var j = 0; j < 26; j++)
                    for (var i = 0; i < 26; i++) {
                        switch (map[j][i]) {
                            case 1:
                                DrawBrick(i * cellSize / 2 + cellSize, j * cellSize / 2 + cellSize);
                                break;
                            case 2:
                                DrawHardBrick(i * cellSize / 2 + cellSize, j * cellSize / 2 + cellSize);
                                break;
                        }
                    }

                // Рисуем часть кирпичной стены
                function DrawBrick(x, y) {
                    // Отрисовка основного цвета кирпича
                    ctx_tanks.fillStyle = '#FFA500';
                    ctx_tanks.fillRect(x, y, cellSize / 2, cellSize / 2);
                    // Отрисовка теней
                    ctx_tanks.fillStyle = '#CD8500';
                    ctx_tanks.fillRect(x, y, cellSize / 2, cellSize / 16);
                    ctx_tanks.fillRect(x, y + cellSize / 4, cellSize / 2, cellSize / 16);
                    ctx_tanks.fillRect(x + cellSize / 4, y, cellSize / 16, cellSize / 4);
                    ctx_tanks.fillRect(x + cellSize / 16, y + cellSize / 4, cellSize / 16, cellSize / 4);
                    // Отрисовка раствора между кирпичами
                    ctx_tanks.fillStyle = '#D3D3D3';
                    ctx_tanks.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 2, cellSize / 16);
                    ctx_tanks.fillRect(x, y + cellSize / 2 - cellSize / 16, cellSize / 2, cellSize / 16);
                    ctx_tanks.fillRect(x + cellSize / 4 - cellSize / 16, y, cellSize / 16, cellSize / 4);
                    ctx_tanks.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 16, cellSize / 4);
                }

                // Рисуем часть бетонного блока
                function DrawHardBrick(x, y) {
                    // Отрисовка основного фона
                    ctx_tanks.fillStyle = '#cccccc';
                    ctx_tanks.fillRect(x, y, cellSize / 2, cellSize / 2);
                    // Отрисовка Тени
                    ctx_tanks.fillStyle = '#909090';
                    ctx_tanks.beginPath();
                    ctx_tanks.moveTo(x, y + cellSize / 2);
                    ctx_tanks.lineTo(x + cellSize / 2, y + cellSize / 2);
                    ctx_tanks.lineTo(x + cellSize / 2, y);
                    ctx_tanks.fill();
                    // Отрисовка белого прямоугольника сверху
                    ctx_tanks.fillStyle = '#eeeeee';
                    ctx_tanks.fillRect(x + cellSize / 8, y + cellSize / 8, cellSize / 4, cellSize / 4);
                }


// класс определяющий параметры игрового прямоугольника и метод для его отрисовки
                function rect(color, x, y, width, height) {
                    this.color = color; // цвет прямоугольника
                    this.x = x; // координата х
                    this.y = y; // координата у
                    this.width = width; // ширина
                    this.height = height; // высота
                    // функция рисует прямоугольник согласно заданным параметрам
                    this.draw = function() {
                        context.fillStyle = this.color;
                        context.fillRect(this.x, this.y, this.width, this.height);
                    };
                }
                // функция проверяет пересекаются ли переданные ей прямоугольные объекты
                function collision(objA, objB) {
                    if (objA.x + objA.width > objB.x && objA.x < objB.x + objB.width && objA.y + objA.height > objB.y && objA.y < objB.y + objB.height) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                // движение оппонента

                function aiMove() {
                    var y;
                    // делаем скорость оппонента зависимой от скорости шарика
                    switch (ball.vY) {
                        case 2:
                            ball.vY = 2;
                            break;
                        case 3:
                            ball.vY = 3;
                            break;
                        case 4:
                            ball.vY = 4;
                            break;
                        case 5:
                            ball.vY = 5;
                            break;
                        case 6:
                            ball.vY = 5;
                            break;
                        case 7:
                            ball.vY = 6;
                            break;
                        case 8:
                            ball.vY = 6;
                            break;
                        case 9:
                            ball.vY = 6;
                            break;
                        case 0:
                            ball.vY = 0;
                            break;
                    }

                    if (ball.y < ai.y + ai.height / 2) {
                        y = ai.y - ball.vY;
                    }
                    if (ball.y > ai.y + ai.height / 2) {
                        y = ai.y + ball.vY;
                    }
                    if (10 < y && y < game.height - ai.height - 10) {
                        ai.y = y;
                    }
                }
                // движение игрока

                // function playerMove(e) {
                //     if (start) {
                //         var y = e.pageY;
                //         // условие проверяет не выходит ли ракетка за пределы поля
                //         if (player.height / 2 + 10 < y && y < game.height - player.height / 2 - 10) {
                //             // привязываем положение мыши к середине ракетки
                //             player.y = y - player.height / 2;
                //         }
                //     }
                // }

                    // playerMove();
                function startGame() {
                    if (!start) {
                        ball.vX = -2;
                        ball.vY = 2;
                        start = true;
                    }
                }

                // отрисовка игры
                function draw() {
                    game.draw(); // игровое поле
                    // разделительная полоса
                    for (var i = 10; i < game.height; i += 45) {
                        context.fillStyle = "#ccc";
                        context.fillRect(game.width / 2 - 10, i, 20, 30);
                    }
                    // рисуем на поле счёт
                    context.font = 'bold 128px courier';
                    context.textAlign = 'center';
                    context.textBaseline = 'top';
                    context.fillStyle = '#ccc';
                    context.fillText(ai.scores, 100, 0);
                    context.fillText(player.scores, game.width - 100, 0);
                    ai.draw(); // левая ракетка
                    player.draw(); // ракетка игрока
                    ball.draw(); // шарик
                    if (!start) {
                        // вывод статстики
                        context.fillStyle = "#ccc";
                        context.globalAlpha = 0.7;
                        context.fillRect(0, 0, game.width, game.height);
                        context.font = 'bold 16px courier';
                        context.textBaseline = 'top';
                        context.fillStyle = '#000';
                        context.fillText("Total: " + game.total + " Win: " + game.win + " Lose: " + game.lose, game.width / 2, 0);
                        context.font = 'bold 60px courier';
                        context.textBaseline = 'top';
                        context.fillStyle = '#000';
                        context.fillText("canvasPong", game.width / 2, game.height / 2 - 50);
                        context.font = 'bold 16px courier';
                        context.textBaseline = 'top';
                        context.fillStyle = '#000';
                        context.fillText("click on me", game.width / 2, game.height / 2 + 25);
                        context.textBaseline = 'bottom';
                        context.fillText("artTex[canvas test] @ 2017", game.width / 2, game.height);
                    }
                }
                // игровые изменения которые нужно произвести

                function update() {
                    // двигаем ракетку оппонента
                    aiMove();
                    // меняем координаты шарика
                    // Движение по оси У
                    if (ball.y < 0 || ball.y + ball.height > game.height) {
                        // соприкосновение с полом и потолком игрового поля
                        ball.vY = -ball.vY;
                    }
                    // Движение по оси Х
                    if (ball.x < 0) {
                        // столкновение с левой стеной
                        ball.vX = -ball.vX;
                        player.scores++;
                    }
                    if (ball.x + ball.width > game.width) {
                        // столкновение с правой
                        ball.vX = -ball.vX;
                        ai.scores++;
                    }

                    // Если счёт равен десяти то завершаем партию
                    if (ai.scores === 10 || player.scores === 10) {
                        if (ai.scores === 10) { // победа ai
                            game.lose++;
                            start = false;
                            ball.x = game.width - player.width - 1.5 * ball.width - 10;
                            ball.y = game.height / 2 - ball.width / 2;
                            ai.y = game.height / 2 - ai.height / 2;
                            player.y = game.height / 2 - ai.height / 2;
                        } else { // победа игрока
                            game.win++;
                            start = false;
                            ball.x = player.width + ball.width;
                            ball.y = game.height / 2 - ball.width / 2;
                            ai.y = game.height / 2 - ai.height / 2;
                            player.y = game.height / 2 - ai.height / 2;
                        }
                        ball.vX = 0;
                        ball.vY = 0;
                        ai.scores = 0;
                        player.scores = 0;
                        game.total++;
                    }

                    // Соприкосновение с ракетками
                    if ((collision(ai, ball) && ball.vX < 0) || (collision(player, ball) && ball.vX > 0)) {
                        // приращение скорости шарика
                        if (ball.vX < 9 && -9 < ball.vX) {
                            if (ball.vX < 0) {
                                ball.vX--;
                            } else {
                                ball.vX++;
                            }
                            if (ball.vY < 0) {
                                ball.vY--;
                            } else {
                                ball.vY++;
                            }
                        }
                        ball.vX = -ball.vX;
                    }
                    // приращение координат
                    ball.x += ball.vX;
                    ball.y += ball.vY;
                }

                function play() {
                    draw(); // отрисовываем всё на холсте
                    update(); // обновляем координаты
                }
                // Инициализация переменных

                function init() {
                    start = false;
                    // объект который задаёт игровое поле
                    game = new rect("#000", 0, 0, 480, 320);
                    game.total = 0;
                    game.win = 0;
                    game.lose = 0;
                    // Ракетки-игроки
                    ai = new rect("#ffffff", 10, game.height / 2 - 40, 20, 80);
                    player = new rect("#ffffff", game.width - 30, game.height / 2 - 40, 20, 80);
                    // количество очков
                    ai.scores = 0;
                    player.scores = 0;
                    // наш квадратный игровой "шарик"
                    ball = new rect("#fff", 40, game.height / 2 - 10, 20, 20);
                    // скорость шарика
                    ball.vX = 0; // скорость по оси х
                    ball.vY = 0; // скорость по оси у
                    var canvas = document.getElementById("myCanvas_pong");
                    canvas.width = game.width;
                    canvas.height = game.height;
                    context = canvas.getContext("2d");
                    // canvas.onmousemove = playerMove;
                    canvas.onmousemove = function (event) {
                        var y =event.offsetY;
                        if (player.height / 2 + 10 < y && y < game.height - player.height / 2 - 10) {
                            // привязываем положение мыши к середине ракетки
                            player.y = y - player.height / 2;
                        }
                    }
                    canvas.onclick = startGame;
                    setInterval(play, 1000 / 50);
                }

                init();

//              Puzzle 15
                window.onload = init_puzz;

                var map;
                var ctxMap;

                var gameWidth=288;
                var gameHeight=400;

                var matrix = [[],[],[],[]] ;

                var checkMatrix = [[1,  2,  3,  4 ],
                    [5,  6,  7,  8 ],
                    [9,  10, 11, 12],
                    [13, 14, 15, 0 ] ] ;
                var randomMas=[];
                var countMc;
                var moveCount=0;
                var flagVictory=false;



                function init_puzz(){

                    map = document.getElementById("myCanvas_puzzle15");
                    map.width=gameWidth;
                    map.height=gameHeight;
                    ctxMap = map.getContext("2d");

                    game_puzz();


                    map.addEventListener("click", clickFunc, false);
                }

                var Tile = function(){
                    this.i=0;
                    this.j=0;
                    this.x=0;
                    this.y=0;
                    this.number=0;
                    this.addTile = function(){
                        ctxMap.fillStyle="#FFFFE8";
                        ctxMap.fillRoundedRect(this.x, this.y, 64, 64, 10);
                    }
                    this.setText=function(text){
                        with (ctxMap){
                            font = '20pt impact';
                            textBaseline = 'top';
                            textAlign = 'center';
                            fillStyle = '#000';
                            fillText(text, this.x+31, this.y+20);
                        }
                    }

                    this.clearTile = function(){
                        ctxMap.fillStyle="#CCFFFF";
                        ctxMap.fillRoundedRect(this.x, this.y, 64, 64, 10);

                    }
                }

                function clickFunc(e){

                    for (var j = 0; j < 4; j++ ) {
                        for (var i = 0; i < 4; i++ ) {
                            if (matrix[i][j].x+64 > e.offsetX && matrix[i][j].x < e.offsetX &&
                                matrix[i][j].y+64 > e.offsetY && matrix[i][j].y < e.offsetY )
                                move(matrix[i][j]);
                        }}

                    if (44.7+64 > e.offsetX && 44.7 < e.offsetX &&
                        326.5+64 > e.offsetY && 326.5 < e.offsetY )
                        newRandGame();


                }

                // обработка клика на плику, перемещение плит
                function move(e) {

                    var currNumber = e.number;  // сохраняем номер текущей плитки

                    if (currNumber != 0 && !flagVictory) {   // если это не пустое поле и не победное положение, то продолжаем


                        var i = e.i;    // сохраним координаты плитки в матрице
                        var j = e.j;
                        var flag = false;   // флаг для определения завершения хода


                        for (var k = 0; k < 4; k++ ) {  // нам нужно проверить наличие пустой плитки с четырёх сторон

                            switch(k) {
                                case 0 :{
                                    if (i+1 < 4 && matrix[i + 1][j].number == 0) { // если плитка не крайняя и снизу есть пустое поле, то
                                        matrix[i + 1][j].addTile();   // пустое поле превращаем в плитку
                                        matrix[i + 1][j].setText(e.number); // задаем новой плитке строку с числом
                                        matrix[i + 1][j].number = currNumber;  // теперь новая плитка превратилась в ту, на которую мы нажали
                                        flag = true;   // говорим что ход заврешен
                                    };
                                    break;
                                }

                                case 1 :{
                                    if (j+1 < 4 && matrix[i][j+1].number == 0) {
                                        matrix[i][j + 1].addTile();
                                        matrix[i][j + 1].setText(e.number);
                                        matrix[i][j + 1].number = currNumber;
                                        flag = true;
                                    };
                                    break;
                                }

                                case 2 :{
                                    if (i-1 > -1 && matrix[i - 1][j].number == 0) {

                                        matrix[i - 1][j].addTile();
                                        matrix[i - 1][j].setText(e.number);
                                        matrix[i - 1][j].number = currNumber;
                                        flag = true;
                                    };
                                    break;
                                }

                                case 3 :{
                                    if (j-1 > -1 && matrix[i][j-1].number == 0) {
                                        matrix[i][j - 1].addTile();
                                        matrix[i][j - 1].setText(e.number);
                                        matrix[i][j - 1].number = currNumber;
                                        flag = true;
                                    };
                                    break;
                                }
                            }
                            if (flag) { // если ход завершен
                                matrix[i][j].number = 0;  // текущую плитку делаем пустым полем
                                e.clearTile();
                                moveCount++;   // счетчик ходов
                                setCountMc(moveCount); // увеличиваем счетчик
                                //   if(check()) flagVictory=true; // проверка на победу
                                break;
                            }
                        }
                    }
                }

                function game_puzz(){

                    ctxMap.fillStyle="#CECECE";
                    ctxMap.fillRect(0,0,gameWidth,gameHeight);


                    setRestartBtn();
                    setCountMc(0);
                    setTiles();

                }

                function setRestartBtn() {
                    with (ctxMap){
                        fillStyle="#333333";
                        fillRoundedRect(44.7, 326.5, 50, 50, 10);


                        font = '10pt impact';
                        textBaseline = 'top';
                        textAlign = 'left';
                        fillStyle = '#ffffff';
                        fillText("Restart", 44.7+5, 326.5+17);
                    }
                }

                function setCountMc(string) {

                    with (ctxMap){
                        fillStyle="#333333";
                        fillRoundedRect(192.55, 326.5, 50, 50, 10);


                        font = '10pt impact';
                        textBaseline = 'top';
                        textAlign = 'left';
                        fillStyle = '#ffffff';
                        fillText("MOVES", 192.55+7, 326.5+5);

                        font = '18pt impact';
                        textAlign = 'center';
                        fillText(string, 192.55+25, 326.5+22);
                    }
                }

                function setTiles(){

                    for (var j=0; j<4; j++){
                        for (var i=0; i<4; i++){

                            matrix[i][j]=new Tile();
                            matrix[i][j].i=i;
                            matrix[i][j].j=j;
                            matrix[i][j].x=4+i*64+8*i;
                            matrix[i][j].y=4+j*64+8*j;

                        }
                    }

                    newRandGame();
                }

                // функция создания новой игры
                function newRandGame() {
                    flagVictory = false;  // сброс флага победы
                    moveCount=0;  // сброс счетчика ходов
                    // countMc.Count_field.text = String(moveCount);

                    var tempcount = 0;  // временная переменная для присвоения занчений в массиве
                    random();    // генерируем рандомную последовательность от 1 до 15 в массив
                    for (var j = 0; j < 4; j++ ) { // в двойном цикле пишем рандомную последовательность в нашу матрицу
                        for (var i = 0; i < 4; i++ ) {
                            matrix[i][j].addTile();
                            matrix[i][j].setText(randomMas[tempcount]); //= String(randomMas[tempcount]);
                            matrix[i][j].number = randomMas[tempcount];
                            tempcount++;
                        }
                    }
                    matrix[3][3].clearTile(); // плитку в правом нижнем углу делаем пустым полем
                    matrix[3][3].number = 0;
                }
                // создание масива с рандомной последовательностью от 1 до 15
                function random() {
                    var flag = true;

                    var temp = 0;
                    var count = 0;
                    for (var k = 0; k < 16; k++ ) randomMas[k]=0 // обнуляем массив


                    for (var j = 0; j <15; j++ ) { // в цикле создаем и записываем в массив 15 чисел
                        while (flag) {    // этот цикл работает до тех пор, пока не сгенерируется число, которого еще нет в массиве
                            if (count == 15) break;
                            temp = Math.round(15 * Math.random() + 1);
                            flag = false;
                            for (var i = 0; i < 16; i++ ) {  // цикл проверяет сгенерированное число, на его наличие в массиве
                                if (randomMas[i] == temp || temp==16) { flag = true; break; }
                            }
                        }
                        //  console.log(temp);
                        randomMas[j] = temp;
                        count++;
                        flag = true;
                    }
                }

                CanvasRenderingContext2D.prototype.fillRoundedRect = fillRoundedRect;
                /* x: Координата верхнего левого угла по горизонтали
                 y: Координата верхнего левого угла по вертикали
                 w: Ширина прямоугольника
                 h: Высота прямоугольника
                 r: Радиус закруглений
                 */
                function fillRoundedRect(x, y, w, h, r){
                    this.beginPath();
                    this.moveTo(x+r, y);
                    this.lineTo(x+w-r, y);
                    this.quadraticCurveTo(x+w, y, x+w, y+r);
                    this.lineTo(x+w, y+h-r);
                    this.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
                    this.lineTo(x+r, y+h);
                    this.quadraticCurveTo(x, y+h, x, y+h-r);
                    this.lineTo(x, y+r);
                    this.quadraticCurveTo(x, y, x+r, y);
                    this.fill();
                }

//             Game Life
                var canvas = document.getElementById('game_life');
                var ctx = canvas.getContext('2d');
                var mas=[];
                var count=0;
                var timer;

                canvas.onclick = function(event){
                    var x = event.offsetX;
                    var y = event.offsetY;
                    console.log(x);
                    console.log(y);
                    x = Math.floor(x/10); //300 /10 = 30
                    y = Math.floor(y/10); //300 /10 =
                    mas[y][x]=1;
                    console.log(mas);
                    drawField();
                }

                function goLife(){
                    var n=30, m=30;
                    for (var i=0; i<m; i++){
                        mas[i]=[];
                        for (var j=0; j<n; j++){
                            mas[i][j]=0;
                        }
                    }
                }
                goLife();

                function drawField(){
                    ctx.clearRect(0, 0, 300, 300);
                    for (var i=0; i<30; i++){
                        for (var j=0; j<30; j++){
                            if (mas[i][j]==1){
                                ctx.fillRect(j*10, i*10, 10, 10);
                            }
                        }
                    }
                }

                function startLife(){
                    //моделирование жизни
                    var mas2 = [];
                    for (var i=0; i<30; i++){
                        mas2[i]=[];
                        for (var j=0; j<30; j++){
                            var neighbors = 0;
                            if (mas[fpm(i)-1][j]==1) neighbors++;//up
                            if (mas[i][fpp(j)+1]==1) neighbors++;//right
                            if (mas[fpp(i)+1][j]==1) neighbors++;//bottom
                            if (mas[i][fpm(j)-1]==1) neighbors++;//left
                            if (mas[fpm(i)-1][fpp(j)+1]==1) neighbors++;
                            if (mas[fpp(i)+1][fpp(j)+1]==1) neighbors++;
                            if (mas[fpp(i)+1][fpm(j)-1]==1) neighbors++;
                            if (mas[fpm(i)-1][fpm(j)-1]==1) neighbors++;
                            (neighbors==2 || neighbors==3) ? mas2[i][j]=1 : mas2[i][j]==0;
                        }
                    }
                    mas = mas2;
                    drawField();
                    count++;
                    document.getElementById('count').innerHTML = count;
                    timer = setTimeout(startLife, 300);
                }

                function stopLife(){}
                function repeatLife(){}

                function fpm(i){
                    if(i==0) return 30;
                    else return i;
                }
                function fpp(i){
                    if(i==29) return -1;
                    else return i;
                }

                document.getElementById('start').onclick = startLife;
                document.getElementById('stop').onclick = stopLife;
                document.getElementById('repeat').onclick = repeatLife;