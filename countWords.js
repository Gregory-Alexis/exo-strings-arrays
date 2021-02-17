let txt = `Je suis le ténébreux, - le veuf, - l'inconsolé, Le prince d'Aquitaine à la tour abolie : Ma seule étoile est morte, - et mon luth constellé Porte le soleil noir de la Mélancolie. Dans la nuit du tombeau, toi qui m'as consolé, Rends - moi le Pausilippe et la mer d'Italie, La fleur qui plaisait tant à mon cœur désolé, Et la treille où le pampre à la rose s'allie. Suis - je Amour ou Phébus ? ...Lusignan ou Biron ? Mon front est rouge encor du baiser de la reine; J'ai rêvé dans la grotte où nage la sirène... Et j'ai deux fois vainqueur traversé l'Achéron; Modulant tour à tour sur la lyre d'Orphée Les soupirs de la sainte et les cris de la fée.`
// J'ai dû mettre le texte sur une seule linge car le programme comptait parfois 2 mots + le \n pour 1 mot.
let wordCount = 0;

txt = txt.split(' ')

for (let i = 0; i < txt.length; i++) {
  wordCount++
}
console.log(wordCount)
console.log(txt)
