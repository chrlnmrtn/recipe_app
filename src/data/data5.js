import React from "react";
import butterscotchsauce from "../images/butterscotchsauce.jpg"
import dulcedelechepudding from "../images/dulcedelechepudding.jpg"
import arrozconleche from "../images/arrozconleche.jpg"
import gingersnapicecream from "../images/gingersnapicecream.jpg"
import cookiescream from "../images/cookiescream.jpg"
import buttermilkicecream from "../images/buttermilkicecream.jpg"
import cornflakes from "../images/cornflakes.jpg"
import strawberrycreamsicles from "../images/strawberrycreamsicles.jpg"
import vanillastrawberrysauce from "../images/vanillastrawberrysauce.jpg"
import hottestfudge from "../images/hottestfudge.jpg"
import blackberryborboun from "../images/blackberryborboun.jpg"

export const data5 = [
    {
        id : 49,
        logo:<img src={butterscotchsauce} className="photo" alt="butterscotch sauce"/>,
        nameID: "SIMPLE BUTTERSCOTCH SAUCE",
        ingredients: [
        { name: "95 g (1/2 cup) lightly packed, light brown sugar  ", amount: 1, measurement: "" },
        { name: "80 ml (h cup) double (heavy) cream", amount: 0.25, measurement: "" },
        { name: "90 g (1/3 cup) butter", amount: 3, measurement: "" },
        { name: "1 tablespoon light corn syrup", amount: 1, measurement: "" },
        { name: "1/4 teaspoon sea salt (or coarse kosher salt)", amount: 0.5, measurement: "" },
        { name: "1 teaspoon pure vanilla extract", amount: 0.5, measurement: "" }
        ],
        steps: [
        "Combine everything except the vanilla in a medium-sized saucepan and bring to a boil. Boil for 3 minutes, turn off the heat and add the vanilla. Cool slightly before using on waffles, ice cream, etc. Store in an airtight container in the fridge for up to 2 weeks."
        ]
    },
    {
        id : 50,
    logo:<img src={hottestfudge} className="photo" alt="hottest fudge"/>,
    nameID: "HOTTEST FUDGE",
    ingredients: [
    { name: "120 ml (1/2 cup) double (heavy) cream", amount: 1, measurement: "" },
    { name: "100 (3 1/2g oz) good-quality dark(bittersweet) chocolate, chopped", amount: 0.25, measurement: "" },
    { name: "2 tablespoons cocoa powder, sifted ", amount: 3, measurement: "" },
    { name: "2 tablespoons light corn syrup", amount: 1, measurement: "" },
    { name: "pinch of salt", amount: 0.5, measurement: "" },
    { name: "1 teaspoon instant coffee", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Heat the cream in a medium saucepan over a low heat to just below a simmer. Remove the pan from the heat, add the chocolate, cocoa, corn syrup, salt, and coffee. Let sit for 5 minutes to Let the chocolate melt, then whisk until smooth. Store in an airtight container in the fridge for up to 2 weeks."
    ]
    },
    {
        id : 51,
    logo:<img src={vanillastrawberrysauce} className="photo" alt="vanilla strawberry sauce"/>,
    nameID: "VANILLA STRAWBERRY SAUCE",
    ingredients: [
    { name: "450 g (1 lb) frozen strawberries, thawed", amount: 1, measurement: "" },
    { name: "230 g (1/2 cup) white granulated sugar", amount: 0.25, measurement: "" },
    { name: "120 ml (1/2 cup) water", amount: 3, measurement: "" },
    { name: "1 vanilla pod, plit, seeds, scraped", amount: 1, measurement: "" },
    { name: "pinch of salt", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Combine everything in a medium-sized pan (vanilla pod and  seeds included) and bring to a simmer, sort of smashing the berries as they heat. Simmer for 15 minutes until it’s thick and syrupy. Cool slightly, then mix in a blender for 30 seconds, until smooth. If you want more of a syrup, don’t blend, just run the mixture through a fine mesh strainer. Store in an airtight container in the fridge for up to 2 weeks."
    ]
    },
    {
        id : 52,
    logo:<img src={blackberryborboun} className="photo" alt="blackberry bourbon sauce"/>,
    nameID: "BLACKBERRY BOURBON SAUCE",
    ingredients: [
    { name: "350 g (12 oz) blackberries", amount: 1, measurement: "" },
    { name: "80 g ( 1/3 cup) white granulated sugar", amount: 0.25, measurement: "" },
    { name: "2 teaspoons bourbon", amount: 3, measurement: "" },
    { name: "1 teaspoon pure vanila extract", amount: 1, measurement: "" },
    { name: "2 tablespoons water", amount: 0.5, measurement: "" },
    { name: "1 tablespoon cornflour(cornstarch)", amount: 0.5, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan over a medium heat, mash the berries and sugar together until the berries are broken down and mixture starts to bubble. Meanwhile, mix together the bourbon, vanilla, water and cornflour together in a small bowl. Add this to the pan. When the mixture starts to bubble. bring it to a boil and cook for 1-2 minutes, until thickened. store in an airtight container in the fridge for up to 2 weeks."
    ]
    },
    {
        id : 53,
    logo:<img src={cornflakes} className="photo" alt="pancake"/>,
    nameID: "MAPLE-GLAZED CORNFLAKES",
    ingredients: [
    { name: "60 g (2 cups) cornflakes", amount: 1, measurement: "" },
    { name: "2 tablespoons pure maple syrup", amount: 0.25, measurement: "" },
    { name: "pinch of flaky sea salt", amount: 3, measurement: "" }
    ],
    steps: [
    "Preheat the oven to 150°C(300°F/Gas 2) and line a baking sheet with baking parchment. Toss everything in a bowl to evenly coat the cornflakes, spread out on the baking  sheet, and bake for 5 minutes. Stir and bake for another 3-5 minutes, until golden brown. Remove from the oven  and cool completely before using to top sundaes or eat by the handful. Store in an airtight container for up to  2 weeks."
    ]
    },
    {
        id : 54,
    logo:<img src={buttermilkicecream} className="photo" alt="vanilla buttermilk ice cream"/>,
    nameID: "VANILLA BUTTERMILK ICE CREAM",
    ingredients: [
    { name: "480 ml (2 cups) double (heavy) cream", amount: 1, measurement: "" },
    { name: "pinch of salt", amount: 0.25, measurement: "" },
    { name: "145 g (2/3 cup) white granulated sugar", amount: 3, measurement: "" },
    { name: "1 vanilla pod, split, seeds scraped and reserved (or 2 teaspoons pure  vanilla extract)", amount: 1, measurement: "" },
    { name: "4 eggs ", amount: 0.5, measurement: "" },
    { name: " 240 ml (1 cup) buttermilk", amount: 0.5, measurement: "" },
    { name: " 1 teaspoon pure vanilla extract", amount: 0.5, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan stir together the cream, salt, and sugar over a Low-medium heat. Heatjust below a simmer and stir to make sure the sugar is dissolved. Add the vanilla pod and seeds to the warm cream, cover, and steep for 30 minutes.",

    "Meanwhile, get your 4 eggs separated: yolks in a Large bowl and beaten; whites set aside for whatever your heart desires.",

    "Remove the vaniLLa pod, warm the cream up just a Little bit more, then slowly pour half of that into the yolks while whisking. We're tempering the yolk so we have less of  a chance of scrambled-egg ice cream. Pour the yolk mixture back into the pan and cook over a medium heat, stirring constantly, until the mixture reaches 77°C (170°F), or coats the back of a spoon and holds its shape when you run your finger through it (temperature is easier though).",

    " Once it hits 77-°C (170° F) pour through a fine mesh sieve into a Large bowl, preferably something with a spout. Let it COOL completely, add the buttermilk and vanilla extract, and churn the mixture in an ice-cream machine according to the manufacturer's instructions."
    ]
    },
    {
        id : 55,
    logo:<img src={cookiescream} className="photo" alt="peanut butter"/>,
    nameID: "COOKIES AND CREAM (PEANUT BUTTER) ice cream",
    ingredients: [
    { name: "240 ml (1 cup) double (heavy) cream", amount: 1, measurement: "" },
    { name: "360 ml (1 1/2 cups) whole (full-fat) milk", amount: 0.25, measurement: "" },
    { name: "95 g (1/2 lightly packed cup) brown sugar", amount: 3, measurement: "" },
    { name: "4 large egg yolks, beaten", amount: 1, measurement: "" },
    { name: "185 g (3/4 cup) organic, sugar-free peanut butter", amount: 0.5, measurement: "" },
    { name: " 330 g (11/2 cups) crushed Oreos", amount: 0.5, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan stir together the cream, milk, and sugar, then put over a Low-medium heat. Heat just enough to dissolve the sugar, then slowly pour half of that into the egg yolks while whisking. Pour the yolk mixture back into the pan and cook over a medium heat, stirring constantly, until the mixture reaches 77°C (170° F), or coats the back of a spoon and holds its shape when you run your finger through it.",

    "Once it hits 77°C (170° F) pour through a fine mesh sieve into a Large bowl, preferably something with a spout.  Whisk in the peanut butter, and Let it cool completely. Churn the mixture in an ice-cream machine according to the manufacturer's instructions, adding the crushed  Oreos 2—3 minutes before the ice cream's done churning."
    ]
    },
    {
        id : 63,
    logo:<img src={cookiescream} className="photo" alt="mint"/>,
    nameID: "COOKIES AND CREAM (MINT) ice cream",
    ingredients: [
    { name: "360 ml (1 1/2 cups) double (heavy) cream", amount: 1, measurement: "" },
    { name: "360 ml (1 1/2 cups) whole (full-fat) milk ", amount: 0.25, measurement: "" },
    { name: "pinch of salt", amount: 3, measurement: "" },
    { name: "145 g (2/3 cup) white granulated sugar", amount: 1, measurement: "" },
    { name: "4 large egg yolks, beaten", amount: 0.5, measurement: "" },
    { name: "2 teaspoons peppermint extract", amount: 0.5, measurement: "" },
    { name: "1-2 drops blue food colouring*", amount: 0.5, measurement: "" },
    { name: "330 g (1 1/2 cups) crushed Oreos", amount: 1, measurement: "" },
    { name: "  You need blue because the yolks are yellow, so combining the two will make the mint colour. It's kind of like magic!", amount: 1, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan stir together the cream, milk, salt, and sugar, and put on a low-medium heat, Heat just enough to dissolve the sugar, then slowly pour half of that into the egg yolks while whisking, Pour the yolk mixture back into the pan and cook over a medium heat, stirring constantly, until the mixture reaches 77°C (170° F), or coats the back of a spoon and holds its shape when you run your finger through it.",

    "Once it hits 77°C (170°F) pour through a fine mesh sieve into a Large bowl, preferably something with a spout. Whisk in the peppermint extract and food colouring, and Let it cool completely. Churn the mixture in an ice-cream machine according to the manufacturer's instructions, adding the crushed Oreos 2—3 minutes before the ice cream's done churning."
    ]
    },
    {
        id : 64,
    logo:<img src={cookiescream} className="photo" alt="coffee"/>,
    nameID: "COOKIES AND CREAM (COFFEE) ice cream",
    ingredients: [
    { name: "360 ml (1 1/2 cups) double (heavy) cream ", amount: 1, measurement: "" },
    { name: "360 ml (1 1/2 cups) whole (full-fat) milk", amount: 0.25, measurement: "" },
    { name: "pinch of salt", amount: 3, measurement: "" },
    { name: "1/4 cup coarsely ground coffee (l like a  good medium roast for this)", amount: 1, measurement: "" },
    { name: "145 g (2/3 cup) white granulated sugar ", amount: 0.5, measurement: "" },
    { name: "4 large egg yolks, beaten", amount: 0.5, measurement: "" },
    { name: "330 g (1 1/2   cups) crushed Oreos", amount: 0.5, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan stir together the cream, milk, salt, and coffee, and put on a low-medium heat. Warm up the mixture to just below a simmer, then turn off the heat and cover, Let it steep for 10 minutes. Strain out the coffee grinds through a fine mesh sieve.",

    "Once it's strained, add the sugar and heat until the sugar is just dissolved. Slowly pour half of that into the egg yolks while whisking.",
    
    "Pour the yolk mixture back into the pan and cook over a medium heat, stirring constantly, until mixture reaches its 77°C (170° F), or coats the back of a spoon and holds shape when you run your finger through it.",
    
    "Once it hits 77°C (170°F) pour through a fine mesh sieve into a Large bowl, preferably something with a spout, Let it cool completely and churn the mixture in an ice-cream machine according to the manufacturer's instructions, adding the crushed Oreos 2-3 minutes before the ice cream's done churning."
    ]
    },
    {
        id : 65,
    logo:<img src={cookiescream} className="photo" alt="caramel"/>,
    nameID: "COOKIES AND CREAM (CARAMEL) ice cream",
    ingredients: [
    { name: "145 g (2/3 cup) white granulated sugar", amount: 1, measurement: "" },
    { name: "2 tablespoons water", amount: 0.25, measurement: "" },
    { name: "360 ml (11/2 cups) double (heavy) cream", amount: 3, measurement: "" },
    { name: "360 ml (11/2 cups) whole (full-fat) milk ", amount: 1, measurement: "" },
    { name: "pinch of salt", amount: 0.5, measurement: "" },
    { name: "4 large egg yolks, beaten", amount: 0.5, measurement: "" },
    { name: "330 g (11/2 cups) crushed Oreos", amount: 0.5, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan melt down the sugar and water without stirring, only swirling the pan. Watch it go from the white sugar to a nice copper semi-fresh penny colour. Remove from the heat and add the cream and milk with the pinch of salt. The mixture will probably bubble up a little bit but don't be alarmed: it's supposed to happen. Just whisk it carefully until the Lumps go away and the mixture is warm and smooth.",

    "Slowly pour halfofthat into the egg yolks while whisking. Pour the yolk mixture back into the pan and cook over medium heat, stirring constantly, until the mixture reaches 77°C (170°F), or coats the back of a holds its shape when you run your finger through it.",
    
    "Once it hits 77°C (170°F) pour into a Large bowl, preferably something with a spout. Let it cool completely, then churn the mixture in an ice-cream machine according to the manufacturer's instructions, adding the crushed Oreos 2-3 minutes before the ice cream's done churning.",

    ]
    },

    {
        id : 66,
    logo:<img src={gingersnapicecream} className="photo" alt="burboun gungersnap ice cream"/>,
    nameID: "BURBOUN GINGERSNAP ICE CREAM",
    ingredients: [
    { name: "230 g (2 cups) crumbled gingersnaps  ", amount: 1, measurement: "" },
    { name: "500 ml (2 cups) whole (full-fat) milk", amount: 0.25, measurement: "" },
    { name: "4 egg yolks", amount: 3, measurement: "" },
    { name: "360 ml (1 1/2 cups) double (heavy) cream", amount: 1, measurement: "" },
    { name: "145 g (2/3 cup) white granulated sugar", amount: 0.5, measurement: "" },
    { name: "pinch of salt ", amount: 0.5, measurement: "" },
    { name: "1 tablespoon bourbon", amount: 0.5, measurement: "" }
    ],
    steps: [
    "In a medium-sized bowl, stir the crumbled gingersnaps into the milk and set aside to soak for 1 hour. While that's happening we can make the rest of the base.",

    "Get your 4 eggs separated, yolks in a large bowl and beaten, whites set aside for whatever your heart desires.",

    "In a medium-sized saucepan stir together the cream, sugar, and salt, and put on a Low-medium heat. Heat just enough to dissolve the sugar then slowly pour half of that into the egg yolks while whisking. Pour the yolk mixture back into the pan and cook over a medium heat, stirring constantly, until mixture reaches 77°C (170° F), or coats the back of a spoon and holds its shape when you  run your finger through it.",

    "Once it hits 77°C (170° F) pour through a fine mesh sieve into a large bowl, preferably something with a spout. Let it cool until the milk and gingersnaps are done making out. Strain the milk and measure to see if you have 370 ml (1 1/2 cups). If needed, add a Little more milk. Combine with the custard base and chill completely in the fridge. Once it's completely chilled add the bourbon and churn the mixture in an ice-cream machine according to manufacturer's instructions."

    ]
    },

    {
        id : 67,
    logo:<img src={arrozconleche} className="photo" alt="arroz con leche paletas"/>,
    nameID: "ARROZ CON LECHE PALETAS",
    ingredients: [
    { name: "70 g (1/3 cup) jasmine rice ", amount: 1, measurement: "" },
    { name: "240 ml (1 cup) condensed milk  ", amount: 0.25, measurement: "" },
    { name: "960 ml (4 cups) whole (full-fat) milk ", amount: 3, measurement: "" },
    { name: "1/2 teaspoon sea salt (or coarse kosher salt) ", amount: 1, measurement: "" },
    { name: "2 teaspoons pure vanilla extract", amount: 0.5, measurement: "" },
    { name: "3/4 teaspoon ground cinnamon", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Combine the rice, both of the milks, and the salt in a medium saucepan. Bring the mixture up to a simmer over a medium heat, stirring pretty frequently to make sure none of the rice is sticking to the bottom of the pan.",

    "Turn the heat down to Low and simmer for 30 minutes, stirring frequently, until the rice is tender and the mixture has thickened slightly. Turn off the heat and add the vanilla and cinnamon. Now we've got some dynamite rice pudding, but we're taking it one step further and freezing it because I want to popsicle everything.  Carefully pour the pudding into the popsicle moulds and let them cool to room temperature* before inserting the popsicle sticks and popping them in the freezer for 4 hours.",

    "*If you freeze while the arroz con Leche is still hot it can freeze at different rates and make it icy. Don't do dat."
    ]
    },

    {
        id : 68,
    logo:<img src={dulcedelechepudding} className="photo" alt="dulce de leche pudding pops"/>,
    nameID: "DULCE DE LECHE PUDDING POPS",
    ingredients: [
    { name: "480 ml (2 cups) whole (full-fat) milk", amount: 1, measurement: "" },
    { name: "1/4 teaspoon sea salt (or coarse kosher salt)", amount: 0.25, measurement: "" },
    { name: "2 tablespoons cornflour (cornstarch)", amount: 3, measurement: "" },
    { name: "150ml (2/3 cup) dulce de leche", amount: 1, measurement: "" }
    ],
    steps: [
    "In a medium-sized saucepan whisk together the milk, salt, and cornflour. Turn the heat to medium and whisk frequently until the mixture starts to simmer. Cook for 1 minute, whisking constantly, until the mixture's thickened. Whisk in the dulce de Leche until it's smooth.",

    "Carefully pour the pudding into the popsicle moulds and Let them cool to room temperature before inserting the popsicle sticks and popping them in the freezer for 4 hours."
    ]
    },

    {
        id : 69,
    logo:<img src={strawberrycreamsicles} className="photo" alt="pancake"/>,
    nameID: "STRAWBERRY CREAMSICLES",
    ingredients: [
    { name: "450 g (1 1b) strawberries, hulled and quartered", amount: 1, measurement: "" },
    { name: "1/4 cup white granulated sugar", amount: 0.25, measurement: "" },
    { name: "1/2 cup double (heavy) cream", amount: 3, measurement: "" },
    { name: "1 teaspoon pure vanilla extract", amount: 1, measurement: "" },
    { name: "pinch of salt", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Add the strawberries and sugar to a blender and blend for 30 seconds until smooth. Set aside.",

    "In a medium bowl whip the heavy cream until soft peaks form, then fold in the strawberry purée with the vanilla and salt.",

    "Pour the mixture into your popsicle moulds and freeze for about an hour before inserting the popsicle stick and freezing completely, for about 4 hours.",
    
    ]
    }


]