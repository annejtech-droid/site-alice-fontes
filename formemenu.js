      //JAVASCRIPT PARA O MENU NO CELULAR 
        const menuBtn = document.querySelector('.menu-btn');
        //CHAMA O BOTÃO MENU USANDO O ICONE
        const navMenu = document.querySelector('nav ul');
        // CHAMA A LISTA DE NAVEGAÇÃO NAV,UL

        // Alterna o menu responsivo
        menuBtn.addEventListener('click', () => {
            // TODA VEZ QUE CLICAR O BOTÃO DO ICONE É ATIVADO
            navMenu.classList.toggle('active');
        });

        
