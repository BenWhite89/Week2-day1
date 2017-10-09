$(document).ready(function() {

  function createH3(n) {
    $("body").append($(`<h3 id="${n}">Accusation ${n}</h3>`));
  }

  let friends = ['Vanessa', 'Gabriel', 'Heather', 'Mark', 'Otto'],
      locations = ['the closet', 'the hall', 'the kitchen', 'the pantry', 'the bedroom', 'the bathroom', 'the living room', 'the dining room', 'the porch'],
      weapons = ['an anvil', 'nunchucks', 'democracy', 'communism', 'capitalism', 'the police state', 'the curtain', 'a phone', 'a fire extinguisher', 'a donut', 'a barrel'];

  for (let i = 1; i < 101; i++) {
    createH3(i);
    $(`#${i}`).click(function() {
      alert(`Accusation ${i}: I accuse ${friends[i%friends.length]}, with ${weapons[i%weapons.length]} in ${locations[i%locations.length]}!`);
    })
  }

})