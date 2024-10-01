const conteiner = document.querySelector(".conteiner");

const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");
// Eventos

// Gerar QR code
function genarateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerHTML = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    conteiner.classList.add("active");
    qrCodeBtn.innerHTML = "Código criado!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  genarateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    genarateQrCode();
  }
});

// Limpar área QR code

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    conteiner.classList.remove("active");
    qrCodeBtn.innerHTML = "Gerar QR Code";
  }
});
