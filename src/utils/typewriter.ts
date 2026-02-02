export function initTypewriter(elementId: string, greetings: string[]) {
  let currentGreetingIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;
  const initialDelay = 500; // Wait before starting
  
  const greetingElement = document.getElementById(elementId);
  
  if (!greetingElement) return;
  
  // Preload all greetings (forces emoji rendering)
  const hiddenPreload = document.createElement('div');
  hiddenPreload.style.position = 'absolute';
  hiddenPreload.style.visibility = 'hidden';
  hiddenPreload.textContent = greetings.join(' ');
  document.body.appendChild(hiddenPreload);
  
  // Convert string to array of characters (handles emojis properly)
  function getCharArray(str: string): string[] {
    return Array.from(str);
  }
  
  function type() {
    const currentGreeting = greetings[currentGreetingIndex];
    const chars = getCharArray(currentGreeting);
    
    if (isDeleting) {
      greetingElement!.textContent = chars.slice(0, currentCharIndex - 1).join('');
      currentCharIndex--;
    } else {
      greetingElement!.textContent = chars.slice(0, currentCharIndex + 1).join('');
      currentCharIndex++;
    }
    
    if (!isDeleting && currentCharIndex === chars.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseTime);
      return;
    }
    
    if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
    }
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
  }
  
  // Start after a small delay to ensure fonts/emojis are loaded
  setTimeout(() => {
    type();
  }, initialDelay);
}