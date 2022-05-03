const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const baseDir = path.join(__dirname + '/public/img/spots');

generateSpotsData(baseDir);

async function generateSpotsData(dir) {
  let mapsList;

  await getDirectoriesNames(dir).then((res) => {
    mapsList = res;
  });

  // Percorre um array com os nomes dos mapas
  mapsList.forEach(async (map) => {
    let dir = path.join(baseDir, '/', map);

    // Percorre um array para ataque e para defesa
    ['attack', 'defense'].forEach(async (type) => {
      let dirType = path.join(dir, '/', type);

      await getDirectoriesNames(dirType).then((spotsNumbers) => {
        // Percorre um array para cada spot
        spotsNumbers.forEach(async (spotNumber) => {
          let spotName = spotNumber.slice(3);
          let number = await getNumberOfFiles(
            path.join(dirType, '/', spotNumber)
          );
          console.log(number);
        });
      });
    });
  });
}

async function getDirectoriesNames(dir) {
  // console.log('Reading directories in: ' + dir);

  const result = (await fsPromises.readdir(dir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return result;
}

async function getNumberOfFiles(dir) {
  // console.log('Reading number of files in: ' + dir);

  const files = await fsPromises.readdir(dir);
  return files.length;
}
