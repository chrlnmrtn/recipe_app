import React from "react";
import watermelonsangria from "../images/watermelonsangria.jpg"
import punch from "../images/punch.jpg"
import limeade from "../images/limeade.jpg"
import sunburnt from "../images/sunburnt.jpg"
import ccumbervodka from "../images/ccumbervodka.jpg"
import grapemintmargarita from "../images/grapemintmargarita.jpg"



export const data6 = [
{
    id : 56,
    logo:<img src={grapemintmargarita} className="photo" alt="GRAPEFRUIT MINT MARGARITAS"/>,
    nameID: "GRAPEFRUIT MINT MARGARITAS",
    ingredients: [
    { name: <h5>{"FOR 1 DRINK"}</h5>, amount: 1, measurement: "" },
    { name: "5 mint leaves, plus extra sprigs to garnish", amount: 0.25, measurement: "" },
    { name: "170 ml (6 fl oz) ruby red grapefruit juice*", amount: 3, measurement: "" },
    { name: "45 ml (1 1/2 fl oz) silver (blanco) tequila", amount: 1, measurement: "" },
    { name: "1 tablespoon freshly squeezed limejuice", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: <h5>{"FOR A PITCHER"}</h5>, amount: 0.5, measurement: "" },
    { name: "30 mint leaves (about 1 bunch), plus extra sprigs to garnish", amount: 1, measurement: "" },
    { name: "1 litre (4 1/2 cups) ruby red grapefruit juice*", amount: 1, measurement: "" },
    { name: "270 ml (9 fl oz) silver (blanco) tequila", amount: 2, measurement: "" },
    { name: "90 ml (3 fl oz) freshly squeezed limejuice", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 2, measurement: "" },
    { name: "ice cubes", amount: 2, measurement: "" },
    { name: "1 lime, cut into wedges", amount: 2, measurement: "" },
    { name: "sea salt (or coarse kosher salt), for rim", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: "*When it comes to the grapefruit juice, go ahead and just use a good-quality bottled one. Odds are you're using it to hydrate during the summer, when ruby red grapefruits aren't in their prime. Save  some money, and save some hand work.", amount: 2, measurement: "" }
    ],
    steps: [
    "To make a single drink, muddle the mint leaves in the bottom of a shaker. Add the rest of the ingredients with a few ice cubes; shake vigorously. Use a lime wedge around the rim of the glass, then dip it into the salt. Add a few ice cubes to the glass, strain the drink in, and garnish with a baby-tree-sized sprig of mint and a lime wedge.",

    "To make a pitcher, muddle the mint leaves in the bottom of a pitcher. Add the rest of the ingredients. Stir well, then use a slotted spoon to fish out the mint Leaves. If serving right away then stir in a good amount of ice cubes, and serve in salt-rimmed glasses, garnished with the mint."

    ]
    },
    {
        id : 57,
    logo:<img src={ccumbervodka} className="photo" alt="STRAWBERRY CUCUMBER VODKA"/>,
    nameID: "STRAWBERRY CUCUMBER VODKA",
    ingredients: [
    { name: "260 g (1 1/2 cups) strawberries, hulled and quartered", amount: 1, measurement: "" },
    { name: "260 g (1 1/2 cups) English cucumber, peeled and sliced", amount: 0.25, measurement: "" },
    { name: "375	ml (12 fl oz) vodka", amount: 3, measurement: "" }
    ],
    steps: [
    "In a Large jar with a tight-fitting Lid, combine everything, give it a good shake, and leave it in a cupboard for 3 days. Shake it once a day to Let it know you haven't forgotten about it.",

    "After the 3 days, strain it out, put it back in said jar, and refrigerate until ready to use."

    ]
    },
    {
        id : 58,
    logo:<img src={sunburnt} className="photo" alt="THE SUNBURNTGREYHOUND "/>,
    nameID: "THE SUNBURNTGREYHOUND ",
    ingredients: [
    { name: "55 ml (2 fl oz) Strawberry Cucumber", amount: 1, measurement: "" },
    { name: "Vodka", amount: 0.25, measurement: "" },
    { name: "170 ml (6 fl oz) grapefruit juice", amount: 3, measurement: "" },
    { name: "juice of half a lime", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 0.5, measurement: "" },
    { name: "ice cubes", amount: 0.5, measurement: "" },
    { name: "1/2 grapefruit, sliced (optional)", amount: 1, measurement: "" }
    ],
    steps: [
    "In a shaker, add the vodka, grapefruitjuice, and lime with a handful of ice. Shake for about 15 seconds until nice and cold. Serve over ice and garnish with a grapefruit slice or an umbrella or two."
    ]
    },
    {
        id : 59,
    logo:<img src={limeade} className="photo" alt="HIBISCUS LIMEADE"/>,
    nameID: "HIBISCUS LIMEADE",
    ingredients: [
    { name: "1.2 litres (5 cups) water", amount: 1, measurement: "" },
    { name: "170 g (3/4 cup) white granulated sugar zest from 1 Lime", amount: 0.25, measurement: "" },
    { name: "20 g (1/4 cup) dried hibiscus (sometimes labelled 'flor de Jamaica')", amount: 3, measurement: "" },
    { name: "180 ml (3/4 cup) freshly squeezed lime juice", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 0.5, measurement: "" },
    { name: "ice cubes", amount: 0.5, measurement: "" },
    { name: "1 lime, sliced (optional)", amount: 1, measurement: "" }
    ],
    steps: [
    "In a small saucepan bring 240 ml (1 cup) water and the sugar to a simmer. Turn off the heat, stir to dissolve the sugar if needed, and add the lime zest and hibiscus.",

    "Let it steep for 15 minutes, then strain out the hibiscus and Lime zest. Let that mixture cool completely then add the remaining water and Limejuice. Refrigerate until nice and chilled. Served with ice cubes and slices of lime."
    ]
    },

    {
        id : 61,
    logo:<img src={punch} className="photo" alt="PUNCH/DANCE"/>,
    nameID: "PUNCH/DANCE",
    ingredients: [
    { name: "960 ml (4 cups) pineapple juice", amount: 1, measurement: "" },
    { name: "240 ml (1 cup) mango nectar juice", amount: 0.25, measurement: "" },
    { name: "240 ml (1 cup) cranberry juice juice of 2 limes ", amount: 3, measurement: "" },
    { name: "480 ml (2 cups) ginger ale", amount: 1, measurement: "" },
    { name: "gin or vodka, optional", amount: 0.5, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: <h5>{"TO SERVE"}</h5>, amount: 0.5, measurement: "" },
    { name: "ice", amount: 1, measurement: "" },
    { name: "1 lime, cut into wedges (optional) ", amount: 1, measurement: "" },
    { name: "maraschinio cherries (optional)", amount: 2, measurement: "" }
    ],
    steps: [
    "To make the punch, mix together everything except the alcohol in a Large pitcher or punch bowl. You can either serve it straight up over ice with a wedge of lime anda maraschino cherry or add 25-50 ml (1-2 fl oz) of gin or vodka to the glass first."
    ]
    },
    {
        id : 62,
    logo:<img src={watermelonsangria} className="photo" alt="WATERMELON SANGRIA"/>,
    nameID: "WATERMELON SANGRIA",
    ingredients: [
    { name: "1 standard bottle of rosé ", amount: 1, measurement: "" },
    { name: "1/2 seedless watermelon, cut into 4 cm", amount: 0.25, measurement: "" },
    { name: "(1/2 in) cubes h grapefruit, thinly sliced", amount: 3, measurement: "" },
    { name: "(lh in) cubes h grapefruit, thinly sliced", amount: 1, measurement: "" }
    ],
    steps: [
    "In a large pitcher add the rosé, half the watermelon, grapefruit, and strawberries. Stir to combine and chill in the fridge for at Least an hour.",

    "Take the Leftover watermelon and place it in an airtight container or on a plate in the freezer. We're making watermelon ice cubes.",

    "When you're ready to serve, fill glasses with watermelon ice cubes then top with the sangria. Garnish with the alcohol-infused grapefruit slices."
    ]
    },
];