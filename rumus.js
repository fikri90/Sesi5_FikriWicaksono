export function kalkulator (angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2; // operator penjumlahan
        case "-":
            return angka1 - angka2; // operator pengurangan
        case "/":
            return angka2 !== 0 ? angka1 / angka2: 
            "Error: Tidak bisa dibagi 0!" // operator pembagian menggunakan pengecualian dibagi 0
        case "*":
            return angka1 * angka2; // operator perkalian
        default:
            return "Operator tidak valid!"; 
    }
}