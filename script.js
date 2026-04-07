/* ============================================================
   LIC. EN PSICOLOGÍA LUDMILA ALFIE — script.js
   ============================================================ */

/* ======================== SERVICE DATA ======================== */
const serviceData = {
    psicotango: {
        icon: '<i class="fa-solid fa-music"></i>',
        title: 'Psicotango',
        desc: `El Psicotango es una disciplina terapéutica que integra el tango argentino como herramienta de trabajo psicológico. A través del movimiento, la escucha corporal y el vínculo con el otro, se aborda el mundo emocional del consultante de manera profunda y vivencial.

<strong>¿Qué trabajamos?</strong>
• Comunicación no verbal y expresión emocional
• Vínculo con el otro: confianza, límites y apertura
• Autoconciencia corporal y presencia plena
• Regulación emocional a través del movimiento
• Autoestima e imagen personal

<strong>¿Para quién es?</strong>
Para personas que deseen explorar su mundo interior desde el cuerpo, que tengan dificultades vinculares o que busquen una forma diferente y vivencial de hacer terapia. No es necesario saber bailar tango para comenzar.

Cada sesión es un recorrido hacia adentro, usando el tango como lenguaje del alma.`
    },
    transpersonal: {
        icon: '<i class="fa-solid fa-infinity"></i>',
        title: 'Psicología Transpersonal',
        desc: `La Psicología Transpersonal es un enfoque que integra las dimensiones espirituales, trascendentes y de mayor potencial humano. Combinando lo mejor de la psicología occidental con neurociencias y herramientas de PNL, acompañamos procesos de transformación profunda y autoconocimiento.

<strong>¿Qué abordamos?</strong>
• Sentido de vida, propósito y dirección personal
• Crisis existenciales y espirituales
• Integración de experiencias de cambio profundo
• Expansión de la conciencia y el autoconocimiento
• Desarrollo del potencial humano más allá del síntoma

<strong>¿Para quién es?</strong>
Para personas que sientan que la psicología convencional no alcanza para responder sus preguntas más profundas, que atraviesen una búsqueda de sentido, o que deseen integrar dimensiones de su experiencia que van más allá de lo cotidiano.

Un espacio donde la psicología y la transformación personal se encuentran.`
    },
    ludopatia: {
        icon: '<i class="fa-solid fa-dice"></i>',
        title: 'Ludopatía',
        desc: `La ludopatía o juego patológico es un trastorno del control de impulsos que puede afectar profundamente la vida personal, familiar y económica de quien la padece. Con el abordaje adecuado, combinando psicología clínica, PNL y Coaching, la recuperación es completamente posible.

<strong>¿Cómo trabajamos?</strong>
• Evaluación diagnóstica personalizada e integral
• Identificación de los disparadores emocionales del juego
• Trabajo sobre la impulsividad y la toma de decisiones
• Estrategias concretas de control y prevención de recaídas
• Reconstrucción de vínculos y proyectos de vida
• Acompañamiento familiar cuando es necesario

<strong>¿A quién va dirigido?</strong>
A personas que sientan que el juego ha tomado el control de su vida, que hayan intentado parar sin lograrlo, o que noten consecuencias negativas en su economía, sus vínculos o su estado emocional.

El primer paso es pedir ayuda. Estamos para acompañarte.`
    },
    ansiedad: {
        icon: '<i class="fa-solid fa-brain"></i>',
        title: 'Ansiedad',
        desc: `La ansiedad es una de las consultas más frecuentes en la actualidad. Desde los ataques de pánico hasta la ansiedad generalizada, este malestar puede limitar significativamente la calidad de vida. Con un enfoque que combina psicología clínica, PNL y Neurociencias, encontramos herramientas reales y duraderas.

<strong>¿Qué abordamos?</strong>
• Ansiedad generalizada y preocupación excesiva
• Ataques de pánico y fobia social
• Ansiedad de anticipación y conductas de evitación
• Insomnio y tensión física asociada
• Pensamientos intrusivos y rumiación mental

<strong>Herramientas de trabajo:</strong>
• Técnicas de PNL para resignificación y anclaje emocional
• Mindfulness y regulación del sistema nervioso
• Psicoeducación: comprender qué es la ansiedad y cómo funciona
• Técnicas de respiración, relajación y gestión del cuerpo
• Recursos prácticos para aplicar con autonomía en el día a día

La ansiedad tiene tratamiento. No tenés que vivir con miedo.`
    },
    estres: {
        icon: '<i class="fa-solid fa-heart-pulse"></i>',
        title: 'Estrés',
        desc: `El estrés crónico es uno de los principales factores de riesgo para la salud mental y física en la actualidad. Cuando no se gestiona adecuadamente, puede derivar en agotamiento, problemas de salud, deterioro de los vínculos y pérdida de motivación y disfrute.

<strong>¿Cómo trabajamos?</strong>
• Identificación de los estresores principales (laborales, relacionales, personales)
• Evaluación del impacto del estrés en cuerpo y mente
• Herramientas de gestión del tiempo y priorización
• Técnicas de regulación emocional y Coaching de hábitos
• Desarrollo de rutinas de autocuidado sostenibles
• Trabajo sobre exigencia, perfeccionismo y límites personales

<strong>¿Para quién es?</strong>
Para personas que sientan que todo pesa demasiado, que estén sobrecargadas laboral o emocionalmente, que hayan perdido el disfrute de las cosas cotidianas, o que noten señales físicas de estrés como tensión, dolores de cabeza, problemas digestivos o insomnio.

Tu bienestar es una prioridad. Aprender a gestionar el estrés lo cambia todo.`
    }
};

/* ======================== DOM REFERENCES ======================== */
const hamburger    = document.getElementById('hamburger');
const navLinks     = document.getElementById('navLinks');
const navbar       = document.getElementById('navbar');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalIcon    = document.getElementById('modalIcon');
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');

/* ======================== HAMBURGER MENU ======================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ======================== NAVBAR ON SCROLL ======================== */
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ======================== ACTIVE NAV LINK ON SCROLL ======================== */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) a.classList.add('active');
            });
        }
    });
}, { passive: true });

/* ======================== SCROLL REVEAL ======================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======================== SERVICE MODALS ======================== */
function openModal(key) {
    const data = serviceData[key];
    if (!data) return;

    modalIcon.innerHTML  = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML  = data.desc.replace(/\n/g, '<br>');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.service));
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* ======================== SMOOTH SCROLL (offset navbar) ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
