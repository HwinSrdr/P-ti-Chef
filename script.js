// Etape 1 : j'analyse la donnée
// Etape 2 : Je crée mon modèle de carte en HTML
// Etape 3 : Je récupère la donnée et je l'affiche en console
// Etape 4 : Je stock le chemin vers la donnée dans les variables
// Etape 5 : Je crée les cartes remplies dynamiquement
// Etape 6 : Je les envoie dans le DOM


fetch(`data.json`)

.then((rep) => {
    // Javascript recoit une réponse de l'api(objet js pas exploitable directement => il faut le transformer en json)
    return rep.json()
})
    .then(donnee => {
        //Ensuite j'ai accès ici à ma donnée
        console.log(donnee)
        //Ici j'ai une liste de produit
        //Je boucle sur le tableau de données:
        donnee.forEach(recette => {
            /* prod.ingredients.forEach(ingredient => {
                let typeIngredients = ingredient.aliment
                ingredient(typeIngredients)
                });*/
                
                affiche(recette)
            });
        })
        
        
        function affiche(recipe) {
        
        let nom = recipe.nom;
        let img = recipe.img;
        let difficulte = recipe.difficulte;
        let tempPreparation = recipe.tempPreparation;
        let tempCuisson = recipe.tempCuisson;
        let portions = recipe.portions;
        
        let listeIng = "";
            recipe.ingredients.forEach(ing=>{
                listeIng+=`<li>${ing.quantite} ${ing.unite} ${ing.aliment} </li>`
            })
            console.log(listeIng)

        let listEtape = "";
            recipe.etapes.forEach(etp=>{
                listEtape+=`<li>${etp.numeroEtape} ${etp.descEtape} </li>`
            })
            console.log(listeIng)       

        let cardContainer = document.querySelector("#result")
        cardContainer.innerHTML +=`
        
        <div class="spaceBetween">
            <h3> ${nom} </h3>
            <ul class="flex parametre spaceBetween styleNone">
                <li><span>Difficulté</span> ${difficulte} </li>
                <li><span>Portions</span> ${portions} </li>
                <li><span>Temps de préparation</span> ${tempPreparation} </li>
                <li><span>Temps de cuisson</span> ${tempCuisson} </li>
            </ul>
            <div class="flex preparation">
                <div class="w20 spaceBetween">
                    <h4>Ingrédients :</h4>
                    <ul id="ingredients">
                        ${listeIng}
                    </ul>
                </div>
                <div class="w40">
                    <h4>Etapes :</h4>
                    <ol id="etape" class="styleNone">
                        ${listEtape}
                    </ol>
                </div>
                <div>
                    <img src=" ${img} " alt="">
                </div>
            </div>
        </div>`;
        
        /*boucle pour les ingrédients
        recipe.ingredients.forEach(ing => {
            console.log(ing)
            console.log(ing.quantite, ing.unite, ing.aliment
            )
            
            let qte = ing.quantite;
            let unite = ing.unite;
            let aliment = ing.aliment;
            
            let ingredientContainer = document.querySelector("#ingredients")
            ingredientContainer.innerHTML +=
            ` <li>  ${qte} ${unite} ${aliment} </li>`
        });
        
        
        
        //boucle pour les étapes
        recipe.etapes.forEach(etape => {
            console.log(etape)
            console.log(etape.numeroEtape, etape.descEtape
            )
            let numEtape = etape.numeroEtape;
            let etapedesc = etape.descEtape
            
            let recetteContainer = document.querySelector("#etape")
            recetteContainer.innerHTML +=
            ` <li>  ${numEtape} ${etapedesc} </li>`;
        });*/
        

}

