var rimraf = require("rimraf");

var path = require("path");

var fs = require("fs");

var uploadsDir = __dirname + "/public/uploads";

fs.readdir(uploadsDir, function (err, files) {
  files.forEach(function (file, index) {
    fs.stat(path.join(uploadsDir, file), function (err, stat) {
      var endTime, now;
      if (err) {
        return console.error(err);
      }
      now = new Date().getTime();
      endTime = new Date(stat.ctime).getTime() + 1500;
      if (now > endTime) {
        return rimraf(path.join(uploadsDir, file), function (err) {
          if (err) {
            return console.error(err);
          }
          console.log("successfully deleted");
        });
      }
    });
  });
});
