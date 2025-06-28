import React, { createContext, useState } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [data, setdata] = useState(() => {
        const saved = localStorage.getItem("recipes");
        return saved ? JSON.parse(saved) : [{
            Title: "Crispy Samosa",
            category: "Breakfast",
            chefname: "Nimesh Solanki",
            description: "The irresistible crunch of a perfectly fried samosa, filled with a fragrant blend of spiced potatoes and peas, is a culinary experience unlike any other",
            id: "MdTkG-6u035oojHPljfMf",
            image: "https://www.simplyrecipes.com/thmb/kFG0KjF0DYtVCSlkFivDSrUBpkg=/1600x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__12__Vegetable-Samosas-LEAD-1-65199bf0727346c8871b4b3d362da391.jpg",
            ingredients: "Potatoes: 500g\nRed chili flakes: 0.5 tsp\nRed chili powder: 0.5 tsp\nCoriander powder: 1 tbsp\nSalt: 0.5 tsp\nGaram masala powder: 0.5 tsp\nPomegranate seeds: 1 tsp\nGreen chilies: 2-3\nOnion: 1 small\nGreen coriander leaves\nChaat masala or dry mango powder: 9 tsp\nAll-purpose flour: 2 cups\nWhite cumin seeds: 9 tsp\nCooking oil: 2-4 tbsp\nWater",
            instructions: "Step 1. Prepare the Filling and Dough\nBoil and mash potatoes.\nMix mashed potatoes with red chili flakes, red chili powder, coriander powder, salt, garam masala, pomegranate seeds, chopped green chilies, chopped onion, green coriander, and chaat masala.\nMix all-purpose flour, salt, cumin seeds, and cooking oil. Gradually add water to form a slightly hard dough. Knead for 3-4 minutes, then rest for 20 minutes.\nStep 2. Assemble the Samosas\nDivide the dough into small portions and roll into small circles (pedas). Rest for 15 minutes.\nChoose a folding method (see tips for three options) and assemble the samosas.\nStep 3. Fry the Samosas\nFry the samosas in hot oil over medium-low heat until golden brown and crispy.",
        },
        {
            Title: "Paneer Butter Masala",
            category: "Lunch",
            chefname: "Nimesh Solanki",
            description: "Paneer Butter Masala, a creamy and rich Indian curry, is a beloved dish known for its decadent flavors and tender paneer cheese. "
            , id: "09z5XdEQh60dWnYoBSEyA",
            image: "https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-2-3.jpg",
            ingredients: "Paneer: 250-300 grams\nOnion\nTomatoes\nBeetroot\nCashews\nAlmonds\nHomemade Cream\nFennel Seeds\nRoyal Cumin Seeds\nCloves\nBlack Peppercorns\nBig Cardamom\nSmall Cardamom\nKashmiri Red Chilies: 2\nBay Leaf\nCinnamon\nGinger\nGarlic\nTurmeric Powder\nSalt\nSugar\nGaram Masala\nKasuri Methi (Dried Fenugreek Leaves)\nCoriander Leaves\nOil\nButter\nGreen Chilies: 2"
            , instructions: " Prepare the Masala Base\nTemper fennel and royal cumin in oil.\nAdd cloves, black pepper, big and small cardamom, two Kashmiri red chillies, bay leaf, and onion. Soften the onion.\nAdd cinnamon, ginger, and garlic; mix well.\nAdd chopped tomatoes, beetroot, cashews, almonds, homemade cream, and salt. Mix and let it whistle twice in a pressure cooker. Cook the Paneer\nWhile the masala cools, cut paneer into desired shapes (long pieces, cubes, or triangles).\nHeat oil and butter in a pan. Add turmeric and Kashmiri red chili. Mix well.\nAdd paneer pieces and cook on high heat, stirring gently, until nicely colored.Add the fried paneer, cover, and let it sit for a few minutes.Garnish with garam masala, kasuri methi, and coriander."
        },
        {
            Title: "Mango Lassi",
            category: "Dessert",
            chefname: "Nimesh Solanki",
            description: "Mango Lassi is a creamy, sweet, and refreshing Indian beverage made from ripe mangoes, yogurt, and a touch of sugar, often enhanced with aromatic cardamom."
            , image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-lassi.jpg",
            id: "9rXwIRdvGfqpXeE7AqtJz",
            ingredients: "1 cup ripe mango pulp (fresh or canned ) 1 large mango 1 cup plain yogurt(preferably chilled½ cup milk) or water for a lighter version 2–3 tbsp sugar (adjust to taste ¼ tsp cardamom powder(optional, for flavor) A few ice cubes(optional)",
            instructions: "Peel and chop fresh mangoes if not using pulp. Add mango pulp, yogurt, milk or water, sugar, and cardamom powder to a blender Blend on high speed until the mixture is smooth and creamy. Adjust consistency by adding more milk or water if needed and blend again. Optionally add ice cubes and blend for a chilled drink. Pour into serving glasses. Garnish with chopped pistachios, saffron, or mint leaves if desired.Serve immediately while chilled."
        },
        {
            Title: "Classic Margherita Pizza",
            category: "Dinner",
            chefname: "Olivia Brown",
            description: "A simple yet delicious pizza topped with fresh mozzarella, basil, and tomato sauce.",
            id: "MjsdP-4hU93klYpXdfEf",
            image: "https://allforpizza.com/wp-content/uploads/2022/07/1460A7EC-CF3B-40E8-B05F-A21E12E85EC6-530x530.jpeg",
            ingredients: "1 pizza base, 1/2 cup tomato sauce, 100g mozzarella cheese, Fresh basil leaves, Olive oil, Salt to taste",
            instructions: "Spread tomato sauce over the pizza base. Top with mozzarella slices and basil. Bake in a preheated oven at 220°C for 12-15 minutes. Drizzle with olive oil and serve."
        },
        {
            Title: "Spaghetti Aglio e Olio",
            category: "Breakfast",
            chefname: "Marco Rossi",
            description: "Traditional Italian spaghetti tossed with garlic, olive oil, and chili flakes.",
            id: "PsdLJ-9hT72noOYtDfGc",
            image: "https://tse1.mm.bing.net/th/id/OIP.-DppuyEQSHaTJsgtQiKxLQHaJQ?pid=Api",
            ingredients: "200g spaghetti, 4 cloves garlic sliced, 1/4 cup olive oil, 1 tsp chili flakes, Salt and pepper to taste, Fresh parsley chopped",
            instructions: "Cook spaghetti according to package instructions. Sauté garlic in olive oil until golden. Add chili flakes and cooked spaghetti. Toss well and garnish with parsley."
        },
        {
            Title: "Veggie Stir-Fry Noodles",
            category: "Breakfast",
            chefname: "Li Wei",
            description: "Colorful stir-fried noodles loaded with fresh veggies and soy sauce.",
            id: "QmdpF-8uV74qpLtVksMw",
            image: "https://img.hellofresh.com/hellofresh_s3/image/veggie-noodle-stir-fry-v-84780780-95abf982.jpg",
            ingredients: "200g noodles, 1 cup mixed vegetables (carrots, bell peppers, cabbage), 2 tbsp soy sauce, 1 tbsp sesame oil, 2 cloves garlic minced, Salt and pepper to taste",
            instructions: "Cook noodles and set aside. Sauté garlic and veggies. Add soy sauce and toss noodles. Serve hot."
        },
        {
            Title: "Chocolate Brownies",
            category: "Dessert",
            chefname: "Emily Clark",
            description: "Fudgy and rich chocolate brownies with a crisp top and gooey center.",
            id: "KzPlR-3hX84toFrPjzLt",
            image: "https://i.redd.it/rdk90ud92u821.jpg",
            ingredients: "200g dark chocolate, 100g butter, 150g sugar, 2 eggs, 100g flour, 1 tsp vanilla extract",
            instructions: "Melt chocolate and butter. Whisk in sugar and eggs. Add flour and vanilla. Bake at 180°C for 20-25 minutes."
        },
        {
            Title: "Caesar Salad",
            category: "Lunch",
            chefname: "John Wilson",
            description: "Classic Caesar salad with crunchy croutons, parmesan, and creamy dressing.",
            id: "LqXpJ-5yK39mtOpVlfEx",
            image: "https://www.thespruceeats.com/thmb/Z6IWF7c9zywuU9maSIimGLbHoI4=/3000x2000/filters:fill(auto,1)/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg",
            ingredients: "1 head romaine lettuce, 1/2 cup croutons, 2 tbsp parmesan cheese, 3 tbsp Caesar dressing, Salt and pepper to taste",
            instructions: "Toss lettuce with dressing. Top with croutons and parmesan. Season with salt and pepper. Serve immediately."
        },
        {
            Title: "Classic Pancakes",
            category: "Breakfast",
            chefname: "Sophia Patel",
            description: "Fluffy and light pancakes served with syrup and butter.",
            id: "MdLpE-7rU52ntRtKwsDv",
            image: "https://i2.wp.com/duesouth.media/wp-content/uploads/2019/03/Pancake-recipe.jpg?fit=1989%2C1800&ssl=1",
            ingredients: "1 cup flour, 1 tbsp sugar, 1 tsp baking powder, 1 egg, 1 cup milk, 2 tbsp butter melted",
            instructions: "Mix dry ingredients. Whisk in egg, milk, and butter. Cook on a greased pan until golden. Serve with syrup."
        },
        {
            Title: "Grilled Chicken Sandwich",
            category: "Breakfast",
            chefname: "James Anderson",
            description: "Juicy grilled chicken sandwich with lettuce, tomato, and creamy mayo.",
            id: "PtBlW-6uN93ltHtTjsXw",
            image: "https://img.freepik.com/premium-photo/grilled-chicken-sandwich_729149-3459.jpg",
            ingredients: "2 slices bread, 100g grilled chicken breast, Lettuce leaves, 1 tomato sliced, 2 tbsp mayonnaise, Salt and pepper",
            instructions: "Spread mayo on bread slices. Layer chicken, lettuce, and tomato. Season with salt and pepper. Grill lightly and serve."
        }
        ];
    });

    return (
        <recipecontext.Provider value={{ data, setdata }}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
