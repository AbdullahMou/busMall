'use strict'
var allItem = [];
var lIEle = document.getElementById('lIEle');
var mIEle = document.getElementById('mIEle');
var rIEle = document.getElementById('rIEle');
var imgD = document.getElementById('imgD');
var resUL = document.getElementById('resUL');
var drImg;
var dlImg;
var dmImg;
let cleckTimes = 0;
let cleckR;
let cleckL;
let cleckM;

function Item(name, src) {
    this.name = name;
    this.src = src;
    this.election = 0;
    this.shownTimes = 0;
    this.random = [];

    allItem.push(this)

};
var bag = new Item('bag', 'img/bag.jpg');
var banana = new Item('banana', 'img/banana.jpg');
var bathroom = new Item('bathroom', 'img/bathroom.jpg');
var boots = new Item('boots', 'img/boots.jpg');
var breakfast = new Item('breakfast', 'img/breakfast.jpg')
var bubblegum = new Item('bubblegum', 'img/bubblegum.jpg');
var chair = new Item('chair', 'img/chair.jpg');
var cthulhu = new Item('cthulhu', 'img/cthulhu.jpg');
var dog = new Item('dog', 'img/dog-duck.jpg');
var dragon = new Item('dragon', 'img/dragon.jpg');
var pen = new Item('pen', 'img/pen.jpg');
var pet = new Item('pet', 'img/pet-sweep.jpg');
var scessors = new Item('scessors', 'img/scissors.jpg');
var shark = new Item('shark', 'img/shark.jpg');
var sweep = new Item('sweep', 'img/sweep.png');
var tauntun = new Item('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Item('unicorn', 'img/unicorn.jpg');
var usb = new Item('usb', 'img/usb.gif');
var water = new Item('water', 'img/water-can.jpg');
var wine = new Item('wine', 'img/wine-glass.jpg');


function getRandom() {
    var rImg;
    var lImg;
    var mImg;
    rImg = Math.floor((Math.random() * allItem.length));
    mImg = Math.floor((Math.random() * allItem.length));

    lImg = Math.floor((Math.random() * allItem.length));

    if (lImg === rImg || mImg === lImg || rImg === mImg) {
        mImg = Math.floor((Math.random() * allItem.length));
        lImg = Math.floor((Math.random() * allItem.length));
    } else if (mImg === rImg) {
        mImg = Math.floor((Math.random() * allItem.length));

    }
    //  console.log(rImg, lImg, mImg);
    drImg = rImg;
    dlImg = lImg;
    dmImg = mImg;
    getDisplay(drImg, dlImg, dmImg);
}

function getDisplay(rImg, lImg, mImg) {
    rIEle.setAttribute('src', allItem[rImg].src);
    lIEle.setAttribute('src', allItem[lImg].src);
    mIEle.setAttribute('src', allItem[mImg].src);
    cleckR = allItem[rImg];
    cleckL = allItem[lImg];
    cleckM = allItem[mImg];
    allItem[rImg].shownTimes++;
    allItem[lImg].shownTimes++;
    allItem[mImg].shownTimes++;

    rIEle.setAttribute('width', '200px');
    lIEle.setAttribute('width', '200px');
    mIEle.setAttribute('width', '200px');
}
//console.log(allItem);
getRandom();

imgD.addEventListener('click', voit);

function voit(event) {
    if (event.target.id == 'rIEle') {
        cleckR.election++
            getRandom();
        cleckTimes++;
    } else
    if (event.target.id == 'lIEle') {
        cleckL.election++
            getRandom();
        cleckTimes++;
    } else
    if (event.target.id == 'mIEle') {
        cleckM.election++
            getRandom();
        cleckTimes++;
    }
    if (cleckTimes == 25) {
        imgD.removeEventListener('click', voit);
        for (let i = 0; i < allItem.length; i++) {
            var li = document.createElement('li')
            li.textContent = (allItem[i].name + ' Slicer had ' + allItem[i].election + ' votes and was shown ' + allItem[i].shownTimes + ' times')
            resUL.appendChild(li)
        }
    }
    // console.log(event);
}
//console.log(cleckTimes);