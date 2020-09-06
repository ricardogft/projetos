window.onload = function() {
    let update = false;
    let updateStatus = true;
    let file = null;
    let positionBefore = window.pageYOffset;
    let positionAfter;
    const req = new XMLHttpRequest();
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status == "200") {
            file = JSON.parse(req.responseText);
            rnewPost(0, 5, true);
        }
    }
    req.open("GET", "./assets/js/file.json", true);
    req.send();
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.addEventListener("scroll", function() {
        const b = document.querySelectorAll("section");
        const main = document.getElementsByTagName("main")[0];
        const last = document.querySelector("section");

        positionAfter = window.pageYOffset;
        if (positionBefore > positionAfter) {
            /* fazer funcao posteriormente */
            if (window.screen.availWidth <= 319) {
                document.getElementById("bar").style.top = "13vw";
            } else if (window.screen.availWidth >= 320 && window.screen.availWidth <= 767) {
                document.getElementById("bar").style.top = "13vw";
            } else if (window.screen.availWidth >= 768 && window.screen.availWidth <= 1023) {
                document.getElementById("bar").style.top = "6vw";
            } else if (window.screen.availWidth >= 1024) {
                //document.getElementById("bar").style.top = "7vw"; sem test
            }
            ///////////////////////////////////////////////////            
            main.style.paddingBlockStart = "";
        } else {
            if (window.screen.availWidth <= 319) {
                document.getElementById("bar").style.top = "0";
                main.style.paddingBlockStart = "8vw";
            } else if (window.screen.availWidth >= 320 && window.screen.availWidth <= 767) {
                document.getElementById("bar").style.top = "0";
                main.style.paddingBlockStart = "8vw";
            } else if (window.screen.availWidth >= 768 && window.screen.availWidth <= 1023) {
                document.getElementById("bar").style.top = "0";
                main.style.paddingBlockStart = "5vw";
            } else if (window.screen.availWidth >= 1024) {
                //document.getElementById("bar").style.top = "0";
                //main.style.paddingBlockStart = "2vw";
            }
        }
        positionBefore = positionAfter;

        if ((window.scrollY + window.screen.height) >= document.body.getBoundingClientRect().height && b.length == 6 && update) {
            setTimeout(() => {
                try {
                    let barLoad = document.getElementById("load");
                    barLoad.remove();
                } catch (err) {
                    console.log(err);
                }
                rnewPost(6, file.data.length - 1);
            }, 3000);
            update = false;
        }
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function rnewPost(b = 0, max = 5, load = true, obj = file) {
        const main = document.getElementsByTagName("main")[0];
        const spanLoad = document.getElementById("load");
        if (b <= max) {
            createCard(b, max, obj);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    /* CARD */
    function createCard(pos, max, obj) {
        const main = document.getElementsByTagName("main")[0];
        const reg = document.createElement("section");
        const card = document.createElement("article");
        const img = document.createElement("img");
        const head = document.createElement("header");
        const bod = document.createElement("article");
        const title = document.createElement("h6");
        const web1 = document.createElement("span");
        const web2 = document.createElement("span");
        const bodText = document.createElement("p");
        img.onload = function() {
            let catg = obj.data[pos].categoria;
            reg.setAttribute("data-tag-type", catg);
            main.appendChild(reg);
            if (updateStatus && (document.body.scrollHeight > window.screen.height) && document.getElementsByTagName("section").length - 1 == 5 && obj.data.length - 1 > document.getElementsByTagName("section").length - 1) {
                const load = document.createElement("span");
                load.setAttribute("id", "load");
                main.appendChild(load);
                updateStatus = false;
            } else {
                if (document.body.getBoundingClientRect().height < window.screen.height && document.getElementsByTagName("section").length - 1 == 5) {
                    max = obj.data.length - 1;
                    updateStatus = false;
                }
            }
            rnewPost(pos + 1, max);
        }

        reg.appendChild(card);
        card.setAttribute("class", "card");
        card.appendChild(img);
        img.setAttribute("src", "assets/imagens/" + obj.data[pos].imagem);
        img.setAttribute("alt", obj.data[pos].titulo);
        card.appendChild(head);
        head.setAttribute("class", "header");
        head.appendChild(title);
        head.appendChild(web1);
        head.appendChild(web2);
        web1.appendChild(createSvg("heart"));
        web2.appendChild(createSvg("web"));
        title.append(stringBreak(obj.data[pos].titulo, "title"));
        title.setAttribute("class", "title-card");
        card.appendChild(bod);
        bod.appendChild(bodText);
        bodText.setAttribute("class", "body-card");
        bodText.append(stringBreak(obj.data[pos].descricao, "desc"));
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const toggle = document.getElementById("toggleNav");
    toggle.addEventListener("click", function() {
            const b = document.getElementById("bar");
            if (window.screen.availWidth >= 320 && window.screen.availWidth <= 767) {
                b.style.top = "13vw";
            } else if (window.screen.availWidth >= 768 && window.screen.availWidth <= 1023) {
                b.style.top = "7vw";
            } else if (window.screen.availWidth >= 1024) {
                //b.style.top = "7vw";sem dado
            }
            positionBefore = window.pageYOffset;
        })
        ////////////////////////////////////////////////////////////////////////////////////////////////
    function stringBreak(text, type) {
        let textCompact = null;
        if (type == "title")
            textCompact = text.slice(0, 16);
        else
            textCompact = text.slice(0, 42).concat("...");

        return textCompact
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let buts = document.querySelectorAll(".navigator");
    for (let i = 0; i <= buts.length - 1; i++) {
        buts[i].addEventListener("click", function() {
            switch (buts[i].innerHTML.toLowerCase()) {
                case "inicio":
                    showOrHide(false);
                    showOrHide();
                    break;
                case "gravidas":
                    showOrHide(false);
                    showCateg(1);
                    break;
                case "pediatria":
                    showOrHide(false);
                    showCateg(2);
                    break;
                case "amamentação":
                    showOrHide(false);
                    showCateg(3);
                    break;
            }

            function showOrHide(show = true) {
                const cards = document.getElementsByTagName("section");
                if (show) {
                    for (let b = 0; b <= cards.length - 1; b++) {
                        cards[b].style.display = "";
                    }
                } else {
                    for (let b = 0; b <= cards.length - 1; b++) {
                        cards[b].style.display = "none";
                    }
                }
            }

            function showCateg(catg) {
                const cards = document.querySelectorAll("section");
                const showCatg = document.get
                for (let b = 0; b <= cards.length - 1; b++) {
                    console.log();
                    if (catg == +cards[b].getAttribute("data-tag-type")) {
                        cards[b].style.display = "";
                    }
                }
            }
        })
    }
    /////////////////////////////////
    function createSvg(type) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (type == "heart") { svg.setAttribute("class", "svg-icon icon-heart") } else { svg.setAttribute("class", "svg-icon icon-web"); }
        svg.setAttribute("viewBox", "0 0 20 20");
        const newpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svg.appendChild(newpath);
        if (type == "heart") { newpath.setAttributeNS(null, "d", "M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61") } else { newpath.setAttributeNS(null, "d", "M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"); }
        svg.addEventListener("click", function() {
            if (this.classList[1] == "icon-heart") {
                if (this.childNodes[0].style.fill != "red") {
                    this.childNodes[0].style.fill = "red";
                    this.childNodes[0].style.background = "red";
                } else {
                    this.childNodes[0].style.fill = "black"
                }
            }
        })
        return svg
    }
    /////////////////////////////////////

}




/*     const svg = document.createElement("svg");
    const path = document.createElement("path");
    const d = document.createElement("div");

    document.body.appendChild(svg);
    svg.appendChild(path);
    svg.setAttribute("class", "svg-icon");
    svg.setAttribute("viewBox", "0 0 20 20");
    path.setAttribute("d", "M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61");
    return false; 
    
            console.log(b[b.length - 1].getBoundingClientRect());
        console.log(document.body.getBoundingClientRect().height);
        console.log(b.length - 1);
        console.log(window.pageYOffset + "px");
        console.log(window.screen.height + "px");
        console.log(document.body.scrollHeight + "px");

         newpath = document.createElementNS(document.rootElement.namespaceURI,"path");  
   newpath.setAttributeNS(null, "id", "pathIdD");  
   newpath.setAttributeNS(null, "d", "M 1,97.857143 C 19.285714,96.428571 24.016862,131.64801 90.714286,132.85714 140.78762,133.7649 202.79376,66.16041 202.79376,66.16041");  
   newpath.setAttributeNS(null, "stroke", "black"); 
   newpath.setAttributeNS(null, "stroke-width", 3);  
   newpath.setAttributeNS(null, "opacity", 1);  
   newpath.setAttributeNS(null, "fill", "none");
   
   document.rootElement.appendChild(newpath);

   <svg class="svg-icon" viewBox="0 0 20 20">
	<path d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"></path>
						</svg>
    */