## Gulp plugin which compiles bemjson to html

```js
var gulp = require('gulp');
var bemjson2html = require('gulp-bemjson2html');

gulp.task('html', ['bemhtml'], function() {
    return gulp.src('page.bemjson.js')
        .pipe(bemjson2html({ template: 'page.bemhtml.js' }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(params.out))
        .pipe(reload({ stream: true }));
});
```
