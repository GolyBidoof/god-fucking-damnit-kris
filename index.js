'use es6'

const tileSetDetails = {
    x: 16,
    y: 16,
    amntOfTilesX: 16,
    amntOfTilesY: 21,
    spriteSizeX: 64,
    spriteSizeY: 64,
};

const susieSpritesheet = {
    x: 32,
    y: 64,
    amntOfTilesX: 3,
    amntOfTilesY: 1,
    spriteSizeX: 128,
    spriteSizeY: 256,
    currentAnimationFrame: 0,
    animationTimer: 0,
    dir: true,
};

const krisSpritesheet = {
    x: 32,
    y: 64,
    amntOfTilesX: 4,
    amntOfTilesY: 1,
    spriteSizeX: 128,
    spriteSizeY: 256,
    currentAnimationFrame: 0,
    animationTimer: 0,
};

const bananaSpritesheet = {
    x: 32,
    y: 64,
    amntOfTilesX: 6,
    amntOfTilesY: 1,
    spriteSizeX: 64,
    spriteSizeY: 128,
    currentAnimationFrame: 0,
    animationTimer: 0,
};

const skySpritesheet = {
    x: 64,
    y: 64,
    amntOfTilesX: 1,
    amntOfTilesY: 3,
    spriteSizeX: 128,
    spriteSizeY: 128,
};

const gunshipSpritesheet = {
    x: 194,
    y: 95,
    amntOfTilesX: 2,
    amntOfTilesY: 4,
    spriteSizeX: 388,
    spriteSizeY: 190,
    currentAnimationFrame: 0,
    animationTimer: 0,
    dir: false,
};

const textboxBackground = {
    x: 594,
    y: 168,
    spriteSizeX: 594,
    spriteSizeY: 168,
};


let shift = 0;

let textbox;
let tiles;
let susie;
let kris;
let banana;
let sky;
let gunship;
let dir;


const getSpriteXFromTilemap = (X, tileSet) => (X * tileSet.x)
const getSpriteYFromTilemap = (Y, tileSet) => (Y * tileSet.y)

const drawFunction = () => {
    window.requestAnimationFrame(drawFunction);

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false
    ctx.fillStyle = "rgb(130,161,186)";

    const amntOfTilesX = Math.floor(canvas.width / 64) - 1 - Math.floor(shift / 64);
    const amntOfTilesY = Math.floor(canvas.height / 64) - 1;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let curX = shift - 64;

    ctx.drawImage(tiles, getSpriteXFromTilemap(0, tileSetDetails), getSpriteYFromTilemap(0, tileSetDetails), tileSetDetails.x,
        tileSetDetails.y, curX, canvas.height - 64,
        tileSetDetails.spriteSizeX, tileSetDetails.spriteSizeY);

    let curY = 0;

    for (let y = 0; y < amntOfTilesY / 3; y++) {
        curY = canvas.height - skySpritesheet.spriteSizeY - y * skySpritesheet.spriteSizeY;
        ctx.drawImage(sky, getSpriteXFromTilemap(0, skySpritesheet), getSpriteYFromTilemap(2, skySpritesheet), skySpritesheet.x,
            skySpritesheet.y, curX, curY,
            skySpritesheet.spriteSizeX, skySpritesheet.spriteSizeY);
    }

    ctx.drawImage(sky, getSpriteXFromTilemap(0, skySpritesheet), getSpriteYFromTilemap(1, skySpritesheet), skySpritesheet.x,
        skySpritesheet.y, curX, curY - 128,
        skySpritesheet.spriteSizeX, skySpritesheet.spriteSizeY);
    ctx.drawImage(sky, getSpriteXFromTilemap(0, skySpritesheet), getSpriteYFromTilemap(0, skySpritesheet), skySpritesheet.x,
        skySpritesheet.y, curX, curY - 256,
        skySpritesheet.spriteSizeX, skySpritesheet.spriteSizeY);

    curX += tileSetDetails.spriteSizeX;

    for (let x = 1; x <= amntOfTilesX; x++) {
        for (let y = 0; y < amntOfTilesY / 3; y++) {
            ctx.drawImage(sky, getSpriteXFromTilemap(0, skySpritesheet), getSpriteYFromTilemap(2, skySpritesheet), skySpritesheet.x,
                skySpritesheet.y, curX * 2, canvas.height - skySpritesheet.spriteSizeY - y * skySpritesheet.spriteSizeY,
                skySpritesheet.spriteSizeX, skySpritesheet.spriteSizeY);
        }
        ctx.drawImage(tiles, getSpriteXFromTilemap(1, tileSetDetails), getSpriteYFromTilemap(0, tileSetDetails), tileSetDetails.x,
            tileSetDetails.y, curX, canvas.height - tileSetDetails.spriteSizeY,
            tileSetDetails.spriteSizeX, tileSetDetails.spriteSizeY);
        ctx.drawImage(sky, getSpriteXFromTilemap(0, skySpritesheet), getSpriteYFromTilemap(1, skySpritesheet), skySpritesheet.x,
            skySpritesheet.y, curX * 2, curY - 128,
            skySpritesheet.spriteSizeX, skySpritesheet.spriteSizeY);
        ctx.drawImage(sky, getSpriteXFromTilemap(0, skySpritesheet), getSpriteYFromTilemap(0, skySpritesheet), skySpritesheet.x,
            skySpritesheet.y, curX * 2, curY - 256,
            skySpritesheet.spriteSizeX, skySpritesheet.spriteSizeY);
        curX += tileSetDetails.spriteSizeX;
    }

    ctx.drawImage(tiles, getSpriteXFromTilemap(2, tileSetDetails), getSpriteYFromTilemap(0, tileSetDetails), tileSetDetails.x,
        tileSetDetails.y, curX, canvas.height - tileSetDetails.spriteSizeY,
        tileSetDetails.spriteSizeX, tileSetDetails.spriteSizeY);

    shift = (shift - 1) % 64;

    //Susie
    ctx.drawImage(susie, getSpriteXFromTilemap(susieSpritesheet.currentAnimationFrame, susieSpritesheet), getSpriteYFromTilemap(0, susieSpritesheet), susieSpritesheet.x,
        susieSpritesheet.y, susieSpritesheet.spriteSizeX * 1, canvas.height - 64 - susieSpritesheet.spriteSizeY,
        susieSpritesheet.spriteSizeX, susieSpritesheet.spriteSizeY);

    susieSpritesheet.animationTimer = (susieSpritesheet.animationTimer + 1) % 20;
    if (susieSpritesheet.animationTimer === 0) {
        switch (susieSpritesheet.currentAnimationFrame) {
            case 0:
                susieSpritesheet.dir = true;
                susieSpritesheet.currentAnimationFrame = 1;
                break;
            case 1:
                if (susieSpritesheet.dir) {
                    susieSpritesheet.currentAnimationFrame = 2;
                } else {
                    susieSpritesheet.currentAnimationFrame = 0;
                }
                break;
            case 2:
                susieSpritesheet.dir = false;
                susieSpritesheet.currentAnimationFrame = 1;
                break;
        }
    }

    //kris
    ctx.drawImage(kris, getSpriteXFromTilemap(krisSpritesheet.currentAnimationFrame, krisSpritesheet), getSpriteYFromTilemap(0, krisSpritesheet), krisSpritesheet.x,
        krisSpritesheet.y, krisSpritesheet.spriteSizeX * 2, canvas.height - 64 - susieSpritesheet.spriteSizeY,
        krisSpritesheet.spriteSizeX, krisSpritesheet.spriteSizeY);

    krisSpritesheet.animationTimer = (krisSpritesheet.animationTimer + 1) % 20;

    if (krisSpritesheet.animationTimer === 0) {

        krisSpritesheet.currentAnimationFrame = (krisSpritesheet.currentAnimationFrame + 1) % 4;
    }

    //banana
    ctx.drawImage(banana, getSpriteXFromTilemap(bananaSpritesheet.currentAnimationFrame, bananaSpritesheet), getSpriteYFromTilemap(0, bananaSpritesheet), bananaSpritesheet.x,
        bananaSpritesheet.y, canvas.width - (bananaSpritesheet.spriteSizeX * 2), canvas.height - 64 - bananaSpritesheet.spriteSizeY,
        bananaSpritesheet.spriteSizeX, bananaSpritesheet.spriteSizeY);

    bananaSpritesheet.animationTimer = (bananaSpritesheet.animationTimer + 1) % 10;
    if (bananaSpritesheet.animationTimer === 0) {
        bananaSpritesheet.currentAnimationFrame = (bananaSpritesheet.currentAnimationFrame + 1) % 6
    }

    //gunship
    gunshipSpritesheet.animationTimer = (gunshipSpritesheet.animationTimer + 1) % 30;
    if (gunshipSpritesheet.animationTimer === 0) {
        if (gunshipSpritesheet.currentAnimationFrame === 7 || gunshipSpritesheet.currentAnimationFrame === 0) {
            gunshipSpritesheet.dir = !gunshipSpritesheet.dir;
        }
        if (gunshipSpritesheet.dir) {
            gunshipSpritesheet.currentAnimationFrame += 1;
        } else {
            gunshipSpritesheet.currentAnimationFrame -= 1;
        }
    }

    ctx.drawImage(gunship, getSpriteXFromTilemap(gunshipSpritesheet.currentAnimationFrame % 2, gunshipSpritesheet), getSpriteYFromTilemap(Math.floor(gunshipSpritesheet.currentAnimationFrame / 2), gunshipSpritesheet), gunshipSpritesheet.x,
        gunshipSpritesheet.y, canvas.width - (canvas.width / 2), canvas.height - (canvas.height / 2),
        gunshipSpritesheet.spriteSizeX, gunshipSpritesheet.spriteSizeY);

    //textbox
    ctx.drawImage(textbox, 0, 0, textboxBackground.x,
        textboxBackground.y, (canvas.width / 2) - (textboxBackground.x / 2), 32,
        textboxBackground.spriteSizeX, textboxBackground.spriteSizeY);
}

const fullscreen = () => {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('load', function () {
    tiles = new Image();
    susie = new Image();
    banana = new Image();
    sky = new Image();
    gunship = new Image();
    kris = new Image();
    textbox = new Image();

    tiles.src = 'tileset.png';
    susie.src = 'susie.png';
    banana.src = 'banana.png';
    sky.src = 'sky.png';
    gunship.src = 'gunship.png';
    kris.src = 'kris.png';
    textbox.src = 'textbox.png';

    tiles.onload = drawFunction;

    fullscreen();
})

window.onresize = () => {
    fullscreen();
}