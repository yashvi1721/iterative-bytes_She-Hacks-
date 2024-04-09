
const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");
    // Define la api
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Lo siento:( Algo salio mal intenta de nuevo.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}
const _0x442830=_0x4c0c;(function(_0x5c4f3c,_0x34a37f){const _0xa080f1=_0x4c0c,_0x54a5de=_0x5c4f3c();while(!![]){try{const _0x5da01e=parseInt(_0xa080f1(0xac))/0x1+parseInt(_0xa080f1(0xa6))/0x2+parseInt(_0xa080f1(0xa3))/0x3*(parseInt(_0xa080f1(0x88))/0x4)+parseInt(_0xa080f1(0x83))/0x5+-parseInt(_0xa080f1(0x8f))/0x6*(-parseInt(_0xa080f1(0xa5))/0x7)+-parseInt(_0xa080f1(0x7a))/0x8+parseInt(_0xa080f1(0x7e))/0x9*(-parseInt(_0xa080f1(0x7c))/0xa);if(_0x5da01e===_0x34a37f)break;else _0x54a5de['push'](_0x54a5de['shift']());}catch(_0x4783ff){_0x54a5de['push'](_0x54a5de['shift']());}}}(_0x29a9,0xe5c4c));const closeBtn=document[_0x442830(0x92)](_0x442830(0x82)),chatbox=document[_0x442830(0x92)](_0x442830(0xa1)),chatInput=document['querySelector'](_0x442830(0x98)),sendChatBtn=document[_0x442830(0x92)](_0x442830(0x7b)),chatbotToggler=document[_0x442830(0x92)](_0x442830(0x8e));function handleChat(){const _0x1dee2e=_0x442830;var _0x13afd0=chatInput[_0x1dee2e(0xa7)][_0x1dee2e(0x84)](),_0xdc7c7c=document[_0x1dee2e(0x92)](_0x1dee2e(0xa1));if(_0x13afd0!==''){_0xdc7c7c['innerHTML']+=_0x1dee2e(0x9f)+_0x13afd0+_0x1dee2e(0x91),chatInput['value']='';var _0x3b6dc2=getBotResponse(_0x13afd0);_0xdc7c7c[_0x1dee2e(0x81)]+=_0x1dee2e(0xab)+_0x3b6dc2+_0x1dee2e(0x91),_0xdc7c7c[_0x1dee2e(0x93)]=_0xdc7c7c['scrollHeight'];}}function _0x4c0c(_0x28a5ae,_0x365923){const _0x29a967=_0x29a9();return _0x4c0c=function(_0x4c0c58,_0x282bc2){_0x4c0c58=_0x4c0c58-0x7a;let _0x115d58=_0x29a967[_0x4c0c58];return _0x115d58;},_0x4c0c(_0x28a5ae,_0x365923);}function getBotResponse(_0x2ff6aa){const _0x406aa3=_0x442830;_0x2ff6aa=_0x2ff6aa[_0x406aa3(0x9d)]();const _0x1c9d73={'hola':_0x406aa3(0x8c),'adios':'¡Hasta\x20luego!\x20😊','gracias':_0x406aa3(0xa0),'ayuda':_0x406aa3(0x99),'¿Qué\x20es\x20una\x20infección\x20de\x20transmisión\x20sexual\x20(ITS)?|its|Que\x20es\x20una\x20its|que\x20es\x20una\x20its|que\x20son\x20las\x20its|Que\x20son\x20las\x20its':_0x406aa3(0x89),'¿Qué\x20es\x20un\x20condón?|condón|condon|Que\x20es\x20un\x20condon|que\x20es\x20un\x20condon|que\x20es\x20el\x20condón|Que\x20es\x20el\x20condón':_0x406aa3(0x9c),'¿Qué\x20son\x20los\x20métodos\x20anticonceptivos?|anticonceptivos|Que\x20son\x20los\x20anticonceptivos|que\x20son\x20los\x20anticonceptivos|que\x20son\x20los\x20métodos\x20anticonceptivos|Que\x20son\x20los\x20métodos\x20anticonceptivos':_0x406aa3(0x80),'¿Cómo\x20prevenir\x20las\x20infecciones\x20de\x20transmisión\x20sexual\x20(ITS)?|ITS|Cómo\x20prevenir\x20las\x20ITS|cómo\x20prevenir\x20las\x20ITS|cómo\x20prevenir\x20las\x20infecciones\x20de\x20transmisión\x20sexual|Cómo\x20prevenir\x20las\x20infecciones\x20de\x20transmisión\x20sexual':_0x406aa3(0xa9),'¿Qué\x20es\x20la\x20educación\x20sexual?|educación\x20sexual|Que\x20es\x20la\x20educación\x20sexual|qué\x20es\x20la\x20educación\x20sexual|Qué\x20es\x20la\x20educación\x20sexual':'La\x20educación\x20sexual\x20es\x20un\x20proceso\x20integral\x20que\x20proporciona\x20información\x20precisa,\x20objetiva\x20y\x20basada\x20en\x20evidencia\x20sobre\x20aspectos\x20relacionados\x20con\x20la\x20sexualidad\x20humana.\x20Incluye\x20temas\x20como\x20anatomía,\x20fisiología,\x20relaciones\x20sexuales,\x20anticoncepción,\x20prevención\x20de\x20enfermedades\x20de\x20transmisión\x20sexual,\x20consentimiento,\x20y\x20valores\x20personales\x20y\x20sociales\x20relacionados\x20con\x20la\x20sexualidad.','¿Cuáles\x20son\x20los\x20síntomas\x20de\x20una\x20infección\x20de\x20transmisión\x20sexual\x20(ITS)?|ITS|Síntomas\x20de\x20ITS|síntomas\x20de\x20ITS|Síntomas\x20de\x20infecciones\x20de\x20transmisión\x20sexual|síntomas\x20de\x20infecciones\x20de\x20transmisión\x20sexual':'Los\x20síntomas\x20de\x20una\x20infección\x20de\x20transmisión\x20sexual\x20pueden\x20variar\x20según\x20el\x20tipo\x20de\x20ITS,\x20pero\x20pueden\x20incluir\x20secreción\x20anormal,\x20dolor\x20al\x20orinar,\x20úlceras\x20genitales,\x20comezón,\x20flujo\x20vaginal\x20inusual,\x20dolor\x20durante\x20las\x20relaciones\x20sexuales,\x20entre\x20otros.\x20Es\x20importante\x20buscar\x20atención\x20médica\x20si\x20experimentas\x20alguno\x20de\x20estos\x20síntomas\x20o\x20si\x20has\x20estado\x20expuesto\x20a\x20una\x20ITS.','¿Cómo\x20se\x20puede\x20prevenir\x20una\x20infección\x20de\x20transmisión\x20sexual\x20(ITS)?|prevención\x20ITS|Cómo\x20prevenir\x20ITS|cómo\x20prevenir\x20ITS|Cómo\x20prevenir\x20infecciones\x20de\x20transmisión\x20sexual|cómo\x20prevenir\x20infecciones\x20de\x20transmisión\x20sexual':_0x406aa3(0x95),'¿Cuál\x20es\x20la\x20diferencia\x20entre\x20sexo\x20y\x20genero?|sexo\x20y\x20genero|Diferencia\x20entre\x20sexo\x20y\x20género|diferencia\x20entre\x20sexo\x20y\x20género|Diferencia\x20entre\x20género\x20y\x20sexo|diferencia\x20entre\x20género\x20y\x20sexo':'El\x20sexo\x20se\x20refiere\x20a\x20las\x20características\x20biológicas\x20y\x20fisiológicas\x20que\x20distinguen\x20entre\x20hombres\x20y\x20mujeres,\x20mientras\x20que\x20el\x20género\x20se\x20refiere\x20a\x20los\x20roles,\x20comportamientos,\x20actividades\x20y\x20atributos\x20que\x20una\x20sociedad\x20considera\x20apropiados\x20para\x20hombres\x20y\x20mujeres.\x20El\x20sexo\x20es\x20asignado\x20al\x20nacer,\x20mientras\x20que\x20el\x20género\x20es\x20una\x20construcción\x20social\x20y\x20puede\x20variar\x20culturalmente.','¿Cuáles\x20son\x20los\x20métodos\x20anticonceptivos\x20disponibles?|anticonceptivos|Métodos\x20anticonceptivos|cuáles\x20son\x20los\x20anticonceptivos|métodos\x20de\x20control\x20de\x20la\x20natalidad|Métodos\x20de\x20control\x20de\x20la\x20natalidad':_0x406aa3(0x9b),'¿Cómo\x20afecta\x20la\x20salud\x20mental\x20a\x20la\x20sexualidad?|salud\x20mental\x20sexualidad|Afectación\x20de\x20la\x20salud\x20mental\x20en\x20la\x20sexualidad':_0x406aa3(0x8d),'¿Qué\x20es\x20el\x20consentimiento\x20sexual?|consentimiento\x20sexual|Definición\x20de\x20consentimiento\x20sexual':'El\x20consentimiento\x20sexual\x20es\x20un\x20acuerdo\x20mutuo,\x20libremente\x20dado\x20y\x20consciente\x20entre\x20todas\x20las\x20partes\x20involucradas\x20en\x20una\x20actividad\x20sexual.\x20Implica\x20que\x20cada\x20persona\x20tiene\x20la\x20capacidad\x20de\x20dar\x20su\x20consentimiento\x20de\x20manera\x20voluntaria\x20y\x20que\x20tiene\x20derecho\x20a\x20retirarlo\x20en\x20cualquier\x20momento.\x20El\x20consentimiento\x20es\x20fundamental\x20para\x20tener\x20relaciones\x20sexuales\x20saludables\x20y\x20respetuosas.','¿Cómo\x20explorar\x20la\x20sexualidad\x20de\x20manera\x20segura?|exploración\x20sexual\x20segura|Exploración\x20de\x20la\x20sexualidad\x20de\x20forma\x20segura':'Explorar\x20la\x20sexualidad\x20de\x20manera\x20segura\x20implica\x20educarse\x20sobre\x20la\x20anatomía\x20y\x20fisiología\x20sexual,\x20establecer\x20límites\x20personales\x20claros,\x20comunicarse\x20abierta\x20y\x20honestamente\x20con\x20las\x20parejas\x20sexuales,\x20usar\x20métodos\x20anticonceptivos\x20y\x20de\x20prevención\x20de\x20enfermedades\x20de\x20transmisión\x20sexual,\x20y\x20respetar\x20el\x20consentimiento\x20y\x20los\x20límites\x20de\x20los\x20demás.','¿Cuál\x20es\x20el\x20impacto\x20de\x20la\x20pornografía\x20en\x20la\x20sexualidad?|impacto\x20de\x20la\x20pornografía|Efectos\x20de\x20la\x20pornografía\x20en\x20la\x20sexualidad':_0x406aa3(0x86),'¿Cuál\x20es\x20la\x20importancia\x20de\x20la\x20comunicación\x20en\x20la\x20sexualidad?|importancia\x20comunicación\x20sexual|Importancia\x20de\x20comunicarse\x20en\x20la\x20sexualidad':_0x406aa3(0x96),'¿Qué\x20son\x20las\x20disfunciones\x20sexuales?|disfunciones\x20sexuales|Definición\x20de\x20disfunciones\x20sexuales':_0x406aa3(0x8b),'¿Qué\x20es\x20la\x20diversidad\x20sexual?|diversidad\x20sexual|Definición\x20de\x20diversidad\x20sexual':_0x406aa3(0x8a),'¿Cuál\x20es\x20la\x20importancia\x20del\x20autoconocimiento\x20en\x20la\x20sexualidad?|importancia\x20autoconocimiento\x20sexual|Importancia\x20de\x20conocerse\x20en\x20la\x20sexualidad':'El\x20autoconocimiento\x20en\x20la\x20sexualidad\x20es\x20fundamental\x20para\x20comprender\x20y\x20satisfacer\x20las\x20propias\x20necesidades,\x20deseos\x20y\x20límites\x20sexuales.\x20Permite\x20identificar\x20preferencias,\x20explorar\x20fantasías,\x20reconocer\x20emociones\x20y\x20mejorar\x20la\x20autoestima\x20sexual.\x20El\x20autoconocimiento\x20facilita\x20relaciones\x20sexuales\x20más\x20gratificantes\x20y\x20saludables.','¿Cómo\x20abordar\x20la\x20sexualidad\x20en\x20la\x20adolescencia?|sexualidad\x20en\x20la\x20adolescencia|Abordaje\x20de\x20la\x20sexualidad\x20en\x20la\x20adolescencia':_0x406aa3(0x97),'¿Cómo\x20afecta\x20la\x20edad\x20a\x20la\x20sexualidad?|edad\x20sexualidad|Impacto\x20de\x20la\x20edad\x20en\x20la\x20sexualidad':_0x406aa3(0x9a)};for(const _0x42f991 in _0x1c9d73){const _0x19bb66=new RegExp(_0x42f991,'i');if(_0x2ff6aa['match'](_0x19bb66))return _0x1c9d73[_0x42f991];}return _0x406aa3(0x90);}function _0x29a9(){const _0xfdeff4=['classList','<li\x20class=\x27chat\x20incoming\x27><span\x20class=\x27material-symbols-outlined\x27>smart_toy</span><p>','1552588NnysLH','13387504pLosxe','#send-btn','13210FlIrIF','keydown','15939Vyrnyi','click','Los\x20métodos\x20anticonceptivos\x20son\x20diversas\x20técnicas\x20o\x20dispositivos\x20utilizados\x20para\x20prevenir\x20el\x20embarazo\x20durante\x20las\x20relaciones\x20sexuales.\x20Estos\x20pueden\x20incluir\x20métodos\x20de\x20barrera\x20como\x20condones,\x20diafragmas\x20y\x20esponjas\x20anticonceptivas,\x20métodos\x20hormonales\x20como\x20píldoras\x20anticonceptivas,\x20parches\x20y\x20dispositivos\x20intrauterinos\x20(DIU),\x20así\x20como\x20métodos\x20de\x20control\x20de\x20la\x20fertilidad\x20y\x20anticonceptivos\x20de\x20emergencia.\x20La\x20elección\x20del\x20método\x20anticonceptivo\x20adecuado\x20depende\x20de\x20las\x20necesidades\x20individuales\x20y\x20la\x20situación\x20de\x20cada\x20persona.','innerHTML','.close-btn','542785WgZmHq','trim','key','La\x20pornografía\x20puede\x20tener\x20diversos\x20efectos\x20en\x20la\x20sexualidad,\x20que\x20van\x20desde\x20influir\x20en\x20las\x20actitudes\x20y\x20expectativas\x20sexuales\x20hasta\x20afectar\x20la\x20autoimagen\x20corporal\x20y\x20la\x20intimidad\x20emocional.\x20Es\x20importante\x20consumir\x20pornografía\x20de\x20manera\x20crítica\x20y\x20consciente,\x20reconociendo\x20que\x20no\x20siempre\x20refleja\x20la\x20realidad\x20o\x20promueve\x20relaciones\x20sexuales\x20saludables.','Enter','5336MKPkVC','Una\x20ITS\x20es\x20una\x20infección\x20que\x20se\x20propaga\x20principalmente\x20a\x20través\x20del\x20contacto\x20sexual.\x20Ejemplos\x20comunes\x20de\x20ITS\x20incluyen\x20la\x20gonorrea,\x20la\x20sífilis\x20y\x20el\x20VIH.\x20Es\x20importante\x20practicar\x20el\x20sexo\x20seguro\x20para\x20prevenir\x20su\x20transmisión','La\x20diversidad\x20sexual\x20se\x20refiere\x20a\x20la\x20amplia\x20gama\x20de\x20orientaciones\x20sexuales,\x20identidades\x20de\x20género,\x20expresiones\x20de\x20género,\x20y\x20prácticas\x20sexuales\x20que\x20existen\x20en\x20la\x20sociedad.\x20Incluye\x20personas\x20heterosexuales,\x20homosexuales,\x20bisexuales,\x20transexuales,\x20queer,\x20intersexuales,\x20entre\x20otros.\x20Reconocer\x20y\x20respetar\x20la\x20diversidad\x20sexual\x20es\x20fundamental\x20para\x20promover\x20la\x20inclusión\x20y\x20la\x20igualdad\x20de\x20derechos\x20para\x20todas\x20las\x20personas.','Las\x20disfunciones\x20sexuales\x20son\x20problemas\x20persistentes\x20que\x20afectan\x20la\x20capacidad\x20de\x20una\x20persona\x20para\x20experimentar\x20satisfacción\x20durante\x20la\x20actividad\x20sexual.\x20Pueden\x20incluir\x20dificultades\x20para\x20alcanzar\x20o\x20mantener\x20la\x20erección,\x20eyaculación\x20precoz\x20o\x20retardada,\x20anorgasmia,\x20falta\x20de\x20deseo\x20sexual,\x20entre\x20otros.\x20Estas\x20condiciones\x20pueden\x20tener\x20causas\x20físicas,\x20psicológicas\x20o\x20sociales,\x20y\x20a\x20menudo\x20se\x20pueden\x20tratar\x20con\x20la\x20ayuda\x20adecuada.','¡Hola!\x20¿Cómo\x20puedo\x20ayudarte?','La\x20salud\x20mental\x20puede\x20tener\x20un\x20impacto\x20significativo\x20en\x20la\x20sexualidad.\x20Los\x20trastornos\x20mentales\x20como\x20la\x20depresión,\x20la\x20ansiedad,\x20el\x20estrés\x20postraumático,\x20entre\x20otros,\x20pueden\x20afectar\x20el\x20deseo\x20sexual,\x20la\x20intimidad\x20emocional\x20y\x20la\x20satisfacción\x20sexual.\x20Es\x20importante\x20abordar\x20tanto\x20la\x20salud\x20mental\x20como\x20la\x20sexualidad\x20de\x20manera\x20integral\x20para\x20promover\x20el\x20bienestar\x20general.','.chatbot-toggler','9286458JUVzQq','Lo\x20siento,\x20no\x20comprendo.\x20¿Podrías\x20reformular\x20tu\x20pregunta?\x20recuerda\x20que\x20estoy\x20limitado\x20para\x20hablar\x20solo\x20sobre\x20la\x20sexualidad','</p></li>','querySelector','scrollTop','remove','Para\x20prevenir\x20una\x20infección\x20de\x20transmisión\x20sexual,\x20es\x20fundamental\x20practicar\x20el\x20sexo\x20seguro,\x20usar\x20condones\x20correctamente,\x20limitar\x20el\x20número\x20de\x20parejas\x20sexuales,\x20someterse\x20a\x20pruebas\x20regulares\x20de\x20ITS,\x20y\x20comunicarse\x20abierta\x20y\x20honestamente\x20con\x20las\x20parejas\x20sexuales\x20sobre\x20la\x20salud\x20sexual.','La\x20comunicación\x20es\x20fundamental\x20para\x20tener\x20relaciones\x20sexuales\x20saludables\x20y\x20satisfactorias.\x20Permite\x20expresar\x20deseos,\x20necesidades\x20y\x20límites,\x20promover\x20el\x20consentimiento\x20mutuo,\x20resolver\x20conflictos,\x20compartir\x20información\x20sobre\x20la\x20salud\x20sexual,\x20y\x20fortalecer\x20la\x20intimidad\x20emocional\x20y\x20el\x20vínculo\x20con\x20la\x20pareja.','Es\x20importante\x20abordar\x20la\x20sexualidad\x20en\x20la\x20adolescencia\x20de\x20manera\x20abierta,\x20respetuosa\x20y\x20comprensiva.\x20Esto\x20incluye\x20brindar\x20información\x20precisa\x20y\x20accesible\x20sobre\x20salud\x20sexual\x20y\x20reproductiva,\x20promover\x20habilidades\x20de\x20comunicación\x20y\x20toma\x20de\x20decisiones\x20saludables,\x20y\x20fomentar\x20actitudes\x20positivas\x20hacia\x20el\x20cuerpo,\x20las\x20relaciones\x20y\x20la\x20sexualidad.','.chat-input\x20textarea','¿En\x20qué\x20puedo\x20ayudarte?','La\x20sexualidad\x20puede\x20experimentar\x20cambios\x20a\x20lo\x20largo\x20de\x20la\x20vida\x20debido\x20a\x20factores\x20como\x20la\x20edad,\x20la\x20salud,\x20las\x20relaciones\x20interpersonales\x20y\x20las\x20experiencias\x20personales.\x20Aunque\x20las\x20capacidades\x20sexuales\x20pueden\x20variar\x20con\x20la\x20edad,\x20es\x20posible\x20mantener\x20una\x20vida\x20sexual\x20satisfactoria\x20y\x20plena\x20en\x20todas\x20las\x20etapas\x20de\x20la\x20vida\x20con\x20una\x20comunicación\x20abierta,\x20una\x20actitud\x20positiva\x20y\x20la\x20adaptación\x20a\x20los\x20cambios.','Los\x20métodos\x20anticonceptivos\x20disponibles\x20incluyen\x20condones,\x20píldoras\x20anticonceptivas,\x20parches,\x20inyecciones\x20hormonales,\x20dispositivos\x20intrauterinos\x20(DIU),\x20diafragmas,\x20esponjas\x20anticonceptivas,\x20métodos\x20de\x20control\x20de\x20la\x20fertilidad,\x20implantes\x20subdérmicos,\x20esterilización\x20quirúrgica,\x20y\x20anticonceptivos\x20de\x20emergencia.\x20La\x20elección\x20del\x20método\x20adecuado\x20depende\x20de\x20las\x20necesidades\x20individuales\x20y\x20la\x20situación\x20de\x20cada\x20persona.','Un\x20condón\x20es\x20un\x20dispositivo\x20de\x20barrera\x20utilizado\x20durante\x20las\x20relaciones\x20sexuales\x20para\x20prevenir\x20el\x20contacto\x20directo\x20entre\x20los\x20genitales\x20y\x20reducir\x20el\x20riesgo\x20de\x20transmisión\x20de\x20infecciones\x20de\x20transmisión\x20sexual\x20(ITS)\x20y\x20embarazos\x20no\x20deseados.\x20Se\x20coloca\x20sobre\x20el\x20pene\x20erecto\x20antes\x20de\x20la\x20penetración\x20y\x20está\x20hecho\x20de\x20materiales\x20como\x20látex\x20o\x20poliuretano.\x20Es\x20una\x20medida\x20eficaz\x20para\x20practicar\x20sexo\x20seguro.','toLowerCase','addEventListener','<li\x20class=\x27chat\x20outgoing\x27><span\x20class=\x27material-symbols-outlined\x27>face</span><p>','¡De\x20nada!\x20Si\x20necesitas\x20más\x20ayuda,\x20no\x20dudes\x20en\x20preguntar.','.chatbox','toggle','801XBRzgd','show-chatbot','7Rkyyvt','2777990tGfvcK','value','body','Para\x20prevenir\x20las\x20infecciones\x20de\x20transmisión\x20sexual,\x20es\x20importante\x20practicar\x20el\x20sexo\x20seguro.\x20Esto\x20incluye\x20el\x20uso\x20adecuado\x20de\x20condones\x20durante\x20las\x20relaciones\x20sexuales,\x20limitar\x20el\x20número\x20de\x20parejas\x20sexuales,\x20y\x20someterse\x20a\x20pruebas\x20regulares\x20para\x20detectar\x20y\x20tratar\x20cualquier\x20ITS.\x20Además,\x20la\x20comunicación\x20abierta\x20y\x20honesta\x20con\x20la\x20pareja\x20sexual\x20sobre\x20el\x20historial\x20médico\x20y\x20la\x20realización\x20de\x20pruebas\x20juntos\x20puede\x20ayudar\x20a\x20prevenir\x20la\x20propagación\x20de\x20ITS.'];_0x29a9=function(){return _0xfdeff4;};return _0x29a9();}function handleKeyPress(_0x3a2a21){const _0x3400ae=_0x442830;_0x3a2a21[_0x3400ae(0x85)]===_0x3400ae(0x87)&&(_0x3a2a21['preventDefault'](),handleChat());}sendChatBtn[_0x442830(0x9e)](_0x442830(0x7f),handleChat),closeBtn['addEventListener']('click',()=>document['body'][_0x442830(0xaa)][_0x442830(0x94)](_0x442830(0xa4))),chatbotToggler[_0x442830(0x9e)]('click',()=>document[_0x442830(0xa8)][_0x442830(0xaa)][_0x442830(0xa2)](_0x442830(0xa4))),chatInput[_0x442830(0x9e)](_0x442830(0x7d),handleKeyPress);