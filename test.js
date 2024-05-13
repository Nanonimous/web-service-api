function extractVideoId(videoUrl) {
    // Regular expression to match YouTube video IDs
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = videoUrl.match(regExp);
    if (match && match[2].length === 11) {
        // The video ID is the second element in the match array
        return match[2];
    } else {
        // If no match found or video ID is not 11 characters long, return null
        return null;
    }
}

// Example usage
var videoUrl = 'https://youtu.be/UK1kn-VFd7Y?si=T_NWz32lqXWZkHpS';
var videoId = extractVideoId(videoUrl);
console.log('YouTube Video ID:', videoId);