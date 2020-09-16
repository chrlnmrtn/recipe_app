import React from "react";
import pancake from "../images/pancake.jpg"
import ricotta from "../images/ricotta.jpg"

export const data = [
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    name: "RICOTTA WAFFLES",
    ingredients: [
    { name: "220 g (1 3/4 cups) plain (all-purpose) flour", amount: 1.75, measurement: "220g (1 3/4cups)" },
    { name: "30 g (1/4 cup) cornflour (cornstarch)", amount: 0.25, measurement: "30g (1/4cup)" },
    { name: "3 tablespoons sugar", amount: 3, measurement: "3 tablespoon sugar" },
    { name: "1 tablespoon baking powder", amount: 1, measurement: "1 tablespoon" },
    { name: "1/2 teaspoon baking soda", amount: 0.5, measurement: "1/2 teaspoon" },
    { name: "1/2 teaspoon salt", amount: 0.5, measurement: "1/2 teaspoon" },
    { name: "125 g (1/2 cup) unsalted butter", amount: 0.5, measurement: "125g (1/2cup)" },
    { name: "250 g (1 cup) ricotta", amount: 1, measurement: "250g (1cup)" },
    { name: "240 ml (1 cup) water", amount: 1, measurement: "240ml (1cup)" },
    { name: "2 large eggs", amount: 2, measurement: "2" },
    { name: "2 teaspoons pure vanilla extract", amount: 2, measurement: "2 teaspoon" }
    ],
    steps: [
    "Turn on the waffle iron and preheat the oven to 90°C(200°F/Gas 1/4), then line a baking sheet and place that in the warm oven. We're creating a nice place for the waffles to hang out so they stay warm and crisp.",

    "In a large bowl, whisk together the flour, cornflour, sugar, baking powder, baking soda, and salt.",

    "Melt the butter in the microwave or a small pan on the stove, Meanwhile, combine the ricotta and water in a large (at least 1 liter/4cup) measuring cup. As soon as the butter's melted, mis it into the ricotta-water mixture. Beat in the eggs and vanilla, then add that to the dry ingredients. Carefully mix just until it's combined, being careful not to overmix",

    "Cook according to the manufacturer's indtruction on the waffle iron and transfer to the baking sheet in the warm oven. DO NOT STACT WAFFLES BEFORE SERVING unless you want a hot soggy mess. Serve with mapple syrup and flaky sea salt, or anything else your heart desires."
    ]
    },
    {
    logo:<img src={pancake} className="photo" alt="pancake"/>,
    name: "FAT, FLUFFY PANCAKES",
    ingredients: [
    { name: "125 g (1 cup) plain (all-purpose) flour", amount: 1, measurement: "125g (1 cup)" },
    { name: "2 teaspoons baking powder", amount: 2, measurement: "2 teaspoons" },
    { name: "1/4 teaspoon baking soda", amount: 0.25, measurement: "1/4 teaspoon" },
    { name: "2 tablespoons white granulated sugar", amount: 2, measurement: "2 tablespoons" },
    { name: "pinch of salt", amount: 0.25, measurement: "" },
    { name: "120 ml (1/2 cup) buttermilk", amount: 0.5, measurement: "120ml (1/2 cup)" },
    { name: "50 ml (1/4 cup) water", amount: 0.25, measurement: "50ml (1/4 cup)" },
    { name: "1 large egg", amount: 1, measurement: "1" },
    { name: "2 tablespoons melted butter or vegetable oil", amount: 2, measurement: "2 tablespoons" },
    { name: "1/2 teaspoon pure vanilla extract", amount: 0.5, measurement: "1/2 teaspoon" }
    ],
    steps: [
        "In a medium-sized bowl whisk together the flour, baking powder, baking soda, sugar, and salt.",

        "In a measuring jug, measure out the buttermilk, then the water. Add the egg butter or oil, and vanilla.",

        "Add the wet mixture to the dry and mix just until there's no visible flour, DO NOT OVERMIX: that leads to flat, tough, chewey pancakes. That's the opposite of fat, fluffy.",

        "Heat up a non-stick frying pan over a medium heat and pour 3-4 tablespoons of batter. Cook until you see bubbles form around the edge, about 1-2 minutes, then flip over and cook for a minute or so, unitl golden brown. Make sure your heat isn't to high or the outside will brown before the inside get a chances to cook.",

        "You can serve these with whatever you want, but here's my two cents: top with bananas and dulce de leche, strawberries and whipped cream, or warm maple syrup and flaky sea salt.",
        

        "Of you want to add anything like blueberries or chocolate chips, then add them right after you pour the batter into the pan. Just toss 4 or 5 pieces, then flip when yo see the bubbles and cook like you normally would."

    ]
    },
    
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    name: "LOADED BAKED POTATO HASH",
    ingredients: [
    { name: "3 baked and cooled potatoes", amount: 3, measurement: "3" },
    { name: "225g (1/2lb) thick-cut good-quality bacon", amount: 1, measurement: "225g (1/2lb)" },
    { name: "1 medium onion, chopped", amount: 1, measurement: "1" },
    { name: "3 garlic cloves, minced", amount: 3, measurement: "3" },
    { name: "sour cream, to serve", amount: 1, measurement: "" },
    { name: "grated CHeddar cheese, to serve", amount: 1, measurement: "" },
    { name: "thinly sliced spring onions(scallions), to serve", amount: 1, measurement: "" },
    { name: "dash of hot sauce", amount: 1, measurement: "" },
    { name: "sea salt and freshly ground black-pepper", amount: 1, measurement: "" }
    ],
    steps: [
        "Chopped up the potatoes into roughly 1 1/2cm (1 in) pieces and set aside.",

        "Cook the bacon strips in a large pan until they're nice and crispy, remove, and set aside on some paper towels. Drain all but 2 tablespoons of the fat.",

        "Cook the onion in the bacon fat over a medium heat until soft and translucent, about 5-7minutes, then add the garlic and cook for about a minute more, until nice and fragrant. Add in the potatoes, season with salt and pepper, abd cook until the potatoes are nice nd golden brown warmed through.",

        "Serve the hash topped with sour cream, grated Cheddar, spring onion, hot sauce, and that bacon all crumbled up. Season and devour."
    ]
    },
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    name: "CHOCOLATE ORANGE MINI SCONES",
    ingredients: [
    { name: "250 g (2 cups) plain (all-purpose) flour", amount: 1, measurement: "" },
    { name: "1 tablespoon baking powder", amount: 1, measurement: "" },
    { name: "1/2 teaspoon sea salt", amount: 2, measurement: "" },
    { name: "3 tablespoons white granulated sugar", amount: 2, measurement: "" },
    { name: "zest of 1 orange", amount: 3, measurement: "" },
    { name: "110 g (1 stick) cold unsalted butter", amount: 3, measurement: "" },
    { name: "120 ml (1/2 cup) buttermilk plus 2 tablespoons for brushing tops", amount: 3, measurement: "" },
    { name: "1/2 teaspoon pure vanilla extract", amount: 3, measurement: "" },
    { name: "100 g (3 1/2 oz) good-quality dark chocolate, chopped", amount: 3, measurement: "" },
    { name: "optional: demerara(turbinado) sugar, for sprinkling(optional)", amount: 3, measurement: "" }
    ],
    steps: [
        "In a large bowl whisk together the flour, baking powder, salt, sugar, and zest or vanilla. Use the large holes on a box grater to grate the cold butter into the dry ingradients, then quickly use your hands to mix it in and slightly break it up. Place the bowl in the freezer.",
        
        "In a small bowl, add the buttermilk and vanilla extract and beat with a fork. Remove the mixture from the freezer and quickly incorporate the wet ingredients into it. Once it's almost fully combined, add the chocolate. Use your hads to knead the dough a couple of times - it shouldn't be sticky or too dry, but just combined.",

        "Next, using a 23 x 23 cm (9 x 9 in) cake tin or pie dish, pat out the dough evenly - I find this easier than trying to gather the dough on a cutting board. Using a 4-5 cm (1 1/2-2in) round biscuit cutter, cut out the scones, pushing straight down - never twisting - and cutting as close as you can to the previous. Once you can't cut anymore, carefully gather the craps, pat into the same 2 cm(3/4in) thickness and cut out a few more scones. Don't try and use the rest of the scraps - the scone will turn out tough.",

        "Place the scones on a large baking sheet lined with baking parchment and place it in the fridge or freezer to help chill the butter while you preheat the oven to 200°C (400°F/Gas 6). Once the oven is preheated, brush the tops of the scones wiht the 2 tablespoons of buttermilk and lightly sprinkle with the demerara sugar if you choose. Bake for 10-12minutes, until lightly golden brown."


    ]
    },
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    name: "EGGS IN SRIRACHATORY",
    ingredients: [
    { name: "2 tablespoons olive oil", amount: 1, measurement: "" },
    { name: "1 medium onion, chopped", amount: 1, measurement: "" },
    { name: "3 garlic cloves, minced", amount: 2, measurement: "" },
    { name: "2 x 400 g (1 x 28 oz) chopped tomatoes", amount: 2, measurement: "" },
    { name: "2-3 teaspoons Sriracha", amount: 3, measurement: "" },
    { name: "sea slat and freshly ground black-pepper", amount: 3, measurement: "" },
    { name: "4-5 eggs", amount: 3, measurement: "" },
    { name: "Lancashire cheese (or queso fresco), crumbled for serving", amount: 3, measurement: "" },
    { name: "freshly chopped coriander(cilaantro), for serving", amount: 3, measurement: "" },
    { name: "crusty bread, for serving", amount: 3, measurement: "" }
    ],
    steps: [
        "Preheat your oven to 180°C (350°F/Gas 4).",

        "In a large frying pan (one you have a lid for), heat the oil and sauté the onion until soft and translucent, about 5-7 minutes. Add the garlic and cook for 1-2 minutes until fragrant. Stir in the chopped tomatoes and Sriracha and season to taste. Bring to a simmer, and cook for 10 minutes.", 

        "Make a 4 dents in the sauce and crack the eggs into each dent, or go ahead and portion the sauce between 4 ramekins then make that dent and drop the eggs in those. Bake for 10-12 minutes until the whites are just barely set and the yolks are still money gold runny."
        , 

        "Top with the crumbled cheese and fresh coriander, and serve with crusty bread."
    ]
    },
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    name: "BROWNIE GRANOLA",
    ingredients: [
    { name: "250 g (2 1/2 cups) oats", amount: 1, measurement: "" },
    { name: "125 g (1 cup) roughly chopped walnuts", amount: 1, measurement: "" },
    { name: "40 g (1/3 cup) cocoa powder", amount: 2, measurement: "" },
    { name: "80 ml (1/3 cup) vegetable or coconut oil", amount: 2, measurement: "" },
    { name: "4 tablespoons honey", amount: 3, measurement: "" },
    { name: "70 g (1/3 cup) light brown sugar", amount: 3, measurement: "" },
    { name: "1/2 teaspoon sea salt", amount: 3, measurement: "" },
    { name: "50 g (2 oz) chopped dark(bittersweet) chocolate", amount: 3, measurement: "" }
    ],
    steps: [
        "Preheat your oven to 150°C (300°F/Gas 2) and line your largest baking sheet with baking parchment."
        , 
        "In a large bowl, mix together the oats and walnuts. Heat the cocoa powder, oil, honey, brown sugar, and salt in a samll saucepan for 3-5minutes until heated through and you just start to see bubbles."
        , 
        "Use a rubber spatula to mix the sticky mess into the oat and walnut mixture. Spread out onto the baking sheet and bake for 10 minutes. Give everything a good stir, bake for another 10 minutes, mix again, and bake for a final 10 minutes. Remove from the oven and scatter the chocolate all over the top. It'll start to melt immediately so there's no second scattering. Let cool completely before devouring or moving to an airtight container, where it will keep for a week."
    ]
    }
    ];