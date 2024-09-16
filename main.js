import "./style.css";

let gameData = [
  // 0
  {
    text: "Tillykke! Du har bestået ridderprøven, og kan fra i dag af kalde dig Ridder af Det Runde Bord. Vælg dit riddernavn!",
    options: [
      {
        text: "Vælg riddernavn",
        nextStep: 1,
      },
    ],
    imgUrl: "./images/knight2.jpg",
  },

  // 1
  {
    text: "Du har modtaget et brev fra dronningen. Til NAME, Ridder af Det Runde Bord. Du har valgt dit riddernavn og står klar til at drage ud i verden. Derfor betror jeg dig nu en opgave af største vigtighed. Dybt inde i Den Onde Skov,ligger et artefakt, kendt som Heltesværdet, der siges at besidde guddommelige kræfter.Bring Heltesværdet tilbage til kongeriget. Hendes Majestæt Dronning Christine.",
    options: [{ text: "Tag imod opgaven fra dronningen", nextStep: 2 }],
    imgUrl: "./images/knight2.jpg",
  },

  // 2
  {
    text: "Du begynder din færd efter Heltesværdet og begiver dig ind i Den Onde Skov. Efter flere timers vandring mærker du pludselig en fornemmelse af at blive iagttaget, og du hører i næste øjeblik et svagt knæk af en gren bag dig. Du mærker frygten snige sig op ad rygraden.\n\nDit første valg står foran dig:",
    options: [
      {
        text: "Sæt tempoet op - du skal ikke nyde noget af at konfrontere unødvendig fare",
        nextStep: 3,
      },
      {
        text: "Se din frygt i øjnene og konfrontér hvad end der befinder sig i mørket bag dig",
        nextStep: 5,
      },
    ],
    imgUrl: "./images/skyggelunden3.jpg",
  },

  // 3
  {
    text: "Nogle ville kalde dig en kujon, men du sparer jo bare på dine kræfter, så du har styrken til at håndtere fremtidige farer. Det har du nok lært på ridder-skolen. Du lægger ikke mærke til de hastige skridt der nærmer sig. Før du ved af det bliver du taklet bagfra, og du lander med ansigtet pladask i jorden.",
    options: [
      {
        text: "Bliv liggende på jorden og spil død",
        nextStep: 4,
      },
      {
        text: "Brug de kampstillinger du har lært på ridderskolen og gå til angreb",
        nextStep: 6,
      },
    ],
    imgUrl: "./images/lobevaek.jpg",
  },

  // 4
  {
    text: "Instinktivt beslutter du dig for en desperat handling - at spille død. Du håber, at væsenet, der angreb dig, ikke opdager, at du rent faktisk er i live. Pludselig bliver du revet op fra jorden af en stærk arm, men hvad der står overfor dig, overrasker dig - en gammel mand??? Du studser lidt over, hvordan en ældre herre som ham havde kræfter til at løfte dig op...",
    options: [
      {
        text: "Tal med den gamle mand",
        nextStep: 8,
      },
      {
        text: "Brug de kampstillinger du har lært på ridderskolen og gå til angreb",
        nextStep: 6,
      },
    ],
    imgUrl: "./images/spilledoed.jpg",
  },

  // 5
  {
    text: "Som ridder skal man altid kunne se sin frygt i øjnene, når det virkelig gælder. Du vender dig om mod mørket og råber: “Jeg er NAME, Ridder af Det Runde Bord! Hvem der?!” Pludselig dukker en lille, krumbøjet figur op foran dig, halvt skjult i tågen. Det er en gammel mand??? \n\n",
    options: [
      {
        text: "Tal med den gamle mand",
        nextStep: 8,
      },
      {
        text: "Brug de kampstillinger du har lært på ridderskolen og gå til angreb",
        nextStep: 6,
      },
    ],
    imgUrl: "./images/ridderogmand.jpg",
  },

  // 6
  {
    text: 'Med en dyb åndedrag sænker du dig ned i den første kampstilling, vægten fordelt lige mellem benene, sværdet hævet foran kroppen i en defensiv holdning. Du husker din træners ord: "Balance, indre fred. Ikke gå i panik." Og så - i ét glidende træk - træder du fremad. Den gamle mand er hurtig. I én bevægelse hiver han en stok ud af sit skæg og affejer dit angreb.',
    options: [
      {
        text: "Tal med den gamle mand",
        nextStep: 8,
      },
      {
        text: "Brug en aggressiv kampstilling",
        nextStep: 7,
      },
    ],
    imgUrl: "./images/fight.jpg",
  },

  // 7
  {
    text: "Du skifter du til en aggressiv kampstilling. Du styrter fremad, benene springer fra jorden, og i et voldsomt hug svinger du sværdet mod den gamle mand. Med sin stok forsvarer den gamle mand sig tappert. Han formår at slå sværdet ud af hånden på dig. Uden dit sværd kan du ikke længere kæmpe.",
    options: [
      {
        text: "Tal med den gamle mand",
        nextStep: 8,
      },
    ],
    imgUrl: "./images/fight2.jpg",
  },

  // 8
  {
    text: "Tiden står stille et øjeblik. Du står ansigt til ansigt med den gamle mand. Hans øjne synes at se direkte igennem dig, som om han læser dine tanker og ser din frygt. Der er en million spørgsmål at stille, men hvilket spørgsmål vil du stille først?",
    options: [
      {
        text: '"Hvordan kommer jeg væk herfra ASAP?',
        nextStep: 9,
      },
      {
        text: '"Hvor er Heltesværdet?"',
        nextStep: 10,
      },
    ],
    imgUrl: "./images/gammelmand.jpg",
  },

  // 9
  {
    text: "Du vil aldrig indrømme, at du er faret vild, eller at du tager fejl. Men det er gået op for dig, at du nok aldrig finder ud herfra uden hjælp. Du bliver venner med den gamle mand og lærer, at hans navn er Gunfuldt. I følges ad til udkanten af skoven. Du vender hjem med gode minder om dit nye venskab med Gunfuldt, men uden Heltesværdet fra Modgilleh. Missionen er fejlet, og dronningen bliver nok lidt skuffet...",
    options: [
      {
        text: "Start forfra",
        nextStep: 0,
      },
    ],
    imgUrl: "./images/sur.jpg",
  },

  // 10
  {
    text: "Den gamle mand er også på færd efter Heltesværdet, og af takstiske årsager danner I en alliance for at forene jeres styrker. Efter mange timers eventyr lærer du, at hans navn er Gunfuldt. I ankommer til en lund, hvor heltesværdet ligger i midten.",
    options: [
      {
        text: "Tag Heltesværdet og stik af",
        nextStep: 11,
      },
      {
        text: "Tag Heltesværdet i samarbejde med Gunfuldt",
        nextStep: 12,
      },
    ],
    imgUrl: "./images/heltesword.jpg",
  },

  // 11
  {
    text: "Én af jer kommer til at forråde den anden. Hvis ikke du gør det først, vil Gunfuldt bare forråde dig - og det må ikke ske! Du hapser Heltesværdet for næsen af Gunfuldt og løber væk så hurtigt du kan.",
    options: [
      {
        text: "Vend tilbage til dronningen",
        nextStep: 14,
      },
    ],
    imgUrl: "./images/haps.jpg",
  },

  // 12
  {
    text: "Alle ved, at det stærkeste i verden er The Power Of Friendship. Du samler Heltesværdet op i samarbejde med Gunfuldt. Denne handling viser stor tillid, og jeres bånd bliver endnu stærkere. Det er dejligt at stole så blindt på et andet menneske.",
    options: [
      {
        text: "Vend tilbage til dronningen",
        nextStep: 13,
      },
    ],
    imgUrl: "./images/alliance.jpg",
  },

  // 13
  {
    text: "Du vender hjem med Heltesværdet og med en ny alliance med Gunfuldt. Dronningen er glad! :D Sikke en succesfuld første dag som Ridder af Det Runde Bord!",
    options: [
      {
        text: "Start forfra",
        nextStep: 0,
      },
    ],
    imgUrl: "./images/slut.jpg",
  },

  // 14
  {
    text: "Du vender hjem med Heltesværdet. Dronningen er glad! :D Sikke en succesfuld første dag som Ridder af Det Runde Bord!",
    options: [
      {
        text: "Start forfra",
        nextStep: 0,
      },
    ],
    imgUrl: "./images/slut2.jpg",
  },
];

const textEl = document.querySelector(".new-text p");
const optionsEl = document.querySelector(".new-options");
const imgEl = document.querySelector(".screen-img");
const userClickEl = document.querySelector("#user-click");
const screenTextEl = document.querySelector(".screen-text");

let currentState = 0;
let knightName = "";

// Start game
userClickEl.addEventListener("click", () => {
  showText(currentState);
  showChoices(currentState);
  showImage(currentState);
  screenTextEl.style.backgroundImage = `url("images/oldpaper.png")`;
});

function showText(kapitel) {
  let tmpText = gameData[kapitel].text.replace("NAME", knightName);
  textEl.textContent = tmpText;
}

function showImage(kapitel) {
  imgEl.style.backgroundImage = `url("${gameData[kapitel].imgUrl}")`;
  imgEl.style.backgroundSize = "cover";
}

function showChoices(kapitel) {
  optionsEl.innerHTML = "";

  // Er det startskærmen
  if (currentState == 0) {
    const newInput = document.createElement("input");
    newInput.placeholder = "Skriv dit riddernavn her";
    newInput.classList.add("input-btn");
    optionsEl.append(newInput);

    const btnEl = document.createElement("button");
    btnEl.textContent = "Vælg riddernavn";
    btnEl.classList.add("btn");
    optionsEl.append(btnEl);

    btnEl.addEventListener("click", () => {
      if (newInput.value == "") {
        knightName = "Sir";
        optionSelected(gameData[kapitel].options[0]);
      } else {
        knightName = newInput.value;
        optionSelected(gameData[kapitel].options[0]);
      }
    });

    // Spil resten af spillet
  } else {
    gameData[kapitel].options.forEach((valg) => {
      const newButton = document.createElement("button");
      newButton.innerText = valg.text;
      newButton.classList.add("btn");

      newButton.addEventListener("click", () => {
        optionSelected(valg);
      });
      optionsEl.append(newButton);
    });
  }
}

function optionSelected(options) {
  currentState = options.nextStep;
  showText(currentState);
  showChoices(currentState);
  showImage(currentState);
}
