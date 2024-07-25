function slugify(title) {
    const words = title.toLowerCase().split(" "); // Перетворюємо весь рядок у нижній регістр і розділяємо на слова
    return words.join("-"); // З'єднуємо слова дефісами
}


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"