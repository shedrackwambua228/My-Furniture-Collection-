const gallery = document.querySelector('.gallery');

const json_data = [
    {
        "title": "Luxo Leather Sofa",
        "src": "?serve=img/furniture1.jpg",
        "description": "A luxurious leather sofa that combines elegance and comfort. Available in black, white, and brown.",
        "price": "$899.99"
    },
    {
        "title": "Contemporary Velvet Sofa",
        "src": "?serve=img/furniture2.jpg",
        "description": "A plush velvet sofa with a sleek, modern design. Ideal for contemporary living rooms. Available in royal blue and emerald green.",
        "price": "$749.99"
    },
    {
        "title": "Classic Chesterfield Sofa",
        "src": "?serve=img/furniture3.jpg",
        "description": "A timeless Chesterfield sofa with deep button tufting and luxurious leather upholstery. Perfect for classic and vintage interiors.",
        "price": "$1,199.99"
    },
    {
        "title": "Minimalist Sectional Sofa",
        "src": "?serve=img/furniture4.jpg",
        "description": "A modular sectional sofa designed for a minimalist look. Customize the arrangement to fit your space perfectly.",
        "price": "$1,299.99"
    },
    {
        "title": "Mid-Century Modern Sofa",
        "src": "?serve=img/furniture5.jpg",
        "description": "Inspired by mid-century design, this sofa features clean lines, wooden legs, and a variety of fabric options.",
        "price": "$649.99"
    },
    {
        "title": "Luxe Leather Recliner Sofa",
        "src": "?serve=img/furniture6.jpg",
        "description": "A luxurious leather reclining sofa with adjustable headrests and footrests for ultimate relaxation.",
        "price": "$1,499.99"
    },
    {
        "title": "Urban Sleeper Sofa",
        "src": "?serve=img/furniture7.jpg",
        "description": "A versatile sleeper sofa that easily transforms into a bed, perfect for guests or small spaces. Available in gray and beige.",
        "price": "$899.99"
    },
    {
        "title": "Bohemian Chic Sofa",
        "src": "?serve=img/furniture8.jpg",
        "description": "A boho-inspired sofa with vibrant patterns and earthy tones. Designed to make a statement in eclectic living rooms.",
        "price": "$799.99"
    }
]


json_data.forEach(item =>{
    const data_item = document.createElement('div');
    gallery.appendChild(data_item);
    data_item.className = "dash-item";
    const img = document.createElement("img");
    data_item.appendChild(img);
    img.src = item.src;
    
    const h3 = document.createElement("h3");
    data_item.appendChild(h3);
    h3.textContent = item.title;

    const description = document.createElement("p");
    data_item.appendChild(description);
    description.className = "description";
    description.textContent = item.description;

    const price = document.createElement("p");
    data_item.appendChild(price);
    price.className = "price";
    price.textContent = item.price;

});