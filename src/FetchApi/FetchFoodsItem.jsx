import { useState } from "react";

function FetchFoodsItem(){
    const [img, setImg] = useState('');
    
    async function foodItems(){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${"pizza"}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.meals[0].strMealThumb);
        // setImg(data.meals[0].strMealThumb)
        data.meals.map((item)=>{
            setImg(item.strMealThumb)
        })
    }
    
    return (
        <>
        <button onClick={foodItems}>Search food</button>
        <img src={img} alt="" width={250}  />
        </>
    )
}

export default FetchFoodsItem;

