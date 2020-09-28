import React from "react";
import salsaverde from "../images/salsaverde.jpg"
import restaurantsalsa from "../images/restaurantsalsa.jpg"
import chickentingatacos from "../images/chickentingatacos.jpg"
import pickledradish from "../images/pickledradish.jpg"
import carneasadatacos from "../images/carneasadatacos.jpg"
import cornchickpeatacos from "../images/cornchickpeatacos.jpg"
import prawntacos from "../images/prawntacos.jpg"
import breakfasttacos from "../images/breakfasttacos.jpg"
import avocadosalsa from "../images/avocadosalsa.jpg"

export const data3 = [
    {
    id : 21,
    logo:<img src={pickledradish} className="photo" alt="pickled radish"/>,
    nameID: "PICKLED RADISH",
    ingredients: [
    { name: "10 radishes", amount: 1, measurement: "" },
    { name: "juice of 1 lime", amount: 0.25, measurement: "" },
    { name: "1/2 teaspoon sea salt (or coarse kosher salt)", amount: 3, measurement: "" }
    ],
    steps: [
    "To prepare the radishes, trim the ends off and cut them into medium-sized slices. Turn over the radish so it's lying flat and slice again to create matchsticks.",

    "Add these to an airtight container that holds 250 g (2 cups), then add the Lime juice and salt, and shake to combine. These are ready to go right away, but if you want that crazy bright pink coLour, let them marinate in the fridge for 2-3 hours.",

    "They will keep in the fridge for 3 days in an airtight container."
    ]
    },
    {
    id : 22,
    logo:<img src={avocadosalsa} className="photo" alt="avocado salsa"/>,
    nameID: "AVOCADO SALSA",
    ingredients: [
    { name: "1 large avocado, roughly chopped", amount: 1, measurement: "" },
    { name: "3 tablespoons minced shallot", amount: 0.25, measurement: "" },
    { name: "2 tablespoons lime juice (from 1 lime)", amount: 3, measurement: "" },
    { name: "1 teaspoon sea salt (or coarse kosher salt)", amount: 1, measurement: "" },
    { name: "1 jalapeño, stemmed (remove half the seeds if you don't want it as spicy)", amount: 0.5, measurement: "" },
    { name: "300 ml (1% cups) water", amount: 0.5, measurement: "" },
    { name: "30 g (1 cup) coriander (cilantro)", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Combine all the ingredients in a blender and blitz for about 30 seconds, until smooth. Refrigerate for at least an hour to Let all the flavours come together.",

    "This will keep in the fridge for 3 days in an airtight container, but I seriously doubt you'll have any left."
    ]
    },
    {
    id : 23,
    logo:<img src={salsaverde} className="photo" alt="salsa verde"/>,
    nameID: "SALSA VERDE",
    ingredients: [
    { name: "450 g (1 1b) tomatillos", amount: 1, measurement: "" },
    { name: "2 garlic cloves, smashed", amount: 0.25, measurement: "" },
    { name: "1 jalapeño, roughly chopped, seeds removed for a mild salsa, or keep them if you like it spicy", amount: 3, measurement: "" },
    { name: "1 teaspoon sea salt (or coarse kosher salt)", amount: 1, measurement: "" },
    { name: "350 ml (lh cups) water 2 spring onions (scallions), thinly sliced 25 g (h cup) coriander (cilantro), roughly chopped ", amount: 0.5, measurement: "" },
    { name: "juice of 1/2 lime", amount: 0.5, measurement: "" }
    ],
    steps: [
    "To prep the tomatiLLos, peel off the husk and rinse them under cold water. Once clean, cut them in half and add to a medium-sized saucepan with the garlic, jalapeño, salt, and water. Don't worry if they're not fully submerged. Bring to a simmer and cook for 10 minutes, stirring occasionally to make sure all the tomatillos are saying hey to the water. Set aside to cool.",
    
    "Remove the tomatiLLos from the water, then add them and the rest of the ingredients to a blender and blitz until smooth, around 15-20 seconds. Because the ingredients are really hot, don't put the full Lid back on the blender when you do this, as it could Lead to an explosion. If your blender has a centre Lid which can come out, remove it. If not, just use a tea towel. Pour into a container and cool to room temperature before placing in the fridge. Chill for a couple of hours so the flavours to infuse and get familiar with each other.",

    "This will keep in the fridge for up to 1 week in an airtight container."
    ]
    },
    {
    id : 24,
    logo:<img src={restaurantsalsa} className="photo" alt="restaurant salsa"/>,
    nameID: "RESTAURANT SALSA",
    ingredients: [
    { name: "450 g (1 1b) ripe tomatoes", amount: 1, measurement: "" },
    { name: "1 jalapeño, halved and seeded 5-6 green onions, depending on size, roots trimmed", amount: 0.25, measurement: "" },
    { name: "2 cloves garlic", amount: 3, measurement: "" },
    { name: "1 teaspoon sea salt (or coarse kosher salt)", amount: 1, measurement: "" },
    { name: "1 teaspoon freshly ground black pepper", amount: 0.5, measurement: "" },
    { name: "juice of h lime", amount: 0.5, measurement: "" },
    { name: "15 g (h cup) coriander (cilantro)", amount: 0.5, measurement: "" },
    { name: "170 ml (3/4 cup) water", amount: 1, measurement: "" }
    ],
    steps: [
    "Turn on your grill to high and Line a baking sheet with aluminium foil.",

    "Cut the tomatoes in half and place cut-side down on the prepared baking sheet with the jalapeño and green onions. GriLL on high for 10 minutes, making sure you open all the windows and turn on a fan so you don't set off the fire alarm.",

    "After 10 minutes remove the vegetables from under the grill. They're going to Look burned to crap and you're gonna panic that your salsa's ruined, but they're supposed to be like that — calm down!",

    "Let vegetables cool down for about 30 minutes, then add them all to a blender (all of it, even the crispy black parts of the green onions) with everything else. Blend for about 20 seconds, until fairly smooth, then transfer to a container to chill in the fridge. In a couple of hours it'll be ready to inhale.",

    "This will keep in the fridge for up to 1 week in an airtight container."
    ]
    },
    {
    id : 25,
    logo:<img src={carneasadatacos} className="photo" alt="carne asada tacos"/>,
    nameID: "CARNE ASADA TACOS",
    ingredients: [
    { name: "675 g (lh 1b) skirt or flank steak", amount: 1, measurement: "" },
    { name: "2 teaspoons Steak Seasoning", amount: 0.25, measurement: "" },
    { name: "1 packet of corn tortillas", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 0.5, measurement: "" },
    { name: "fresh limejuice (optional)", amount: 0.5, measurement: "" },
    { name: "Avocado Salsa", amount: 0.5, measurement: "" },
    { name: "handful of coriander (cilantro), roughly chopped", amount: 1, measurement: "" },
    { name: "1 white onion, diced ", amount: 1, measurement: "" },
    { name: "cotija cheese (use feta if you can't find this)", amount: 2, measurement: "" }
    ],
    steps: [
    "Preheat the pan or grill over a high heat and season both sides of the meat. Lay the meat in the pan or on the grill and Leave it undisturbed for 4 minutes, füp and leave for another 4 minutes. If your frying pan is too small to fit the meat, just cut it in half (you won't need to do this on the BBQ). Depending on your thickness of meat, this usually yields a little bit of a medium cook. If you like your meat super well done, then go for a couple more minutes after you flip it. Let the meat rest for 15 minutes before slicing into strips, against the grain.",

    "Prepare the corn tortillas by either heating them up directly over a high name or in a dry frying pan, a minute or so on each side. Serve with a squeeze of lime juice (if using), Avocado Salsa, coriander, onion, and cotija, or any of the taco toppers you wanna try."
    ]
    },
    {
    id : 26,
    logo:<img src={breakfasttacos} className="photo" alt="breakfast tacos"/>,
    nameID: "BREAKFAST TACOS",
    ingredients: [
    { name: "1 teaspoon vegetable oil", amount: 1, measurement: "" },
    { name: "4 large eggs, beaten", amount: 0.25, measurement: "" },
    { name: "1 packet of corn tortillas", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 0.5, measurement: "" },
    { name: "Restaurant Salsa", amount: 0.5, measurement: "" },
    { name: "cotija cheese (use feta if you can't find this)", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Turn the heat up to high and let a nonstick pan get nice and hot. Add the oil then grab a rubber spatula and add the eggs to the hot pan. Immediately start moving the eggs around, scraping the bottom of the pan, working quickly so nobody burns. The goal is to be quick about it and move the eggs around until they're just cooked. This Literally takes a minute, maybe 2. Set aside once they're cooked.",

    "Prepare the corn tortillas by either heating them up directly over a high flame or in a dry frying pan, a minute or so on each side. Make the tacos by placing some egg on a tortilla then topping with Restaurant Salsa and cotija cheese, or whatever toppings you fancy."
    ]
    },
    {
    id : 27,
    logo:<img src={cornchickpeatacos} className="photo" alt="corn and chickpea tacos"/>,
    nameID: "CORN AND CHICKPEA TACOS",
    ingredients: [
    { name: "350 g (lh cups) fresh or frozen sweetcorn", amount: 1, measurement: "" },
    { name: "400 g (141/2 oz) tin chickpeas", amount: 0.25, measurement: "" },
    { name: "1 tablespoon olive oil", amount: 3, measurement: "" },
    { name: "3 spring onions (scallions), thinly sliced", amount: 1, measurement: "" },
    { name: "3 tablespoons Taco Seasoning", amount: 0.5, measurement: "" },
    { name: "80 ml (1/3 cup) water", amount: 0.5, measurement: "" },
    { name: "1 packet of corn tortillas", amount: 0.5, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 1, measurement: "" },
    { name: "Pickled Radish", amount: 2, measurement: "" },
    { name: "1 avocado, sliced", amount: 2, measurement: "" },
    { name: "handful of coriander (cilantro), roughly chopped", amount: 2, measurement: "" },
    { name: "cotija cheese (use feta if you can't find this)", amount: 2, measurement: "" }
    ],
    steps: [
    "If you're using the frozen corn, thaw it out first by putting it in a colander and running it under cold water. Once it's ready, drain the chickpeas and rinse them too.",

    "Heat the olive oil over a medium-high heat in a Large frying pan and add the corn, chickpeas, and spring onions. Cook for 3-5 minutes until the spring onions soften and the corn and chickpeas start to brown.",

    "Add the Taco Seasoning and water, then stir to mix and cook for about 5 minutes, or until almost all the liquid has evaporated.",

    "Prepare the corn tortillas by either heating them up directly over a high flame or in a dry frying pan, a minute or so on each side.",

    "To serve, add the corn and chickpea mixture to a warmed tortilla. Top with Pickled Radish, avocado slices, fresh coriander and cotija cheese."
    ]
    },
    {
    id : 28,
    logo:<img src={chickentingatacos} className="photo" alt="chicken tinga tacos"/>,
    nameID: "CHICKEN TINGA TACOS",
    ingredients: [
    { name: "900 g (2 1b) boneless, skinless chicken thighs, seasoned with sea salt and freshly ground black pepper", amount: 1, measurement: "" },
    { name: "2 x 400 g (1 x 28 oz) tins chopped tomatoes", amount: 0.25, measurement: "" },
    { name: "25 g (h cup) coriander (cilantro), roughly chopped", amount: 3, measurement: "" },
    { name: "4 garlic cloves, smashed and peeled", amount: 1, measurement: "" },
    { name: "1/2 medium onion, quartered", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon sea salt (or coarse kosher salt) ", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon freshly ground black pepper", amount: 0.5, measurement: "" },
    { name: "2 tablespoons chipotle purée or paste", amount: 1, measurement: "" },
    { name: "1 bay leaf", amount: 1, measurement: "" },
    { name: "1 packet of corn tortillas", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 2, measurement: "" },
    { name: "Pickled Radish", amount: 2, measurement: "" },
    { name: "handful of coriander (cilantro), roughly chopped ", amount: 2, measurement: "" },
    { name: " cotija cheese (use feta if you can't find this)", amount: 2, measurement: "" }
    ],
    steps: [
    "Preheat your oven to 180°C (350°F/Gas 4).",

    "In a Large heavy pan lightly brown the chicken thighs on both sides in 2 batches.",

    "While they brown, make the sauce by blitzing everything else except the bay leaf and corn tortillas in a blender until smooth.",

    "Once the chicken is browned, remove from the pan and set aside. Using the same pan, pour in the sauce, scraping the bottom of the pan to Loosen any chicken bits that may have caught. Add the chicken and the bay Leaf to the sauce, carefully mixing to combine. Gently simmer for 30 minutes, covered, then remove the lid and cook for an additional 30 minutes, until the sauce has thickened and the chicken shreds easily.",

    "If you're feeling your slow-cook: brown the chicken, place in a slow cooker, mix in the sauce and bay Leaf and cook on high for 4-6 hours, or Low for 6—8 hours.",

    "Prepare the corn tortillas by either heating them up directly over a high name or in a dry frying pan, a minute or so on each side.",

    "To serve, remove the bay leaf from the sauce. Add the chicken mixture to a warmed tortilla, top with Pickled Radish, coriander, and cotija cheese."
    ]
    },
    {
    id : 29,
    logo:<img src={prawntacos} className="photo" alt="roasted chipole prawn tacos"/>,
    nameID: "ROASTED CHIPOTLE PRAWN TACOS",
    ingredients: [
    { name: "450 g (1 1b) prawns (shrimps), peeled and deveined", amount: 1, measurement: "" },
    { name: "2 tablespoons olive oil", amount: 0.25, measurement: "" },
    { name: "2 tablespoons chipotle purée or paste ", amount: 3, measurement: "" },
    { name: "juice of 1 lime ", amount: 1, measurement: "" },
    { name: "sea salt and freshly ground black pepper", amount: 0.5, measurement: "" },
    { name: "1 packet of corn tortillas", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 1, measurement: "" },
    { name: "Avocado Salsa", amount: 1, measurement: "" },
    { name: "handful of coriander (cilantro), roughly chopped", amount: 2, measurement: "" },
    { name: "cotija cheese (use feta if you can't find this)", amount: 2, measurement: "" }
    ],
    steps: [
    "Preheat your oven to 200°C (400°F/Gas 6).",

    "Line a large baking tray with baking parchment and toss the prawns with the oil, chipotle purée, lime juice, salt, and pepper. Please go wash your hands now because I don't want you to burn any parts of your body with the chipotle sauce that is all over your hands.",

    "Roast for 5-7 minutes, just until you can see them turn pink and curl slightly; don't overcook them or they'll go rubbery. Let the prawns rest for just a couple of minutes before serving.",

    "Prepare the corn tortillas by either heating them up directly over a high flame or in a dry frying pan, a minute or so on each side.",

    "To serve, spread the prawns on top of a warm tortilla. Top with Avocado Salsa, coriander and cotija cheese."
    ]
    },
];