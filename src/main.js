import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character, StrongCharacter, WeakCharacter } from './scripts';

// UI Logic


$(document).ready(function() {

  let bebop = new WeakCharacter("Bebop", "purple");
  let rocksteady = new WeakCharacter("Rocksteady", "gray");

  let donatello = new StrongCharacter("Donatello", "Bo", "Purple");
  let raphael = new StrongCharacter("Raphael", "Sai", "Red");
  let michaelangelo = new StrongCharacter("Michaelangelo", "Nunchaku", "Orange");
  let leonardo = new StrongCharacter("Leonardo", "Twin Katana", "Blue");

  if (donatello.color === "Purple"){
    $("h1#text-display").append("Hello, folks. Looks like our webpack is working!");
    $("div#hidden-div").show();
  }

});
