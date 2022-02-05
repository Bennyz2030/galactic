import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age.js';

(document).ready(function() {
  $("form#user-age").submit(function(event) {
    event.preventDefualt();
    let age = parseInt($("#age-input").val());
    let lifeExpectency = parseInt($("#expectency-input").val());

    let runAge = new GalacticAge(age, lifeExpectency);
    runAge.mercury();
    runAge.mercuryExpectency();

    $('#output').text(runAge);
  });
})