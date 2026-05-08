// quando a página carregar, chama tudo
document.addEventListener('DOMContentLoaded', function () {
    menuMobile();
    headerNoScroll();
    animacoesScroll();
    contadores();
    formulario();
    mascaraTelefone();
    anoRodape();
    rolagemSuave();
});


// abre e fecha o menu no celular
function menuMobile() {
    var botao = document.getElementById('navToggle');
    var menu = document.getElementById('nav');

    if (!botao || !menu) return;

    botao.addEventListener('click', function () {
        menu.classList.toggle('active');
        botao.classList.toggle('active');
    });

    // se clicar em um link, fecha o menu
    var links = menu.querySelectorAll('.nav__link');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            menu.classList.remove('active');
            botao.classList.remove('active');
        });
    }
}


// header ganha sombra quando rola a página
function headerNoScroll() {
    var header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
}


// faz os elementos aparecerem quando entram na tela
function animacoesScroll() {
    var elementos = document.querySelectorAll(
        '.section__header, .service-card, .about__content, .about__stats, .contact__info, .form'
    );

    // adiciona a classe pra começar invisível
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.add('fade-in');
    }

    // usa o observer pra detectar quando aparece na tela
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        for (var j = 0; j < elementos.length; j++) {
            observer.observe(elementos[j]);
        }
    } else {
        // se o navegador for antigo, mostra tudo direto
        for (var k = 0; k < elementos.length; k++) {
            elementos[k].classList.add('visible');
        }
    }
}


// faz aqueles números da seção "sobre" subirem do zero até o valor final
function contadores() {
    var numeros = document.querySelectorAll('.stat__number');
    if (numeros.length === 0) return;

    var jaRodou = false;

    function animar(elemento) {
        var alvo = parseInt(elemento.getAttribute('data-count'), 10);
        if (isNaN(alvo)) return;

        var duracao = 2000; // 2 segundos
        var inicio = performance.now();

        function passo(agora) {
            var progresso = Math.min((agora - inicio) / duracao, 1);
            // deixa a animação desacelerar no final
            var suave = 1 - Math.pow(1 - progresso, 3);
            var valor = Math.floor(suave * alvo);
            elemento.textContent = formatar(valor);

            if (progresso < 1) {
                requestAnimationFrame(passo);
            } else {
                elemento.textContent = formatar(alvo);
            }
        }

        requestAnimationFrame(passo);
    }

    // coloca o ponto nos milhares (12000 vira 12.000)
    function formatar(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !jaRodou) {
                    jaRodou = true;
                    for (var i = 0; i < numeros.length; i++) {
                        animar(numeros[i]);
                    }
                    observer.disconnect();
                }
            });
        }, { threshold: 0.4 });

        var secao = document.querySelector('.about__stats');
        if (secao) {
            observer.observe(secao);
        }
    } else {
        // fallback pra navegador antigo
        for (var i = 0; i < numeros.length; i++) {
            var alvo = parseInt(numeros[i].getAttribute('data-count'), 10);
            if (!isNaN(alvo)) {
                numeros[i].textContent = formatar(alvo);
            }
        }
    }
}


// validação do formulário
function formulario() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var feedback = document.getElementById('formFeedback');
    var camposObrigatorios = form.querySelectorAll('[required]');

    // valida quando o usuário sai do campo
    for (var i = 0; i < camposObrigatorios.length; i++) {
        camposObrigatorios[i].addEventListener('blur', function () {
            validarCampo(this);
        });

        // se o usuário começar a digitar, tira o erro
        camposObrigatorios[i].addEventListener('input', function () {
            if (this.classList.contains('error')) {
                limparErro(this);
            }
        });
    }

    // quando enviar o formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // impede o envio padrão

        var tudoOk = true;
        for (var i = 0; i < camposObrigatorios.length; i++) {
            if (!validarCampo(camposObrigatorios[i])) {
                tudoOk = false;
            }
        }

        if (tudoOk) {
            // como é só front-end, simula o envio
            mostrarFeedback('success', 'Mensagem enviada com sucesso! A gente entra em contato em breve. 🐾');
            form.reset();

            // some com a mensagem depois de 6 segundos
            setTimeout(function () {
                feedback.className = 'form__feedback';
                feedback.textContent = '';
            }, 6000);
        } else {
            mostrarFeedback('error', 'Ops! Confere os campos em vermelho e tenta de novo.');
        }
    });

    function validarCampo(campo) {
        var valor = campo.value.trim();
        var tipo = campo.type;
        var nome = campo.name;
        var erro = '';

        if (!valor) {
            erro = 'Esse campo é obrigatório.';
        } else if (tipo === 'email' && !validarEmail(valor)) {
            erro = 'Coloca um e-mail válido.';
        } else if (tipo === 'tel' && !validarTelefone(valor)) {
            erro = 'Telefone inválido. Use (00) 00000-0000.';
        } else if (nome === 'nome' && valor.length < 3) {
            erro = 'O nome precisa ter pelo menos 3 letras.';
        } else if (nome === 'mensagem' && valor.length < 10) {
            erro = 'A mensagem precisa ter pelo menos 10 letras.';
        }

        if (erro) {
            mostrarErro(campo, erro);
            return false;
        }

        limparErro(campo);
        return true;
    }

    function mostrarErro(campo, mensagem) {
        campo.classList.add('error');
        var span = document.querySelector('[data-error-for="' + campo.id + '"]');
        if (span) {
            span.textContent = mensagem;
        }
    }

    function limparErro(campo) {
        campo.classList.remove('error');
        var span = document.querySelector('[data-error-for="' + campo.id + '"]');
        if (span) {
            span.textContent = '';
        }
    }

    function mostrarFeedback(tipo, mensagem) {
        if (!feedback) return;
        feedback.className = 'form__feedback ' + tipo;
        feedback.textContent = mensagem;
        feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}


// confere se o email tá num formato válido
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
}


// confere se o telefone tem 10 ou 11 números
function validarTelefone(telefone) {
    var so_numeros = telefone.replace(/\D/g, '');
    return so_numeros.length === 10 || so_numeros.length === 11;
}


// vai colocando os parênteses e traço enquanto a pessoa digita o telefone
function mascaraTelefone() {
    var campo = document.getElementById('telefone');
    if (!campo) return;

    campo.addEventListener('input', function (e) {
        var valor = e.target.value.replace(/\D/g, '');

        // limita em 11 dígitos
        if (valor.length > 11) {
            valor = valor.substring(0, 11);
        }

        // vai formatando conforme digita
        if (valor.length > 10) {
            // (XX) XXXXX-XXXX
            valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (valor.length > 6) {
            // (XX) XXXX-XXXX
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (valor.length > 2) {
            valor = valor.replace(/^(\d{2})(\d*).*/, '($1) $2');
        } else if (valor.length > 0) {
            valor = valor.replace(/^(\d*)/, '($1');
        }

        e.target.value = valor;
    });
}


// coloca o ano atual no rodapé pra não ter que atualizar todo ano
function anoRodape() {
    var span = document.getElementById('year');
    if (span) {
        span.textContent = new Date().getFullYear();
    }
}


// faz a rolagem ser suave quando clica nos links do menu
function rolagemSuave() {
    var links = document.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            var destino = this.getAttribute('href');
            if (destino === '#' || destino.length < 2) return;

            var alvo = document.querySelector(destino);
            if (alvo) {
                e.preventDefault();
                var header = document.getElementById('header');
                var alturaHeader = header ? header.offsetHeight : 0;
                var posicao = alvo.getBoundingClientRect().top + window.pageYOffset - alturaHeader - 10;

                window.scrollTo({
                    top: posicao,
                    behavior: 'smooth'
                });
            }
        });
    }
}
