
const lang = document.querySelector('h1');
const developer = document.getElementById('developer');
const year = document.getElementById('year');
const description = document.getElementById('desc');
const more = document.getElementById('more');
const favicon = document.getElementById('favicon');
const title = document.getElementById('title');
const logo = document.getElementById('cardLogo');

logo.src = '../icons/'+ localStorage.getItem('icon');
title.innerText = localStorage.getItem('name');
favicon.href = '../icons/'+ localStorage.getItem('icon');
lang.innerText = localStorage.getItem('name');
developer.innerText = localStorage.getItem('developer');
year.innerText = localStorage.getItem('year');
description.innerText = localStorage.getItem('desc');
more.href = localStorage.getItem('more');
more.target = "_blank"; 