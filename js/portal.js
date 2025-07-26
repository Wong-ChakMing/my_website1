const header = ["MY USTHUB", "UST Portal", "USTHub", "Pure's USTHub"];
a = document.getElementById("myh1");

function randomHeader(){
    setInterval(() => {
        let x = Math.random() * header.length;
        while (a.textContent === header[Math.floor(x)]) {
            x = Math.random() * header.length;
        }
        a.textContent = header[Math.floor(x)];
    }, 500);
}

function inorderHeader(){
    setInterval(() => {
        let head= header.shift();
        header.push(head);
        a.textContent = head;
    }, 500);
}

function recursion_test(num){
    if (num===0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    return recursion_test(num-1)*num;
}
function checkingMouseDegree() {
    let lastX = 0;
    let lastY = 0;
    const customCursor = document.querySelector('.custom-cursor');
    
    // Position cursor on mouse move
    document.addEventListener('mousemove', function(event) {
        const currentX = event.clientX;
        const currentY = event.clientY;
        
        // Update cursor position (offset by half the cursor size for centering)
        customCursor.style.left = (currentX - 32) + 'px';
        customCursor.style.top = (currentY - 32) + 'px';
        
        // Calculate the change in position (delta)
        const deltaX = currentX - lastX;
        const deltaY = currentY - lastY;
        
        // Only update rotation if there's actual movement
        if (deltaX !== 0 || deltaY !== 0) {
            // Calculate angle in radians, then convert to degrees
            let angleRadians = Math.atan2(deltaY, deltaX);
            let degree = (angleRadians * 180) / Math.PI;
            
            // Normalize to 0-360 degrees
            degree = (degree + 180) % 360;
            
            // Adjust for the original rocket pointing at 135°
            // Subtract 135° to align the rocket with movement direction
            let rotationDegree = degree - 135;
            
            // Round to nearest integer
            degree = Math.round(degree);
            rotationDegree = Math.round(rotationDegree);
            
            // Update cursor rotation using CSS custom property
            document.documentElement.style.setProperty('--cursor-rotation', `${rotationDegree}deg`);
        }
        // Update last position
        lastX = currentX;
        lastY = currentY;
    });
    
    // Hide custom cursor when hovering over text inputs
    const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
    textInputs.forEach(input => {
        input.addEventListener('mouseenter', () => {
            customCursor.style.display = 'none';
        });
        input.addEventListener('mouseleave', () => {
            customCursor.style.display = 'block';
        });
    });
}

const searchFunction = () => {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchUrl, '_blank');
}

inorderHeader();
checkingMouseDegree();
console.log(recursion_test(5)); // 120
// randomHeader();
