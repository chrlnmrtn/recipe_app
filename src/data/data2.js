import React from "react";
import corienderpesto from "../images/corianderpesto.jpg"
import steakseasoned from "../images/steakseasonedfries.jpg"
import californiaburgers from "../images/californiaburgers.jpg"
import musubifriedrice from "../images/musubifriedrice.jpg"
import pulledbbqchicken from "../images/pulledbbqchicken.jpg"
import gingerdijon from "../images/gingerdijon.jpg"
import roastedcauliflower from "../images/roastedcauliflower.jpg"
import ricotta from "../images/ricotta.jpg"

export const data2 = [
{
    id : 7,
    logo:<img src={corienderpesto} className="photo" alt="coriander pesto"/>,
    nameID: "CORIANDER PESTO",
    ingredients: [
    { name: "100 g (2 cups) fresh coriander (cilantro) leaves", amount: 1, measurement: "" },
    { name: "70 g (2/3 cup) crumbled cotija cheese or Parmesan", amount: 0.25, measurement: "" },
    { name: "1 garlic clove, minced or grated", amount: 3, measurement: "" },
    { name: "juice of 1/2 lime ", amount: 1, measurement: "" },
    { name: "dash of hot sauce", amount: 0.5, measurement: "" },
    { name: "80 ml (1/2cup) olive oil", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Throw everything except the olive oi into to the blender or food processor and blend until chopped. Scrape down the sides, then, with the machine running, drizzle in olive oil and blend until it all comes together. I don't usually add salt because the cojita tends to be pretty salty but if you're using Parmesan, double check and season to taste. It will keep in an airtight in the fridge for up to 2 weeks.",

    "Aioli: Mix equal parts pesto and mayonnaise. Use on all ypur sandwiches, burgers, etc.",
    
    "Pesto Ranch: Mix together equal parts pesto, sour cream, mayonnaise, and buttermilk.",

    "Pesto Butter: Stir 125 g (1/2 cup) pesto in with 60g (1/4 cup) of softened butter. Slatter on rolls, fresh grilled corn, your face, etc."
    ],
    },{
    id : 8,
    logo:<img src={roastedcauliflower} className="photo" alt="roasted cauliflower and pesto penne"/>,
    nameID: "ROASTED CAULIFLOWER & PESTO PENNE",
    ingredients: [
    { name: "1 medium-size cauliflower", amount: 1, measurement: "" },
    { name: "2 tablespoons olive oil", amount: 0.25, measurement: "" },
    { name: "sea salt and freshly ground black pepper", amount: 3, measurement: "" },
    { name: "85 g (2/3 cup) chopped walnuts, toasted", amount: 1, measurement: "" },
    { name: "450 g (1 lb) penne pasta", amount: 0.5, measurement: "" },
    { name: "1 batch Coriander pesto ", amount: 0.5, measurement: "" },
    { name: "A handful of crumbled cotija or grated Parmesan cheese, to serve", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Preheat your oven to 220°C (425 °F/Gas 7) and start to bring a large pot of water to a boil for the pasta.",

    "Chop up the cauliflower head into florets and place on a large baking sheet lined with baking parchment. Dizzle with the olive oil and sesaon with salt and pepper. Toss to combine an droast for 15 minutes until golden brown and softened.",

    "While the cauliflower roasting, toast the walnuts in a dry frying pan over a medium heat until lightly toasted and smelling fine.",

    "By the time cauliflower's ready the water should be boiling. Add the pasta and cook according to the time on the package. Drain the pasta, reserving about 250 ml (1 cup) of the pasta water. To the drained pasta add the cauliflower, walnuts, pesto, and about 250 ml (1/2cup) of the pasta water. Toss to combine and add more pasta water if the dish seems too dry. serve topped with crumbled cojita or Parmesan."  
    ],
    },{
    id : 9,
    logo:<img src={gingerdijon} className="photo" alt="ginger dijon bbq sauce"/>,
    nameID: "GINGER DIJON BBQ SAUCE",
    ingredients: [
    { name: "60 ml (1/4 cup) rice wine vinegar", amount: 1, measurement: "" },
    { name: "240 ml (1 cup) ketchup", amount: 0.25, measurement: "" },
    { name: "2 tablespoons Dijon mustard", amount: 3, measurement: "" },
    { name: "1 teaspoon salt", amount: 1, measurement: "" },
    { name: "1/2 teaspoon black pepper", amount: 0.5, measurement: "" },
    { name: "45 g (1/4 cup) light brown sugar", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon garlic powder", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon onion powder", amount: 1, measurement: "" },
    { name: "1 teaspoon grated garlic", amount: 1, measurement: "" }
    ],
    steps: [
    " Combine all the ingradients and bring to a simmer.",

    "Continue cooking for 15-20 minutes, until it's thickened slightly. Store in an airtight container in the fridge for up to 2 weeks."
    ],
    },{
    id : 10,
    logo:<img src={pulledbbqchicken} className="photo" alt="pulled bbq chicken sandwiches w/ sesame slaw"/>,
    nameID: "PULLED BBQ CHICKEN SANDWICHES with SESAME SLAW",
    ingredients: [
    { name: "FOR THE PULLED CHICKEN", amount: 2, measurement: "" },
    { name: "900 g (2 lb) boneless skinless chicken thighs", amount: 1, measurement: "" },
    { name: "1 teaspoon sea salt (or coarse kosher salt)", amount: 0.25, measurement: "" },
    { name: "1/2 teaspoon freshly graound black pepper", amount: 3, measurement: "" },
    { name: "1 onion, chopped into quarters", amount: 1, measurement: "" },
    { name: "4 garlic cloves", amount: 0.5, measurement: "" },
    { name: "1 quantity of Ginger Dijon BBQ Sauce", amount: 0.5, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "FOR THE SLAW", amount: 2, measurement: "" },
    { name: "1 tablespoon toasted sesame oil", amount: 0.5, measurement: "" },
    { name: "3 tablespoons rice wine vinegar", amount: 1, measurement: "" },
    { name: "1 teaspoon sea salt", amount: 1, measurement: "" },
    { name: "1/2 teaspoon white granulated sugar", amount: 2, measurement: "" },
    { name: "1/2 teaspoon freshly ground black pepper", amount: 2, measurement: "" },
    { name: "300 g (4 cups) shredded cabbage", amount: 2, measurement: "" },
    { name: "1 medium carrot, grated", amount: 2, measurement: "" },
    { name: "20 g (1/3 cup) chopped fresh coriander", amount: 2, measurement: "" },
    { name: "4 spring onions, thinly sliced", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "FOR ASSEMBLY", amount: 2, measurement: "" },
    { name: "4-6 good-quality hamburger buns", amount: 2, measurement: "" }
    ],
    steps: [
    "To make the chicken, combine everything except the BBQ sauce in a large heavy-bottomed saucepan, cover with 5 cm (2 in) water and bring to a boil. Turn down to a simmer and cook for 45 minutes.",

    "While the chicken's cooking make the BBQ sauce.",

    "To prepare the slaw, combine the sesame oil, rice wine vinegar, salt, sugar, and pepper in a large bowl. Whisk to combine then toss in the rest of the ingredients. Refrigerate until yo're ready to eat.",

    "When the chicken's done, remove from the pan and shred using 2 forks. Add the BBQ sauce and toss. To assemble the sandwiches, toast some good-quality buns, then top the bottom bun with pulled chicken and a small mountain of slaw. Finish with the top bun and devour."
    ],
    },{
        
    id : 11,
    logo:<img src={musubifriedrice} className="photo" alt="garlic musubi fried rice"/>,
    nameID: "GARLIC MUSUBI FRIED RICE",
    ingredients: [
    { name: "vegetable oil", amount: 1, measurement: "" },
    { name: "1/2 x 340 g (12 oz) tin span, chopped into 1 cm (1/2 in) dice", amount: 0.25, measurement: "" },
    { name: "2 eggs, lightly beaten", amount: 3, measurement: "" },
    { name: "3 garlic cloves, minced", amount: 1, measurement: "" },
    { name: "650 g (3 1/2 cups) cold cooked long-grain white rice", amount: 0.5, measurement: "" },
    { name: "30 g (1/3 cup) thinly sliced spring onions", amount: 0.5, measurement: "" },
    { name: "2-3 tablespoons furikake, plus extra to garnish", amount: 0.5, measurement: "" },
    { name: "soy sauce. to serve (optinoal)", amount: 1, measurement: "" },
    { name: "**if you try to use fresh warm rice you'll end up with mushy mess. This is the perfect time to use up that leftover take-out rice.", amount: 1, measurement: "" }
    ],
    steps: [
    "Add a splash of vegetable oil to a large frying pan or wok and fry up the Spam, cooking for 3-5 minutes ove a medium-high heat, until browned and crispy on all sides, then set aside.",

    "Add a little more oil to the pan if needed then pour in the eggs and the minced garlic and fry the eggs, moving them around the pan quickly so they don't burn. Once cooked, remove and set aside with the Spam.",

    "Splash a little more oil into the pan and add the rice, frying it for just a couple of minutes to warm it up and give it a little colour. Add the Spam and eggs back into the pan and mix, breaking up the eggs if needed.",

    "Once that's all heated, toss in the onion and sprinkle over the furikake. Taste for seasoning and add more furikake if you like, There's already salt in the furikake, but if you feel you really need it then add some soy sauce."
    ],
    },{
        
    id : 12,
    logo:<img src={californiaburgers} className="photo" alt="california burgers"/>,
    nameID: "CALIFORNIA BURGERS",
    ingredients: [
    { name: "FOR THE CARAMELISED ONIONS", amount: 1, measurement: "" },
    { name: "2 tablespoons butter", amount: 0.25, measurement: "" },
    { name: "1 large onion, chopped", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "FOR THE SECRET SAUCE", amount: 0.5, measurement: "" },
    { name: "60 ml (1/4 cup) mayonnaise", amount: 0.5, measurement: "" },
    { name: "2 tablespoons ketchup", amount: 0.5, measurement: "" },
    { name: "1 tablespoon pickle relish", amount: 1, measurement: "" },
    { name: "1/2 teaspoon soy sauce", amount: 1, measurement: "" },
    { name: "1/2 teaspoon white vinegar", amount: 2, measurement: "" },
    { name: "1/2 teaspoon white sugar", amount: 2, measurement: "" },
    { name: "1/4 teaspoon garlic powder", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "FOR THE BURGER", amount: 2, measurement: "" },
    { name: "450 g (1 lb) ground beef", amount: 2, measurement: "" },
    { name: "sea salt and freshly ground black pepper", amount: 2, measurement: "" },
    { name: "your favorite cheese", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "FOR ASSEMBLY", amount: 2, measurement: "" },
    { name: "4 good-quality hamburger buns", amount: 2, measurement: "" },
    { name: "1 beef tomato, sliced", amount: 2, measurement: "" },
    { name: "iceberg lettuce", amount: 2, measurement: "" }
    ],
    steps: [
    "Start out with the caramelised onions. In a large pot melt the butter then add the onions and cook over a low-medium heat, stirring often, until very soft and golden brown, about 30-45 minutes.",

    "Meanwhile, mix the ingredients for the seacret sauce(glorified thousand island) in a small bowl and place it in the refrigerator. If you have the option to make it the day before, do so. It gets a little better with that one day.",

    "To make the burger patties, lightly wet your hands and shape the ground beef into tennis-ball sized balls, manhandling them as possible. Flatten on the palm of your hand to around 2 cm (3/4 in) thick. Season with salt and pepper and let them sit at a room tmperature for about 20 minutes. If you want to get real freaky you could use the Steak Seasoning.",

    "Grill the patties for about 2-4 minutes per side. Once you flip themover and let it cook for a minute, top it wiht cheese then put a lid on the pan. This helps melt the cheese (it's my secret with any burger, and grilled cheese for that matter). Check after a minute or so, and continue to cook until the cheese has fully melted.",

    "After the patties are cooked, let them rest for just a minute while you toast the buns, then you can assemble. Put whatever amount yo feel comfortable with: bottom bun, secret sauce, tomato, lettuce, patty, caramelised onions, top bun."
    ],
    },{
        id : 13,
    logo:<img src={steakseasoned} className="photo" alt="steak-seasoned steak fries"/>,
    nameID: "STEAK-SEASONED STEAK FRIES",
    ingredients: [
    { name: "FOR THE FRIES", amount: 1, measurement: "" },
    { name: "3 medium Maris Piper potatoes", amount: 0.25, measurement: "" },
    { name: "2 tablespoons vegetable oil", amount: 3, measurement: "" },
    { name: "1 tablespoon Steak Seasoning", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "FOR THE SRIRACHA KETCHUP", amount: 0.5, measurement: "" },
    { name: "1 teaspoon Sriracha", amount: 0.5, measurement: "" },
    { name: "120 ml (1/2 cup) ketchup", amount: 1, measurement: "" }
    ],
    steps: [
    "Preheat your oven to 200­°C (400°F/Gas 6) and line your largest baking sheet with baking parchment.",

    "Cut each potato into 8 wedges and place on the baking sheet. Drizzle with oil, sprinkle with seasoning, and toss to make sure they're evenly coated. Arrange on the baking sheet so they're in a single layer: any overlapping won't get crispy.",

    "While the fires are baking, make the Sriracha ketchup by mixing the two ingredients together and storing in a small container in the fridge.",

    "Bake the fries for 20 minutes, flip, then bake for an additional 20 minutes. Sprinkle with additional Steak Seasoning if you're feeling it, and serve with the Sriracha ketchup."
    ],
    },
    {
        logo:<img src={ricotta} className="photo" alt="bbq chicken pizza"/>,
        nameID: "BBQ CHICKEN PIZZA",
        ingredients: [
        { name: "olive oil", amount: 1, measurement: "" },
        { name: "1/2 batch of Easy Pizza Dough", amount: 0.25, measurement: "" },
        { name: "120-180 ml (1/2 - 3/4 cup) of Ginger Dijon BBQ Sauce", amount: 3, measurement: "" },
        { name: "225 g (8 oz) shredded mozzarella", amount: 1, measurement: "" },
        { name: "265 g (1 1/2 cups) chopped or shredded cooked chicken", amount: 0.5, measurement: "" },
        { name: "150g (3/4 cup fresh sweetcorn, right off one cob)", amount: 0.5, measurement: "" },
        { name: "1 shallot, thinly sliced", amount: 0.5, measurement: "" },
        { name: "25 g (1/2 cup) chopped fresh coriander", amount: 1, measurement: "" }
        ],
        steps: [
        "Preheat your oven to 250°C (500°F/Gas 10) and line a large baking sheet with aluminium foil.",

        "Grease the foil with a little olive oil and press out the dough into a rough 28 x 43 cm (11 x 17 in) rectangle. SPread out the sauce on top of the dough, really using as much as you want to make it your level of sauciness. Top with the mozzarella, followed by the chicken, corn, and the shallot. Bake for 10-12 minutes, until its hot, bubbly, and golden brown.",

        "Let cool for a few minutes then top with the coriander and serve."
        ]
        },
        {
            logo:<img src={ricotta} className="photo" alt="pancake"/>,
            nameID: "TACOS",
            ingredients: [
            { name: "", amount: 1, measurement: "" },
            { name: "", amount: 0.25, measurement: "" },
            { name: "", amount: 3, measurement: "" },
            { name: "", amount: 1, measurement: "" },
            { name: "", amount: 0.5, measurement: "" },
            { name: "", amount: 0.5, measurement: "" },
            { name: "", amount: 0.5, measurement: "" },
            { name: "", amount: 1, measurement: "" },
            { name: "", amount: 1, measurement: "" },
            { name: "", amount: 2, measurement: "" },
            { name: "", amount: 2, measurement: "" }
            ],
            steps: [
            ""
            ]
            },
            {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    nameID: "TACOS",
    ingredients: [
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 0.25, measurement: "" },
    { name: "", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" }
    ],
    steps: [
    ""
    ]
    },
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    nameID: "TACOS",
    ingredients: [
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 0.25, measurement: "" },
    { name: "", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" }
    ],
    steps: [
    ""
    ]
    },
    {
    logo:<img src={ricotta} className="photo" alt="pancake"/>,
    nameID: "TACOS",
    ingredients: [
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 0.25, measurement: "" },
    { name: "", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" }
    ],
    steps: [
    ""
    ]
    },
];