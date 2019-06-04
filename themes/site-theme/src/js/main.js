import styles from './../css/main.css';
import $ from 'jquery';
import './scriptTools/bootstrapCollapse.js';

window.jQuery = window.$ = require('jquery');

$(function() {
  $(".mobile-menu-button").click(function() {
    $('.mobile-menu').addClass("mobile-menu-toggle");
  });
});

$(function() {
  $(".mobile-menu-button").click(function() {
    $('body').addClass("overflow-hidden");
  });
});

$(function() {
  $(".close-menu").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});

$(function() {
  $(".mobile-menu-item").click(function() {
    $('.mobile-menu').removeClass("mobile-menu-toggle");
    $('body').removeClass("overflow-hidden");
  });
});

$(function() {
  $(".ul-caret").click(function() {
    $(this).find('i').toggleClass('fa-caret-down fa-caret-up')
  });
});

$(function() {
  $(".search-button").click(function() {
    $('#header').toggleClass("z-50");
    $('#search-section').toggleClass("opacity-0");
  });
});