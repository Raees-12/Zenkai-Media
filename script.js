// Portfolio data - Update this with your own portfolio items
const portfolioData = [
  {
    id: 1,
    category: 'ad-edits',
    categoryLabel: 'Ad Edits',
    title: "Sample Ad Edit 1",
    description: "Professional ad video editing with attractive animations and engaging visuals.",
    imageUrl: "",
    link: "#"
  },
  {
    id: 2,
    category: 'ad-edits',
    categoryLabel: 'Ad Edits',
    title: "Sample Ad Edit 2",
    description: "High-quality promotional video with custom-made graphics and creative animations.",
    imageUrl: "",
    link: "#"
  },
  {
    id: 3,
    category: 'thumbnails',
    categoryLabel: 'Thumbnails',
    title: "Creative Thumbnail 1",
    description: "Eye-catching thumbnail design that drives clicks and engagement.",
    imageUrl: "",
    link: null
  },
  {
    id: 4,
    category: 'video-edits',
    categoryLabel: 'Video Edits',
    title: "Documentary Edit",
    description: "Professional documentary editing with cinematic cuts, dramatic music, and well-organized b-rolls.",
    imageUrl: "",
    link: "#"
  },
  {
    id: 5,
    category: 'video-edits',
    categoryLabel: 'Video Edits',
    title: "Vlog Edit",
    description: "Engaging vlog editing with sound design and bold typography.",
    imageUrl: "",
    link: "#"
  },
  {
    id: 6,
    category: 'ad-edits',
    categoryLabel: 'Ad Edits',
    title: "Brand Collaboration Video",
    description: "Promotional video with alluring text overlays and high-quality effects.",
    imageUrl: "",
    link: "#"
  },
  {
    id: 7,
    category: 'video-edits',
    categoryLabel: 'Video Edits',
    title: "Tutorial Video",
    description: "Clear and concise tutorial video with visually appealing graphics.",
    imageUrl: "",
    link: "#"
  },
  {
    id: 8,
    category: 'thumbnails',
    categoryLabel: 'Thumbnails',
    title: "Creative Thumbnail 2",
    description: "A jaw-dropping visual encapsulating amazement and intrigue.",
    imageUrl: "Assets/Thumbnail 2.png",
    link: null
  },
  {
    id: 9,
    category: 'thumbnails',
    categoryLabel: 'Thumbnails',
    title: "Creative Thumbnail 3",
    description: "Professional thumbnail design with striking visuals and bold colors.",
    imageUrl: "Assets/Thumbnail 1.png",
    link: null
  }
];

// Create dots for cards
function createCardDots() {
  const dots = document.createElement('div');
  dots.className = 'card-dots';
  for (let i = 0; i < 9; i++) {
    const dot = document.createElement('span');
    dot.style.cssText = 'width: 6px; height: 6px; border-radius: 50%; background-color: #d1d5db;';
    dots.appendChild(dot);
  }
  return dots;
}

// Create portfolio card
function createPortfolioCard(item) {
  const card = document.createElement('div');
  card.className = 'portfolio-card';
  card.dataset.category = item.category;
  
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'portfolio-image-wrapper';
  
  if (item.link && item.link !== '#') {
    const imageLink = document.createElement('a');
    imageLink.href = item.link;
    imageLink.target = '_blank';
    imageLink.rel = 'noopener noreferrer';
    
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    img.className = 'portfolio-image';
    
    imageLink.appendChild(img);
    imageWrapper.appendChild(imageLink);
  } else {
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    img.className = 'portfolio-image';
    imageWrapper.appendChild(img);
  }
  
  const content = document.createElement('div');
  content.style.cssText = 'display: flex; flex-direction: column; flex-grow: 1;';
  
  const category = document.createElement('span');
  category.className = 'portfolio-category';
  category.textContent = item.categoryLabel;
  
  const title = document.createElement('h3');
  title.className = 'portfolio-title';
  if (item.link && item.link !== '#') {
    const titleLink = document.createElement('a');
    titleLink.href = item.link;
    titleLink.target = '_blank';
    titleLink.rel = 'noopener noreferrer';
    titleLink.textContent = item.title;
    title.appendChild(titleLink);
  } else {
    title.textContent = item.title;
  }
  
  const description = document.createElement('p');
  description.className = 'portfolio-description';
  description.textContent = item.description;
  
  content.appendChild(category);
  content.appendChild(title);
  content.appendChild(description);
  
  if (item.link && item.link !== '#') {
    const linkDiv = document.createElement('div');
    linkDiv.style.marginTop = 'auto';
    
    const projectLink = document.createElement('a');
    projectLink.href = item.link;
    projectLink.target = '_blank';
    projectLink.rel = 'noopener noreferrer';
    projectLink.className = 'portfolio-link';
    projectLink.innerHTML = 'See project <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>';
    
    linkDiv.appendChild(projectLink);
    content.appendChild(linkDiv);
  }
  
  card.appendChild(imageWrapper);
  card.appendChild(content);
  card.appendChild(createCardDots());
  
  return card;
}

// Render portfolio items
function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = '';
  
  const filteredData = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);
  
  filteredData.forEach(item => {
    grid.appendChild(createPortfolioCard(item));
  });
}

// Portfolio filter functionality
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filter = button.dataset.filter;
      
      // Render filtered portfolio
      renderPortfolio(filter);
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  initPortfolioFilters();
  initSmoothScroll();
});