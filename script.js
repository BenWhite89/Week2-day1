$(document).ready(function() {

  function createH3(n) {
    $("body").append($(`<h3 id="${n}">Accusation ${n}</h3>`));
  }

  function createH3Alt(n) {
    header.innerHTML = `Accusation ${n}`;
  }

  function alertMessage1(n) {
    alert(`Accusation ${n}: I accuse ${friends[n%friends.length]}, with ${weapons[n%weapons.length]} in ${locations[n%locations.length]}!`);
  }

  function alertMessage2(n) {
    return function() {
      console.log(n);
      alert(`Accusation ${n}: I accuse ${friends[n%friends.length]}, with ${weapons[n%weapons.length]} in ${locations[n%locations.length]}!`);      
    }
  }

  function alertMessage3(z) {
    $(`#${z}`).click(function() {
      alertMessage1(z);
    })
  }

  let friends = ['Vanessa', 'Gabriel', 'Heather', 'Mark', 'Otto'],
      locations = ['the closet', 'the hall', 'the kitchen', 'the pantry', 'the bedroom', 'the bathroom', 'the living room', 'the dining room', 'the porch'],
      weapons = ['an anvil', 'nunchucks', 'democracy', 'communism', 'capitalism', 'the police state', 'the curtain', 'a phone', 'a fire extinguisher', 'a donut', 'a barrel'];

  /*for (let i = 1; i < 101; i++) {
    createH3(i);
    $(`#${i}`).click(function() {
      alert(`Accusation ${i}: I accuse ${friends[i%friends.length]}, with ${weapons[i%weapons.length]} in ${locations[i%locations.length]}!`);
    })
  }*/

  /*for (var i = 1; i < 101; i++) {
    createH3(i);
    $(`#${i}`).click(function() {
     alertMessage1(this);
    }.bind(i))
  } */

  /*for (var i = 1; i < 101; i++) {
    var header = document.createElement('h3'),
        message = alertMessage2(i),
        text = createH3Alt(i);

    text;
    header.addEventListener('click', message);
    document.body.appendChild(header);
    
  }*/

  for (var i = 1; i < 101; i ++) {
    createH3(i);
    alertMessage3(i);
  }

})