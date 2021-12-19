function pound_converter(lba) {
  let kga = lba / 2.2046;
  let oza = lba * 16;
  let gma = lba / 0.0022046;
  let sta = lba * 0.071429;

  document.getElementById("kg").value = kga;
  console.log("pound");
  document.getElementById("oz").value = oza;
  document.getElementById("gm").value = gma;
  document.getElementById("st").value = sta;
}

function stones_converter(sta) {
  let kga = sta / 0.15747;
  let pda = sta * 14;
  let gma = sta / 0.00015747;
  let oza = sta * 224;

  document.getElementById("kg").value = kga;
  document.getElementById("oz").value = oza;
  document.getElementById("gm").value = gma;
  document.getElementById("pd").value = pda;
  console.log("stones");
}
