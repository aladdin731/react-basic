import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({recipes}) {
    return (
        <div>
           {
               recipes.map(recipe => {
                   // next level can do props.id....instead of props.recipe.id
                   return (<Recipe 
                            key={recipe.id}  
                            {...recipe}/>
                    )})
           }
        </div>
    )
}
