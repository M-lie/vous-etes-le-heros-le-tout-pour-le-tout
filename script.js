let chapter1 = {
    subtitle: "Tout commence",
    text: "La banque dans laquelle vous vous trouvez se fait braquer.",
    img: "assets/chapitre_1.jpg"
};

let chapter2 = {
    subtitle: "Tout le monde à terre",
    text: "Un homme armé entre dans la banque en tirant des coups de feu dans les airs. Tous les clients se précipitent pour se coucher au sol. À votre tour d'agir.",
    img: "assets/chapitre_2.jpg"
};

let chapter3 = {
    subtitle: "Tout doucement",
    text: "Vous pouvez désormais ramper vers vos amis tranquillement sans qu'il ne vous voit.",
    img: "assets/chapitre_3.jpg"
};

let chapter4 = {
    subtitle: "À toute allure",
    text: "Vous l'avez surpris, il a appuyé sur la détente. Vous mourrez donc d'une balle dans le dos. Vous avez échoué.",
    img: "assets/chapitre_mort.jpg"
};

let chapter5 = {
    subtitle: "Tous ensemble",
    text: "Le braqueur amène vous et vos amis dans ce qui s'apparente à être un bureau pour vous embarrer dans celui-ci et ainsi vous empêcher de sortir. Pris au piège, que faites-vous?",
    img: "assets/chapitre_5.png"
};

let chapter6 = {
    subtitle: "Tout est perdu",
    text: "Comme vous n'avez rien fait pour contrer le braqueur, il a réussi à s'échapper avec l'argent. Vous avez échoué.",
    img: "assets/chapitre_enfui.png"
};

let chapter7 = {
    subtitle: "Tout partout",
    text: "En fouillant les divers tiroirs présents dans le bureau, votre ami trouve une paire de ciseaux qui se présente comme une arme de défense contre l'homme armé.",
    img: "assets/chapitre_7.jpg"
};

let chapter8 = {
    subtitle: "À toute vitesse",
    text: "Vous parvenez à rejoindre la police qui vous prévient partir à l'instant pour arriver aussi tôt que possible malgré le long trajet.",
    img: "assets/chapitre_8.jpg"
};

let chapter9 = {
    subtitle: "Tout près",
    text: "Lorsque vous cherchez désespérement une solution pour vous opposez au braqueur, vous levez votre tête vers les airs et appercevez une trapper au plafond. Prendrez-vous le risque de vous faire attraper?/Ferez-vous face au danger?",
    img: "assets/chapitre_9.jpg"
};

let chapter10 = {
    subtitle: "Tout est fini",
    text: "Le braqueur a eu le temps de s'enfuir avec l'argent puisque vous n'avez rien fait. Vous avez échoué.",
    img: "assets/chapitre_enfui.jpg"
};

let chapter11 = {
    subtitle: "Tout en douceur",
    text: "Vous entrez dans la trappe, puis commencez à ramper jusqu'à une pièce qui, heureusement pour vous, renferme les clés donnant accès au coffre-fort tant désiré par l'homme armé.",
    img: "assets/chapitre_11.jpg"
};

let chapter12 = {
    subtitle: "Tout n'est pas sans conséquence",
    text: "Lorsque vous revenez dans le bureau où se trouve vos amis, le braqueur vous confronte, car il est persuadé d'avoir entendu du bruit en provenance de la pièce où vous vous trouviez antérieurement.",
    img: "assets/chapitre_12.png"
};

let chapter13 = {
    subtitle: "Toute crainte doit être résolue",
    text: "Vous avez osé lui désobéir malgré l'arme en sa possession, il vous trouve courageux, mais à également peur que vous ruiniez son braquage. Il vous tue donc. Vous avez échoué.",
    img: "assets/chapitre_mort.jpg"
};

let chapter14 = {
    subtitle: "Tout pensé",
    text: "Il accepte sans se douter que ce n'est qu'une diversion pour que vous ayez un plus de temps pour réfléchir à un plan pour le déjouer.",
    img: "assets/chapitre_14.png"
};

let chapter15 = {
    subtitle: "Toute vérité finie par être découverte",
    text: "Il entend les bruits des clés trimbalés dans la poche droite de votre pantalon lorsque vous vous déplacez. Malheureusement, l'homme vous a ainsi démasqué, puis, sous la colère, vous a tué. Vous avez échoué",
    img: "assets/chapitre_mort.jpg"
};

let chapter16 = {
    subtitle: "Tout n'est peut-être pas perdu",
    text: "Votre plan nécessite une arme pour pouvoir attaquer l'homme armé. Avez-vous la paire de ciseaux?",
    img: "assets/chapitre_16.png"
};

let chapter17 = {
    subtitle: "Tous pour un, Un pour tous",
    text: "Il a le dos viré contre vous, vous profitez de cette opportunité pour le poignardez dans le dos avec la paire de ciseaux que vous aviez trouvé au début. Vous vous servez de ce moment de vulnérabilité dont il fait preuve pour sauvez tous les détenus. Les policiers arrivent enfin. ILs accourent dans la banque pour attraper le braqueur et le coffrer. Vous avez réussi!",
    img: "assets/chapitre_17.jpg"
};

let chapter18 = {
    subtitle: "Tout ne se vaut pas",
    text: "Le braqueur ne semble pas être capable de vous faire confiance. Il décide ainsi de tuer vous et vos amis. Vous avez échoué.",
    img: "assets/chapitre_mort.jpg"
};

let chaptersObj = {
    chapter1: {
        subtitle: "Tout commence",
        text: "La banque dans laquelle vous vous trouvez se fait braquer.",
        img: "assets/chapitre_1.jpg",
        
    },
    chapter2: {
        subtitle: "Tout le monde à terre",
        text: "Un homme armé entre dans la banque en tirant des coups de feu dans les airs. Tous les clients se précipitent pour se coucher au sol. À votre tour d'agir.",
        img: "assets/chapitre_2.jpg",
        options: tab1 = [{text: "S'accroupir", action: goToChapter(chapter3)}, {text: "Courir", action: goToChapter(chapter4)}]
    },
    chapter3: {
        subtitle: "Tout doucement",
        text: "Vous pouvez désormais ramper vers vos amis tranquillement sans qu'il ne vous voit.",
        img: "assets/chapitre_3.jpg"
    },
    chapter4: {
        subtitle: "À toute allure",
        text: "Vous l'avez surpris, il a appuyé sur la détente. Vous mourrez donc d'une balle dans le dos. Vous avez échoué.",
        img: "assets/chapitre_mort.jpg"
    },
    chapter5: {
        subtitle: "Tous ensemble",
        text: "Le braqueur amène vous et vos amis dans ce qui s'apparente à être un bureau pour vous embarrer dans celui-ci et ainsi vous empêcher de sortir. Pris au piège, que faites-vous?",
        img: "assets/chapitre_5.png",
        options: tab2 = [{text: "Patienter", action: goToChapter(chapter6)}, {text: "Fouiller le bureau", action: goToChapter(chapter7)}, {text: "Appeler les secours", action: goToChapter(chapter8)}]
    },
    chapter6: {
        subtitle: "Tout est perdu",
        text: "Comme vous n'avez rien fait pour contrer le braqueur, il a réussi à s'échapper avec l'argent. Vous avez échoué.",
        img: "assets/chapitre_enfui.jpg"
    },
    chapter7: {
        subtitle: "Tout partout",
        text: "En fouillant les divers tiroirs présents dans le bureau, votre ami trouve une paire de ciseaux qui se présente comme une arme de défense contre l'homme armé.",
        img: "assets/chapitre_7.jpg"
    },
    chapter8: {
        subtitle: "À toute vitesse",
        text: "Vous parvenez à rejoindre la police qui vous prévient partir à l'instant pour arriver aussi tôt que possible malgré le long trajet.",
        img: "assets/chapitre_8.jpg"
    },
    chapter9: {
        subtitle: "Tout près",
        text: "Lorsque vous cherchez désespérement une solution pour vous opposez au braqueur, vous levez votre tête vers les airs et appercevez une trapper au plafond. Prendrez-vous le risque de vous faire attraper?/Ferez-vous face au danger?",
        img: "assets/chapitre_9.jpg",
        options: tab3 = [{text: "Rester dans le bureau", action: goToChapter(chapter10)}, {text: "Aller à l'intérieur", action: goToChapter(chapter11)}]
    },
    chapter10: {
        subtitle: "Tout est fini",
        text: "Le braqueur a eu le temps de s'enfuir avec l'argent puisque vous n'avez rien fait. Vous avez échoué.",
        img: "assets/chapitre_enfui.jpg"
    },
    chapter11: {
        subtitle: "Tout en douceur",
        text: "Vous entrez dans la trappe, puis commencez à ramper jusqu'à une pièce qui, heureusement pour vous, renferme les clés donnant accès au coffre-fort tant désiré par l'homme armé.",
        img: "assets/chapitre_11.jpg"
    },
    chapter12: {
        subtitle: "Tout n'est pas sans conséquence",
        text: "Lorsque vous revenez dans le bureau où se trouve vos amis, le braqueur vous confronte, car il est persuadé d'avoir entendu du bruit en provenance de la pièce où vous vous trouviez antérieurement.",
        img: "assets/chapitre_12.png",
        options: tab4 = [{text: "Lui donner les clés", action: goToChapter(chapter13)}, {text: "Lui proposer un marché", action: goToChapter(chapter14)}, {text: "Lui mentir", action: goToChapter(chapter15)}]
    },
    chapter13: {
        subtitle: "Toute crainte doit être résolue",
        text: "Vous avez osé lui désobéir malgré l'arme en sa possession, il vous trouve courageux, mais à également peur que vous ruiniez son braquage. Il vous tue donc. Vous avez échoué.",
        img: "assets/chapitre_mort.jpg"
    },
    chapter14: {
        subtitle: "Tout pensé",
        text: "Il accepte sans se douter que ce n'est qu'une diversion pour que vous ayez un plus de temps pour réfléchir à un plan pour le déjouer.",
        img: "assets/chapitre_14.png"
    },
    chapter15: {
        subtitle: "Toute vérité finie par être découverte",
        text: "Il entend les bruits des clés trimbalés dans la poche droite de votre pantalon lorsque vous vous déplacez. Malheureusement, l'homme vous a ainsi démasqué, puis, sous la colère, vous a tué. Vous avez échoué.",
        img: "assets/chapitre_mort.jpg"
    },
    chapter16: {
        subtitle: "Tout n'est peut-être pas perdu",
        text: "Votre plan nécessite une arme pour pouvoir attaquer l'homme armé. Avez-vous la paire de ciseaux?",
        img: "assets/chapitre_16.png",
        options: tab5 = [{text: "Oui", action: goToChapter(chapter17)}, {text: "Non", action: goToChapter(chapter18)}]
    },
    chapter17: {
        subtitle: "Tous pour un, Un pour tous",
        text: "Il a le dos viré contre vous, vous profitez de cette opportunité pour le poignardez dans le dos avec la paire de ciseaux que vous aviez trouvé au début. Vous vous servez de ce moment de vulnérabilité dont il fait preuve pour sauvez tous les détenus. Les policiers arrivent enfin. ILs accourent dans la banque pour attraper le braqueur et le coffrer. Vous avez réussi!",
        img: "assets/chapitre_17.jpg"
    },
    chapter18: {
        subtitle: "Tout ne se vaut pas",
        text: "Le braqueur ne semble pas être capable de vous faire confiance. Il décide ainsi de tuer vous et vos amis. Vous avez échoué.",
        img: "assets/chapitre_mort.jpg"
    }
};

function goToChapter(chapterName) { 
    console.log(chapterName.subtitle);
    console.log(chapterName.text);
}

