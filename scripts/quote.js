
//import quotes from "../ressources/Quotes/kierkegaard_DA.txt";
let quote = load_quote();

function load_quote() {
    // i wanted to make text files, but it seems impossible to load them with standard js
    var quotes = []

    quotes.push("Det gaaer saa let, at træde i Lystens Dands; men naar det saa er længere henne, og det er Lysten, der dandser med Mennesket mod hans Villie: det er en tung Dands!");
    quotes.push("Af alle latterlige Ting forekommer det mig at være det allerlatterligste at have travlt");
    quotes.push("At man, naar det i Sandhed skal lykkes En at føre et Menneske hen til et bestemt Sted, først og fremmest maa passe paa at finde ham der, hvor han er, og begynde der.");
    quotes.push("At vove er at tabe fodfæste en kort stund. Ikke at vove er at tabe sig selv ");
    quotes.push("Saaledes er der ogsaa i hver Generation nogle Msker, som ligge yderst og lide ved Indpakningen, der kun værner om dem, som ligge i Midten");
    quotes.push("Det Store er ikke at være Dette eller Hiint; men at være sig selv, og dette kan ethvert Menneske, naar han vil det");
    quotes.push("Forventningens glæde er den største!");
    quotes.push("Gift Dig, Du vil fortryde det; gift Dig ikke, Du vil ogsaa fortryde det");
    quotes.push("Hvad er det Umagen værd at erindre det Forbigangne, der ikke kan blive et Nærværende");
    quotes.push("Hvad er Sandhed andet end en Leven for en Idee? Alt maa til syvende og sidst basere sig paa et Postulat; men i det Øieblik det saaledes ikke længere staaer udenfor ham, men han lever deri, først da er det ophørt at være ham et Postulat");
    quotes.push("Hvert enkelt Menneske har en uendelig Realitet, og det er Stolthed og Hovmod ikke i ethvert enkelt Menneske at ære sin Næste");
    quotes.push("Livet forstås baglæns, men må leves forlæns");
    quotes.push("Ak! Lykkens Dør den gaaer ikke ind ad, saa at man ved at storme løs paa den kan trykke den op; men den gaaer ud efter, og man har derfor intet at gjøre.");
    quotes.push("Kun i Bevægelse er Sundheden og Frelsen at finde. Nægter Nogen, at Bevægelsen er til: saa gjør jeg som Diogenes, saa gaaer jeg. Negter Nogen, at Sundheden er i Bevægelsen, saa gaaer jeg fra alle sygelige Indvendinger. Naar man saaledes bliver ved at gaae, saa gaaer det nok.");
    quotes.push("Aands-Existents, især den religieuse, er ikke let; den Troende ligger bestandigt paa Dybet, har 70,000 Favne Vand under sig.");

    var rnd = Math.floor(Math.random() * quotes.length);

    return quotes[rnd];
}