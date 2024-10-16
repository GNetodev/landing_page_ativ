const dataAniversario = new Date("Feb 15, 2025, 00:00:01");
const timeStampDoEvento = dataAniversario.getTime();

const contadorHoras = setInterval (function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (diaEmMs)) / (horasEmMs));
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % (horasEmMs) / (minutosEmMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);