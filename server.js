const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: 'Boston Cream', price: 1.83, calories: 300, image: 'https://www.bhg.com/thmb/B1Mbx1q9AgIEJ8PbQpPq0QPs820=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-pancakes-waffles-pancakes-Hero-01-372c4cad318d4373b6288e993a60ca62.jpg' },
  { id: 2, name: 'Apple Fritter', price: 1.59, calories: 330, image: 'https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg' },
  { id: 3, name: 'Honey Cruller', price: 1.59, calories: 320, image: 'https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg' },
  { id: 4, name: 'Old Fashion Plain', price: 1.29, calories: 210, image: 'https://png.pngtree.com/png-clipart/20250101/original/pngtree-colorful-delicious-donat-png-image_18543868.png' },
  { id: 5, name: 'Chocolate Dip Donut', price: 1.29, calories: 250, image: 'https://www.bhg.com/thmb/B1Mbx1q9AgIEJ8PbQpPq0QPs820=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-pancakes-waffles-pancakes-Hero-01-372c4cad318d4373b6288e993a60ca62.jpg' },
  { id: 6, name: 'Wild Blueberry Muffin', price: 2.59, calories: 340, image: 'https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg' },
  { id: 7, name: 'Dream Cookie', price: 2.59, calories: 380, image: 'https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg' },
  { id: 8, name: 'Herb & Garlic Bagel', price: 2.29, calories: 240, image: 'https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg' },
  { id: 9, name: 'Lemon Poppyseed Muffin', price: 2.59, calories: 370, image: 'https://www.bhg.com/thmb/B1Mbx1q9AgIEJ8PbQpPq0QPs820=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-pancakes-waffles-pancakes-Hero-01-372c4cad318d4373b6288e993a60ca62.jpg' }
];

const adds = [
  {id : 1 , image : 'https://etimg.etb2bimg.com/thumb/msid-112837046,imgsize-83008,width-1200,height=765,overlay-etbrandequity/advertising/kiccha-sudeep-adds-crunch-in-mcdonalds-indias-new-ad.jpg'},
]

const recommandations = [
  {id:1 , image :'https://png.pngtree.com/png-clipart/20250101/original/pngtree-colorful-delicious-donat-png-image_18543868.png'}
 ]



app.get("/menu", (req, res) => {
  res.json(products);
  
});
app.get("/adds", (req, res) => {
  res.json(adds);
  
});
app.get("/rec", (req, res) => {
  res.json(recommandations);
  
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
