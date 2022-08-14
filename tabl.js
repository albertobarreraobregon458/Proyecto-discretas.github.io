const conj = () => {
  let acumb = 0;
  let acumm = 0;
  let $conj1 = document.getElementById("conj1").value,
    $conj2 = document.getElementById("conj2").value,
    $conj3 = document.getElementById("conj3").value,
    $conj4 = document.getElementById("conj4").value;

  if ($conj1 === "V") {
    document.getElementById("conj1").style.background = "#9CFF90";
    acumb++;
  } else if ($conj1 === "F") {
    document.getElementById("conj1").style.background = "#FCA6A6";
    acumm++;
  }

  if ($conj2 === "F") {
    document.getElementById("conj2").style.background = "#9CFF90";
    acumb++;
  } else if ($conj2 == "V") {
    document.getElementById("conj2").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj3 === "F") {
    document.getElementById("conj3").style.background = "#9CFF90";
    acumb++;
  } else if ($conj3 === "V") {
    document.getElementById("conj3").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj4 === "F") {
    document.getElementById("conj4").style.background = "#9CFF90";
    acumb++;
  } else if ($conj4 === "V") {
    document.getElementById("conj4").style.background = "#FCA6A6";
    acumm++;
  }

  document.getElementById("preb").textContent = `Preguntas Correctas: ${acumb}`;
  document.getElementById("prem").textContent = `Preguntas Incorrectas: ${acumm}`;
  let nota = acumb * 1.25;

  if (
    ($conj1 === "V" || $conj1 === "F") &&
    ($conj2 === "V" || $conj2 === "F") &&
    ($conj3 === "V" || $conj3 === "F") &&
    ($conj4 === "V" || $conj4 === "F")
  ) {
    document.getElementById("not1").textContent = `Nota: ${nota}`;
  } else {
    document.getElementById("not1").textContent = `No has contestado todos los campos`;
  }
};


const limpii = ()=>{
  document.getElementById("conj1").value = null
  document.getElementById("conj2").value = null
  document.getElementById("conj3").value = null
  document.getElementById("conj4").value = null

  document.getElementById("conj1").style.background = null 
  document.getElementById("conj2").style.background = null  
  document.getElementById("conj3").style.background = null  
  document.getElementById("conj4").style.background = null 

  
  document.getElementById("preb").textContent = `Preguntas Correctas:`;
  document.getElementById("prem").textContent = `Preguntas Incorrectas:`;
  document.getElementById("not1").textContent = `Nota:`;
}
const con1 = document.getElementById("conj1");
const con2 = document.getElementById("conj2");
const con3 = document.getElementById("conj3");
const con4 = document.getElementById("conj4");

con1.addEventListener("change", (e) => {
  document.getElementById("conj1").style.background = null;
});
con2.addEventListener("change", (e) => {
  document.getElementById("conj2").style.background = null;
});
con3.addEventListener("change", (e) => {
  document.getElementById("conj3").style.background = null;
});
con4.addEventListener("change", (e) => {
  document.getElementById("conj4").style.background = null;
});



/**------------------------------------------------------------- */
const disyu = () => {
  let acumb = 0;
  let acumm = 0;
  let $conj1 = document.getElementById("disyu1").value,
    $conj2 = document.getElementById("disyu2").value,
    $conj3 = document.getElementById("disyu3").value,
    $conj4 = document.getElementById("disyu4").value;

  if ($conj1 === "V") {
    document.getElementById("disyu1").style.background = "#9CFF90";
    acumb++;
  } else if ($conj1 === "F") {
    document.getElementById("disyu1").style.background = "#FCA6A6";
    acumm++;
  }

  if ($conj2 === "F") {
    document.getElementById("disyu2").style.background = "#9CFF90";
    acumb++;
  } else if ($conj2 == "V") {
    document.getElementById("disyu2").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj3 === "F") {
    document.getElementById("disyu3").style.background = "#9CFF90";
    acumb++;
  } else if ($conj3 === "V") {
    document.getElementById("disyu3").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj4 === "F") {
    document.getElementById("disyu4").style.background = "#9CFF90";
    acumb++;
  } else if ($conj4 === "V") {
    document.getElementById("disyu4").style.background = "#FCA6A6";
    acumm++;
  }

  document.getElementById("preb2").textContent = `Preguntas Correctas: ${acumb}`;
  document.getElementById("prem2").textContent = `Preguntas Incorrectas: ${acumm}`;
  let nota = acumb * 1.25;

  if (
    ($conj1 === "V" || $conj1 === "F") &&
    ($conj2 === "V" || $conj2 === "F") &&
    ($conj3 === "V" || $conj3 === "F") &&
    ($conj4 === "V" || $conj4 === "F")
  ) {
    document.getElementById("not2").textContent = `Nota: ${nota}`;
  } else {
    document.getElementById("not2").textContent = `No has contestado todos los campos`;
  }
};


const limpidis = ()=>{
  document.getElementById("disyu1").value = null
  document.getElementById("disyu2").value = null
  document.getElementById("disyu3").value = null
  document.getElementById("disyu4").value = null

  document.getElementById("disyu1").style.background = null 
  document.getElementById("disyu2").style.background = null  
  document.getElementById("disyu3").style.background = null  
  document.getElementById("disyu4").style.background = null 

  
  document.getElementById("preb2").textContent = `Preguntas Correctas:`;
  document.getElementById("prem2").textContent = `Preguntas Incorrectas:`;
  document.getElementById("not2").textContent = `Nota:`;
}
const di1 = document.getElementById("disyu1");
const di2 = document.getElementById("disyu2");
const di3 = document.getElementById("disyu3");
const di4 = document.getElementById("disyu4");

di1.addEventListener("change", (e) => {
  document.getElementById("disyu1").style.background = null;
});
di2.addEventListener("change", (e) => {
  document.getElementById("disyu2").style.background = null;
});
di3.addEventListener("change", (e) => {
  document.getElementById("disyu3").style.background = null;
});
di4.addEventListener("change", (e) => {
  document.getElementById("disyu4").style.background = null;
});


/** bicondicional*/
const bicond = () => {
  let acumb = 0;
  let acumm = 0;
  let $conj1 = document.getElementById("bicon1").value,
    $conj2 = document.getElementById("bicon2").value,
    $conj3 = document.getElementById("bicon3").value,
    $conj4 = document.getElementById("bicon4").value;

  if ($conj1 === "V") {
    document.getElementById("bicon1").style.background = "#9CFF90";
    acumb++;
  } else if ($conj1 === "F") {
    document.getElementById("bicon1").style.background = "#FCA6A6";
    acumm++;
  }

  if ($conj2 === "F") {
    document.getElementById("bicon2").style.background = "#9CFF90";
    acumb++;
  } else if ($conj2 == "V") {
    document.getElementById("bicon2").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj3 === "F") {
    document.getElementById("bicon3").style.background = "#9CFF90";
    acumb++;
  } else if ($conj3 === "V") {
    document.getElementById("bicon3").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj4 === "F") {
    document.getElementById("bicon4").style.background = "#9CFF90";
    acumb++;
  } else if ($conj4 === "V") {
    document.getElementById("bicon4").style.background = "#FCA6A6";
    acumm++;
  }

  document.getElementById("preb3").textContent = `Preguntas Correctas: ${acumb}`;
  document.getElementById("prem3").textContent = `Preguntas Incorrectas: ${acumm}`;
  let nota = acumb * 1.25;

  if (
    ($conj1 === "V" || $conj1 === "F") &&
    ($conj2 === "V" || $conj2 === "F") &&
    ($conj3 === "V" || $conj3 === "F") &&
    ($conj4 === "V" || $conj4 === "F")
  ) {
    document.getElementById("not3").textContent = `Nota: ${nota}`;
  } else {
    document.getElementById("not3").textContent = `No has contestado todos los campos`;
  }
};


const limpibicond = ()=>{
  document.getElementById("bicon1").value = null
  document.getElementById("bicon2").value = null
  document.getElementById("bicon3").value = null
  document.getElementById("bicon4").value = null

  document.getElementById("bicon1").style.background = null 
  document.getElementById("bicon2").style.background = null  
  document.getElementById("bicon3").style.background = null  
  document.getElementById("bicon4").style.background = null 

  
  document.getElementById("preb3").textContent = `Preguntas Correctas:`;
  document.getElementById("prem3").textContent = `Preguntas Incorrectas:`;
  document.getElementById("not3").textContent = `Nota:`;
}
const cond1 = document.getElementById("bicon1");
const cond2 = document.getElementById("bicon2");
const cond3 = document.getElementById("bicon3");
const cond4 = document.getElementById("bicon4");

cond1.addEventListener("change", (e) => {
  document.getElementById("bicon1").style.background = null;
});
cond2.addEventListener("change", (e) => {
  document.getElementById("bicon2").style.background = null;
});
cond3.addEventListener("change", (e) => {
  document.getElementById("bicon3").style.background = null;
});
cond4.addEventListener("change", (e) => {
  document.getElementById("bicon4").style.background = null;
});

/**  */
const condi = () => {
  let acumb = 0;
  let acumm = 0;
  let $conj1 = document.getElementById("cond1").value,
    $conj2 = document.getElementById("cond2").value,
    $conj3 = document.getElementById("cond3").value,
    $conj4 = document.getElementById("cond4").value;

  if ($conj1 === "V") {
    document.getElementById("cond1").style.background = "#9CFF90";
    acumb++;
  } else if ($conj1 === "F") {
    document.getElementById("cond1").style.background = "#FCA6A6";
    acumm++;
  }

  if ($conj2 === "F") {
    document.getElementById("cond2").style.background = "#9CFF90";
    acumb++;
  } else if ($conj2 == "V") {
    document.getElementById("cond2").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj3 === "F") {
    document.getElementById("cond3").style.background = "#9CFF90";
    acumb++;
  } else if ($conj3 === "V") {
    document.getElementById("cond3").style.background = "#FCA6A6";
    acumm++;
  }
  if ($conj4 === "F") {
    document.getElementById("cond4").style.background = "#9CFF90";
    acumb++;
  } else if ($conj4 === "V") {
    document.getElementById("cond4").style.background = "#FCA6A6";
    acumm++;
  }

  document.getElementById("preb4").textContent = `Preguntas Correctas: ${acumb}`;
  document.getElementById("prem4").textContent = `Preguntas Incorrectas: ${acumm}`;
  let nota = acumb * 1.25;

  if (
    ($conj1 === "V" || $conj1 === "F") &&
    ($conj2 === "V" || $conj2 === "F") &&
    ($conj3 === "V" || $conj3 === "F") &&
    ($conj4 === "V" || $conj4 === "F")
  ) {
    document.getElementById("not4").textContent = `Nota: ${nota}`;
  } else {
    document.getElementById("not4").textContent = `No has contestado todos los campos`;
  }
};


const limpicond = ()=>{
  document.getElementById("cond1").value = null
  document.getElementById("cond2").value = null
  document.getElementById("cond3").value = null
  document.getElementById("cond4").value = null

  document.getElementById("cond1").style.background = null 
  document.getElementById("cond2").style.background = null  
  document.getElementById("cond3").style.background = null  
  document.getElementById("cond4").style.background = null 

  
  document.getElementById("preb4").textContent = `Preguntas Correctas:`;
  document.getElementById("prem4").textContent = `Preguntas Incorrectas:`;
  document.getElementById("not4").textContent = `Nota:`;
}
const dis1 = document.getElementById("cond1");
const dis2 = document.getElementById("cond2");
const dis3 = document.getElementById("cond3");
const dis4 = document.getElementById("cond4");

dis1.addEventListener("change", (e) => {
  document.getElementById("cond1").style.background = null;
});
dis2.addEventListener("change", (e) => {
  document.getElementById("cond2").style.background = null;
});
dis3.addEventListener("change", (e) => {
  document.getElementById("cond3").style.background = null;
});
dis4.addEventListener("change", (e) => {
  document.getElementById("cond4").style.background = null;
});
