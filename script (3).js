// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Milimpiano", img: "Milimpiano.png" },
    { name: "Samulimpio", img: "Samulimpio.png" },
    { name: "Dormileón", img: "Dormileon.png" },
    { name: "León Alfa", img: "Leon_Alfa.png" },
    { name: "Pataleto", img: "Pataleto.png" },
    { name: "Chupatinas", img: "Chupatinas.png" },
    { name: "Cortarroz", img: "Cortarroz.png" },
    { name: "Socarrat", img: "Socarrat.png" },
    { name: "Atierrador", img: "Atierrador.png" },
    { name: "Capi-Cachas", img: "Capi-Cachas.png" },
    { name: "Devoramonios", img: "Devoramonios.png" },
    { name: "Devoralmas", img: "Devoralmas.png" },
    { name: "Fracaguas", img: "Fracaguas.png" },
    { name: "Chancleto", img: "Chancleto.png" },
    { name: "Komecasa", img: "Komecasa.png" },
    { name: "Sincara", img: "Sincara.png" },
    { name: "Losiento", img: "Losiento.png" },
    { name: "Domiplof", img: "Domiplof.png" },
    { name: "Niebli", img: "Niebli.png" },
    { name: "Nébula", img: "Nebula.png" },
    { name: "Don Kaldo", img: "Don_Kaldo.png" },
    { name: "Falsillo", img: "Falsillo.png" },
    { name: "Apelicano", img: "Apelicano.png" },
    { name: "Trielespejo", img: "Trielespejo.png" },
    { name: "Ambrosio", img: "Ambrosio.png" },
    { name: "Kimera", img: "Kimera.png" },
    { name: "Kimerreal", img: "Kimerreal.png" },
    { name: "Aterracota", img: "Aterracota.png" },
    { name: "Quierodeso", img: "Quierodeso.png" },
    { name: "Gambulloso", img: "Gambulloso.png" },
    { name: "Indiligencio", img: "Indiligencio.png" },
    { name: "Tanquivocado", img: "Tanquivocado.png" },
    { name: "Mimoniquí", img: "Mimoniqui.png" },
    { name: "Mamuguanto", img: "Mamuguanto.png" },
    { name: "Rayael", img: "Rayael.png" },
    { name: "Cazarayos", img: "Cazarayos.png" },
    { name: "Zudado", img: "Zudado.png" },
    { name: "Eleganfibio", img: "Eleganfibio.png" },
    { name: "Frikigarto", img: "Frikigarto.png" },
    { name: "Patis", img: "Patis.png" },
    { name: "Picassina", img: "Picassina.png" },
    { name: "Chíclope", img: "Chiclope.png" },
    { name: "Buchinyan", img: "Buchinyan.png" },
    { name: "Somnia", img: "Somnia.png" },
    { name: "Cellisca", img: "Cellisca.png" },
    { name: "Rapidizo", img: "Rapidizo.png" },
    { name: "Oso Boco", img: "Oso_Boco.png" },
    { name: "Kappafalso", img: "Kappafalso.png" },
    { name: "Tigrappa", img: "Tigrappa.png" },
    { name: "Gran Mangu", img: "Gran_Mangu.png" },
    { name: "Algacabana", img: "Algacabana.png" },
    { name: "Níscala", img: "Niscala.png" },
    { name: "Curaníscala", img: "Curaniscala.png" },
    { name: "Arenito", img: "Arenito.png" },
    { name: "Don Arenito", img: "Don_Arenito.png" },
    { name: "Sombrillo", img: "Sombrillo.png" },
    { name: "Sombrillogro", img: "Sombrillogro.png" },
    { name: "Paupermán", img: "Pauperman.png" },
    { name: "Nomi", img: "Nomi.png" },
    { name: "Gran Nomi", img: "Gran_Nomi.png" },
    { name: "Torivinador", img: "Torivinador.png" },
    { name: "Torivino", img: "Torivino.png" },
    { name: "DON-CHAN", aliases: ["DON-CHAN", "Don chan"], img: "Don-chan.png" },
    { name: "Rayito", img: "Rayito.png" },
    { name: "Kyryn", img: "Kyryn.png" },
    { name: "Unikyryn", img: "Unikyryn.png" },
    { name: "Envelo", img: "Envelo.png" },
    { name: "Cafeíno", img: "Cafeino.png" },
    { name: "Acelgo", img: "Acelgo.png" },
    { name: "Morenaso", img: "Morenaso.png" },
    { name: "Prestragón", img: "Prestragon.png" },
    { name: "Bolsadrón", img: "Bolsadron.png" },
    { name: "Espaoi", img: "Espaoi.png" },
    { name: "Hazlotú", img: "Hazlotu.png" },
    { name: "Záppingla", img: "Zappingla.png" },
    { name: "Rataleza", img: "Rataleza.png" },
    { name: "Frivolia", img: "Frivolia.png" },
    { name: "Babamandra", img: "Babamandra_A.png" },
    { name: "Dracunyan", img: "Dracunyan.png" },
    { name: "Ojezno", img: "Ojezno.png" },
    { name: "Joyezno", img: "Joyezno.png" },
    { name: "Caldewok", img: "Caldewok_A.png" },
    { name: "Mirlobirlo", img: "Mirlobirlo.png" },
    { name: "Estréquito", img: "Estrequito.png" },
    { name: "Vrumbo", img: "Vrumbo.png" },
    { name: "Peluco", img: "Peluco.png" },
    { name: "Foliculio", img: "Foliculio.png" },
    { name: "No-No", img: "No-No.png" },
    { name: "Batallitos", img: "Batallitos.png" },
    { name: "Eskakeo", img: "Eskakeo.png" },
    { name: "Lena", img: "Lena.png" },
    { name: "Malena", img: "Malena.png" },
    { name: "Termascino", img: "Termascino_A.png" },
    { name: "Aracnio", img: "Aracnio.png" },
    { name: "Aracne", img: "Aracne.png" },
    { name: "Tortícolis", img: "Torticolis.png" },
    { name: "Malmet", img: "Malmet.png" },
    { name: "Agorerana", img: "Agorerana.png" },
    { name: "Desolvidador", img: "Desolvidador.png" },
    { name: "Memorio", img: "Memorio.png" },
    { name: "Mosquereta", img: "Mosquereta.png" },
    { name: "Bronquereta", img: "Bronquereta.png" },
    { name: "Nereida", img: "Nereida.png" },
    { name: "Sirenia", img: "Sirenia.png" },
    { name: "Oceánida", img: "Oceanida.png" },
    { name: "Cisnia", img: "Cisnia.png" },
    { name: "Vacilagón", img: "Vacilagon.png" },
    { name: "Bergantín", img: "Bergantin_A.png" },
    { name: "Chafarina", img: "Chafarina.png" },
    { name: "Repeloso", img: "Repeloso.png" },
    { name: "Octosierpe", img: "Octosierpe.png" },
    { name: "Melonyan", img: "Melonyan.png" },
    { name: "Naranyan", img: "Naranyan.png" },
    { name: "Kiwinyan", img: "Kiwinyan.png" },
    { name: "Uvanyan", img: "Uvanyan.png" },
    { name: "Fresanyan", img: "Fresanyan.png" },
    { name: "Sandinyan", img: "Sandinyan.png" },
    { name: "Robokapp", img: "Robokapp.png" },
    { name: "Robokoma", img: "Robokoma.png" },
    { name: "Roboabuzampa", img: "Roboabuzampa.png" },
    { name: "Robocantonio", img: "Robocantonio.png" },
    { name: "Robonoko", img: "Robonoko.png" },
    { name: "Robodraqui", img: "Robodraqui.png" },
    { name: "Maravinyan", img: "Maravinyan.png" },
    { name: "Robonyan 2.0", img: "Robonyan_2.0.png" },
    { name: "Sailornyan", img: "Sailornyan.png" },
    { name: "Tigrenyan", img: "Tigrenyan.png" },
    { name: "Hovernyan", img: "Hovernyan.png" },
    { name: "Darknyan", img: "Darknyan.png" },
    { name: "Jibakoma", img: "Jibakoma.png" },
    { name: "Jetnyan", img: "Jetnyan.png" },
    { name: "Injustio", img: "Injustio.png" },
    { name: "Malicia", img: "Malicia.png" },
    { name: "Implacablio", img: "Implacablio.png" },
    { name: "Inaguantablio", img: "Inaguantablio.png" },
    { name: "Destrukto", img: "Destrukto.png" },
    { name: "Chupatodo", img: "Chupatodo.png" },
    { name: "Aterrahorror", img: "Aterrahorror.png" },
    { name: "Apéstula", img: "Apestula.png" },
    { name: "Kappamalo", img: "Kappamalo.png" },
    { name: "Sombrío", img: "Sombrio.png" },
    { name: "Pillastre", img: "Pillastre.png" },
    { name: "Toragorero", img: "Toragorero.png" },
    { name: "Cardado", img: "Cardado.png" },
    { name: "Trampeida", img: "Trampeida.png" },
    { name: "Malisnia", img: "Malisnia.png" },
    { name: "Keji Do Khan", img: "Keji_Do_Khan.png" },
    { name: "Gruñón Khan", img: "Gruñon_Khan.png" },
    { name: "Puergazán", img: "Puergazan.png" },
    { name: "Torreznio", img: "Torreznio.png" },
    { name: "Pupilo Panja", img: "Pupilo_Panja.png" },
    { name: "Panja Pro", img: "Panja_Pro.png" },
    { name: "Samuranguila", img: "Samuranguila.png" },
    { name: "Anguilocio", img: "Anguilocio.png" },
    { name: "Minipulpobola", img: "Minipulpobola.png" },
    { name: "Pulpobola Rey", img: "Pulpobola_Rey.png" },
    { name: "Aranecido", img: "Aranecido.png" },
    { name: "Desaranecido", img: "Desaranecido.png" },
    { name: "Sumodón", img: "Sumodon.png" },
    { name: "Supersumodón", img: "Supersumodon.png" },
    { name: "Desinverest", img: "Desinverest.png" },
    { name: "Inverestupción", img: "Inverestupcion.png" },
    { name: "Contentallo", img: "Contentallo.png" },
    { name: "Talloestrella", img: "Talloestrella.png" },
    { name: "Tripasqueleto", img: "Tripasqueleto.png" },
    { name: "Meganyan", img: "Meganyan.png" },
    { name: "Capitán Penas", img: "Capitan_Penas.png" },
    { name: "Cicluracán", img: "Cicluracan.png" },
    { name: "Áurea", img: "Aurea.png" },
    { name: "Argenta", img: "Argenta.png" },
    { name: "Lady Desdicha", img: "Lady_Desdicha.png" },
    { name: "Lady Démona", img: "Lady_Demona.png" },
    { name: "Manojo", img: "Manojo.png" },
    { name: "Torbellóptico", img: "Torbelloptico.png" },
    { name: "Martillete", img: "Martillete.png" },
    { name: "Capipalante", img: "Capipalante.png" },
    { name: "Pili", img: "Pili.png" },
    { name: "Mili", img: "Mili.png" },
    { name: "Lady Espanto", img: "Lady_Espanto.png" },
    { name: "Kali Mera", img: "Kali_Mera.png" },
    { name: "Aureosqueleto", img: "Aureosqueleto.png" },
    { name: "Diamanqueleto", img: "Diamanqueleto.png" },
    { name: "Manazas", img: "Manazas.png" },
    { name: "Retinado", img: "Retinado.png" },
    { name: "Tomoko", img: "Tomoko.png" },
    { name: "Ultra N", img: "Ultra_N.png" },
    { name: "Ultra K", img: "Ultra_K.png" },
    { name: "Jibanyan S", img: "Jibanyan_S.png" },
    { name: "Komasan S", img: "Komasan_S.png" },
    { name: "Komajiro S", img: "Komajiro_S.png" },
    { name: "Oskyubi", img: "Oskyubi.png" },
    { name: "Iluminocto", img: "Iluminocto.png" },
    { name: "Gargantúo", img: "Gargantuo_A.png" },
    { name: "Cazamentires", img: "Cazamentires_A.png" },
    { name: "Demoniorco", img: "Demoniorco_A.png" },
    { name: "Rúbeo J", img: "Rubeo_J.png" },
    { name: "Gran Sabueso", img: "Gran_Sabueso.png" },
    { name: "Intelecto", img: "Intelecto.png" },
    { name: "Nulo", img: "Nulo.png" },
    { name: "Testructor", img: "Testructor.png" },
    { name: "Infinitio", img: "Infinitio.png" },
    { name: "Expresso", img: "Expresso.png" },
    { name: "Kabukio", img: "Kabukio.png" }
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});
