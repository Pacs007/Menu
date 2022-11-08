import "./App.css";

export const Tag = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  shake: "Shake"
};

const Menu = [
  {
    image: (
      <img
        className="imgFood"
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd30%2Feasy-basic-pancakes-horiz-1022%2Feasy-basic-pancakes-horiz-1022_0.jpg%3Fitok%3DXQMZkp_j"
        alt={"Pancakes"}
      />
    ),
    name: "Buttermilk Pancakes",
    price: "$15",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    tag: Tag.breakfast
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Recipe-Card.jpg"
        alt={"Milkshake"}
      />
    ),
    name: "Godzilla Milkshake",
    price: "$15",
    description:
      "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    tag: Tag.shake
  },
  {
    image: (
      <img className="imgFood" 
      src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Ffrizzled-sunny-side-up-eggs.jpg%3Fitok%3Da-M80Wr6" 
      alt={"Egg"} />
    ),
    name: "Egg Attack",
    price: "$15",
    description:
      "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    tag: Tag.lunch
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://kristineskitchenblog.com/wp-content/uploads/2021/09/bacon-in-oven-square-.jpg"
        alt={"Bacon"}
      />
    ),
    name: "Bacon Overflow",
    price: "$15",
    description:
      "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    tag: Tag.breakfast
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg"
        alt={"Buddy"}
      />
    ),
    name: "Quarantine Buddy",
    price: "$15",
    description:
      "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    tag: Tag.shake
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://townsquare.media/site/385/files/2016/08/RS15121_533645537.jpg?w=980&q=75"
        alt={"Diner"}
      />
    ),
    name: "Diner Double",
    price: "$15",
    description:
      "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    tag: Tag.lunch
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://yonderbound.com/blog/wp-content/uploads/2016/02/Mexico-dish.jpg"
        alt={"Country"}
      />
    ),
    name: "Country Delight",
    price: "$15",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    tag: Tag.breakfast
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://thesaltymarshmallow.com/wp-content/uploads/2018/08/oreo-milkshakes1.jpg"
        alt={"Oreo"}
      />
    ),
    name: "Oreo Dream",
    price: "$15",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    tag: Tag.shake
  },
  {
    image: (
      <img
        className="imgFood"
        src="https://cdn.theculturetrip.com/wp-content/uploads/2017/05/nathans.jpg"
        alt={"Classic"}
      />
    ),
    name: "American Classic",
    price: "$15",
    description:
      "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    tag: Tag.lunch
  }
];

export default Menu;
