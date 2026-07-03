const blob = document.getElementById("glow-blob");

document.body.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    // Animate the blob to the cursor's current position
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { 
        duration: 3000, // Controls how long the "trail" takes to catch up
        fill: "forwards" 
    });
}