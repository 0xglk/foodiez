import categoryStore from '../stores/categoryStore';
import React from "react";
const RecipesCategory = ({category_id}) =>{
     const  findcategory =  categoryStore.Category.filter((Category) => category_id ===  Category._id).map((map)=>(
         <>
         {map.name}
         </>
     ))
      return(
        <>
        <span>{findcategory}</span>
        </>
      )
}

export default RecipesCategory;