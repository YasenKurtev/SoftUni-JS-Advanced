function search() {

   let list = Array.from(document.getElementById('towns').children);
   let input = document.getElementById('searchText').value;
   let counter = 0;

   for (let element of list) {
      if (element.textContent.includes(input)) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         counter++;
      }
   }

   document.getElementById('result').textContent = `${counter} matches found`;

}