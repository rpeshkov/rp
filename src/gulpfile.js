const autoprefix = require('gulp-autoprefixer'),
      gulp = require('gulp'),
      bourbon = require('bourbon').includePaths,
      neat = require('bourbon-neat').includePaths,
      sass = require('gulp-sass');

const paths = {
    scss: './stylesheets/**/*.scss'
};

gulp.task('sass', () => {
    return gulp.src(['./stylesheets/main.scss'])
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat],
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix('last 2 versions'))
        .pipe(gulp.dest('../static/css'));
});

gulp.task('default', gulp.series(['sass'], () => {
    gulp.watch([paths.scss]).on('change', gulp.series(['sass']));
}));
