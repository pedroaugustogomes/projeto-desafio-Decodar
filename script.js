var aActive = '';

var a1 = document.querySelector('nav a:nth-child(1)');
var a2 = document.querySelector('nav a:nth-child(2)');
var a3 = document.querySelector('nav a:nth-child(3)');
var a4 = document.querySelector('nav a:nth-child(4)');
var a5 = document.querySelector('nav a:nth-child(5)');
var a6 = document.querySelector('nav a:nth-child(6)');

var bolinha = document.querySelector('.bolinha-menu');

const intervalo = setInterval(() => {
    bolinha.style.left = `calc(${aActive}px + 18px)`;
}, 0);

// Determine if an element is in the visible viewport

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aActive = a1.getBoundingClientRect().left;
            bolinha.style.opacity = '1'
        }
    });
});

const bolinha1 = document.querySelector('#secum .identpoints');
observer1.observe(bolinha1);

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aActive = a2.getBoundingClientRect().left;
            bolinha.style.opacity = '1'
        }
    });
});

const bolinha2 = document.querySelector('#secdois .identpoints');
observer2.observe(bolinha2);

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aActive = a3.getBoundingClientRect().left;
            bolinha.style.opacity = '1'
        }
    });
});

const bolinha3 = document.querySelector('#sectres .identpoints');
observer3.observe(bolinha3);

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aActive = a4.getBoundingClientRect().left;
            bolinha.style.opacity = '1'
        }
    });
});

const bolinha4 = document.querySelector('#secquatro .identpoints');
observer4.observe(bolinha4);

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aActive = a5.getBoundingClientRect().left;
            bolinha.style.opacity = '1'
        }
    });
});

const bolinha5 = document.querySelector('#seccinco .identpoints');
observer5.observe(bolinha5);

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aActive = a6.getBoundingClientRect().left;
            bolinha.style.opacity = '1'
        }
    });
});

const bolinha6 = document.querySelector('#secseis .identpoints');
observer6.observe(bolinha6);

////////////////////////////////////////////////////////////

var identmenudiv= document.getElementById('identmenu')
var header = document.querySelector('header')
var afoguete = document.getElementById('link-foguete')
var botaosom = document.getElementById('botao-som')

const observeridentmenu = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            header.style.transform = 'translateY(-100px)';
            afoguete.style.transform = 'translate(-150px, 150px)';
            botaosom.style.transform = 'translate(150px, 150px)';
        } else {
            header.style.transform = 'translateY(0)';
            afoguete.style.transform = 'translate(0, 0)';
            botaosom.style.transform = 'translate(0, 0)';
        }
    });
});

const identmenu = document.querySelector('#identmenu');
observeridentmenu.observe(identmenu);

////////////////////////////////////////////////////////////

var botaomenucll = document.querySelector('.menubar')
var botaoclosemenucll = document.querySelector('.fa-xmark')
var headercll = document.querySelector('.navcll')

botaomenucll.addEventListener('click', function() {
    headercll.style.transform = 'translateX(100%)'
    botaoclosemenucll.classList.add('rotateX')
})

botaoclosemenucll.addEventListener('click', function() {
    headercll.style.transform = 'translateX(0)'
    botaoclosemenucll.classList.remove('rotateX')
})

var elementosnavcll = document.querySelectorAll('.navcll nav a');

elementosnavcll.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        headercll.style.transform = 'translateX(0)'
        botaoclosemenucll.classList.remove('rotateX')
    });
});

////////////////////////////////////////////////////////////

const observeritemssecdois = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            itemssecdois.forEach((item) => {
                item.classList.add('appear-secdois')
            })
        } else {
            itemssecdois.forEach((item) => {
                item.classList.remove('appear-secdois')
            })
        }
    });
});

const isecdois = document.querySelector('#texto-secdois img')
const itemssecdois = [document.querySelector('#texto-secdois img'), 
                      document.querySelector('#texto-secdois h1'), 
                      document.querySelector('#texto-secdois p')];
observeritemssecdois.observe(isecdois);

const observerhs3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            hs3.classList.add('animhsectres')
        } else {
            hs3.classList.remove('animhsectres')
        }
    });
});

const hs3 = document.querySelector('#hsectres');
observerhs3.observe(hs3);

const observerimgsec3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('imgoff')
            entry.target.classList.add('imgon');
        } else {
            entry.target.classList.add('imgoff')
            entry.target.classList.remove('imgon')
        }
    });
});

const imagens = document.querySelectorAll('.imgprincipal');
imagens.forEach((imagem) => {
    observerimgsec3.observe(imagem);
});


const observerhs4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            hs4.classList.add('animhsectres')
        } else {
            hs4.classList.remove('animhsectres')
        }
    });
});

const hs4 = document.querySelector('#hsecquatro');
observerhs4.observe(hs4);

const obsmkptexto = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('naoanimtexto')
            entry.target.classList.add('animtexto');
        } else {
            entry.target.classList.add('naoanimtexto')
            entry.target.classList.remove('animtexto')
        }
    });
});

const mkptexto = document.querySelectorAll('.naoanimtexto');
mkptexto.forEach((texto) => {
    obsmkptexto.observe(texto);
});



//DARK MODE
var body = document.querySelector('body')
var divtitulo = document.querySelector('div#titulo')
const chk = document.querySelector('input.checkbox');
chk.addEventListener('change', () => {
    body.classList.toggle('light')
    if (body.classList.contains('light')) {
        divtitulo.innerHTML = '<img src="arquivos/decodar logotipo 2.svg" alt="" id="nome-decodar"><img src="arquivos/foguete vetor 2.svg" alt="" id="foguete-decodar">'
    } else {
        divtitulo.innerHTML = '<img src="arquivos/decodar logotipo.svg" alt="" id="nome-decodar"><img src="arquivos/foguete vetor.svg" alt="" id="foguete-decodar">'
    }
})


const observerhs5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            hs5.classList.add('animhsectres')
        } else {
            hs5.classList.remove('animhsectres')
        }
    });
});

const hs5 = document.querySelector('#seccinco h1');
observerhs5.observe(hs5);


var copy1 = document.querySelector("#logosum .logos-slide").cloneNode(true);
document.querySelector("#logosum").appendChild(copy1);

var copy2 = document.querySelector("#logosdois .logos-slide").cloneNode(true);
document.querySelector("#logosdois").appendChild(copy2);

var copy3 = document.querySelector("#logostres .logos-slide").cloneNode(true);
document.querySelector("#logostres").appendChild(copy3);

var copy4 = document.querySelector("#logosquatro .logos-slide").cloneNode(true);
document.querySelector("#logosquatro").appendChild(copy4);



document.querySelectorAll('nav a').forEach(function(a) {
    a.addEventListener('click', function() {
      // get index of clicked li and select according section
      var index = Array.from(a.parentNode.children).indexOf(a);
      var target = document.querySelectorAll('section')[index];
  
  
      // scroll to the target section
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  