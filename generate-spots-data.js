const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const baseDir = path.join(__dirname + '/public/img/spots');

generateSpotsData(baseDir);

async function generateSpotsData(dir) {
  const mapsList = await getMapsNames(dir);

  const mapsInfo = await getMapsInformation(mapsList);

  await writeInfoOnFile(mapsInfo);
}

async function getMapsNames(dir) {
  let mapsList;

  await getDirectoriesNames(dir).then((res) => {
    mapsList = res;
  });

  return mapsList;
}

async function getMapsInformation(mapsList) {
  const information = {};

  // Percorre um array com os nomes dos mapas
  mapsList.forEach((map) => {
    information[map] = {};
    let dir = path.join(baseDir, '/', map);

    // Percorre um array para ataque e para defesa
    ['attack', 'defense'].forEach(async (type) => {
      information[map][type] = [];
      let dirType = path.join(dir, '/', type);

      await getDirectoriesNames(dirType).then((spotsNumbersAndNames) => {
        // Percorre um array para cada spot
        spotsNumbersAndNames.forEach(async (spotNumberAndName, index) => {
          let dirSpot = path.join(dirType, '/', spotNumberAndName);

          let spotName = spotNumberAndName.slice(3);
          let thumbnail = `img/spots/${map}/${type}/${spotNumberAndName}/logo.png`;
          let images = [];

          let filesNumber = await getNumberOfFiles(dirSpot);
          for (let i = 1; i <= filesNumber; i++) {
            let spot;

            if (i < 10) {
              spot = `img/spots/${map}/${type}/${spotNumberAndName}/0${i}.png`;
            } else {
              spot = `img/spots/${map}/${type}/${spotNumberAndName}/${i}.png`;
            }

            images.push(spot);
          }

          information[map][type][index] = {
            name: spotName,
            thumbnail,
            images,
          };
        });
      });
    });
  });

  return information;
}

async function writeInfoOnFile(mapsInfo) {
  setTimeout(() => {
    let data = 'const MapsSpots = ';
    data += JSON.stringify(mapsInfo, null, 2);
    data += '; export default MapsSpots;';

    fs.writeFileSync('./src/out/maps_spots.tsx', data, 'utf-8');
  }, 1000);
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
