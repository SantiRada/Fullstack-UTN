import { useState, useEffect } from 'react';

export function Categories (){

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
    
                setCategories(data.categories);
            } catch (error) { console.log(error); }
        }

        fetchData();
    }, []);

    return(
        <section className="list-chip">
        { categories &&
            categories.map((item, index) => (
                <div className="chip">
                    {item.strCategory}
                </div>  
            ))
        }
        { categories == null && 
            Array(10).fill().map((item, index) => (
                <div className="chip chip-placeholder"></div>
            ))
        }
        </section>
    );
}