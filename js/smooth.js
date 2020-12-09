// event pada saat link di klik
$('.page-scroll').on('click', function(){
// cara membacanya jqueri $ tolong carikan saya () elemen berupa '.page-scrol' jika ketemu .on pada saat di klik ('click') maka , memberikan function (){ berupa}
    // ambill isi href this adalah pengambilan a yang di klik a dari isi href/tujuan yg dimaksud
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);  // cara membacanya variabel elemenhref jqueri ambilkan saya tujuan yaitu href
    console.log(elemenTujuan);
});