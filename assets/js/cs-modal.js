/* ===== INTERSECTION OBSERVER ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
 
/* ===== CASE STUDY DATA ===== */
const caseStudies = {
  noeopad: {
    title: 'Noeopad NoteTaking Website',
    label: '01 — Note-taking App',
    sections: [
      {
        heading: 'The Problem: Why I made NoeoPad',
        text: `I made NoeoPad because most note-taking apps have too many buttons and menus. When there are too many choices, it becomes hard to start writing. This is especially difficult for people with ADHD or people who get overwhelmed easily.\n\nWhat I found:\n• Too many features make it hard to focus on just one task.\n• Bright white screens can be painful or distracting to look at for a long time.\n• Standard apps feel "busy," which can cause anxiety.`,
        images: [
          { type: 'single', src: 'assets/images/noeopad-1.png', caption: 'Reducing Decision Paralysis: A single-column task creator to maintain linear focus.' }
        ]
      },
      {
        heading: 'The Design: Making the app easy to use',
        text: `I wanted NoeoPad to feel calm and predictable. Every design choice was made to help the user stay focused and feel safe while using the tool.\n\nHow I made it better:\n• The Purple Background: I used a soft purple color instead of white. This is easier on the eyes and feels more private.\n• Simple Navigation: I only used two main areas: "Notes" and "To-Do." This means the user does not have to learn a complex menu.\n• Big Buttons: I made the "Create" button large and put it in a place that is easy to reach with a thumb on a phone.`,
        images: [
          { type: 'single', src: 'assets/images/noeopad-4.png', caption: 'The "New Task" screen: Everything is in one straight line so it is easy to follow.' }
        ]
      },
      {
        heading: 'Features: Helping the user focus',
        text: `I added specific features to help the brain stay on one task at a time. I focused on making the app feel "quiet."\n\nSpecific features I added:\n• Background Blur: When you open a new note, the rest of the screen gets blurry. This helps your eyes stay on what you are currently writing.\n• Dark Mode: I made a dark version of the app for people who are sensitive to light. I used soft greys instead of pure black to keep the contrast comfortable.\n• Accessibility: I added labels to buttons so that screen readers can describe them clearly to users who cannot see the screen`,
        images: [
          { type: 'single', src: 'assets/images/noeopad-2.png', caption: 'Left: The blur helps you focus.' },
          { type: 'single', src: 'assets/images/noeopad-3.png', caption: 'Right: Dark mode for light sensitivity.' }
        ]
      },
      {
        heading: 'Next Steps: What I learned',
        text: `Designing this app taught me that "less is more." Sometimes, taking a button away is more helpful than adding a new one.\n\nWhat I changed during the project:\n• I originally hid the toolbar, but I realized it was hard for people to find. So I made it more obvious.\n• My Goal: I want to keep testing this with real people to see if the buttons are easy to find and if the "save" message is clear enough.\n• The Lesson: Good design should be invisible. It should just work without making the user think too hard.`
      }
    ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Figma']
    },
  ankidroid: {
  title: 'AnkiDroid Mobile App Redesign',
  label: '02 — Learning App UX Redesign',
  sections: [
    {
      heading: 'The Problem: Why I redesigned AnkiDroid',
      text: `I redesigned AnkiDroid because the app felt confusing and difficult to use, especially for new users. When I first used it, I did not understand what the app was for or how to start learning.\n\nThis is especially challenging for users with ADHD or Dyslexia, where too much information and unclear language can make it hard to focus.\n\nWhat I found:\n• The app lacks clear storytelling — users don’t understand how it works at first.\n• Terms like “Deck” are confusing and not beginner-friendly.\n• The interface feels outdated and visually unengaging.\n• Too many options are shown too early, which creates overwhelm.`,
      images: [
        { type: 'single', src: 'assets/images/anki-1.png', caption: 'The original interface feels complex and unclear for first-time users.' }
      ]
    },
    {
      heading: 'The Design: Making learning simple and clear',
      text: `I wanted the app to feel simple, human, and easy to understand from the first screen. Instead of overwhelming users, I focused on guiding them step-by-step.\n\nHow I made it better:\n• Clear Onboarding: I introduced a short onboarding flow that explains how memory works in a simple and relatable way.\n• Better Language: I replaced technical terms like “Deck” with “Study Topic” to make the app easier to understand.\n• Guided First Steps: Instead of showing all features at once, I guided users to create their first flashcard immediately.\n• Clean Layout: I used more spacing and simpler layouts to reduce visual noise and improve focus.`,
      images: [
        { type: 'single', src: 'assets/images/anki-2.png', caption: 'Onboarding screens that explain the app in a simple and engaging way.' }
      ]
    },
    {
      heading: 'Features: Reducing overwhelm and improving focus',
      text: `I focused on features that help users stay focused and understand what to do next. The goal was to remove confusion and make the experience feel calm.\n\nSpecific improvements:\n• Friendly Empty States: Instead of “You have no decks yet,” I used clear guidance like “Create a study topic to start learning.”\n• Step-by-Step Flow: Users are guided from creating a topic → adding a flashcard → studying it.\n• Simplified Actions: I reduced unnecessary options and only showed what the user needs at each step.\n• Accessible Design: I used short sentences, clear hierarchy, and readable layouts to support users with ADHD and Dyslexia.`,
      images: [
        { type: 'single', src: 'assets/images/anki-3.png', caption: 'A simplified home screen with clear next actions.' },
        { type: 'single', src: 'assets/images/anki-4.png', caption: 'Creating a flashcard is simple and focused.' }
      ]
    },
    {
      heading: 'Next Steps: What I learned',
      text: `This project taught me that good design is not about adding more features, but about reducing confusion.\n\nWhat I learned:\n• Simplicity is powerful — removing complexity improves usability.\n• Language matters — small wording changes can make a big difference.\n• First impressions are critical — onboarding shapes the entire experience.\n• Not everything needs to be redesigned — improving key moments is often enough.\n\nMy goal is to continue improving this design by testing it with real users and refining how information is introduced.\n\nThe biggest lesson: design should guide the user naturally without making them think too hard.`
    }
  ],
  tech: ['Figma']
  },
  monochromea: {
    title: 'Monochromea: Image Processing App',
    label: '03 — Desktop Application',
    sections: [
      {
        heading: 'Problem & Context',
        text: `Image editing tools sit on a spectrum: consumer apps like phone filters are too limiting, while professional tools like Photoshop carry enormous learning curves. Monochromea was designed to occupy the thoughtful middle ground — powerful enough for creative control, simple enough to use without a manual.\n\nThe primary user is a hobbyist photographer or a developer needing quick, repeatable image transformations without a subscription or a steep ramp-up. The context is a desktop session — likely a dual-monitor setup or a laptop with a large trackpad.`,
        images: [
        {
          type: 'single',
          src: 'assets/images/noeopad.png',
          caption: 'A cluttered competitor vs. Noeopad\'s minimal canvas'
        }
      ]
      },
      {
        heading: 'Design & Interaction Decisions',
        text: `The application layout uses a three-panel structure: file browser on the left, image canvas in the centre, and adjustment controls on the right — a spatial model users of any image editor will recognise immediately, reducing the learning curve through familiar metaphors.\n\nFilter controls use sliders rather than number inputs to keep interactions tactile and allow real-time visual feedback. The decision to show the original and edited images side-by-side in a split-view was made specifically to give users a reference point, reducing second-guessing and undo loops.\n\nFor accessibility within a desktop context, I ensured all controls are keyboard navigable, with clear focus states, and tooltips on every icon button to describe function without cluttering the UI with labels.`
      },
      {
        heading: 'User Reflection',
        text: `I considered that the three-panel layout, while familiar, could feel overwhelming on smaller laptop screens. I adjusted the design to allow panels to collapse into icon-only mode, freeing canvas space when needed.\n\nThe biggest hypothetical usability risk is the filter pipeline — users applying multiple filters in sequence may not understand the order of operations affects the output. I would test this with a task-based session: "Apply greyscale, then adjust brightness." Observing whether users drag filter order intuitively would determine whether the pipeline needs visual explanations or simply drag-to-reorder affordances.\n\nIf I rebuilt this, I'd invest more in undo history visibility — a breadcrumb-style edit history in the bottom bar would give users confidence to experiment without fear of losing work.`
      }
    ],
    tech: ['Python', 'PyQt6', 'OpenCV', 'Pillow', 'NumPy']
  }
};
 
/* ===== TYPEWRITER ===== */
function typewrite(el, text, speed = 18) {
  return new Promise(resolve => {
    let i = 0;
    el.classList.add('typing');
    el.textContent = '';
    function tick() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(tick, speed * (0.7 + Math.random() * 0.6));
      } else {
        el.classList.remove('typing');
        resolve();
      }
    }
    tick();
  });
}
 
/* ===== BUILD IMAGE BLOCK ===== */
function buildImageBlock(imgData) {
  const wrap = document.createElement('div');
  wrap.className = 'cs-img-block';
 
  if (imgData.type === 'single') {
    wrap.classList.add('cs-img-single');
    wrap.innerHTML = `
      <img src="${imgData.src}" alt="${imgData.caption || ''}" title="Click to enlarge" style="cursor:zoom-in">
      ${imgData.caption ? `<p class="cs-img-caption">${imgData.caption}</p>` : ''}
    `;
  } else if (imgData.type === 'before-after') {
    wrap.classList.add('cs-img-before-after');
    wrap.innerHTML = `
      <div class="cs-ba-panel">
        <span class="cs-ba-label before">Before</span>
        <img src="${imgData.before}" alt="Before" title="Click to enlarge" style="cursor:zoom-in">
        ${imgData.beforeCaption ? `<p class="cs-img-caption">${imgData.beforeCaption}</p>` : ''}
      </div>
      <div class="cs-ba-panel">
        <span class="cs-ba-label after">After</span>
        <img src="${imgData.after}" alt="After" title="Click to enlarge" style="cursor:zoom-in">
        ${imgData.afterCaption ? `<p class="cs-img-caption">${imgData.afterCaption}</p>` : ''}
      </div>
    `;
    if (imgData.caption) {
      const cap = document.createElement('p');
      cap.className = 'cs-img-caption';
      cap.style.marginTop = '0.5rem';
      cap.textContent = imgData.caption;
      wrap.appendChild(cap);
    }
  } else if (imgData.type === 'grid') {
    const grid = document.createElement('div');
    grid.className = 'cs-img-grid';
    imgData.images.forEach(img => {
      grid.innerHTML += `
        <div class="cs-img-grid-item">
          <img src="${img.src}" alt="${img.caption || ''}" title="Click to enlarge" style="cursor:zoom-in">
          ${img.caption ? `<p class="cs-img-caption">${img.caption}</p>` : ''}
        </div>
      `;
    });
    wrap.appendChild(grid);
    if (imgData.caption) {
      const cap = document.createElement('p');
      cap.className = 'cs-img-caption';
      cap.style.marginTop = '0.5rem';
      cap.textContent = imgData.caption;
      wrap.appendChild(cap);
    }
  }
 
  // Lightbox on click
  wrap.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
 
  return wrap;
}
 
/* ===== LIGHTBOX ===== */
const lightbox = document.createElement('div');
lightbox.className = 'cs-lightbox';
lightbox.innerHTML = `<button class="cs-lightbox-close">✕</button><img src="" alt="enlarged view">`;
document.body.appendChild(lightbox);
const lbImg = lightbox.querySelector('img');
const lbClose = lightbox.querySelector('.cs-lightbox-close');
 
function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  // don't restore overflow here — modal might still be open
}
lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
 
/* ===== MODAL ===== */
const overlay = document.getElementById('csOverlay');
const backdrop = document.getElementById('csBackdrop');
const closeBtn = document.getElementById('csClose');
const csBody = document.getElementById('csBody');
 
function openModal(projectKey) {
  const data = caseStudies[projectKey];
  if (!data) return;
 
  document.getElementById('csLabel').textContent = data.label;
  document.getElementById('csTitle').textContent = data.title;
 
  // Build sections — text targets + image placeholders
  csBody.innerHTML = '';
  data.sections.forEach((s, idx) => {
    const sec = document.createElement('div');
    sec.className = 'cs-section';
    sec.innerHTML = `
      <div class="cs-section-heading">${s.heading}</div>
      <div class="cs-type-target" id="csType${idx}"></div>
    `;
    // Attach image placeholder divs (hidden until text finishes)
    if (s.images && s.images.length) {
      s.images.forEach((imgData, iIdx) => {
        const block = buildImageBlock(imgData);
        block.id = `csImg${idx}_${iIdx}`;
        sec.appendChild(block);
      });
    }
    csBody.appendChild(sec);
  });
 
  // Tech pills
  const pillDiv = document.createElement('div');
  pillDiv.innerHTML = `<div class="cs-section-heading">Stack</div><div class="cs-tech-pills">${data.tech.map(t => `<span class="cs-pill">${t}</span>`).join('')}</div>`;
  csBody.appendChild(pillDiv);
 
  // Show overlay
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
 
  // Typewrite sequentially, then reveal images
  (async () => {
    for (let i = 0; i < data.sections.length; i++) {
      const el = document.getElementById(`csType${i}`);
      await typewrite(el, data.sections[i].text, i === 0 ? 14 : 10);
      // Reveal any images for this section
      const sec = data.sections[i];
      if (sec.images && sec.images.length) {
        await new Promise(r => setTimeout(r, 150));
        sec.images.forEach((_, iIdx) => {
          const block = document.getElementById(`csImg${i}_${iIdx}`);
          if (block) {
            setTimeout(() => block.classList.add('revealed'), iIdx * 120);
          }
        });
        await new Promise(r => setTimeout(r, sec.images.length * 120 + 300));
      } else {
        await new Promise(r => setTimeout(r, 200));
      }
    }
  })();
}
 
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { csBody.innerHTML = ''; }, 350);
}
 
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.classList.contains('open')) closeModal(); });
 
document.querySelectorAll('.btn-case-study').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.project));
});