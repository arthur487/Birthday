const dataDoEvento = new Date("jan 4, 2026 11:00:00");
const timeStamp = dataDoEvento.getTime();

const contaHoras= setInterval(function() {
    const agora = new Date();

    const TimeStampAtual = agora.getTime();

    const distanciaEvento = timeStamp - TimeStampAtual;
    
    const Dias = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24))
    const horas = Math.floor(distanciaEvento % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor(distanciaEvento % ((1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distanciaEvento % (1000 * 60) / 1000));


    console.log(Dias)
    console.log(horas)
    console.log(minutos)
    console.log(segundos)



    document.getElementById('contador').innerHTML = `${Dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaEvento < 0 ) {
        clearInterval(contaHoras);
            document.getElementById('contador').innerHTML = 'ja passou'
    }
})