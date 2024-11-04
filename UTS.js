function setup() {
  createCanvas(800, 400);  // Ukuran kanvas
}

function draw() {
  // Gambar latar belakang solid (warna biru)
  background(135, 206, 240); // Mengganti gradasi dengan warna biru solid

  // Gambar awan
  drawCloud(100, 80); // Awan di kiri
  drawCloud(150, 100); // Awan tambahan di kiri
  drawCloud(300, 100); // Awan di tengah
  drawCloud(600, 70); // Awan di kanan atas
  drawCloud(500, 150); // Awan di bawah

  // Gambar matahari di antara gunung dan di bawah
  fill(255, 223, 0); // Warna kuning untuk matahari
  ellipse(400, 260, 80, 80); // Posisi dan ukuran matahari

  // Tambahkan sinar di sekitar matahari
  stroke(255, 223, 0); // Warna sinar sama dengan matahari
  strokeWeight(2);
  for (let angle = 0; angle < 360; angle += 15) {
    let x1 = 400 + cos(radians(angle)) * 50;
    let y1 = 260 + sin(radians(angle)) * 50;
    let x2 = 400 + cos(radians(angle)) * 70;
    let y2 = 260 + sin(radians(angle)) * 70;
    line(x1, y1, x2, y2); // Garis sinar keluar dari matahari
  }
  noStroke();

  // Gambar tanah atau dasar gunung
  fill(34, 139, 34); // Warna hijau untuk tanah
  rect(0, 300, width, 100); 

  // Gambar jalan
  fill(128, 128, 128); // Warna abu-abu untuk jalan
  beginShape();
  vertex(350, 400);
  vertex(450, 400);
  vertex(410, 300);
  vertex(390, 300);
  endShape(CLOSE);

  // Gambar garis marka di tengah jalan
  stroke(255); // Warna putih untuk garis marka
  strokeWeight(2);
  for (let y = 320; y < 400; y += 20) {
    line(400, y, 400, y + 10); // Garis putus-putus
  }
  noStroke();

  // Gambar gunung pertama
  fill(169, 169, 169); // Warna abu-abu untuk gunung
  triangle(0, 300, 200, 150, 400, 300); // Gunung pertama

  // Gambar gunung kedua (lebih besar dan lebih jauh di belakang)
  fill(128, 128, 128);
  triangle(400, 300, 550, 100, 710, 300); // Gunung kedua

  // Gambar puncak salju untuk gunung pertama
  fill(255); // Warna putih untuk salju
  triangle(130, 200, 200, 150, 270, 200);

  // Gambar puncak salju untuk gunung kedua
  triangle(512, 150, 550, 100, 590, 150);
  
  // Burung pertama di kiri atas
  noFill();
  stroke(1);
  strokeWeight(3);
  arc(50, 50, 30, 30, PI + QUARTER_PI, TWO_PI); // Sayap kiri burung
  arc(80, 50, 30, 30, PI, PI + HALF_PI); // Sayap kanan burung

  // Burung kedua di posisi lebih tinggi di kiri
  arc(100, 80, 30, 30, PI + QUARTER_PI, TWO_PI);
  arc(130, 80, 30, 30, PI, PI + HALF_PI);
  
  // Burung pertama di kanan atas
  noFill();
  stroke(1);
  strokeWeight(3);
  arc(650, 50, 30, 30, PI + QUARTER_PI, TWO_PI); // Sayap kiri burung
  arc(680, 50, 30, 30, PI, PI + HALF_PI); // Sayap kanan burung

  // Burung kedua di posisi lebih tinggi di kanan
  arc(700, 80, 30, 30, PI + QUARTER_PI, TWO_PI);
  arc(730, 80, 30, 30, PI, PI + HALF_PI);
}

// Fungsi untuk menggambar awan
function drawCloud(x, y) {
  fill(300); // Warna putih untuk awan
  noStroke();
  ellipse(x + 20, y + 10, 60, 50); // Awan tengah
  ellipse(x - 20, y + 10, 60, 35); // Awan kecil
  
}
