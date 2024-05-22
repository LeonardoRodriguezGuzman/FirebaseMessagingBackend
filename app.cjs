var admin = require("firebase-admin");
var serviceAccount = require("/home/leonardorg/Documentos/FirebaseMessagingBackend/fir-messaging-2dc3d-firebase-adminsdk-h6pkl-6ce43467cb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function enviarMensaje(tokenDispositivo, mensaje) {
    const message = {
        notification: {
            title: 'Nuevo mensaje',
            body: mensaje
        },
        token: tokenDispositivo
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('Mensaje enviado:', response);
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
    }
}

// Enviar mensaje al dispositivo mediante el token de este mismo.
const tokenReceptor = 'ftySsJL8T1GRdtPlmAQllR:APA91bFKDCsFiNvg5Sh-5DO3_wyTT77AhgRAX4l-GCat8jJVrs8jcDX9bdlo0dzo7byot2miminKBdb00IA_bcOf9sj7bAkKwUfy6AGmhjQYTzeoKHQ6I73A5itxOlTFXMnf2EV8UhNx';
const mensaje = 'Ya jala!';
enviarMensaje(tokenReceptor, mensaje);
