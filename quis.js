class karyawan {
  constructor(golongan, jabatan, nama, nik) {
    this.golongan = golongan;
    this.jabatan = jabatan;
    this.nama = nama;
    this.nik = nik;

  }


}
class Manager extends karyawan {
  constructor(golongan, jabatan, nama, nik, tunjangan_golongan, tunjangan_jabatan, total_kehadiran, tunjangan_kehadiran, gaji) {
    super(golongan, jabatan, nama, nik);
    this.tunjangan_golongan = tunjangan_golongan;
    this.tunjangan_jabatan = tunjangan_jabatan;
    this.tunjangan_kehadiran = tunjangan_kehadiran;
    this.total_kehadiran = total_kehadiran;
    this.gaji = gaji;

    if (this.golongan == "a") {
      this.tunjangan_golongan = 500000;
    } else if (this.golongan == "b") {
      this.tunjangan_golongan = 1000000;
    } else if (this.golongan == "c") {
      this.tunjangan_golongan = 1500000;
    } else {

    }
    if (this.jabatan == "Manager") {
      this.tunjangan_jabatan = 2000000;
    } else {

    }
  }

  data() {
    document.getElementById("golongan").innerHTML = (`${this.golongan}` + "<br>");
    document.getElementById("jabatan").innerHTML = (`${this.jabatan}` + "<br>");
    document.getElementById("nama").innerHTML = (`${this.nama}` + "<br>");
    document.getElementById("nik").innerHTML = (`${this.nik}` + "<br>");
    document.getElementById("tunjangan_golongan").innerHTML = (`${this.tunjangan_golongan}` + "<br>");
    document.getElementById("tunjangan_jabatan").innerHTML = (`${this.tunjangan_jabatan}` + "<br>");
    document.getElementById("tunjangan_kehadiran").innerHTML = (`hari/ ${this.tunjangan_kehadiran}` + "<br>");
    document.getElementById("jumlah_kehadiran").innerHTML = (`${this.total_kehadiran * this.tunjangan_kehadiran}` + "<br>");
    document.getElementById("total_gaji").innerHTML = (`${ this.tunjangan_golongan + this.tunjangan_jabatan}` + "<br>");
  }


}

class kabag extends karyawan {
  constructor(golongan, jabatan, nama, nik, tunjangan_golongan, tunjangan_jabatan, total_kehadiran, tunjangan_kehadiran, gaji) {
    super(golongan, jabatan, nama, nik);
    this.tunjangan_golongan = tunjangan_golongan;
    this.tunjangan_jabatan = tunjangan_jabatan;
    this.tunjangan_kehadiran = tunjangan_kehadiran;
    this.total_kehadiran = total_kehadiran;
    this.gaji = gaji;
    if (this.golongan == "a") {
      this.tunjangan_golongan = 500000;
    } else if (this.golongan == "b") {
      this.tunjangan_golongan = 1000000;
    } else if (this.golongan == "c") {
      this.tunjangan_golongan = 1500000;
    } else {

    }
    if (this.jabatan == "kabag") {
      this.tunjangan_jabatan = 1000000;
    } else {

    }
  }

  data1() {
    document.getElementById("golo").innerHTML = (`${this.golongan}` + "<br>");
    document.getElementById("jaba").innerHTML = (` ${this.jabatan}` + "<br>");
    document.getElementById("namaa").innerHTML = (`${this.nama}` + "<br>");
    document.getElementById("nikk").innerHTML = (` ${this.nik}` + "<br>");
    document.getElementById("tujangan").innerHTML = (`${this.tunjangan_golongan}` + "<br>");
    document.getElementById("tuu").innerHTML = (`${this.tunjangan_jabatan}` + "<br>");
    document.getElementById("tuuu").innerHTML = (` ${this.tunjangan_kehadiran}` + "<br>");
    document.getElementById("to").innerHTML = (` ${this.total_kehadiran * this.tunjangan_kehadiran}` + "<br>");
    document.getElementById("tuuuu").innerHTML = (` ${ this.tunjangan_golongan + this.tunjangan_jabatan}` + "<br>");


  }
}

const manager = new Manager("c", "manager", "Daffa", 123, "", 2000000, 30, 1000, "");
manager.data();

const Kabag = new kabag("b", "kabag", "Ahmad", 321, "", 1000000, 30, 1000, "");
Kabag.data1();