import imageminkeepfolder from "imagemin-keep-folder";
import imageminmozjpeg from "imagemin-mozjpeg";
import imageminpngquant from "imagemin-pngquant";
import imagemingifsicle from "imagemin-gifsicle";
import imageminsvgo from "imagemin-svgo";

imageminkeepfolder(["src/img/**/*.{jpg,jpeg,png,gif,svg,pdf,doc,mov}"], {
  plugins: [
    imageminmozjpeg({
      quality: 80,
    }),
    imageminpngquant({
      quality: [0.7, 0.8],
    }),
    imagemingifsicle(),
    imageminsvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, "../dist/img/");
  },
});
