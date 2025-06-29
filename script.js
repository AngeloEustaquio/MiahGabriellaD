function signIn() {
    alert("Julia Love Dave❤❤❤💕💕"); ("5");

}
function signIn() {

      const name = document.getElementById("name").value;

      const password = document.getElementById("password").value;

      const date = document.getElementById("date").value;

      if (name && password && date) {

        document.getElementById("message").style.display = "block";

        document.getElementById("message").innerText = `Hello, ${name}! 🎉 Have a great day!`;

        const audio = document.getElementById("audio");

        audio.play();

      } else {

        alert("Please fill in all fields!");

      }

    }
