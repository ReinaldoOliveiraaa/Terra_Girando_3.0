function setup() {
    createCanvas(1920,1080, WEBGL);//plano 3D
    terra=loadImage('terra.jpg')
}

function draw() {
    background(205, 102, 94);//cor de fundo
    rotateY(millis()/1000);//rotação da terra
    Texture(terra);//textura da terra, imagem.
    Sphere(80, 100);//esfera 3D
}
