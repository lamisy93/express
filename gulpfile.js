const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'public/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'public/js/'
    }
};


function styles () {
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}

// gulp sass : pluggin qui converti du sass en css

const build = gulp.parallel(styles, scripts); // tache qui construit et lance les 2 taches en parallèle : styles et scripts

// on peut utiliser series aussi à la place de parallel 

gulp.task('build', build);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('default', build);