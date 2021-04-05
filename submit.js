$(document).ready(function () {
  
    $("#siparisForm").submit(function (e) { 
        var email = $("#email").val();
        var adSoyad = $("#adSoyad").val();
        var tel = $("#tel").val();
        var adres = $("#adres").val();
        var urun = $("#urun").val();
        var adet = $("#adet").val();
        if (email == null || email == "" || adSoyad == null || adSoyad == "" ||tel == null || tel == "" || adres == null ||adres == "" || urun == null || urun == "" || adet == null || adet == "") {
            $("#mesaj").addClass("alert alert-danger alert-dismissible fade in col-md-6 col-md-push-3 col-xs-12 col-sm-6 col-sm-push-3");
            $("#mesaj").html("<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> <strong>Hata!</strong> * ile işaretli alanlar boş bırakılamaz!");
            alert("Başarısız!");
            return false;
        } else {
            alert("Sipariş başarılı!");
            return true;
        }
    });
});