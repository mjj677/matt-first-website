let calculation = localStorage.getItem('calculation') || '';
      displayCalculation()

      function displayCalculation(){
        document.querySelector('.js-show-calculation').innerHTML = localStorage.getItem('calculation');
      }

      function updateCalculation(value) {
        calculation += value;
        localStorage.setItem('calculation', calculation);
        displayCalculation()
      }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

      function handleKeyboardInput(event) {
        const key = event.key;

        // Check if the key is a number or an operator
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
          updateCalculation(key);
        } else if (key === 'Enter' || key === '=') {
          // If Enter key is pressed, perform calculation
          calculation = eval(calculation);
          localStorage.setItem('calculation', calculation);
          displayCalculation();
        } else if (key === 'Escape') {
          // If Escape key is pressed, clear the calculation
          calculation = '';
          localStorage.setItem('calculation', calculation);
          displayCalculation();
        }
      }

      // Attach the keyboard event listener to the document
      document.addEventListener('keydown', handleKeyboardInput);