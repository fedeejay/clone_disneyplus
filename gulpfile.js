const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function testeGulp(cb) {
    console.log("Olá Mundo");
    cb();
}

exports.default = testeGulp;