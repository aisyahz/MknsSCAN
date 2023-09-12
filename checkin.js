document.addEventListener("DOMContentLoaded", async () => {
  const qrReader = new Html5Qrcode("qrReader");

  const guestContainer = document.getElementById("guestContainer");
  const guestName = document.getElementById("guestName");
  const guestContact = document.getElementById("guestContact");
  const guestEmail = document.getElementById("guestEmail");
  const submitBtn = document.getElementById("submitBtn");

  await qrReader.start(
    { facingMode: "environment" },
    {},
    async (qrCodeMessage) => {
      try {
        const data = JSON.parse(qrCodeMessage);
        console.log("Parsed QR Code Data:", data);

        // Get data from server
        if (data.name == "peter") data.status = "checked-in";
        else data.status = "pending";

        // guestContainer.classList.remove("border-primary");
        // guestContainer.classList.remove("border-success");
        // guestContainer.classList.remove("border-secondary");
        // guestStatus.classList.remove("bg-primary");
        // guestStatus.classList.remove("bg-success");
        // guestStatus.classList.remove("bg-success");

        // if (data.status == "checked-in") {
        //   guestContainer.classList.add("border-success");
        //   guestStatus.classList.add("bg-success");
        //   submitBtn.disabled = true;
        // } else {
        //   guestContainer.classList.add("border-secondary");
        //   guestStatus.classList.add("bg-secondary");
        //   submitBtn.disabled = false;
        // }

        guestName.value = data.name;
        guestStatus.textContent = data.status;
        guestContact.value = data.nombor;
        guestEmail.value = data.email;
      } catch (error) {
        console.error("Error parsing QR code data:", error);
      }
    }
  );
});
