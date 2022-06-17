function create(arr) {

   for (let element of arr) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = element;
      newP.style.display = 'none';
      newDiv.addEventListener('click', onCLick);
      newDiv.appendChild(newP);
      document.getElementById('content').appendChild(newDiv);
   }

   function onCLick(ev) {
      ev.target.children[0].style.display = 'inline';
   }

}