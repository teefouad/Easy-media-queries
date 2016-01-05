# Easy Media Queries

A node-sass importer for Whiteboard Media mixin. It allows creating breakpoints and defining styles for each breakpoint in a simple way.

## Install

``` $ npm install --save-dev easy-media-queries ```

## Usage

You can use this importer in node-sass or any project that depends on node-sass. the only thing you need to do to make this work is add the importer to the options and include the mixin.

### node-sass

```js
var sass = require("node-sass");
var easyMediaQueries = require("easy-media-queries");

sass.render({
  data: '@import "wb-media"; .heading { @include wb-media("<small") { display: none; }; }',
  importer: easyMediaQueries
});
```

### grunt-sass
```js
var easyMediaQueries = require("easy-media-queries");

grunt.initConfig({
    sass:{
        options: {
            importer: easyMediaQueries
        },
        ...        
    }
})
```

### gulp-sass
```js
var gulp = require("gulp");
var sass = require("gulp-sass");
var easyMediaQueries = require("easy-media-queries");

gulp.task("sass", function() {
    return gulp.src("sass/**/*.scss")
      .pipe(sass({ importer: easyMediaQueries }).on("error", sass.logError))
      .pipe(gulp.dest("./css"));
});
```

## Examples
### Adding a breakpoint
```scss
$wb-breakpoints: wb-add-breakpoint("BREAKPOINT_NAME", (
  "value"              : BREAKPOINT_VALUE
));
```

### Using a breakpoint
```scss
// Smaller than breakpoint value
@include wb-media('<BREAKPOINT_NAME') {...}

// Larger than breakpoint value
@include wb-media('>BREAKPOINT_NAME') {...}
```

### Simple example
```scss
@import "wb-media";

// Define breakpoints
$wb-breakpoints: wb-add-breakpoint("tablet", (
  "value"              : 768px
));
$wb-breakpoints: wb-add-breakpoint("mobile", (
  "value"              : 480px
));

// Primary title styles
.primary-title {
    display: block;
    font-size: 32px;
    
    @include wb-media('<tablet') { font-size: 24px; }
    @include wb-media('<mobile') { font-size: 16px; }
}
```