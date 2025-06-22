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
        }];
});

return (
    <recipecontext.Provider value={{ data, setdata }}>
        {props.children}
    </recipecontext.Provider>
);
};

export default RecipeContext;
