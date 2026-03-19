/* ========================================
   Luxe Nails Studio - JavaScript
   Simple interactivity for the nail salon website
   ======================================== */

/**
 * Scroll to the Contact section when "Book Now" button is clicked
 * Uses smooth scrolling for a better user experience
 */
function scrollToContact() {
    // Get the contact section element
    const contactSection = document.getElementById('contact');
    
    // Scroll to the contact section smoothly
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

/**
 * Copy the salon email address to the clipboard
 * Displays a success message when copied
 */
function copyEmailToClipboard() {
    // The email address to copy
    const email = 'hello@luxenailsstudio.com';
    
    // Use the Clipboard API to copy text to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // If copy is successful, show a message
        showCopyMessage('Email copied!');
    }).catch(err => {
        // If copy fails, show an error message
        console.error('Failed to copy email:', err);
        showCopyMessage('Failed to copy email', 'error');
    });
}

/**
 * Display a message to show email was copied
 * @param {string} message - The message to display
 * @param {string} type - Optional type ('error' or success by default)
 */
function showCopyMessage(message, type = 'success') {
    // Get the message container
    const copyMessageDiv = document.getElementById('copyMessage');
    
    // Set the message text
    copyMessageDiv.textContent = message;
    
    // Add the 'show' class to display the message
    copyMessageDiv.className = 'copy-message show';
    
    // Automatically hide the message after 3 seconds
    setTimeout(() => {
        copyMessageDiv.className = 'copy-message';
        copyMessageDiv.textContent = '';
    }, 3000);
}
