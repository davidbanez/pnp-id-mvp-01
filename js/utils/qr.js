// QR Code Generator Wrapper
const QR = {
    generate(elementId, text, size = 128) {
        const container = document.getElementById(elementId);
        if (!container) return;
        container.innerHTML = '';
        new QRCode(container, {
            text: text,
            width: size,
            height: size,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
};