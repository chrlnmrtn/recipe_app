import React from "react";
import corienderpesto from "../images/corianderpesto.jpg"
import steakseasoned from "../images/steakseasonedfries.jpg"
import californiaburgers from "../images/californiaburgers.jpg"
import musubifriedrice from "../images/musubifriedrice.jpg"
import pulledbbqchicken from "../images/pulledbbqchicken.jpg"
import gingerdijon from "../images/gingerdijon.jpg"
import roastedcauliflower from "../images/roastedcauliflower.jpg"
import bbqchicpizza from "../images/bbqchickenpizza.jpg"
import buffpanzanella from "../images/buffalopanzanella.jpg"
import weekragu from "../images/weeknightragu.jpg"
import garlicbread from "../images/garlicbread.jpg"
import chicskewers from "../images/chickenskewers.jpg"
import brusselssprouts from "../images/bruseelssprouts.jpg"
import enchilada from "../images/enchilada.jpg"

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
    { name: <h5>{"FOR THE PULLED CHICKEN"}</h5>, amount: 2, measurement: "" },
    { name: "900 g (2 lb) boneless skinless chicken thighs", amount: 1, measurement: "" },
    { name: "1 teaspoon sea salt (or coarse kosher salt)", amount: 0.25, measurement: "" },
    { name: "1/2 teaspoon freshly graound black pepper", amount: 3, measurement: "" },
    { name: "1 onion, chopped into quarters", amount: 1, measurement: "" },
    { name: "4 garlic cloves", amount: 0.5, measurement: "" },
    { name: "1 quantity of Ginger Dijon BBQ Sauce", amount: 0.5, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"FOR THE SLAW"}</h5>, amount: 2, measurement: "" },
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
    { name:<h5>{"FOR ASSEMBLY"}</h5>, amount: 2, measurement: "" },
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
    { name: <h5>{"FOR THE CARAMELISED ONIONS"}</h5>, amount: 1, measurement: "" },
    { name: "2 tablespoons butter", amount: 0.25, measurement: "" },
    { name: "1 large onion, chopped", amount: 3, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: <h5>{"FOR THE SECRET SAUCE"}</h5>, amount: 0.5, measurement: "" },
    { name: "60 ml (1/4 cup) mayonnaise", amount: 0.5, measurement: "" },
    { name: "2 tablespoons ketchup", amount: 0.5, measurement: "" },
    { name: "1 tablespoon pickle relish", amount: 1, measurement: "" },
    { name: "1/2 teaspoon soy sauce", amount: 1, measurement: "" },
    { name: "1/2 teaspoon white vinegar", amount: 2, measurement: "" },
    { name: "1/2 teaspoon white sugar", amount: 2, measurement: "" },
    { name: "1/4 teaspoon garlic powder", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"FOR THE BURGER"}</h5>, amount: 2, measurement: "" },
    { name: "450 g (1 lb) ground beef", amount: 2, measurement: "" },
    { name: "sea salt and freshly ground black pepper", amount: 2, measurement: "" },
    { name: "your favorite cheese", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"FOR ASSEMBLY"}</h5>, amount: 2, measurement: "" },
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
    { name: <h5>{"FOR THE FRIES"}</h5>, amount: 1, measurement: "" },
    { name: "3 medium Maris Piper potatoes", amount: 0.25, measurement: "" },
    { name: "2 tablespoons vegetable oil", amount: 3, measurement: "" },
    { name: "1 tablespoon Steak Seasoning", amount: 1, measurement: "" },
    { name: "", amount: 0.5, measurement: "" },
    { name: <h5>{"FOR THE SRIRACHA KETCHUP"}</h5>, amount: 0.5, measurement: "" },
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
        id : 14,
    logo:<img src={bbqchicpizza} className="photo" alt="bbq chicken pizza"/>,
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

    "Grease the foil with a little olive oil and press out the dough into a rough 28 x 43 cm (11 x17 in) rectangle. SPread out the sauce on top of the dough, really using as much as you want tomake it your level of sauciness. Top with the mozzarella, followed by the chicken, corn, andthe shallot. Bake for 10-12 minutes, until its hot, bubbly, and golden brown.",

    "Let cool for a few minutes then top with the coriander and serve."
    ]
    },
    {
        id : 15,
    logo:<img src={buffpanzanella} className="photo" alt="buffalo panzanella"/>,
    nameID: "BUFFALO PANZANELLA",
    ingredients: [
    { name: <h5>{"FOR THE VINAIGRETTE"}</h5>, amount: 1, measurement: "" },
    { name: "1 teaspoon Dijon mustard", amount: 1, measurement: "" },
    { name: "1 clove garlic, minced", amount: 0.25, measurement: "" },
    { name: "4 tablespoons hot wing sauce", amount: 3, measurement: "" },
    { name: "1 tablespoon rice wine vinegar", amount: 1, measurement: "" },
    { name: "80 ml (1/3 cup) olive oil", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon sea salt", amount: 0.5, measurement: "" },
    { name: "1/4 teaspoon freshly ground black pepper", amount: 0.5, measurement: "" },
    { name: "", amount: 1, measurement: "" },
    { name: <h5>{"FOR THE PANZANELLA"}</h5>, amount: 1, measurement: "" },
    { name: "1/3-1/2 loaf French or sourdough bread, chopped into 2 1/2 cm (1 in) cubes",amount: 2, measurement: "" },
    { name: "2 tablespoons olive oil", amount: 2, measurement: "" },
    { name: "sea salt and freshly ground black pepper", amount: 1, measurement: "" },
    { name: "1 shallot, thinly sliced", amount: 1, measurement: "" },
    { name: "240 g (1 1/2 cups) halved cherry tomatoes", amount: 1, measurement: "" },
    { name: "3 stalks celery, sliced, leaves and all", amount: 1, measurement: "" },
    { name: "90 g (2 cups) baby rocket (arugula)", amount: 1, measurement: "" },
    { name: "100 g (1/2 cup) blue cheese, crumbled", amount: 1, measurement: "" }
    ],
    steps: [
    "For the vinaigrette, throw everything into a small jar with a tight-fitting lid and shakuntil combined. Set aside.",

    "To toast the bread, preheat the oven to 180°C (350°F/Gas 4) and line a large baking sheewith baking parchment. Toss the bread cubes with the olive oil, season with salt anpepper, and bake for 10 minutes, shaking the baking sheet halfway through to mix 'em upOnce they're toasted let them cool for a few minutes while you prep the rest of thingredients.",

    "to assemble, toss the croutons with the vegetables and blue cheese, then season and toswith the buffalo vinaigrette. Serve right awya. If you wanted to take this out for a spito a picnic, wait to toss the vanaigrette in there until right before serving."
    ]
    },
    {
        id : 16,
    logo:<img src={weekragu} className="photo" alt="weeknight ragu"/>,
    nameID: "WEEKNIGHT RAGU",
    ingredients: [
    { name: "450 g (1 lb) hot italian sausage", amount: 1, measurement: "" },
    { name: "1 tablespoon olive oil", amount: 0.25, measurement: "" },
    { name: "2 x 400 g (1 x 28 oz) chopped tomatoes", amount: 3, measurement: "" },
    { name: "1/2 medium onion, very roughly chopped into quarters", amount: 1, measurement: "" },
    { name: "4 garlic cloves, smashed", amount: 0.5, measurement: "" },
    { name: "15 g (1/2 cup) chopped parsley", amount: 0.5, measurement: "" },
    { name: "1/4 teaspoon sea salt", amount: 0.5, measurement: "" },
    { name: "240 ml (1 cup) red wine or beef stock", amount: 1, measurement: "" },
    { name: "450 g (1 lb) pasta", amount: 1, measurement: "" },
    { name: "Parmesan cheese, to serve", amount: 2, measurement: "" }
    ],
    steps: [
    "In a medium-sized pan break up and brown the sausage wth the olive oil.",

    "While that's happenning, make the tomato sauce by bitzing the tomatoes, onion garlic, parsley, salt, and pepper in a blender until smooth.",

    "Once the meat has browned and the fat's rendered forming brown bits on the bottom of the pan, deglaze it pan by adding the wine or beef stock and scraping the bits. up. Cook for a couple of minutes until almost all the liquid has evaporated. Add the tomato sauce and simmer for 30 minutes.",

    "Meanwhile bring a pot of water to a boil and cook your pasta according to the packet instructions.",

    "When the pasta's done, toss with the sauce and serve with a load of Parmesan cheese."
    ]
    },
    {
        id : 17,
    logo:<img src={garlicbread} className="photo" alt="garlic bread"/>,
    nameID: "GARLIC BREAD",
    ingredients: [
    { name: "125 g (1/2 cup) unsalted butter", amount: 1, measurement: "" },
    { name: "8 garlic cloves, minced", amount: 0.25, measurement: "" },
    { name: "sea salt and freshly ground black pepper", amount: 3, measurement: "" },
    { name: "450 g (1 lb) loaf French bread", amount: 1, measurement: "" }
    ],
    steps: [
    "Preheat your oven to 180°C(350°F/Gas 4).",

    "To make the garlic butter mixture, melt down the butter in a small saucepan over a low heat, add the garlic with a nice pinch of salt and pepper, and let it steep for about 20 minutes. Once it's had some time to hang out, split the loaf of French bread down the middle, brush on the garlice goodness and bake on a baking sheet lined with baking parchment, galic-side up, for around 10-15 minutes, until golden brown."
    ]
    },
    {
        id : 18,
    logo:<img src={chicskewers} className="photo" alt="honey sriracha chicken skewers"/>,
    nameID: "HONEY SRIRACHA CHICKEN SKEWERS",
    ingredients: [
    { name: "680 g (1 1/2 lb) boneless, skinless chicken thighs, cut into 5 cm (2 in) pieces", amount: 1, measurement: "" },
    { name: "1/2 teaspoon sea salt", amount: 0.25, measurement: "" },
    { name: "1/4 teaspoon freshly ground black pepper", amount: 3, measurement: "" },
    { name: "175 g (1/2 cup) honey", amount: 1, measurement: "" },
    { name: "120 ml (1/2 cup) rice wine vinegar", amount: 0.5, measurement: "" },
    { name: "3 tablespoons Sriracha", amount: 0.5, measurement: "" },
    { name: "1 tablespoon toasted sesame seeds", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Add the chicken to a large zip-top bag. In a bowl whisk together everything else besides the sesame seeds. Add 60 ml(1/4 cup) of that to the chicken, shake and set aside. Put the rest of the sauce in a medium-sized saucepan, bring to a boil and cook for 2-3minutes, until it has thickened slightly.",

    "Remove the chiken from the bag and put on to skewers of your choice. I like a good flat metal skewer but bamboo works too (just remember you need to soak them for at least an hour beforehand so nodoby goes up in flames).",

    "After you skewer the chicken, heat up the BBQ grill to a medium-high heat. If you don't have a BBQ grill go ahead and use a griddle or some sort of flat cooking surface, also on medium-high heat.",

    "Place skewers on the grill and brush with sauce, grill for 3-5minutes, then turn brush with sauce frequently until the meat is cooked through, another 5 minutes or so. Take off the grill and sprinkle with the sesame seeds, if using. Let the chicken rest for a few minutes before serving."
    ]
    },
    {
        id : 19,
    logo:<img src={brusselssprouts} className="photo" alt="honey sriracha brussels sprouts"/>,
    nameID: "HONEY SRIRACHA BRUSSLES SPROUTS",
    ingredients: [
    { name: "1 tablespoon olive oil", amount: 1, measurement: "" },
    { name: "2 tablespoon honey", amount: 0.25, measurement: "" },
    { name: "1 tablespoon Sriracha", amount: 3, measurement: "" },
    { name: "1/2 teaspoon sea salt", amount: 1, measurement: "" },
    { name: "pinch of black pepper", amount: 0.5, measurement: "" },
    { name: "450 g (1 lb) Brussels sprouts, halved lengthwise", amount: 0.5, measurement: "" },
    { name: "1 tablespoon toasted sesame seeds", amount: 0.5, measurement: "" }
    ],
    steps: [
    "Preheat the oven to 220°C(455°F/Gas 7) and line a baking sheet with bakng parchment.",

    "Add the olive oil, honey, Sriracha, and salt to a large bowl and toss the sprouts until they are evenly coated. Turn them all out onto the baking sheet so they're laying cut-side down and roast for 12-14minutes, tossing halfway through, until brown and slightly crisp. Plate on to a serving dish and top with sesame seeds, if using."
    ]
    },
    {
        id : 20,
    logo:<img src={enchilada} className="photo" alt="enchilada"/>,
    nameID: "THE WHOLE ENCHILADA",
    ingredients: [
    { name: <h5>{"FOR THE SAUCE"}</h5>, amount: 1, measurement: "" },
    { name: "960 ml (4 cups) low-sodium chicken stock", amount: 0.25, measurement: "" },
    { name: "30 g (1 oz) dried guajillo chillies, stems and seeds removed*", amount: 3, measurement: "" },
    { name: "175 g (6 oz) can of tomato paste", amount: 1, measurement: "" },
    { name: "2 tablespoons plain (all-purpose) flour", amount: 0.5, measurement: "" },
    { name: "2 tablespoons vegetable oil", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon ground cumin", amount: 0.5, measurement: "" },
    { name: "1/2 teaspoon ground coriander", amount: 1, measurement: "" },
    { name: "2-3 teaspoons salt", amount: 1, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"FOR THE ASSEMBLY"}</h5>, amount: 2, measurement: "" },
    { name: "16 corn tortillas, 10-13cm (4-5 in) in diameter**", amount: 2, measurement: "" },
    { name: "1 rotisserie chicken, shredded", amount: 2, measurement: "" },
    { name: "20 g (1/3 cup) chopped fresh coriander (cilatro) plus more for garnish", amount: 2, measurement: "" },
    { name: "1 shaloot, minced", amount: 2, measurement: "" },
    { name: "230 g (a scant 2 cups) grated Cheddar, or colby-jack cheese, divided", amount: 2, measurement: "" },
    { name: "", amount: 2, measurement: "" },
    { name: <h5>{"FOR THE BONUS RICE"}</h5>, amount: 2, measurement: "" },
    { name: "1 teaspoon vegetable oil", amount: 2, measurement: "" },
    { name: "200 g (1 cup) long-grain white rice", amount: 2, measurement: "" },
    { name: "240 ml (1 cup) low-sodium chicken stock", amount: 2, measurement: "" }
    ],
    steps: [
    "*You can also look for ground chillies, usually sold near the dried chillies, but not chilli powder that has additional spices. This is actually my preferred ingredient for this sauce but it's a little more difficult to find. If you do find it, use 30 g (1oz) and skip the step where the peppers steep.",

    "**For the corn tortillas, the size restriction makes sure they can all fit in a 23 x 33 cm (9 x 13 in) pan. If you want to use larger tortillas then go ahead and use two 23 x 23 cm (9 x 9 in) baking dishes.",

    "To make the sauce, bring the stock and chillies to a boil in a medium saucepan. Turn off the heat, cover and let them sit for 20 minutes, stirring halfway through to make sure they're all soaking in the tub. This is a good time to prepare the rest of the ingredients for the enchiladas. Once the 20 minutes are up, blitz in a blender for about 30 seconds, until smooth. It's okay if there are still some chilli flakes. Leave this in the blender for now.",

    "Preheat your oven to 180C (3500 F/Gas 4). In the same saucepan you used for the chillies (no need wash it out), combine the tomato paste, flour, oil, cumin, and coriander. Cook over a medium heat for about a minute, just until it all turns a darker shade of red. Add the blended chilli stock mixture and whisk to combine. Bring to a simmer and cook for 5 minutes, until the sauce has thickened slightly. Season to taste with the salt, then reserve a cup for the rice.",

    "Prepare the corn tortillas by either heating them up directly over a high flame or in a dry frying pan, a minute or so on each side.",

    "To assemble, start with the filling. Mix together the shredded chicken, coriander, shallot, half the cheese, and a soup ladle (or cup) of the enchilada sauce. Pour about half a Ladle (h cup) of enchilada sauce in the bottom of a 23 33 cm (9 x 13 in) pan. Place a good dollop of filling in each tortilla. ROIL the tortillas and place seam-side down in the pan. Continue until the pan is full. There should be 2 rows in there — it might be a tight fit but it's cool. If you have any, leftover filling can be used in nachos or some sort of rice-bowl situation.",

    "Pour the remaining enchilada sauce evenly over the top of the enchiladas. Top with the Leftover cheese and bake for about 15 minutes, until the sauce is bubbling and the cheese has melted. TOP with a sprinkling of fresh coriander and serve.",

    "While the enchiladas bubble in the oven you can make the rice. In a medium saucepan with a tightfitting lid, heat up the oil over a medium—high heat. Add the rice and cook until golden and toasty. Add the chicken stock and that reserved cup of enchilada sauce you took out of the batch earlier and bring the mixture to a boil. Reduce to a Low simmer, cover, and cook for 17—20 minutes, until all the Liquid has evaporated. Fluff with a fork and serve with the enchiladas.",
    ]
    }
];