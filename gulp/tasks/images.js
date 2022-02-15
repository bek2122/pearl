
import newer from 'gulp-newer';
import webp from "gulp-webp";
import imagemin from 'gulp-imagemin';


 export const images= () =>{
    return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title:"CSS",
        message:'Error: <%= error.message %>'
        
    })))
    .pipe(newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(newer(app.path.build.images))
    .pipe(imagemin({
        progressive:true,
        svgPLugins: [{removeViewBox: false}],
        interlased:true,
        optimisationLevel:3
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}

