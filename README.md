## Gulp plugin which compiles bemjson to html

Optionally you can specify bemhtml templates` file.

```js
var gulp = require('gulp');
var bemjson2html = require('gulp-bemjson2html');
var rename = require('gulp-rename');

gulp.task('html', function() {
    return gulp.src('page.bemjson.js')
        .pipe(bemjson2html({ template: 'page.bemhtml.js' }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
});
```
