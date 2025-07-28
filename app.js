// Help texts for detailed modal information
const helpTexts = {
  subject: `Subject

Define the core focus of your image. Keep it concise ("elderly man", "futuristic cityscape"). 

Changing the subject dramatically changes Flux's overall composition and semantics. This is the foundation of your prompt - everything else builds upon this primary element.

Best Practices:
• Be specific but not overly detailed
• Use clear, descriptive nouns
• Avoid conflicting subjects in one prompt`,

  description: `Description

Add vivid adjectives, actions, and context. Longer descriptions give Flux stronger narrative guidance but can reduce creative freedom if too verbose.

This field allows you to elaborate on your subject with rich details about appearance, setting, mood, and actions.

Best Practices:
• Use descriptive adjectives sparingly
• Include relevant context and setting
• Describe actions or poses if applicable
• Balance detail with creative freedom`,

  attributes: `Attributes

Specify appearance traits like facial features, body type, age, and distinctive characteristics.

These attributes help define the physical characteristics of your subject, contributing to the overall realism and specificity of the generated image.

Best Practices:
• Focus on key distinguishing features
• Use natural, realistic descriptors
• Avoid conflicting physical traits
• Consider how attributes affect the overall mood`,

  cameraAngles: `Camera Angles

Select how the viewer sees the subject. Low angles create power and dominance; high angles imply vulnerability or diminishment.

The camera angle fundamentally changes the psychological impact and visual storytelling of your image.

Options Include:
• Wide-angle: Shows environment and context
• Close-up: Focuses on facial expressions and details
• Low angle: Creates power and authority
• High angle: Suggests vulnerability or overview
• Eye level: Natural, relatable perspective`,

  composition: `Composition

Rule-of-thirds, leading lines, and other compositional techniques affect scene balance and storytelling.

Good composition guides the viewer's eye and creates visual interest. These techniques are fundamental to professional photography.

Key Techniques:
• Rule of thirds: Places subjects on intersection points
• Leading lines: Direct attention to the subject
• Foreground/background separation: Creates depth
• Symmetrical balance: Creates harmony and stability
• Environmental context: Shows subject in setting`,

  cameraModels: `Camera Model

Real-world camera names lend authenticity and influence the characteristics of the generated image. Different camera sensors and color science create distinct looks.

Professional cameras have signature looks that Flux recognizes and can replicate in the generated imagery.

Popular Choices:
• Canon EOS R5: Excellent for portraits with natural skin tones
• Sony A7R V: High resolution with sharp detail
• Nikon Z9: Professional sports and portrait photography
• Leica M11: Classic, film-like aesthetic
• Hasselblad: Medium format luxury look`,

  lensTypes: `Lens Type

Focal length controls field of view and depth. Wide lenses (14-35mm) create expansive views; telephoto lenses (85-200mm+) compress backgrounds and isolate subjects.

The lens choice dramatically affects perspective, depth of field, and the overall look of your image.

Lens Categories:
• Ultra-wide (14-24mm): Dramatic perspective, wide scenes
• Wide-angle (24-35mm): Environmental context
• Standard (50mm): Natural human perspective
• Portrait (85-135mm): Flattering compression, background blur
• Telephoto (200mm+): Strong background compression`,

  cameraSettings: `Camera Settings

Aperture, ISO, and shutter speed control exposure and creative effects. f/1.4 creates beautiful bokeh; high ISO adds grain; specific shutter speeds freeze or blur motion.

These technical settings affect the aesthetic and technical quality of the image.

Key Settings:
• f/1.2-1.8: Shallow depth of field, strong bokeh
• f/2.8-4.0: Balanced sharpness and background separation
• f/8-11: Maximum sharpness, good for landscapes
• ISO 100-400: Clean, noise-free images
• ISO 800+: Adds character but may introduce grain`,

  lightingTypes: `Lighting Type

Defines mood and texture. Natural light feels authentic and organic; studio lighting gives polished, controlled results.

Lighting is one of the most important aspects of photography, dramatically affecting mood, texture, and overall image quality.

Lighting Options:
• Golden hour: Warm, soft, flattering natural light
• Soft window light: Even, natural illumination
• Studio softbox: Controlled, professional lighting
• Rembrandt lighting: Classic portrait technique
• Cinematic lighting: Dramatic, movie-like atmosphere`,

  styleMood: `Style & Mood

Overall aesthetic direction. Ultra-realistic maximizes photographic fidelity; cinematic adds dramatic color grading and atmosphere.

This setting determines the overall feel and processing style of your generated image.

Style Options:
• Ultra-realistic: Maximum photographic accuracy
• Cinematic: Movie-like color grading and drama
• Editorial fashion: High-end magazine aesthetic
• Documentary: Natural, unprocessed look
• Fine art portrait: Artistic interpretation
• Commercial: Clean, polished advertising style`,

  guidanceScale: `Guidance Scale

Higher values (3.0-4.0) enforce strict prompt adherence at the cost of creative freedom. Lower values (1.5-2.5) allow more AI creativity but may deviate from your prompt.

This parameter controls how closely Flux follows your prompt versus allowing creative interpretation.

Recommended Settings:
• 1.5-2.0: Maximum creativity, loose interpretation
• 2.5-3.0: Balanced creativity and prompt adherence
• 3.0-3.5: Strong prompt following (recommended for photorealism)
• 3.5-4.0: Strict adherence, minimal creative deviation`,

  steps: `Inference Steps

More steps generally produce finer detail and better quality but take longer to generate. 30-50 steps are recommended for Flux Dev model.

This controls how many refinement iterations the AI performs during image generation.

Step Guidelines:
• 20-30 steps: Faster generation, good for testing
• 30-40 steps: Balanced quality and speed
• 40-50 steps: High quality, recommended for final images
• 50+ steps: Diminishing returns, much slower`,

  resolution: `Resolution

Pixel dimensions affect detail level and aspect ratio. Higher resolutions provide more detail but require more processing power and time.

Choose based on your intended use and the level of detail required.

Common Resolutions:
• 1024x1024: Square format, balanced processing
• 1024x768: Landscape orientation, good for scenes
• 768x1024: Portrait orientation, ideal for people
• 1344x768: Wide landscape for panoramic views
• 1536x640: Ultra-wide for cinematic compositions`
};

// Application data
const appData = {
  attributes: ["None", "Beautiful facial features", "Expressive eyes", "Natural skin texture", "Professional makeup", "Casual appearance", "Elegant styling", "Athletic build", "Mature appearance", "Youthful features", "Distinctive characteristics", "Natural expression", "Other"],
  cameraModels: ["None", "Canon EOS R5", "Canon EOS R6 II", "Canon 5D Mark IV", "Nikon Z9", "Nikon Z8", "Nikon Z6III", "Nikon D850", "Sony A7R V", "Sony A7 IV", "Sony A9 III", "Sony A1", "Fujifilm X-T5", "Fujifilm X-H2S", "Leica M11", "Hasselblad X2D 100C", "Phase One XF IQ4", "iPhone 15 Pro", "Google Pixel 8 Pro", "Other"],
  lensTypes: ["None", "14mm ultra-wide", "16mm ultra-wide", "24mm wide-angle", "35mm wide-angle", "50mm standard", "85mm portrait", "100mm portrait", "135mm telephoto", "200mm telephoto", "300mm super-telephoto", "24-70mm f/2.8 zoom", "70-200mm f/2.8 zoom", "85mm f/1.2 macro", "100mm f/2.8 macro", "35mm f/1.4 prime", "50mm f/1.8 prime", "Other"],
  cameraSettings: ["None", "f/1.2 shallow DOF", "f/1.4 portrait", "f/1.8 standard", "f/2.8 versatile", "f/4.0 landscape", "f/5.6 detailed", "f/8.0 sharp", "ISO 100 clean", "ISO 200 natural", "ISO 400 balanced", "ISO 800 low-light", "1/125s standard", "1/250s action", "1/60s portrait", "Other"],
  lightingTypes: ["None", "Golden hour sunlight", "Soft window light", "Studio softbox", "Natural overcast", "Hard directional light", "Rim backlighting", "Split lighting", "Butterfly lighting", "Rembrandt lighting", "Loop lighting", "Broad lighting", "Short lighting", "High-key bright", "Low-key dramatic", "Cinematic lighting", "LED panel lighting", "Ring light beauty", "Natural candlelight", "Neon ambient", "Other"],
  styleMood: ["None", "Ultra-realistic", "Cinematic", "Editorial fashion", "Documentary style", "Fine art portrait", "Commercial photography", "Lifestyle natural", "Dramatic moody", "Bright and airy", "Warm and cozy", "Cool and modern", "Vintage aesthetic", "High-fashion glamour", "Candid authentic", "Professional headshot", "Artistic creative", "Minimalist clean", "Other"],
  composition: ["None", "Rule of thirds", "Center composition", "Leading lines", "Foreground bokeh", "Background separation", "Environmental context", "Close-up detail", "Wide establishing shot", "Over-shoulder angle", "Low angle power", "High angle overview", "Eye-level natural", "Dutch angle dynamic", "Symmetrical balance", "Other"],
  cameraAngles: ["None", "Wide-angle shot", "Long shot", "Medium shot", "Close-up", "Extreme close-up", "Medium close-up", "Full shot", "Cowboy shot", "Bird's eye view", "Worm's eye view", "High angle", "Low angle", "Eye level", "Dutch angle", "Over-the-shoulder", "Point of view", "Reaction shot", "Other"]
};

// DOM Elements
let elements = {};

// Application state
let formData = {
  subject: '',
  description: '',
  attributes: '',
  composition: '',
  cameraAngles: '',
  cameraModel: '',
  lensType: '',
  cameraSettings: '',
  lightingType: '',
  styleMood: '',
  guidanceScale: 3.0,
  inferenceSteps: 40,
  resolution: '1024x1024'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing app');
  initializeElements();
  populateDropdowns();
  setupEventListeners();
  setupHelpSystem();
  updateSliderValues();
  generatePrompt();
});

// Initialize DOM elements
function initializeElements() {
  console.log('Initializing elements');
  elements = {
    // Form inputs
    subject: document.getElementById('subject'),
    description: document.getElementById('description'),
    attributes: document.getElementById('attributes'),
    attributesOther: document.getElementById('attributes-other'),
    composition: document.getElementById('composition'),
    compositionOther: document.getElementById('composition-other'),
    cameraAngles: document.getElementById('camera-angles'),
    cameraAnglesOther: document.getElementById('camera-angles-other'),
    cameraModel: document.getElementById('camera-model'),
    cameraModelOther: document.getElementById('camera-model-other'),
    lensType: document.getElementById('lens-type'),
    lensTypeOther: document.getElementById('lens-type-other'),
    cameraSettings: document.getElementById('camera-settings'),
    cameraSettingsOther: document.getElementById('camera-settings-other'),
    lightingType: document.getElementById('lighting-type'),
    lightingTypeOther: document.getElementById('lighting-type-other'),
    styleMood: document.getElementById('style-mood'),
    styleMoodOther: document.getElementById('style-mood-other'),
    
    // Sliders and selects
    guidanceScale: document.getElementById('guidance-scale'),
    guidanceValue: document.getElementById('guidance-value'),
    inferenceSteps: document.getElementById('inference-steps'),
    stepsValue: document.getElementById('steps-value'),
    resolution: document.getElementById('resolution'),
    
    // Output and controls
    generatedPrompt: document.getElementById('generated-prompt'),
    charCount: document.getElementById('char-count'),
    copyBtn: document.getElementById('copy-btn'),
    resetBtn: document.getElementById('reset-btn'),
    exportBtn: document.getElementById('export-btn'),
    notification: document.getElementById('notification'),
    
    // Help system
    helpModal: document.getElementById('helpModal'),
    helpModalTitle: document.getElementById('helpModalTitle'),
    helpModalContent: document.getElementById('helpModalContent'),
    closeModal: document.querySelector('.close-modal'),
    modalBackdrop: document.querySelector('.modal-backdrop')
  };
  
  // Check if camera angles element exists
  if (!elements.cameraAngles) {
    console.error('Camera angles element not found!');
  } else {
    console.log('Camera angles element found successfully');
  }
}

// Populate all dropdowns with data
function populateDropdowns() {
  console.log('Populating dropdowns');
  const dropdownMappings = [
    { element: elements.attributes, data: appData.attributes, name: 'attributes' },
    { element: elements.composition, data: appData.composition, name: 'composition' },
    { element: elements.cameraAngles, data: appData.cameraAngles, name: 'cameraAngles' },
    { element: elements.cameraModel, data: appData.cameraModels, name: 'cameraModel' },
    { element: elements.lensType, data: appData.lensTypes, name: 'lensType' },
    { element: elements.cameraSettings, data: appData.cameraSettings, name: 'cameraSettings' },
    { element: elements.lightingType, data: appData.lightingTypes, name: 'lightingType' },
    { element: elements.styleMood, data: appData.styleMood, name: 'styleMood' }
  ];

  dropdownMappings.forEach(({ element, data, name }) => {
    if (!element) {
      console.error(`Element ${name} not found!`);
      return;
    }
    
    console.log(`Populating ${name} with ${data.length} options`);
    // Clear existing options first
    element.innerHTML = '';
    
    data.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      element.appendChild(optionElement);
    });
    
    console.log(`${name} populated successfully`);
  });
}

// Setup help system
function setupHelpSystem() {
  console.log('Setting up help system');
  
  // Add click listeners to all help icons
  document.querySelectorAll('.help-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const field = this.getAttribute('data-field');
      openHelpModal(field);
    });
  });
  
  // Close modal listeners
  if (elements.closeModal) {
    elements.closeModal.addEventListener('click', closeHelpModal);
  }
  
  if (elements.modalBackdrop) {
    elements.modalBackdrop.addEventListener('click', closeHelpModal);
  }
  
  // ESC key listener
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.helpModal && !elements.helpModal.classList.contains('hidden')) {
      closeHelpModal();
    }
  });
  
  console.log('Help system setup complete');
}

// Open help modal
function openHelpModal(field) {
  if (!elements.helpModal || !helpTexts[field]) return;
  
  const helpContent = helpTexts[field];
  const lines = helpContent.split('\n');
  const title = lines[0];
  const content = lines.slice(1).join('\n').trim();
  
  // Set modal title
  if (elements.helpModalTitle) {
    elements.helpModalTitle.textContent = title;
  }
  
  // Set modal content with proper formatting
  if (elements.helpModalContent) {
    const formattedContent = content
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.includes('•') || paragraph.includes(':')) {
          // Handle lists and sections
          return `<div class="help-section">${paragraph.replace(/\n/g, '<br>')}</div>`;
        } else {
          // Regular paragraphs
          return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
        }
      })
      .join('');
    
    elements.helpModalContent.innerHTML = formattedContent;
  }
  
  // Show modal
  elements.helpModal.classList.remove('hidden');
}

// Close help modal
function closeHelpModal() {
  if (elements.helpModal) {
    elements.helpModal.classList.add('hidden');
  }
}

// Setup all event listeners
function setupEventListeners() {
  console.log('Setting up event listeners');
  
  // Text inputs
  if (elements.subject) elements.subject.addEventListener('input', updateFormData);
  if (elements.description) elements.description.addEventListener('input', updateFormData);
  
  // Dropdowns and their "other" inputs
  setupDropdownWithOther('attributes');
  setupDropdownWithOther('composition');
  setupDropdownWithOther('cameraAngles');
  setupDropdownWithOther('cameraModel');
  setupDropdownWithOther('lensType');
  setupDropdownWithOther('cameraSettings');
  setupDropdownWithOther('lightingType');
  setupDropdownWithOther('styleMood');
  
  // Sliders
  if (elements.guidanceScale) elements.guidanceScale.addEventListener('input', updateGuidanceScale);
  if (elements.inferenceSteps) elements.inferenceSteps.addEventListener('input', updateInferenceSteps);
  
  // Resolution select
  if (elements.resolution) elements.resolution.addEventListener('change', updateFormData);
  
  // Buttons
  if (elements.copyBtn) elements.copyBtn.addEventListener('click', copyPromptToClipboard);
  if (elements.resetBtn) elements.resetBtn.addEventListener('click', resetForm);
  if (elements.exportBtn) elements.exportBtn.addEventListener('click', exportPrompt);
  
  console.log('Event listeners setup complete');
}

// Setup dropdown with "other" option functionality
function setupDropdownWithOther(fieldName) {
  const dropdown = elements[fieldName];
  const otherInput = elements[fieldName + 'Other'];
  
  if (!dropdown) {
    console.error(`Dropdown ${fieldName} not found!`);
    return;
  }
  
  if (!otherInput) {
    console.error(`Other input for ${fieldName} not found!`);
    return;
  }
  
  console.log(`Setting up dropdown with other for: ${fieldName}`);
  
  dropdown.addEventListener('change', function() {
    console.log(`${fieldName} dropdown changed to: ${this.value}`);
    if (this.value === 'Other') {
      otherInput.classList.remove('hidden');
      otherInput.focus();
    } else {
      otherInput.classList.add('hidden');
      otherInput.value = '';
    }
    updateFormData();
  });
  
  otherInput.addEventListener('input', updateFormData);
}

// Update form data and regenerate prompt
function updateFormData() {
  formData.subject = elements.subject ? elements.subject.value : '';
  formData.description = elements.description ? elements.description.value : '';
  formData.attributes = getFieldValue('attributes');
  formData.composition = getFieldValue('composition');
  formData.cameraAngles = getFieldValue('cameraAngles');
  formData.cameraModel = getFieldValue('cameraModel');
  formData.lensType = getFieldValue('lensType');
  formData.cameraSettings = getFieldValue('cameraSettings');
  formData.lightingType = getFieldValue('lightingType');
  formData.styleMood = getFieldValue('styleMood');
  formData.guidanceScale = elements.guidanceScale ? parseFloat(elements.guidanceScale.value) : 3.0;
  formData.inferenceSteps = elements.inferenceSteps ? parseInt(elements.inferenceSteps.value) : 40;
  formData.resolution = elements.resolution ? elements.resolution.value : '1024x1024';
  
  generatePrompt();
}

// Get field value (handles "Other" option)
function getFieldValue(fieldName) {
  const dropdown = elements[fieldName];
  const otherInput = elements[fieldName + 'Other'];
  
  if (!dropdown) return '';
  
  if (dropdown.value === 'Other' && otherInput && otherInput.value.trim()) {
    return otherInput.value.trim();
  } else if (dropdown.value && dropdown.value !== 'None') {
    return dropdown.value;
  }
  return '';
}

// Update guidance scale value display
function updateGuidanceScale() {
  const value = parseFloat(elements.guidanceScale.value);
  if (elements.guidanceValue) elements.guidanceValue.textContent = value.toFixed(1);
  formData.guidanceScale = value;
  generatePrompt();
}

// Update inference steps value display
function updateInferenceSteps() {
  const value = parseInt(elements.inferenceSteps.value);
  if (elements.stepsValue) elements.stepsValue.textContent = value;
  formData.inferenceSteps = value;
  generatePrompt();
}

// Update slider value displays
function updateSliderValues() {
  if (elements.guidanceValue) elements.guidanceValue.textContent = formData.guidanceScale.toFixed(1);
  if (elements.stepsValue) elements.stepsValue.textContent = formData.inferenceSteps;
}

// Generate the optimized prompt
function generatePrompt() {
  let promptParts = [];
  
  // Technical Foundation
  let technicalFoundation = [];
  if (formData.cameraModel) {
    technicalFoundation.push(`captured on ${formData.cameraModel}`);
  }
  if (formData.lensType) {
    technicalFoundation.push(`with ${formData.lensType}`);
  }
  if (formData.cameraSettings) {
    technicalFoundation.push(`at ${formData.cameraSettings}`);
  }
  
  if (technicalFoundation.length > 0) {
    promptParts.push(`Professional portrait photography ${technicalFoundation.join(' ')}.`);
  } else {
    promptParts.push('Professional portrait photography.');
  }
  
  // Subject and Description
  let subjectPart = [];
  if (formData.subject) {
    subjectPart.push(formData.subject);
  }
  if (formData.description) {
    subjectPart.push(formData.description);
  }
  
  if (subjectPart.length > 0) {
    promptParts.push(subjectPart.join(', '));
  }
  
  // Attributes
  if (formData.attributes) {
    promptParts.push(`[${formData.attributes}]`);
  }
  
  // Camera Angles
  if (formData.cameraAngles) {
    promptParts.push(`shot from ${formData.cameraAngles}`);
  }
  
  // Composition
  if (formData.composition) {
    promptParts.push(`positioned using ${formData.composition}`);
  }
  
  // Lighting
  if (formData.lightingType) {
    promptParts.push(`${formData.lightingType} creates atmospheric depth`);
  }
  
  // Style and Mood
  if (formData.styleMood) {
    promptParts.push(`${formData.styleMood} aesthetic`);
  }
  
  // Quality terms
  const qualityTerms = [
    'ultra-high detail',
    'photorealistic quality',
    'sharp focus',
    'natural skin texture',
    'professional color grading',
    'masterpiece quality',
    '8K resolution'
  ];
  
  promptParts.push(qualityTerms.join(', '));
  
  // Technical parameters
  const techParams = [
    `Resolution: ${formData.resolution}`,
    `guidance_scale=${formData.guidanceScale}`,
    `num_inference_steps=${formData.inferenceSteps}`
  ];
  
  promptParts.push(`Technical settings: ${techParams.join(', ')}`);
  
  // Join all parts
  const finalPrompt = promptParts.filter(part => part.trim()).join('. ');
  
  // Update the textarea and character count
  if (elements.generatedPrompt) elements.generatedPrompt.value = finalPrompt;
  if (elements.charCount) elements.charCount.textContent = finalPrompt.length;
}

// Copy prompt to clipboard
async function copyPromptToClipboard() {
  const prompt = elements.generatedPrompt ? elements.generatedPrompt.value : '';
  
  if (!prompt.trim()) {
    showNotification('No prompt to copy!', 'error');
    return;
  }
  
  try {
    await navigator.clipboard.writeText(prompt);
    if (elements.copyBtn) {
      elements.copyBtn.classList.add('copying');
      elements.copyBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
        Copied!
      `;
    }
    
    showNotification('Prompt copied to clipboard!', 'success');
    
    setTimeout(() => {
      if (elements.copyBtn) {
        elements.copyBtn.classList.remove('copying');
        elements.copyBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
          Copy
        `;
      }
    }, 2000);
    
  } catch (err) {
    console.error('Failed to copy: ', err);
    showNotification('Failed to copy prompt', 'error');
  }
}

// Reset form to initial state
function resetForm() {
  // Reset all form inputs
  if (elements.subject) elements.subject.value = '';
  if (elements.description) elements.description.value = '';
  
  // Reset all dropdowns
  const dropdowns = [
    'attributes', 'composition', 'cameraAngles', 'cameraModel', 'lensType', 
    'cameraSettings', 'lightingType', 'styleMood'
  ];
  
  dropdowns.forEach(fieldName => {
    if (elements[fieldName]) elements[fieldName].value = '';
    if (elements[fieldName + 'Other']) {
      elements[fieldName + 'Other'].value = '';
      elements[fieldName + 'Other'].classList.add('hidden');
    }
  });
  
  // Reset sliders
  if (elements.guidanceScale) elements.guidanceScale.value = 3.0;
  if (elements.inferenceSteps) elements.inferenceSteps.value = 40;
  if (elements.resolution) elements.resolution.value = '1024x1024';
  
  // Reset form data
  formData = {
    subject: '',
    description: '',
    attributes: '',
    composition: '',
    cameraAngles: '',
    cameraModel: '',
    lensType: '',
    cameraSettings: '',
    lightingType: '',
    styleMood: '',
    guidanceScale: 3.0,
    inferenceSteps: 40,
    resolution: '1024x1024'
  };
  
  updateSliderValues();
  generatePrompt();
  showNotification('Form reset successfully!', 'success');
}

// Export prompt as text file
function exportPrompt() {
  const prompt = elements.generatedPrompt ? elements.generatedPrompt.value : '';
  
  if (!prompt.trim()) {
    showNotification('No prompt to export!', 'error');
    return;
  }
  
  const blob = new Blob([prompt], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  a.href = url;
  a.download = `flux-prompt-${timestamp}.txt`;
  
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showNotification('Prompt exported successfully!', 'success');
}

// Show notification
function showNotification(message, type = 'success') {
  if (!elements.notification) return;
  
  const notification = elements.notification;
  const content = notification.querySelector('.notification-content span');
  
  if (content) content.textContent = message;
  
  // Update notification style based on type
  if (type === 'error') {
    notification.classList.add('error');
    notification.classList.remove('success');
  } else {
    notification.classList.add('success');
    notification.classList.remove('error');
  }
  
  notification.classList.remove('hidden');
  
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}

// Utility function to debounce input events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to text inputs for better performance
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    if (elements.subject && elements.description) {
      const debouncedUpdate = debounce(updateFormData, 300);
      
      elements.subject.addEventListener('input', debouncedUpdate);
      elements.description.addEventListener('input', debouncedUpdate);
      
      // Apply to "other" inputs as well
      Object.keys(elements).forEach(key => {
        if (key.endsWith('Other') && elements[key]) {
          elements[key].addEventListener('input', debouncedUpdate);
        }
      });
    }
  }, 100);
});