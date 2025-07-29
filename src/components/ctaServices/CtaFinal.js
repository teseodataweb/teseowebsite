export function animateOnScroll(ref) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  }
  