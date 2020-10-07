class Form{

    constructor() {

        this.input = createInput("Enter your Name");
        this.select = createSelect();
        this.radio = createRadio();

    }

    display() {
        this.input.position(200, 180);

        this.select.position(200, 200);
        this.select.opition("Choose the Plant");
        this.select.opition("Lemon Plant");
        this.select.opition("Tomatoe Plant");
        this.select.opition("Mango Plant");
        this.select.opition("Strawberry Plant");

        this.radio.opition('City');
        this.radio.opition('Farm');
        this.radio.opition('Valley');
    }

};