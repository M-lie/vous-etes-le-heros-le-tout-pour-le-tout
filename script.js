/*let chapter1 = {
    subtitle: "Tout commence",
    text: "La banque dans laquelle vous vous trouvez se fait braquer.",
    img: "assets/chapitre_1.jpg",
};*/

let chaptersObj = {
    chapter1: {
        subtitle: "Tout commence",
        text: "La banque dans laquelle vous vous trouvez se fait braquer.",
        img: "assets/chapitre_1.jpg",
        options: [{
            text: "Commencer", 
            action: "goToChapter('chapter2')",
        }]
    },
    chapter2: {
        subtitle: "Tout le monde à terre",
        text: "Un homme armé entre dans la banque en tirant des coups de feu dans les airs. Tous les clients se précipitent pour se coucher au sol. À votre tour d'agir.",
        img: "assets/chapitre_2.jpg",
        options: [{
            text: "S'accroupir",
            action: "goToChapter('chapter3')",
        }, {
            text: "Courir", 
            action: "goToChapter('chapter4')",
        }]
    },
    chapter3: {
        subtitle: "Tout doucement",
        text: "Vous pouvez désormais ramper vers vos amis tranquillement sans qu'il ne vous voit.",
        img: "assets/chapitre_3.jpg",
        options: [{
            text: "Continuer", 
            action: "goToChapter('chapter5')",
        }]
    },
    chapter4: {
        subtitle: "À toute allure",
        text: "Vous l'avez surpris, il a appuyé sur la détente. Vous mourrez donc d'une balle dans le dos. Vous avez échoué.",
        img: "assets/chapitre_mort.png",
        video: "assets/chapitre_mort.mp4",
        options: [{
            text: "Recommencer", 
            action: "goToChapter('chapter1')",
        }]
    },
    chapter5: {
        subtitle: "Tous ensemble",
        text: "Le braqueur amène vous et vos amis dans ce qui s'apparente à être un bureau pour vous embarrer dans celui-ci et ainsi vous empêcher de sortir. Pris au piège, que faites-vous?",
        img: "assets/chapitre_5.png",
        options: [{
            text: "Patienter", 
            action: "goToChapter('chapter6')",
        }, {
            text: "Fouiller le bureau", 
            action: "scissorsFound()",
        }, {
            text: "Appeler les secours", 
            action: "scissorsStatus()",
        }]
    },
    chapter6: {
        subtitle: "Tout est perdu",
        text: "Comme vous n'avez rien fait pour contrer le braqueur, il a réussi à s'échapper avec l'argent. Vous avez échoué.",
        img: "assets/chapitre_enfui.jpg",
        video: "assets/chapitre_enfui.mp4",
        options: [{
            text: "Recommencer", 
            action: "goToChapter('chapter1')",
        }]
    },
    chapter7: {
        subtitle: "Tout partout",
        text: "En fouillant les divers tiroirs présents dans le bureau, votre ami trouve une paire de ciseaux qui se présente comme une arme de défense contre l'homme armé.",
        img: "assets/chapitre_7.jpg",
        options: [{
            text: "Continuer", 
            action: "goToChapter('chapter9')",
        }]
    },
    chapter8: {
        subtitle: "À toute vitesse",
        text: "Vous parvenez à rejoindre la police qui vous prévient partir à l'instant pour arriver aussi tôt que possible malgré le long trajet.",
        img: "assets/chapitre_8.jpg",
        options: [{
            text: "Continuer", 
            action: "goToChapter('chapter9')",
        }]
    },
    chapter9: {
        subtitle: "Tout près",
        text: "Lorsque vous cherchez désespérement une solution pour vous opposez au braqueur, vous levez votre tête vers les airs et appercevez une trappe au plafond. Ferez-vous face au danger?",
        img: "assets/chapitre_9.jpg",
        options: [{
            text: "Rester dans le bureau", 
            action: "goToChapter('chapter10')",
        }, {
            text: "Aller à l'intérieur", 
            action: "goToChapter('chapter11')",
        }]
    },
    chapter10: {
        subtitle: "Tout est fini",
        text: "Le braqueur a eu le temps de s'enfuir avec l'argent puisque vous n'avez rien fait. Vous avez échoué.",
        img: "assets/chapitre_enfui.jpg",
        video: "assets/chapitre_enfui.mp4",
        options: [{
            text: "Recommencer", 
            action: "goToChapter('chapter1')",
        }]
    },
    chapter11: {
        subtitle: "Tout en douceur",
        text: "Vous entrez dans la trappe, puis commencez à ramper jusqu'à une pièce qui, heureusement pour vous, renferme les clés donnant accès au coffre-fort tant désiré par l'homme armé.",
        img: "assets/chapitre_11.jpg",
        options: [{
            text: "Continuer", 
            action: "goToChapter('chapter12')",
        }]
    },
    chapter12: {
        subtitle: "Tout n'est pas sans conséquence",
        text: "Lorsque vous revenez dans le bureau où se trouve vos amis, le braqueur vous confronte, car il est persuadé d'avoir entendu du bruit en provenance de la pièce où vous vous trouviez antérieurement.",
        img: "assets/chapitre_12.png",
        options: [{
            text: "Lui donner les clés", 
            action: "goToChapter('chapter13')",
        }, {
            text: "Lui proposer un marché", 
            action: "goToChapter('chapter14')",
        }, {
            text: "Lui mentir", 
            action: "goToChapter('chapter15')",
        }]
    },
    chapter13: {
        subtitle: "Toute crainte doit être résolue",
        text: "Vous avez osé lui désobéir malgré l'arme en sa possession, il vous trouve courageux, mais à également peur que vous ruiniez son braquage. Il vous tue donc. Vous avez échoué.",
        img: "assets/chapitre_mort.png",
        video: "assets/chapitre_mort.mp4",
        options: [{
            text: "Recommencer", 
            action: "goToChapter('chapter1')",
        }]
    },
    chapter14: {
        subtitle: "Tout pensé",
        text: "Il accepte sans se douter que ce n'est qu'une diversion pour que vous ayez un plus de temps pour réfléchir à un plan pour le déjouer.",
        img: "assets/chapitre_14.png",
        options: [{
            text: "Continuer", 
            action: "goToChapter('chapter16')",
        }]
    },
    chapter15: {
        subtitle: "Toute vérité finie par être découverte",
        text: "Il entend les bruits des clés trimbalés dans la poche droite de votre pantalon lorsque vous vous déplacez. Malheureusement, l'homme vous a ainsi démasqué, puis, sous la colère, vous a tué. Vous avez échoué.",
        img: "assets/chapitre_mort.png",
        video: "assets/chapitre_mort.mp4",
        options: [{
            text: "Recommencer", 
            action: "goToChapter('chapter1')",
        }]
    },
    chapter16: {
        subtitle: "Tout n'est peut-être pas perdu",
        text: "Votre plan nécessite une arme pour pouvoir attaquer l'homme armé. Avez-vous la paire de ciseaux?",
        img: "assets/chapitre_16.png",
        options: [{
            text: "Vérifier", 
            action: "scissorsPossession()",
        }]
    },
    chapter17: {
        subtitle: "Tous pour un, Un pour tous",
        text: "Il a le dos viré contre vous, vous profitez de cette opportunité pour le poignardez dans le dos avec la paire de ciseaux que vous aviez trouvé au début. Vous vous servez de ce moment de vulnérabilité dont il fait preuve pour sauvez tous les détenus. Les policiers arrivent enfin. Ils accourent dans la banque pour attraper le braqueur et le coffrer. Vous avez réussi!",
        img: "assets/chapitre_17.jpg"
    },
    chapter18: {
        subtitle: "Tout ne se vaut pas",
        text: "Le braqueur ne semble pas être capable de vous faire confiance. Puisque vous n'avez aucune arme pour vous défrendre, il parvient à tuer vous et vos amis sans difficulté. Vous avez échoué.",
        img: "assets/chapitre_mort.png",
        video: "assets/chapitre_mort.mp4",
        options: [{
            text: "Recommencer", 
            action: "goToChapter('chapter1')",
        }]
    }
};

const btns = document.querySelectorAll("button");
const effet = new Audio("assets/effet.mp3");
let scissorsFounded = false;

function goToChapter(chapterName){ 
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);

    const titre = document.querySelector("h2");
    titre.innerText = chaptersObj[chapterName]["subtitle"];

    const texte = document.querySelector("p");
    texte.innerText = chaptersObj[chapterName]["text"];

    const image = document.querySelector(".image");
    image.innerHTML = `<img src="${chaptersObj[chapterName].img}"/>`;

    let barre = document.querySelector(".barre");
    barre.innerHTML = "";

    for (const element of chaptersObj[chapterName]["options"]) {
        let bouton = document.createElement("button");
        bouton.setAttribute("onclick", element["action"]);
        bouton.setAttribute("type", "button");
        bouton.appendChild(document.createTextNode(element["text"]));
        barre.appendChild(bouton);
        localStorage.setItem("nomChapitre", chapterName);
    };

    if (chaptersObj[chapterName].video!=undefined) {
        image.innerHTML = `<video src="${chaptersObj[chapterName].video}" loop muted autoplay></video>`;
    } else {
        image.innerHTML = `<img src="${chaptersObj[chapterName].img}"/>`;
    };

    for(const button of btns){
    button.addEventListener("click", function() {
        effet.currentTime = 0;
        effet.play();
    });
    };

    let chapterExist = localStorage.getItem("nomChapitre");
    if (chapterExist==null) {
        goToChapter("chapter1");
        console.log("chapter1");
    } else {
        goToChapter("chapterExist");
        console.log("chapterExist");
    };
}

goToChapter("chapter1");

let scissorsExist = localStorage.getItem("ciseauxTrouves");
if (scissorsExist==null) {
    scissorsFounded = false;
} else {
    scissorsFounded=Boolean(scissorsFounded)
};
    
function scissorsFound() {
    scissorsFounded = true;
    goToChapter("chapter7");
    localStorage.setItem("ciseauxTrouves", scissorsFounded);
};

function scissorsStatus() {
    if (scissorsFounded == true) {
        goToChapter("chapter9");
    } else {
        goToChapter("chapter8");
    };
    localStorage.setItem("ciseauxTrouves", scissorsFounded);
};

function scissorsPossession() {
    if (scissorsFounded == true) {
        goToChapter("chapter17");
    } else {
        goToChapter("chapter18");
    };
    localStorage.setItem("ciseauxTrouves", scissorsFounded);
};

function reset() {
    scissorsFounded = false;
    localStorage.clear();
    goToChapter("chapter1");
}

let audioWanted = true;
for(const button of btns){
    button.addEventListener("click", function() {
        if(audioWanted==true){
           effet.currentTime = 0;
           effet.play();
        } else {
           effet.paused();
        };
});
};

const input = document.querySelector(".input");
const output = document.querySelector(".output");

input.addEventListener('change', function() {
  if(input==checked){
    effet.currentTime = 0;
    effet.play();
  } else {
    effet.paused();
  };
});


