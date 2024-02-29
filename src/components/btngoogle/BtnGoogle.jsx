export default function BtnGoogle(){
    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }
    window.onload = function () {
        google.accounts.id.initialize({
          client_id: "431589170556-324luts6d23m39ve9bc1rtkkga2pava5.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
          document.getElementById("div-btn"),
          { theme: "outline", size: "large", type: "standard", shape: "pill", text: "continue_with", logo_alignment: "left" }
        );

        google.accounts.id.prompt();
    }

    return(
        <>
        <div id="div-btn"></div>       
        </>
    )
}