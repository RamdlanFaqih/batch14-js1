const bahasaIndonesia = 90;
const bahasaInggris = 91;
const matematika = 90;
const ipa = undefined;

if (bahasaIndonesia === undefined || bahasaInggris === undefined || matematika === undefined || ipa === undefined) {
    console.log('Nilai Harus diisi')
} else {
    let rataRata = (bahasaIndonesia + bahasaInggris + ipa + matematika) / 4;
    let grade;
        if (rataRata >= 90 && rataRata <= 100) {
            grade = 'A';
        }else if (rataRata >= 80 && rataRata <=90){
            grade = 'B';
        }else if (rataRata >= 70 && rataRata <=80){
            grade = 'C';
        }else if (rataRata >= 60 && rataRata <= 70){
            grade = 'D';
        }else {
            grade = 'E';
        }

console.log(`totalNilai: ${rataRata} ,grade: ${grade}`);
}