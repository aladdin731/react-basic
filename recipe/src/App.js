import RecipeList from './RecipeList';

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  );
}

const sampleRecipes = [
  {
    id:1,
    name:'Plain Chicked',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. lala \n 2.haha \n 3.baba"
  },
  {
    id:2,
    name:'Plain Pork',
    servings: 2,
    cookTime: '1:22',
    instructions: "1. lala \n 2.haha \n 3.baba"
  }
]

export default App;
