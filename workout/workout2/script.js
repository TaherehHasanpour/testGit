const list = ["apple", "kiwi", "banana", "fig", "pear", "date"];

const sorted = list.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length; // مرتب‌سازی بر اساس طول
  }
  return a.localeCompare(b); // در صورت تساوی، مرتب‌سازی الفبایی
});

console.log(sorted);
