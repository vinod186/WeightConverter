function converter(unit, qty) {
  let kga = 0;
  let pda = 0;
  let gma = 0;
  let oza = 0;
  let st = 0;
  qty = Number.parseFloat(qty);
  if (!isNaN(qty)) {
    switch (unit) {
      case "kg":
        st = qty * 0.1575;
        kga = qty;
        pda = qty * 2.20462;
        gma = qty * 1000;
        oza = qty * 35.274;
        break;
      case "oz":
        st = qty * 0.004465;
        kga = qty * 0.028;
        pda = qty * 0.062;
        gma = qty * 28.34955;
        oza = qty;
        break;
      case "gm":
        st = qty * 0.00015747;
        kga = qty * 0.001;
        pda = qty * 0.0022046;
        gma = qty;
        oza = qty * 0.035274;
        break;
      case "pd":
        st = qty * 0.071429;
        kga = qty * 0.45359;
        pda = qty;
        gma = qty * 453.5928;
        oza = qty * 16;
        break;
      case "st":
        st = qty;
        kga = qty * 6.35;
        pda = qty * 14;
        gma = qty * 6350.3;
        oza = qty * 224;
        break;
      default:
        alert("something went wrong.");
    }
  }
  document.getElementById("kg").value = kga;
  document.getElementById("oz").value = oza;
  document.getElementById("gm").value = gma;
  document.getElementById("pd").value = pda;
  document.getElementById("st").value = st;
}
