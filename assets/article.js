// Fungsi showForm, mempunyai conditional statement, jika display "none" maka, saat button yang mempunyai fungsi showForm diklik, form_new_article akan muncul (dengan set display menjadi block)
function showForm(){
  if(document.getElementById("form_new_article").style.display == "none"){
    // Set display form_new_article menjadi "block" saat status style display form_new_article "none"
    document.getElementById("form_new_article").style.display = "block"
  }else{
    // Set display form_new_article menjadi "none" saat status style display form_new_article "block"
    document.getElementById("form_new_article").style.display = "none"
  }
}

// Fungsi addArticle, untuk menambahkan item article baru pada section dengan id "article-section"
function addArticle(){
  // Jika button dengan fungsi addArticle dijalankan, maka form dengan id ="form_new_article" akan "dihide" dengan set display form yang mempunyai id "form_new_article" menjadi "none"
  document.getElementById("form_new_article").style.display = "none"

  let article_title = document.getElementById("article_title").value; // Mengambil value dari input dengan id "article_title"
  let img_url = document.getElementById("img_url").value; //Mengambil value dari input dengan id "img_url"
  let content = document.getElementById("content").value; //Mengambil value dari input dengan id "content"

  //Menghitung jumlah children (lebih tepatnya jumlah div) yang ada pada section dengan id "article-section", tujuannya untuk membuat article dengan id baru
  let newNumberPosition = document.getElementById("article-section").children.length 

  const waktuDitambahkan = new Date(); //Fungsi date untuk mengambil waktu sekarang saat button dengan fungsi addArticle dipencet
  const tanggalDitambahkan = waktuDitambahkan.getDate() //Mengambil tanggal sekarang
  const bulanDitambahkan = waktuDitambahkan.getMonth() //Mengambil bulan sekarang
  const tahunDitambahkan = waktuDitambahkan.getFullYear() //Mengambil tahun sekarang
  const jamDitambahkan = waktuDitambahkan.getHours(); //Mengambil jam sekarang
  const menitDitambahkan = waktuDitambahkan.getMinutes(); //Mengambil menit sekarang

  // Menambahkan item baru pada section "article-section" sesuai dengan string di bawah yang dibuat menggunakan fungsi innerHTML.
  document.getElementById("article-section").innerHTML += `<div class="card mb-3" id="article${newNumberPosition}">
    <div class="row g-0">
      <div class="col-md-2">
        <img src="${img_url}" class="img-fluid rounded-start article-img">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">${article_title}</h5>
          <p class="card-text"><small class="text-body-secondary">published at: ${tanggalDitambahkan}/${bulanDitambahkan}/${tahunDitambahkan} ${jamDitambahkan}:${menitDitambahkan}</small></p>
          <p class="card-text">${content}</p>
          <button class="btn btn-danger" onclick="deleteArticleByPositionNumber(${newNumberPosition})">Delete</button>
        </div>
      </div>
    </div>
  </div>`

  document.getElementById("form_new_article").reset(); //Reset form, setelah semua algoritma pada fungsi sudah dijalankan
}

// Fungsi deleteArticleByPositionNumber, untuk menghilangkan (menghapus) article yang bersangkutan pada button yang diklik
function deleteArticleByPositionNumber(number){
  // Menghilangkan dom article dengan id yang sesuai
  document.getElementById(`article${number}`).remove();
}