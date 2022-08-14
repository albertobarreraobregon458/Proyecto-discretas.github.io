/**-----------------------------------CONJUNCION--------------------------------------------- */

const conjuncion = () => {
  let conjun1 = document.getElementById("conjuncion1").value;
  let conjun2 = document.getElementById("conjuncion2").value;

  if (conjun1 === "V" && conjun2 == "V") {
    document.getElementById("res").value = "Verdadero";
    document.getElementById("res").style.background = "#9CFF90";
  } else if (
    (conjun1 === "V" && conjun2 === "F") ||
    (conjun1 === "F" && conjun2 === "V") ||
    (conjun1 === "F" && conjun2 === "F")
  ) {
    document.getElementById("res").style.background = "#FCA6A6";
    document.getElementById("res").value = "Falso";
  }
};

const limpiar = () => {
  document.getElementById("conjuncion1").value = null;
  document.getElementById("conjuncion2").value = null;
  document.getElementById("res").style.background = null;
  document.getElementById("res").value = null;
};

/**------------------------DISYUNCION-------------------------------------- */

const disyuncion = () => {
  let disyun1 = document.getElementById("disyuncion1").value;
  let disyun2 = document.getElementById("disyuncion2").value;

  if (
    (disyun1 === "V" && disyun2 == "V") ||
    (disyun1 === "V" && disyun2 === "F") ||
    (disyun1 === "F" && disyun2 === "V")
  ) {
    document.getElementById("resdisy").style.background = "#9CFF90";
    document.getElementById("resdisy").value = "Verdadero";
  } else if (disyun1 === "F" && disyun2 === "F") {
    document.getElementById("resdisy").style.background = "#FF9696";
    document.getElementById("resdisy").value = "Falso";
  }
};

const limpiardis = () => {
  document.getElementById("disyuncion1").value = null;
  document.getElementById("disyuncion2").value = null;
  document.getElementById("resdisy").style.background = null;
  document.getElementById("resdisy").value = null;
};

/**----------------------------------CONDICIONAL--------------------------------------- */

const condicional = () => {
  let cond1 = document.getElementById("condicional1").value;
  let cond2 = document.getElementById("condicional2").value;

  if (
    (cond1 === "V" && cond2 == "V") ||
    (cond1 === "F" && cond2 === "V") ||
    (cond1 === "F" && cond2 === "V")
  ) {
    document.getElementById("rescond").style.background = "#9CFF90";
    document.getElementById("rescond").value = "Verdadero";
  } else if (cond1 === "V" && cond2 === "F") {
    document.getElementById("rescond").style.background = "#FF9696";
    document.getElementById("rescond").value = "Falso";
  }
};

const limpiarcond = () => {
  document.getElementById("condicional1").value = null;
  document.getElementById("condicional2").value = null;
  document.getElementById("rescond").style.background = null;
  document.getElementById("rescond").value = null;
};

/**----------------------------------------BICONDICIONAL -------------------------------------------------- */

const bicondicional = () => {
  let bicond1 = document.getElementById("bicondicional1").value;
  let bicond2 = document.getElementById("bicondicional2").value;

  if (
    (bicond1 === "V" && bicond2 == "V") ||
    (bicond1 === "F" && bicond2 === "F")
  ) {
    document.getElementById("resbicond").style.background = "#9CFF90";
    document.getElementById("resbicond").value = "Verdadero";
  } else if (
    (bicond1 === "V" && bicond2 === "F") ||
    (bicond1 === "F" && bicond2 === "V")
  ) {
    document.getElementById("resbicond").style.background = "#FF9696";
    document.getElementById("resbicond").value = "Falso";
  }
};

const limpiarbicond = () => {
  document.getElementById("bicondicional1").value = null;
  document.getElementById("bicondicional2").value = null;
  document.getElementById("resbicond").style.background = null;
  document.getElementById("resbicond").value = null;
};

/**--------------------------------NEGACION--------------------------------------------------------- */

const negacion = () => {
  let neg1 = document.getElementById("negacion1").value;
  

  if (
    
    (neg1 === "F")
  ) {
    document.getElementById("resneg").style.background = "#9CFF90";
    document.getElementById("resnreg").value = "Verdadero";
  } else if (neg1 === "V" ) {
    document.getElementById("resneg").style.background = "#FF9696";
    document.getElementById("resneg").value = "Falso";
  }
};

const limpiarneg = () => {
  document.getElementById("negacion1").value = null;
  document.getElementById("resneg").style.background = null;
  document.getElementById("resneg").value = null;
};


const conjun = () => {
  let conjun1 = document.getElementById("conjuncion12").value;

 /*  let conjun2 = document.getElementById("conjuncion22").value;
  let conjun3 = document.getElementById("conjuncion23").value;
  let conjun4 = document.getElementById("conjuncion24").value; */




  document.getElementById("re").value += `${conjun1} `
  
 /*  document.getElementById("re").value + `${conjun2} `
  document.getElementById("re").value + `${conjun3} `
  document.getElementById("re").value + `${conjun4} `
 */
  /* if (conjun1 === "V" && conjun2 == "V") {
    document.getElementById("res").value = "Verdadero";
    document.getElementById("res").style.background = "#9CFF90";
  } else if (
    (conjun1 === "V" && conjun2 === "F") ||
    (conjun1 === "F" && conjun2 === "V") ||
    (conjun1 === "F" && conjun2 === "F")
  ) {
    document.getElementById("res").style.background = "#FCA6A6";
    document.getElementById("res").value = "Falso";
  } */
};

const limpi = () => {
  /* document.getElementById("conjuncion12").value = null;
  document.getElementById("conjuncion24").value = null; */

  document.getElementById("re").value = null;
/*   document.getElementById("conjuncion22").value = null;
  document.getElementById("conjuncion23").value = null;
  document.getElementById("conjuncion24").value = null; */
  /* 
  document.getElementById("res").style.background = null;
  document.getElementById("res").value = null; */
};

const conjun1 = ()=>{
  let conjun4 = document.getElementById("conjuncion24").value;
  document.getElementById("re").value += `${conjun4} `

}