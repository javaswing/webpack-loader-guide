export default (compiler) => new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) {
        return reject(error);
      }
      if (stats.hasErrors()) reject(stats.toJson().errors);

      return resolve(stats);
    });
  });
