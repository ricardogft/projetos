/////////////////////////////////////                CREDITOS RICARDO TOZZO 2020                ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////                        Variaveis                          ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var efeito;
var bullet, bulletEx;
var reiniciar;
var pag;
var som, gun;
document.onload = iniciandosessao();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function iniciandosessao() {
    som = new sound("assets/sound/s.wav", "soundtrack");
    play();

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////                        FUNÇOES                          //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sound(src, oq) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");

    if (oq == "soundtrack") {
        this.sound.setAttribute("id", "somz");
        this.sound.setAttribute("loop", "");
        this.sound.volume = 0.2;

    } else {
        this.sound.setAttribute("id", "tiro");

    }

    const corpo = document.querySelector("body");
    this.sound.style.display = "none";
    corpo.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fimw() {

    /////// SINGLE // MULTI
    ///////    FACIL/MED

    swal("Parabéns", "Você ganhou!", {
            button: {
                ok: "Inicio",
                value: true
            }
        })
        .then((value) => {
            switch (value) {
                case true:
                    retornarinicio();
                    break;

            }
        });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fiml(a) {


    swal("Suas balas acabaram", "Eu estava na casa => " + a, "error", {
            button: {
                ok: "Inicio",
                value: true
            }
        })
        .then((value) => {
            switch (value) {
                case true:
                    retornarinicio();
                    break;

            }
        });

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retornarinicio() {
    limpa();
    limpavariavel();
    inicio();
}

function limpavariavel() {
    bullet = 5;
}

function limpa() {
    document.getElementById("painel").remove();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tiro() {
    var vefs = document.querySelector("#tiro");
    if (vefs == null) {
        gun = new sound("assets/sound/rifle.wav", "nda");
        gun.play();
    } else {
        document.getElementById("tiro").remove();
        gun = new sound("assets/sound/rifle.wav", "nda");
        gun.play();

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////                       INICIO                                       /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function play() {
    let a, b, c, span1, span2; // titulo
    let a2, b2, a3, b3, a4, b4, a5, b5;
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row");
    c.setAttribute("class", "col");
    let corpo = document.querySelector("body");

    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "600px";
    a.style.background = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5)) , url('alien.png') no-repeat 25% 25%";
    a.style.border = "double black 5px";

    var h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center mt-3");
    span1.style.color = "red";
    span2.style.color = "green";
    span1.innerHTML = "Hunter";
    span1.setAttribute("class", "under");
    span1.style.textShadow = "1px 1px 1px #660000 , -1px -1px 1px #660000 ";
    span2.style.textShadow = "1px 1px 1px lime, -1px -1px 1px lime ";
    span2.innerHTML = "Alien";
    span2.setAttribute("class", "under");
    c.appendChild(h1);
    h1.appendChild(span1);
    h1.innerHTML += " vs ";
    h1.appendChild(span2);
    c.style.border = "solid black 2px";
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";

    a2 = document.createElement("div");
    b2 = document.createElement("div");
    a2.setAttribute("class", "row");
    b2.setAttribute("class", "offset-5 col-1 px-4");
    a2.style.marginTop = "185px";

    a.appendChild(a2);
    a2.appendChild(b2);

    let buttonstart = document.createElement("button");
    buttonstart.setAttribute("class", "btn new");
    buttonstart.style.width = "120px";
    buttonstart.style.height = "120px";
    buttonstart.innerHTML = "Iniciar";
    buttonstart.style.color = "white";
    //buttonstart.style.marginLeft = "10px";
    buttonstart.addEventListener("click", function() {
        som.play();
        buttonstart.setAttribute("class", "opennew");
        setTimeout(() => {
            limpa();
            inicio();

        }, 1500);

    });
    b2.appendChild(buttonstart);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function inicio() {

    //clearInterval(efeito);
    //efeito = setInterval(test, 100);
    let a, b, c, span1, span2; // titulo
    let a2, b2, a3, b3, a4, b4, a5, b5;
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    var corpo = document.querySelector("body");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row");
    c.setAttribute("class", "col");

    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "600px";
    a.style.background = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5)) , url('assets/img/alien.png') no-repeat 25% 25%";
    a.style.border = "double black 5px";
    var h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center mt-3");
    span1.style.color = "red";
    span2.style.color = "green";
    span1.innerHTML = "Hunter";
    span1.setAttribute("class", "under");
    span2.innerHTML = "Alien";
    span2.setAttribute("class", "under");
    span1.style.textShadow = "1px 1px 1px #660000 , -1px -1px 1px #660000 ";
    span2.style.textShadow = "1px 1px 1px lime, -1px -1px 1px lime ";
    c.appendChild(h1);
    h1.appendChild(span1);
    h1.innerHTML += " vs ";
    h1.appendChild(span2);
    c.style.border = "solid black 2px";
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";

    /////////////////////////////////////////////////////////////
    /// titulo///////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////

    var butsingle = document.createElement("button");
    var butmulti = document.createElement("button");
    var info = document.createElement("button");
    var sair = document.createElement("button");

    a2 = document.createElement("div");
    b2 = document.createElement("div");
    a2.setAttribute("class", "row");
    b2.setAttribute("class", "col");
    a.appendChild(a2);
    a2.appendChild(b2);
    b2.appendChild(butsingle);
    butsingle.setAttribute("class", "btn btn-dark btn-block mt-5 my-1");
    butsingle.innerHTML = "Jogador Solo";
    b2.style.marginTop = "100px";

    a3 = document.createElement("div");
    b3 = document.createElement("div");
    a3.setAttribute("class", "row");
    b3.setAttribute("class", "col");
    a.appendChild(a3);
    a3.appendChild(b3);
    b3.appendChild(butmulti);
    butmulti.setAttribute("class", "btn btn-dark btn-block my-1");
    butmulti.innerHTML = "Jogador vs Jogador";

    a4 = document.createElement("div");
    b4 = document.createElement("div");
    a4.setAttribute("class", "row");
    b4.setAttribute("class", "col");
    a.appendChild(a4);
    a4.appendChild(b4);
    b4.appendChild(info);
    info.setAttribute("class", "btn btn-dark btn-block my-1");
    info.innerHTML = "Informativo";


    a5 = document.createElement("div");
    b5 = document.createElement("div");
    a5.setAttribute("class", "row");
    b5.setAttribute("class", "col");
    a.appendChild(a5);
    a5.appendChild(b5);
    b5.appendChild(sair);
    sair.setAttribute("class", "btn btn-dark btn-block mt-5");
    sair.innerHTML = "Sair";


    var copr = document.createElement("div");
    var copc = document.createElement("div");
    var coptext = document.createElement("h6");

    copr.setAttribute("class", "row");
    copc.setAttribute("class", "col text-center");

    var cop = new Date();
    cop = cop.getFullYear();
    copr.style.marginTop = "118px";
    copc.style.border = "solid black 1px";
    coptext.innerHTML = "&#169;opyright &#169;adaum - " + cop;
    a.appendChild(copr);
    copr.appendChild(copc);
    copc.appendChild(coptext);

    sair.addEventListener("click", function() {
        window.close();
    });

    butsingle.addEventListener("click", function() {
        limpa();
        nivel();
    });

    info.addEventListener("click", function() {
        limpa();
        informativo();
    });

    butmulti.addEventListener("click", function() {
        limpa();
        vs();
    });
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function informativo(pagina) {

    if (pagina == undefined) {
        pagina = 1;
    } else {
        pagina = pagina;
    }

    let a, b, c, span1, span2; // titulo
    let a2, b2, b21, b321, a3, b3, a4, b4, a5, b5;
    let infrow, infcol, infh3, infh6;
    let infeasy, infmed, infhard;
    let tileasy, tilmed, tilhard;

    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    var corpo = document.querySelector("body");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row my-1");
    c.setAttribute("class", "col mx-5");
    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "600px";
    a.style.backgroundColor = "lightgray";
    a.style.border = "double black 5px";
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center");
    h1.innerHTML = "Informativo";
    h1.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px white";
    c.appendChild(h1);
    c.style.borderBottom = "solid black 2px";
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";
    a.style.backgroundImage = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5))";


    ///////////////////////////////////////////////////////////////////////////////////////

    let rowbut;
    let colbut1, colbut2;
    let butavanc, butrec;
    let butinicio = document.createElement("button");
    let spanbulletfacil = document.createElement("span");
    let spanbulletmed = document.createElement("span");
    let spanbulletfhard = document.createElement("span");

    let spanalienfacil = document.createElement("span");
    let spanalienmed = document.createElement("span");
    let spanalienhard = document.createElement("span");

    switch (pagina) {
        case 1:

            infrow = document.createElement("div");
            infcol = document.createElement("div");
            infrow.setAttribute("class", "row mb-4");
            infcol.setAttribute("class", "col text-center");
            infcol.style.borderBottom = "solid black 2px";
            infcol.style.marginLeft = "15px";
            infcol.style.marginRight = "15px";
            infh3 = document.createElement("h3");
            infh6 = document.createElement("h6");
            infh3.setAttribute("class", "mb-2");
            infh6.setAttribute("class", "mb-2");
            a.appendChild(infrow);
            infrow.appendChild(infcol);
            infcol.appendChild(infh3);
            infcol.appendChild(infh6);
            infh3.innerHTML = "Modo Solo";
            infh3.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px black";
            infh6.innerHTML = "Neste modo de jogo você é o <span class='text-danger'>Caçador</span> e a quantidade de balas sera a quantidade de tentativas que você tera para acertar o <span style='color:darkgreen;'>Alien</span>";

            a2 = document.createElement("div");
            a2.setAttribute("class", "row text-center");
            b2 = document.createElement("div");
            b2.setAttribute("class", "col mx-1 px-1");
            b21 = document.createElement("div");
            b21.setAttribute("class", "col mx-1 px-1");
            b321 = document.createElement("div");
            b321.setAttribute("class", "col mx-1 px-1");
            a.appendChild(a2);
            a2.appendChild(b2);
            a2.appendChild(b21);
            a2.appendChild(b321)
            b2.style.border = "solid black 2px";
            b21.style.border = "solid black 2px";
            b321.style.border = "solid black 2px";
            b2.style.height = "300px";
            b21.style.height = "300px";
            b321.style.height = "300px";

            tileasy = document.createElement("h4");
            tilmed = document.createElement("h4");
            tilhard = document.createElement("h4");

            b2.appendChild(tileasy);
            b21.appendChild(tilmed);
            b321.appendChild(tilhard);

            tileasy.style.color = "green";
            tilmed.style.color = "orange";
            tilhard.style.color = "red";

            tileasy.innerHTML = "Fácil";
            tileasy.style.textShadow = "0.5px 0.5px 1px lightgreen ,-0.6px -0.6px 1px #0f3d0f";
            tilmed.innerHTML = "Médio";
            tilmed.style.textShadow = "0.5px 0.5px 1px  #ffff66 ,-0.6px -0.6px 1px #808000 ";
            tilhard.innerHTML = "Difícil";
            tilhard.style.textShadow = "0.5px 0.5px 1px #ff6666,-0.6px -0.6px 1px #4d0000";

            spanbulletfacil.innerHTML = "&#9776; 5";
            spanbulletmed.innerHTML = "&#9776; 7";
            spanbulletfhard.innerHTML = "&#9776; 10";

            b2.appendChild(spanbulletfacil);
            b21.appendChild(spanbulletmed);
            b321.appendChild(spanbulletfhard);

            infeasy = document.createElement("h6");
            infmed = document.createElement("h6");
            infhard = document.createElement("h6");

            infeasy.style.marginTop = "25px";
            infeasy.innerHTML = "O Alien ira se esconder em uma casa dentre o intervalo de 1 a 100<br>Você tera 5 chances para acertar<br>E ele ira te provocar!";
            b2.appendChild(infeasy);

            infmed.style.marginTop = "25px";
            infmed.innerHTML = "O Alien ira se esconder em uma casa dentre o intervalo de 1 a 16!<br>Mas após achar a casa em que ele se esconde tera que acertar dentre as 3 Árvores existentes";
            b21.appendChild(infmed);

            infhard.style.marginTop = "25px";
            infhard.innerHTML = "Falta Logica";
            b321.appendChild(infhard);


            rowbut = document.createElement("div");
            colbut1 = document.createElement("div");
            colbut2 = document.createElement("div");
            colbutmid = document.createElement("div");
            rowbut.setAttribute("class", "row text-center");
            colbut1.setAttribute("class", "col mt-4");
            colbut2.setAttribute("class", "col mt-4");
            colbutmid.setAttribute("class", "col mt-4");
            butavanc = document.createElement("i");
            butrec = document.createElement("i");
            butrec.innerHTML = "<i class='fa fa-arrow-left'></i>";
            butavanc.innerHTML = "<i class='fa fa-arrow-right'></i>";
            butavanc.style.fontSize = "30px";
            butrec.style.fontSize = "30px";
            butavanc.style.margin = "15px";
            butrec.style.margin = "15px";
            butavanc.style.color = "black";
            butrec.style.color = "black";
            butavanc.style.textShadow = "white 1px 1px 10px";
            butrec.style.textShadow = "white 1px 1px 10px";
            butrec.style.color = "gray";


            butinicio.setAttribute("class", "btn btn-block btn-outline-dark");
            c.appendChild(butinicio);
            butinicio.innerHTML = "Inicio";

            a.appendChild(rowbut);
            rowbut.appendChild(colbut1);
            rowbut.appendChild(colbutmid);
            rowbut.appendChild(colbut2);
            colbut1.appendChild(butrec);
            colbutmid.appendChild(butinicio);
            colbut2.appendChild(butavanc);

            butinicio.addEventListener("click", function() {
                limpa();
                inicio();
            });

            butrec.addEventListener("click", function() {
                if (this.style.color == "gray") {
                    return false;
                } else {

                }
            });

            butavanc.addEventListener("click", function() {
                if (this.style.color == "gray") {
                    return false;
                } else {
                    limpa();
                    informativo(2);
                }
            });

            break;

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 2:
            infrow = document.createElement("div");
            infcol = document.createElement("div");
            infrow.setAttribute("class", "row mb-4");
            infcol.setAttribute("class", "col text-center");
            infcol.style.borderBottom = "solid black 2px";
            infcol.style.marginLeft = "15px";
            infcol.style.marginRight = "15px";
            infh3 = document.createElement("h3");
            infh6 = document.createElement("h6");
            infh3.setAttribute("class", "mb-2");
            infh6.setAttribute("class", "mb-2");
            a.appendChild(infrow);
            infrow.appendChild(infcol);
            infcol.appendChild(infh3);
            infcol.appendChild(infh6);
            infh3.innerHTML = "Modo Jogador vs Jogador";
            infh3.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px black";
            infh6.innerHTML = "Neste modo de jogo um jogador ira incorporar o <span class='text-danger'>Caçador</span> e o outro o <span style='color:darkgreen;'>Alien</span><br>O <span style='color:darkgreen;'>Alien</span> ira se esconder dentre as opções disponiveis e o outro como <span class='text-danger'>Caçador</span> ira tentar acha-lo!";



            a2 = document.createElement("div");
            a2.setAttribute("class", "row text-center");
            b2 = document.createElement("div");
            b2.setAttribute("class", "col mx-1 px-1");
            b21 = document.createElement("div");
            b21.setAttribute("class", "col mx-1 px-1");
            b321 = document.createElement("div");
            b321.setAttribute("class", "col mx-1 px-1");
            a.appendChild(a2);
            a2.appendChild(b2);
            a2.appendChild(b21);
            a2.appendChild(b321)
            b2.style.border = "solid black 2px";
            b21.style.border = "solid black 2px";
            b321.style.border = "solid black 2px";
            b2.style.height = "300px";
            b21.style.height = "300px";
            b321.style.height = "300px";

            tileasy = document.createElement("h4");
            tilmed = document.createElement("h4");
            tilhard = document.createElement("h4");

            tileasy.setAttribute('class', "text-center");
            tilmed.setAttribute('class', "text-center");
            tilhard.setAttribute('class', "text-center");

            b2.appendChild(tileasy);
            b21.appendChild(tilmed);
            b321.appendChild(tilhard);

            tileasy.style.color = "green";
            tilmed.style.color = "orange";
            tilhard.style.color = "red";

            tileasy.innerHTML = "Fácil";
            tileasy.style.textShadow = "0.5px 0.5px 1px lightgreen ,-0.6px -0.6px 1px #0f3d0f";
            tilmed.innerHTML = "Médio";
            tilmed.style.textShadow = "0.5px 0.5px 1px  #ffff66 ,-0.6px -0.6px 1px #808000 ";
            tilhard.innerHTML = "Difícil";
            tilhard.style.textShadow = "0.5px 0.5px 1px #ff6666,-0.6px -0.6px 1px #4d0000";

            spanalienfacil.setAttribute("class", "px-4");
            spanbulletfacil.setAttribute("class", "px-4");
            spanalienmed.setAttribute("class", "px-4");
            spanbulletmed.setAttribute("class", "px-4");
            spanalienhard.setAttribute("class", "px-4");
            spanbulletfhard.setAttribute("class", "px-4");



            spanalienfacil.innerHTML = "<span class='text-danger'>&hearts;</span> 1"
            spanbulletfacil.innerHTML = "&#9776; 5";
            spanalienmed.innerHTML = "<span class='text-danger'>&hearts;</span> 2"
            spanbulletmed.innerHTML = "&#9776; 7";
            spanalienhard.innerHTML = "<span class='text-danger'>&hearts;</span> 3"
            spanbulletfhard.innerHTML = "&#9776; 10";


            b2.appendChild(spanalienfacil);
            b2.appendChild(spanbulletfacil);
            b21.appendChild(spanalienmed);
            b21.appendChild(spanbulletmed);
            b321.appendChild(spanalienhard);
            b321.appendChild(spanbulletfhard);

            infeasy = document.createElement("h6");
            infmed = document.createElement("h6");
            infhard = document.createElement("h6");

            infeasy.style.marginTop = "25px";
            infeasy.innerHTML = "O Alien ira se esconder em uma casa dentre o intervalo de 1 a 100<br>Você tera 5 chances para acertar<br>E ele ira te provocar!";
            b2.appendChild(infeasy);

            infmed.style.marginTop = "25px";
            infmed.innerHTML = "O Alien ira se esconder em uma casa dentre o intervalo de 1 a 16!<br>Mas após achar a casa em que ele se esconde tera que acertar dentre as 3 Árvores existentes";
            b21.appendChild(infmed);

            infhard.style.marginTop = "25px";
            infhard.innerHTML = "Falta Logica";
            b321.appendChild(infhard);

            rowbut = document.createElement("div");
            colbut1 = document.createElement("div");
            colbut2 = document.createElement("div");
            colbutmid = document.createElement("div");
            rowbut.setAttribute("class", "row text-center");
            colbut1.setAttribute("class", "col mt-3");
            colbut2.setAttribute("class", "col mt-3");
            colbutmid.setAttribute("class", "col mt-3");
            butavanc = document.createElement("i");
            butrec = document.createElement("i");
            butrec.innerHTML = "<i class='fa fa-arrow-left'></i>";
            butavanc.innerHTML = "<i class='fa fa-arrow-right'></i>";
            butavanc.style.fontSize = "30px";
            butrec.style.fontSize = "30px";
            butavanc.style.margin = "15px";
            butrec.style.margin = "15px";
            butavanc.style.color = "black";
            butrec.style.color = "black";
            butavanc.style.textShadow = "white 1px 1px 10px";
            butrec.style.textShadow = "white 1px 1px 10px";
            butavanc.style.color = "gray";


            butinicio.setAttribute("class", "btn btn-block btn-outline-dark");
            c.appendChild(butinicio);
            butinicio.innerHTML = "Inicio";

            a.appendChild(rowbut);
            rowbut.appendChild(colbut1);
            rowbut.appendChild(colbutmid);
            rowbut.appendChild(colbut2);
            colbut1.appendChild(butrec);
            colbutmid.appendChild(butinicio);
            colbut2.appendChild(butavanc);

            butinicio.addEventListener("click", function() {
                limpa();
                inicio();
            });

            butrec.addEventListener("click", function() {
                if (this.style.color == "gray") {
                    return false;
                } else {
                    limpa();
                    informativo(1);

                }
            });

            butavanc.addEventListener("click", function() {
                if (this.style.color == "gray") {
                    return false;
                } else {

                }
            });


            break;



    }

}


function nivel() {
    let a, b, c, span1, span2; // titulo
    let a2, b2, a3, b3, a4, b4, a5, b5;
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    var corpo = document.querySelector("body");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row mt-2");
    c.setAttribute("class", "col");
    c.style.borderBottom = "solid black 2px";
    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "600px";
    a.style.backgroundColor = "lightgray";
    a.style.border = "double black 5px";
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center");
    h1.innerHTML = "Jogador Solo";
    h1.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px white";
    c.appendChild(h1);
    a.style.backgroundImage = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5))";

    var easy = document.createElement("button");
    var medium = document.createElement("button");
    var hard = document.createElement("button");
    var sairs = document.createElement("button");

    a2 = document.createElement("div");
    b2 = document.createElement("div");
    a2.setAttribute("class", "row");
    b2.setAttribute("class", "col");
    a.appendChild(a2);
    a2.appendChild(b2);
    b2.appendChild(easy);
    easy.setAttribute("class", "btn btn-dark btn-block mt-5 my-1");
    easy.innerHTML = "Facil";
    b2.style.marginTop = "100px";

    a3 = document.createElement("div");
    b3 = document.createElement("div");
    a3.setAttribute("class", "row");
    b3.setAttribute("class", "col");
    a.appendChild(a3);
    a3.appendChild(b3);
    b3.appendChild(medium);
    medium.setAttribute("class", "btn btn-dark btn-block my-1");
    medium.innerHTML = "Médio";

    a4 = document.createElement("div");
    b4 = document.createElement("div");
    a4.setAttribute("class", "row");
    b4.setAttribute("class", "col");
    a.appendChild(a4);
    a4.appendChild(b4);
    b4.appendChild(hard);
    hard.setAttribute("class", "btn btn-dark btn-block my-1");
    hard.innerHTML = "Dificil";

    a5 = document.createElement("div");
    b5 = document.createElement("div");
    a5.setAttribute("class", "row");
    b5.setAttribute("class", "col");
    a.appendChild(a5);
    a5.appendChild(b5);
    b5.appendChild(sairs);
    sairs.setAttribute("class", "btn btn-dark btn-block mt-5");
    sairs.innerHTML = "Inicio";

    hard.disabled = true;

    easy.addEventListener("click", function() {
        limpa();
        jogosinglefacil();
    });

    medium.addEventListener("click", function() {
        limpa();
        jogosinglemed();
    });

    hard.addEventListener("click", function() {
        limpa();

    });

    sairs.addEventListener("click", function() {
        limpa();
        inicio();

    });



}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                                                                                                                           ///////
/////////////////////////////////                                                    SINGLE EASY/MED/HARD                                                   ///////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function jogosinglefacil(nomec, nomea, vscasa = Math.floor(Math.random() * 100) + 1) {
    bullet = 5;
    let alien = vscasa;
    let a, b, c, span1, span2; // titulo
    let a2, b2, a3, b3, a4, b4, a5, b5;
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    var corpo = document.querySelector("body");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row");
    c.setAttribute("class", "col px-0");
    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "600px";
    a.style.backgroundImage = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5))";
    a.style.border = "double black 5px";
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center py-2");

    if (nomec == undefined && nomea == undefined) {
        h1.style.textDecoration = "underline";
        h1.innerHTML = "Jogador Solo - FÁCIL"
    } else {
        let x = document.createAttribute("class");
        x.value = "under";
        h1.innerHTML = "<i class='text-danger under'><b>" + nomec + "</b></i>" + " vs " + "<i style='color:darkgreen;' class='under'><b>" + nomea + "</b></i>" + " -  FÁCIL";
    }

    h1.style.borderBottom = "solid black 2px";
    c.appendChild(h1);
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";
    a2 = document.createElement("div");
    b2 = document.createElement("div");
    a2.setAttribute("class", "row");
    b2.setAttribute("class", "col");
    a.appendChild(a2);
    a2.appendChild(b2);
    let table = document.createElement("table")
    b2.appendChild(table);
    table.setAttribute("class", "table mt-2");
    table.style.backgroundColor = "#CBF0B2";
    let valores = 100;

    function vef(v) {
        v = 100 - v;
        return v;
    }

    for (let i = 0; i <= 9; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (let e = 0; e <= 9; e++) {
            let td = document.createElement("td");
            let buton = document.createElement("button");
            let spannumber = document.createElement("span");
            spannumber.setAttribute("class", "text-center");
            tr.appendChild(td);
            td.appendChild(spannumber);
            spannumber.innerHTML = valores;
            spannumber.style.position = "absolute";
            spannumber.style.opacity = "0.9";
            spannumber.style.padding = "6px";
            td.appendChild(buton);
            buton.setAttribute("class", "btn btn-block");
            td.setAttribute("id", valores);



            td.addEventListener("mouseover", function() {
                if (this.style.backgroundColor == "red" || this.style.backgroundColor == "green") {
                    return false;
                } else {
                    this.style.backgroundColor = "#66B032";
                }

                this.addEventListener("mouseleave", function() {

                    if (this.style.backgroundColor == "red" || this.style.backgroundColor == "green") {
                        return false;
                    } else {
                        this.style.backgroundColor = "";
                    }
                });
            });



            td.addEventListener("click", function() {
                if (this.style.backgroundColor == "red") {
                    return false;
                }
                if (this.id != alien) {
                    tiro();
                    this.style.backgroundColor = "red";
                    this.style.color = "black";
                    this.innerHTML = "&#9760;";
                    --bullet;
                    let spanbullet = document.getElementById("bullets");
                    spanbullet.innerHTML = "&#9776; " + bullet;
                    let textext = document.getElementById("texto");

                    if (Number(alien) > Number(this.id)) {
                        textext.innerHTML = " Estou mais para cima! da casa => " + this.id;
                    } else {
                        textext.innerHTML = " Estou mais para baixo! da casa => " + this.id;
                    }

                    if (bullet == 0) {
                        var td = document.querySelectorAll("td");
                        for (let i = 0; i <= td.length - 1; i++) {
                            td[i].style.backgroundColor = "red";
                        }

                        td[vef(alien)].style.backgroundColor = "green";
                        td[vef(alien)].innerHTML = "<i class='fab fa-teamspeak' style='color:darkgreen'></i>"
                        setTimeout(() => {
                            if (nomec == undefined && nomea == undefined) { //aqui reformular para func global
                                swal("Suas balas acabaram", "Eu estava na casa => " + alien, "error", {
                                        button: {
                                            ok: "Inicio",
                                            value: true
                                        }
                                    })
                                    .then((value) => {
                                        switch (value) {
                                            case true:
                                                retornarinicio();
                                                break;
                                        }
                                    });
                            } else {
                                swal("Suas balas acabaram " + nomec, nomea + ": 'eu estava na casa => " + alien + "'", "error", {
                                        button: {
                                            ok: "Inicio",
                                            value: true
                                        }
                                    })
                                    .then((value) => {
                                        switch (value) {
                                            case true:
                                                retornarinicio();
                                                break;
                                        }
                                    });
                            }

                        }, 1500);
                    }
                } else {
                    var td = document.querySelectorAll("td");
                    for (let i = 0; i <= td.length - 1; i++) {
                        td[i].style.backgroundColor = "green";
                    }

                    setTimeout(() => {

                        swal("Parabéns", "Você ganhou!", {
                                button: {
                                    ok: "Inicio",
                                    value: true
                                }
                            })
                            .then((value) => {
                                switch (value) {
                                    case true:
                                        retornarinicio();
                                        break;

                                }
                            });

                    }, 1500);
                }
            });
            buton.value = valores;
            td.style.textAlign = "center";
            td.style.padding = "1px";
            buton.style.color = "darkgreen";
            buton.innerHTML = "&#9827;";
            valores--;
        }
    }

    let spantext = document.createElement("span");
    let et = document.createElement("i");
    et.setAttribute("class", "fab fa-teamspeak");
    et.style.color = "darkgreen";
    a4 = document.createElement("div");
    b4 = document.createElement("div");
    a4.setAttribute("class", "row");
    b4.setAttribute("class", "col text-center pb-1");
    a.appendChild(a4);
    a4.appendChild(b4);
    b4.appendChild(et);
    b4.appendChild(spantext);
    et.style.fontSize = "30px";
    spantext.style.color = "green";
    spantext.setAttribute("id", "texto");
    spantext.style.textShadow = "black 1px 1px";
    spantext.innerHTML = " Tente me achar!";

    a3 = document.createElement("div");
    b3 = document.createElement("div");
    a3.setAttribute("class", "row");
    b3.setAttribute("class", "col");
    a.appendChild(a3);
    a3.appendChild(b3);
    b3.style.borderTop = "solid black 2px"
    let h4 = document.createElement("h4");
    let spanbullet = document.createElement("span");
    spanbullet.setAttribute("id", "bullets");

    b3.style.textAlign = "right";
    spanbullet.innerHTML = "&#9776; " + bullet;
    h4.style.marginTop = "3px";
    b3.appendChild(h4);
    h4.appendChild(spanbullet);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                              MED                                                                                          ///////
/////////////////////////////////                                                                                                                           ///////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function jogosinglemed(nomec, nomea, casa = Math.floor(Math.random() * 16) + 1, arvore = Math.floor(Math.random() * 3) + 1) {
    bullet = 7;
    let alien = casa;
    let tree = arvore;
    let a, b, c;
    let a2, b2, a3, b3, a4, b4, a5, b5;
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    var corpo = document.querySelector("body");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row");
    c.setAttribute("class", "col px-0");
    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "700px";
    a.style.backgroundColor = "lightgray";
    a.style.border = "double black 5px";
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center py-2");
    if (nomec == undefined && nomea == undefined) {
        h1.innerHTML = "Jogador Solo - MÉDIO";
    } else {
        let x = document.createAttribute("class");
        x.value = "under";
        h1.innerHTML = "<i class='text-danger under'><b>" + nomec + "</b></i>" + " vs " + "<i style='color:darkgreen;' class='under'><b>" + nomea + "</b></i>" + " -  MÉDIO";
    }
    h1.style.borderBottom = "solid black 2px";
    c.appendChild(h1);
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";
    a.style.backgroundImage = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5))";
    a2 = document.createElement("div");
    b2 = document.createElement("div");
    a2.setAttribute("class", "row mt-3");
    b2.setAttribute("class", "col");

    a.appendChild(a2);
    a2.appendChild(b2);
    let table = document.createElement("table")
    b2.appendChild(table);
    table.setAttribute("class", "table mt-2");
    table.setAttribute("id", "med");
    table.style.backgroundColor = "#CBF0B2";
    var ids = 16

    function vef(v) {
        v = 16 - v;
        return v;
    }

    for (let i = 0; i <= 3; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (let e = 0; e <= 3; e++) {
            let td = document.createElement("td");
            td.setAttribute("id", ids);
            let butonx = document.createElement("button");
            let butony = document.createElement("button");
            let butonz = document.createElement("button");

            tr.appendChild(td);
            td.appendChild(butonx);
            td.appendChild(butony);
            td.appendChild(butonz);

            butonx.setAttribute("class", "btn btn-lg");
            butony.setAttribute("class", "btn btn-lg");
            butonz.setAttribute("class", "btn btn-lg");

            butonx.style.fontSize = "55px";
            butony.style.fontSize = "55px";
            butonz.style.fontSize = "55px";

            butonx.style.margin = "4px";
            butony.style.margin = "4px";
            butonz.style.margin = "4px";

            butonx.value = "1";
            butony.value = "2";
            butonz.value = "3";


            td.addEventListener("mouseover", function() {
                if (this.style.backgroundColor == "red" || this.style.backgroundColor == "#66B032" || this.style.backgroundColor == "lime") {
                    return false;
                } else {
                    this.style.backgroundColor = "#66B032";
                }

                this.addEventListener("mouseleave", function() {

                    if (this.style.backgroundColor == "red" || this.style.backgroundColor == "lime") {
                        return false;
                    } else {
                        this.style.backgroundColor = "";
                    }
                });
            });



            td.addEventListener("click", function() {

                if (this.style.position == "absolute" || td.style.backgroundColor == "red") {
                    return false;
                }

                if (this.id != alien) {
                    tiro();
                    --bullet;
                    let spanbullet = document.getElementById("bullets");
                    spanbullet.innerHTML = "&#9776; " + bullet;
                    this.style.backgroundColor = "red";
                    if (bullet == 0) {
                        fiml(alien);
                        return false;
                    }
                    return false;
                } else {
                    let spanbullet = document.getElementById("bullets");
                    if (this.style.backgroundColor != "lime") {
                        tiro();
                        --bullet;
                        spanbullet.innerHTML = "&#9776; " + bullet;
                        this.style.backgroundColor = "lime";
                        document.getElementById("texto").innerHTML = " Quase<br>Me ache dentre essas três";

                    }
                    if (bullet == 0) {
                        fiml(alien);
                        return false;
                    }

                }



                this.style.position = "absolute";
                this.style.zIndex = "10";
                this.style.backgroundColor = "#66B032";
                this.style.left = "15px";
                this.style.top = "10px";
                this.style.width = "758px";
                this.style.height = "424px";
                this.style.border = "solid black 4px";

                butonx.style.fontSize = "150px";
                butony.style.fontSize = "150px";
                butonz.style.fontSize = "150px";

                butonx.style.margin = "50px";
                butony.style.margin = "50px";
                butonz.style.margin = "50px";

                this.addEventListener("mouseleave", function() {

                    if (this.id == alien) {
                        this.style.backgroundColor = "lime";
                    }

                    this.style.position = "";
                    this.style.width = "";
                    this.style.height = "";
                    this.style.border = "";
                    this.style.zIndex = "";

                    butonx.style.fontSize = "55px";
                    butony.style.fontSize = "55px";
                    butonz.style.fontSize = "55px";

                    butonx.style.margin = "";
                    butony.style.margin = "";
                    butonz.style.margin = "";
                });

            });






            butonx.addEventListener("click", function() {
                if (td.style.position == "absolute") {
                    setTimeout(() => {
                        if (this.value == tree) {
                            tiro();
                            --bullet;
                            spanbullet.innerHTML = "&#9776; " + bullet;
                            setTimeout(fimw, 1500);
                        } else {
                            tiro();
                            --bullet;
                            spanbullet.innerHTML = "&#9776; " + bullet;
                            this.disabled = true;
                            if (bullet == 0) {
                                fiml(alien);
                                return false;

                            }
                        }
                    }, 100);

                }

            });

            butony.addEventListener("click", function() {

                if (td.style.position == "absolute") {
                    setTimeout(() => {
                        if (this.value == tree) {
                            tiro();
                            --bullet;
                            spanbullet.innerHTML = "&#9776; " + bullet;
                            setTimeout(fimw, 1500);
                        } else {
                            tiro();
                            --bullet;
                            spanbullet.innerHTML = "&#9776; " + bullet;
                            this.disabled = true;
                            if (bullet == 0) {
                                fiml(alien);
                                return false;

                            }
                        }
                    }, 100);
                }
            });

            butonz.addEventListener("click", function() {
                if (td.style.position == "absolute") {
                    setTimeout(() => {
                        if (this.value == tree) {
                            tiro();
                            --bullet;
                            spanbullet.innerHTML = "&#9776; " + bullet;
                            setTimeout(fimw, 1000);
                        } else {
                            tiro();
                            --bullet;
                            spanbullet.innerHTML = "&#9776; " + bullet;
                            this.disabled = true;
                            if (bullet == 0) {
                                fiml(alien);
                                return false;
                            }
                        }
                    }, 100);
                }
            });

            td.style.textAlign = "center";
            td.style.padding = "1px";
            td.style.margin = "1px";
            butonx.style.padding = "6px";
            butony.style.padding = "6px";
            butonz.style.padding = "6px";

            butonx.style.color = "darkgreen";
            butonx.innerHTML = "&#9827;";
            butony.style.color = "OliveDrab";
            butony.innerHTML = "&#9827;";
            butonz.style.color = "LimeGreen";
            butonz.innerHTML = "&#9827;";
            ids--;

        }
    }
    let spantext = document.createElement("span");
    let et = document.createElement("i");
    et.setAttribute("class", "fab fa-teamspeak");
    et.style.color = "darkgreen";
    a4 = document.createElement("div");
    b4 = document.createElement("div");
    a4.setAttribute("class", "row");
    b4.setAttribute("class", "col text-center my-3");
    a.appendChild(a4);
    a4.appendChild(b4);
    b4.appendChild(et);
    b4.appendChild(spantext);
    et.style.fontSize = "30px";
    spantext.style.color = "green";
    spantext.setAttribute("id", "texto");
    spantext.style.textShadow = "black 1px 1px";
    spantext.innerHTML = " Tente me achar!";

    a3 = document.createElement("div");
    b3 = document.createElement("div");
    a3.setAttribute("class", "row");
    b3.setAttribute("class", "col");
    a.appendChild(a3);
    a3.appendChild(b3);
    b3.style.borderTop = "solid black 2px";
    let h4 = document.createElement("h4");
    let spanbullet = document.createElement("span");
    spanbullet.setAttribute("id", "bullets");

    h4.style.margin = "10px";
    h4.style.textAlign = "right";
    spanbullet.innerHTML = "&#9776; " + bullet;
    b3.appendChild(h4);
    h4.appendChild(spanbullet);

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                              HARD                                                                                         ///////
/////////////////////////////////                                                                                                                           ///////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////
////////////////        efeito                                     ///////////////
//////////////////////////////////////////////////////////////////////////////////
function test() {
    //return false;
    var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;



    var telawid = Math.random() * w;
    var telahei = Math.random() * h;
    var body = document.querySelector("body");
    var span = document.createElement("span");
    span.setAttribute("class", "bubble");
    console.group("Size Width and Height");
    console.log(telawid);
    console.log(telahei);

    /*
    
        var red = Math.floor(Math.random() * 256);
    var gre = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alp = Math.random();
    //span.style.backgroundColor = "rgba(" + red + "," + gre + ", " + blue + ", " + alp + ")";
    
    */


    var randcolor = ["green", "darkgreen", "lightgreen", "ForestGreen"];
    var qtd = randcolor.length;
    qtd = Math.floor(Math.random() * qtd);
    span.style.backgroundColor = randcolor[qtd];



    console.groupEnd();


    span.style.left = telawid + "px";
    span.style.top = telahei + "px";
    var tam = Math.random() * 25 + 5;
    span.style.width = tam + "px";
    span.style.height = tam + "px";
    body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 3500);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function vs() {
    let vsnivel = 0;
    let a, b, c, span1, span2; // titulo
    let a2, b2, a3, b3, a4, b4, b41, a5, b5;
    let start = document.createElement("button");
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("div");
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    var corpo = document.querySelector("body");
    a.setAttribute("class", "container mt-2");
    a.setAttribute("id", "painel");
    b.setAttribute("class", "row mt-2");
    c.setAttribute("class", "col");
    c.style.borderBottom = "solid black 2px";
    corpo.appendChild(a);
    a.appendChild(b);
    b.appendChild(c);
    a.style.width = "800px";
    a.style.height = "600px";
    a.style.backgroundColor = "lightgray";
    a.style.border = "double black 5px";
    a.style.boxShadow = "#404040 2px 2px 5px 5px inset,#404040 -2px -2px 5px 5px inset";
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center");
    h1.innerHTML = "Configuração de VS";
    h1.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px white";
    c.appendChild(h1);
    a.style.backgroundImage = "radial-gradient(rgba(89, 89, 89, 0.5) 65%,rgba(0, 0, 0, 0.5))";

    a2 = document.createElement("div");
    b2 = document.createElement("div");
    a2.setAttribute("class", "row mt-1 mb-2");
    b2.setAttribute("class", "col text-center");
    a.appendChild(a2);
    a2.appendChild(b2);

    let textconfig = document.createElement("h5");
    b2.appendChild(textconfig);
    textconfig.innerHTML = "Nivel da fase";
    textconfig.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px black";
    textconfig.style.fontSize = "30px";
    textconfig.setAttribute("class", "px-5 mx-5");

    let texterror = document.createElement("h6");
    texterror.innerHTML = "";
    b2.appendChild(texterror);

    a3 = document.createElement("div");
    b3 = document.createElement("div");
    a3.setAttribute("class", "row mt-1");
    b3.setAttribute("class", "col text-center py-2");
    a.appendChild(a3);
    a3.appendChild(b3);

    let inp1, inp2, inp3;
    let lab1, lab2, lab3;
    let form1, form2, form3;
    let bulletH, lifeA;
    let spantest;

    /*                          Criação de linha de escolha dificuldade                                                  */

    form1 = document.createElement("div");
    form1.setAttribute("class", "form-check form-check-inline px-5 mx-3");
    inp1 = document.createElement("input");
    inp1.setAttribute("class", "form-check-input");
    inp1.setAttribute("type", "radio");
    inp1.setAttribute("value", "e");
    inp1.setAttribute("id", "e");
    inp1.setAttribute("name", "nivel");
    lab1 = document.createElement("label");
    lab1.setAttribute("for", "e");
    lab1.setAttribute("class", "form-check-label px-2");
    lab1.innerHTML = "Fácil";
    lab1.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px black";
    lab1.style.fontSize = "25px";

    form2 = document.createElement("div");
    form2.setAttribute("class", "form-check form-check-inline px-5 mx-3");
    inp2 = document.createElement("input");
    inp2.setAttribute("class", "form-check-input");
    inp2.setAttribute("type", "radio");
    inp2.setAttribute("value", "m");
    inp2.setAttribute("id", "m");
    inp2.setAttribute("name", "nivel");
    lab2 = document.createElement("label");
    lab2.setAttribute("for", "m");
    lab2.setAttribute("class", "form-check-label px-2");
    lab2.innerHTML = "Médio";
    lab2.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px black";
    lab2.style.fontSize = "25px";

    form3 = document.createElement("div");
    form3.setAttribute("class", "form-check form-check-inline px-5 mx-3");
    inp3 = document.createElement("input");
    inp3.setAttribute("class", "form-check-input");
    inp3.setAttribute("disabled", "true");
    inp3.setAttribute("type", "radio");
    inp3.setAttribute("value", "h");
    inp3.setAttribute("id", "h");
    inp3.setAttribute("name", "nivel");
    lab3 = document.createElement("label");
    lab3.setAttribute("for", "h");
    lab3.setAttribute("class", "form-check-label px-2");
    lab3.innerHTML = "Difícil";
    lab3.style.textShadow = "0.5px 0.5px 1px white ,-0.6px -0.6px 1px black";
    lab3.style.fontSize = "25px";
    b3.appendChild(form1);
    b3.appendChild(form2);
    b3.appendChild(form3);
    b3.style.borderBottom = "black solid 3px";
    form1.appendChild(lab1);
    form1.appendChild(inp1);
    form2.appendChild(lab2);
    form2.appendChild(inp2);
    form3.appendChild(lab3);
    form3.appendChild(inp3);
    spantest = document.createElement("span");
    b3.appendChild(spantest);
    a4 = document.createElement("div");
    b4 = document.createElement("div");
    b41 = document.createElement("div");
    a4.setAttribute("class", "row py-2 text-center");
    b4.setAttribute("class", "col text-center");
    b41.setAttribute("class", "col text-center");
    b4.style.borderRight = "black solid 1px";
    b41.style.borderLeft = "black solid 1px";

    a.appendChild(a4);
    a4.appendChild(b4);
    a4.appendChild(b41);

    let txtnome1, inpnome1, txtnome2, inpnome2;
    let casa, lblcasa;
    txtnome1 = document.createElement("label");
    inpnome1 = document.createElement("input");
    txtnome2 = document.createElement("label");
    inpnome2 = document.createElement("input");
    lblcasa = document.createElement("label");
    casa = document.createElement("input");
    inpnome1.setAttribute("id", "nomeC");
    inpnome1.setAttribute("class", "mx-3 text-center");
    inpnome2.setAttribute("id", "nomeA");
    inpnome2.setAttribute("class", "mx-3 text-center");
    txtnome1.style.fontSize = "20px";
    txtnome1.innerHTML = "Caçador";
    txtnome1.style.textShadow = "darkred 1px 1px 1px";
    txtnome1.style.color = "Red";
    txtnome2.style.fontSize = "20px";
    txtnome2.innerHTML = "Alien";
    txtnome2.style.textShadow = "green 1px 1px 1px";

    txtnome2.style.color = "darkgreen";
    bulletH = document.createElement("span");
    lifeA = document.createElement("span");
    bulletH.style.letterSpacing = "10px";
    lifeA.style.letterSpacing = "10px";
    let brC = document.createElement("br");
    let brA = document.createElement("br");
    let brs = document.createElement("br");
    let brs2 = document.createElement("br");
    let brs3 = document.createElement("br");
    let brs4 = document.createElement("br");
    let brs5 = document.createElement("br");
    let brs6 = document.createElement("br");
    let brs7 = document.createElement("br");
    let spaninf = document.createElement("span");
    brs6.style.borderBottom = "black solid 3px";

    bulletH.style.fontSize = "50px";
    lifeA.style.fontSize = "50px";
    casa.setAttribute("type", "password");
    casa.style.textAlign = "center";
    casa.style.marginBottom = "30px";
    lblcasa.style.marginTop = "30px";

    casa.addEventListener("keydown", function(evt) {
        if ((evt.which <= 95 || evt.which >= 106) && evt.which != 8 && evt.which != 9) {
            evt.preventDefault();
        } else {
            this.addEventListener("keyup", function() {
                if (this.value >= 101 || this.value <= 0) {
                    casa.value = ""
                }
            });
        }
    }, false);

    let casatree, treeinf;
    casatree = document.createElement("input");
    treeinf = document.createElement("span");
    casatree.setAttribute("id", "house");
    treeinf.setAttribute("id", "lbl");
    casatree.style.textAlign = "center";
    casatree.setAttribute("type", "password");


    casatree.addEventListener("keydown", function(evt) {
        if ((evt.which <= 96 || evt.which >= 100) && evt.which != 8) {
            evt.preventDefault();
        } else {
            this.addEventListener("keyup", function() {
                if (this.value >= 4 || this.value <= 0) {
                    casatree.value = ""
                }
            });
        }
    }, false);



    inp1.addEventListener("change", function() {
        if (this.checked) {
            casa.innerHTML = "";
            vsnivel = 1;
            b41.innerHTML = "";
            texterror.innerHTML = "";
            lblcasa.innerHTML = "Escolha posição [1 - 100]";
            b4.appendChild(txtnome1);
            b4.appendChild(brC);
            b4.appendChild(inpnome1);
            b4.appendChild(brs);
            b4.appendChild(bulletH);
            bulletH.innerHTML = "&#9776; 3";
            b41.appendChild(txtnome2);
            b41.appendChild(brA);
            b41.appendChild(inpnome2);
            b41.appendChild(brs2);
            b41.appendChild(lifeA);
            b41.appendChild(brs3);
            b41.appendChild(lblcasa);
            b41.appendChild(brs4);
            b41.appendChild(casa);
            b41.appendChild(brs5);
            lifeA.innerHTML = "<span class='text-danger'>&hearts;</span> 1";

            if (inpnome1.value != "") {
                if (inpnome2.value != "") {
                    if (casa.value != "") {
                        start.focus();
                    } else {
                        casa.focus();
                    }
                } else {
                    inpnome2.focus();
                }
            } else {
                inpnome1.focus();
            }
        } else {
            return false;
        }
    });

    inp2.addEventListener("change", function() {
        if (this.checked) {
            vsnivel = 2;
            casa.innerHTML = "";
            texterror.innerHTML = "";
            lblcasa.innerHTML = "Escolha posição [1 - 16]";
            b4.appendChild(txtnome1);
            b4.appendChild(brC);
            b4.appendChild(inpnome1);
            b4.appendChild(brs);
            b4.appendChild(bulletH);
            bulletH.innerHTML = "&#9776; 5";
            b41.appendChild(txtnome2);
            b41.appendChild(brA);
            b41.appendChild(inpnome2);
            b41.appendChild(brs2);
            b41.appendChild(lifeA);
            b41.appendChild(brs3);
            b41.appendChild(lblcasa);
            b41.appendChild(brs4);
            b41.appendChild(casa);
            b41.appendChild(brs5);
            b41.appendChild(treeinf);
            b41.appendChild(brs7);
            b41.appendChild(casatree);
            treeinf.innerHTML = "Selecione entre [1 - 3]";
            lifeA.innerHTML = "<span class='text-danger'>&hearts;</span> 1";

            if (inpnome1.value != "") {
                if (inpnome2.value != "") {
                    if (casa.value != "") {
                        if (casatree.value != "") {
                            start.focus();
                        } else {
                            casatree.focus();
                        }

                    } else {
                        casa.focus();
                    }
                } else {
                    inpnome2.focus();
                }
            } else {
                inpnome1.focus();
            }

        } else {
            return false;
        }
    });

    inp3.addEventListener("change", function() {
        if (this.checked) {
            vsnivel = 3;
            casa.innerHTML = "";
            texterror.innerHTML = "";
            b4.appendChild(txtnome1);
            b4.appendChild(brC);
            b4.appendChild(inpnome1);
            b4.appendChild(brs);
            b4.appendChild(bulletH);
            bulletH.innerHTML = "&#9776; 7";
            b41.appendChild(txtnome2);
            b41.appendChild(brA);
            b41.appendChild(inpnome2);
            b41.appendChild(brs2);
            b41.appendChild(lifeA);
            b41.appendChild(brs3);
            b41.appendChild(lblcasa);
            b41.appendChild(brs4);
            b41.appendChild(casa);
            b41.appendChild(brs5);
            b41.appendChild(spaninf);
            spaninf.innerHTML = "x - y";
            lifeA.innerHTML = "<span class='text-danger'>&hearts;</span> 1";

            if (inpnome1.value != "") {
                if (inpnome2.value != "") {
                    if (casa.value != "") {
                        if (casatree.value != "") {
                            start.focus();
                        } else {
                            casatree.focus();
                        }

                    } else {
                        casa.focus();
                    }
                } else {
                    inpnome2.focus();
                }
            } else {
                inpnome1.focus();
            }

        } else {
            return false;
        }
    });


    a.appendChild(start);
    start.innerHTML = "Iniciar";
    start.style.position = "absolute";
    start.style.width = "500px";
    start.style.marginLeft = "100px";
    start.style.marginRight = "100px";
    start.setAttribute("class", "btn btn-dark");

    start.addEventListener("click", function() {

        if (!inp1.checked && !inp2.checked) {
            texterror.style.color = "red";
            texterror.innerHTML = "Escolha um nivel de dificuldade!";
            return false;
        }

        if (inpnome1.value == "" && inpnome2.value == "") {
            texterror.style.color = "red";
            texterror.innerHTML = "Caçador e Alien escolham seus Nomes!";
            inpnome1.focus();
            return false;
        } else if (inpnome1.value == "") {
            texterror.style.color = "red";
            texterror.innerHTML = "Caçador escolha seu nome!";
            inpnome1.focus();
            return false;
        } else if (inpnome2.value == "") {
            texterror.style.color = "red";
            texterror.innerHTML = "Alien escolha seu nome!";
            inpnome2.focus();
            return false;
        } else {
            texterror.innerHTML = "";
        }


        if (casa.value == "") {
            texterror.style.color = "red";
            texterror.innerHTML = "Selecione uma casa para se esconder de 1 - 100!";
            casa.focus();
            return false;
        }

        if (casatree.value == "" && !inp1.checked) {
            texterror.style.color = "red";
            texterror.innerHTML = "Selecione dentre a posicção de 1 a 3!";
            casatree.focus();
            return false;
        }


        switch (vsnivel) {
            case 1:
                limpa();
                jogosinglefacil(inpnome1.value, inpnome2.value, casa.value);
                break;
            case 2:
                limpa();
                jogosinglemed(inpnome1.value, inpnome2.value, casa.value, casatree.value);
                break;
            case 3:
                console.log(vsnivel);
                break;
            default:
                console.log("nenhum");
                break;
        }
    })
}

/////////////////////////////////////                CREDITOS RICARDO TOZZO 2020                ////////////////////////////////////////////////////////////