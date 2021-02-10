function all(cocktail){
    const url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    
    
    fetch (url)
    .then (response =>response.json())
    .then (data =>{
    

        let element = document.getElementById('elem')         
    
        element.innerHTML=`
       
        <h2><h2> ${data.drinks[0].strDrink} </h2></h2>
        <br>
        <h5>Alcoholic?: <p> ${data.drinks[0].strAlcoholic} </p></h5>
        <img src='${data.drinks[0].strDrinkThumb}'/ style="width:200px">
        <h5>Category: <p> ${data.drinks[0].strCategory} </p></h5>
        <h5>INGREDIENTS:<h5>

        <li >${data.drinks[0].strIngredient1}</li>
        
        <li>${data.drinks[0].strIngredient2}</li>
        
        <li>${data.drinks[0].strIngredient3}</li>
        
        <li>${data.drinks[0].strIngredient4}</li>
        
        <li>${data.drinks[0].strIngredient5}</li>
        
        <li>${data.drinks[0].strIngredient6}</li>
        
        <h2>INSTRUCTIONS</h2>
        
        <p class="instructions">${data.drinks[0].strInstructions}</p>
        
        
        `
        
    
    console.log(data)
    })
}           


  

    document.getElementById("button").addEventListener("click",function(){
        var resultado= document.getElementById("text").value
        console.log(resultado)
        all(resultado)
    })