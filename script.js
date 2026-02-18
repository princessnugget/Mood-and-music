
function selectMood(mood) {
    const result = document.getElementById('result');

    if (mood === 'happy') {
       result.innerHTML = "<h2>Happy playlist:</h2><iframe width='300' height='200' src='https://www.youtube.com/embed/vmM7h2fKdAY?si=OfBH0rj75LTs1n_5'></iframe>"; }

       if (mood === 'sad') {
        result.innerHTML = "<h2>Sad playlist:</h2><iframe width='300' height='200' src='https://www.youtube.com/embed/lQC4WQmX_As?si=bun0LxDFl7WC6kJz'></iframe>"; }

        if (mood === 'relaxed') {
            result.innerHTML = "<h2>Relaxed playlist:</h2><iframe width='300' height='200' src='https://www.youtube.com/embed/PiCJGXnEtIQ?si=y-sLBDhJ4t5TH6B-'></iframe>"; }
        }

function goHome() {
    document.getElementById('result').innerHTML = '';
}

function showPlaylist() {
    document.getElementById('result').innerHTML = "<h2>Your mood playlist:</h2>" + "<p>Happy</p>" + "<p>Sad</p>" + "<p>Relaxed</p>"; 
}