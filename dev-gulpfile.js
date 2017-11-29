var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    var src = gulp.src('app/script.js');
    var dest = gulp.dest('dist');
    
    return src
        .pipe(uglify({
            mangle: false
        }))
        .pipe(dest);
});

gulp.task('default', ['js']);