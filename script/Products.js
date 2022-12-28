class Products {
    id;
    img;
    name;
    price;
    idUser;
    constructor(id, img, name, price, idUser) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.idUser = idUser;
    }

    setID(id) {
        this.id = id;
    }

    getID() {
        return this.id;
    }

    setImg(img) {
        this.img = img;
    }

    getImg() {
        return this.img;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setIdUser(idUser)  {
        this.idUser = idUser;
    }

    getIdUser() {
        return this.idUser;
    }
}

