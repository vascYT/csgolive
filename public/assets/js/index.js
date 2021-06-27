document.getElementById("createRoom").addEventListener("click", function() {
    var id = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
       id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    window.location.replace("/room/" + id);
});