function addingEventListener() {
    const button = document.getElementById('button'); // Replace 'button' with the ID of your element
  
    function clickAlert() {
      alert('Button clicked!');
    }
  
    button.addEventListener('click', clickAlert);
  }